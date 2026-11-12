"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseAutoScrollCarouselOptions = {
  /** Selector untuk elemen anak yang menjadi satu "item" carousel. */
  itemSelector: string;
  /** Jeda antar perpindahan otomatis (ms). */
  intervalMs?: number;
  /**
   * Cara menentukan item aktif:
   * - "left": item paling kiri yang masih terlihat (default)
   * - "center": item yang pusatnya paling dekat dengan pusat viewport
   */
  activeStrategy?: "left" | "center";
};

/**
 * Logika carousel horizontal: scroll-snap, auto-advance, highlight item aktif.
 * Dipakai bersama oleh section testimoni dan galeri.
 *
 * Catatan: posisi item harus dihitung dalam content-space
 * (getBoundingClientRect + scrollLeft) karena `offsetLeft` memakai offsetParent,
 * dan perpindahan memakai `scrollTo` start-aligned agar kompatibel dengan
 * `scroll-snap-type: x mandatory` (scrollIntoView center akan mentok).
 */
export const useAutoScrollCarousel = ({
  itemSelector,
  intervalMs = 4500,
  activeStrategy = "left",
}: UseAutoScrollCarouselOptions) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getItems = useCallback(() => {
    const track = trackRef.current;
    if (!track) return [] as HTMLElement[];
    return Array.from(track.querySelectorAll<HTMLElement>(itemSelector));
  }, [itemSelector]);

  const getPositions = useCallback(
    (track: HTMLElement, items: HTMLElement[]) => {
      const trackRect = track.getBoundingClientRect();
      return items.map(
        (item) =>
          item.getBoundingClientRect().left - trackRect.left + track.scrollLeft
      );
    },
    []
  );

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const items = Array.from(
        track.querySelectorAll<HTMLElement>(itemSelector)
      );
      const item = items[index];
      if (!item) return;

      const trackRect = track.getBoundingClientRect();
      const position =
        item.getBoundingClientRect().left - trackRect.left + track.scrollLeft;
      track.scrollTo({ left: position, behavior: "smooth" });
    },
    [itemSelector]
  );

  const scrollByItem = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const items = getItems();
      const amount = items[0] ? items[0].offsetWidth + 16 : 340;
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    },
    [getItems]
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = getItems();
    if (!items.length) return;

    const positions = getPositions(track, items);
    const left = track.scrollLeft;

    let nearest = items.length - 1;

    if (activeStrategy === "center") {
      const center = left + track.clientWidth / 2;
      let bestDistance = Infinity;
      items.forEach((item, index) => {
        const distance = Math.abs(
          positions[index] + item.offsetWidth / 2 - center
        );
        if (distance < bestDistance) {
          bestDistance = distance;
          nearest = index;
        }
      });
    } else {
      // item aktif = item paling kiri yang masih terlihat
      for (let index = 0; index < items.length; index += 1) {
        if (positions[index] + items[index].offsetWidth > left + 1) {
          nearest = index;
          break;
        }
      }
    }

    setActiveIndex(nearest);
  }, [getItems, getPositions, activeStrategy]);

  // auto advance ke posisi berikutnya, lalu memutar dari awal
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const items = getItems();
      if (!items.length) return;

      const positions = getPositions(track, items);
      const maxScroll = track.scrollWidth - track.clientWidth;

      // hanya posisi yang benar-benar bisa di-scroll (snap start-aligned)
      const startable: number[] = [];
      positions.forEach((position, index) => {
        if (position <= maxScroll + 1) startable.push(index);
      });
      if (!startable.length) return;

      const current = track.scrollLeft;
      let position = 0;
      startable.forEach((index, positionIndex) => {
        if (positions[index] <= current + 1) position = positionIndex;
      });

      scrollToIndex(startable[(position + 1) % startable.length]);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [getItems, getPositions, intervalMs, isPaused, scrollToIndex]);

  return {
    trackRef,
    activeIndex,
    setActiveIndex,
    isPaused,
    setIsPaused,
    scrollToIndex,
    scrollByItem,
    handleScroll,
  };
};
