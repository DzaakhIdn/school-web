"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";

type Reel = {
  /** Shortcode reel: bagian setelah `/reel/` di URL Instagram. */
  shortcode: string;
  title: string;
  /** Cover reel, disimpan lokal di /public (CDN Instagram cepat kadaluarsa). */
  cover: string;
  /** Durasi tampilan, mis. "00:45". Opsional. */
  duration?: string;
};

/**
 * Daftar reel Instagram @hsiboardingschool.
 * Shortcode = bagian setelah `/reel/` di URL, mis. instagram.com/reel/DfWms49Jve0/.
 * Cover diambil dari thumbnail reel lalu disimpan di /public/assets/reels.
 */
const reels: Reel[] = [
  { shortcode: "DfWms49Jve0", title: "PSB 2027/2028 Telah Dibuka", cover: "/assets/reels/DfWms49Jve0.jpg" },
  { shortcode: "DdQwS1wpVcE", title: "Kunjungan Ust. Fachrudin Nu'man di Edunation Fest", cover: "/assets/reels/DdQwS1wpVcE.jpg" },
  { shortcode: "DczWXSkTxEj", title: "Kunjungan Ust. Abdullah Roy di Edunation Fest", cover: "/assets/reels/DczWXSkTxEj.jpg" },
  { shortcode: "DfO090bhLsq", title: "Tanya Jawab Bahasa Arab", cover: "/assets/reels/DfO090bhLsq.jpg" },
  { shortcode: "Ddi0OlfpBeg", title: "Generasi Bertauhid & Berdaya Saing Global", cover: "/assets/reels/Ddi0OlfpBeg.jpg" },
];

/** Daftar dirender 3× (kiri–tengah–kanan) supaya scroll bisa berputar tanpa ujung. */
const COPIES = 3;
const loopedReels = Array.from({ length: COPIES }, () => reels).flat();

/** Jeda antar perpindahan kartu otomatis (ms). */
const AUTO_INTERVAL = 3500;

/**
 * Carousel "Reels & Video Singkat": kartu potret dengan cover + tombol play.
 * - Infinite scroll: saat posisi keluar dari salinan tengah, scrollLeft
 *   dilompatkan sejauh satu set — kontennya identik jadi tidak terlihat.
 * - Auto slide: tiap AUTO_INTERVAL maju satu kartu (sama seperti menekan
 *   tombol →). Berhenti saat kursor di atas track, saat disentuh/di-scroll,
 *   atau saat modal terbuka.
 * Klik kartu → modal berisi embed resmi Instagram (`/reel/{shortcode}/embed`).
 */
const ReelsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Reel | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  /** Selama waktu ini auto slide & wrap ditahan (habis interaksi manual). */
  const holdUntilRef = useRef(0);

  /** Lebar satu set kartu, termasuk gap. */
  const getSetWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const cards = el.querySelectorAll<HTMLElement>("[data-reel-card]");
    if (cards.length <= reels.length) return 0;
    return cards[reels.length].offsetLeft - cards[0].offsetLeft;
  }, []);

  /** Jaga posisi tetap di sekitar salinan tengah. */
  const wrap = useCallback(() => {
    const el = trackRef.current;
    const set = getSetWidth();
    if (!el || !set) return;
    if (el.scrollLeft < set * 0.5) el.scrollLeft += set;
    else if (el.scrollLeft > set * 1.5) el.scrollLeft -= set;
  }, [getSetWidth]);

  // posisi awal di salinan tengah (+ hitung ulang saat resize)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = getSetWidth();
    const onResize = () => wrap();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getSetWidth, wrap]);

  // hormati preferensi "kurangi gerakan"
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAutoPlay(false);
    }
  }, []);

  // tutup modal dengan Escape + kunci scroll halaman saat modal terbuka
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const hold = (ms: number) => {
    holdUntilRef.current = performance.now() + ms;
  };

  const handleScroll = () => {
    // jangan lompat di tengah animasi smooth tombol panah
    if (performance.now() >= holdUntilRef.current) wrap();
  };

  const slide = useCallback(
    (dir: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>("[data-reel-card]");
      const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
      holdUntilRef.current = performance.now() + 700;
      el.scrollBy({ left: dir * step, behavior: "smooth" });
      window.setTimeout(wrap, 720);
    },
    [wrap]
  );

  /** Klik tombol panah: geser + tunda auto slide berikutnya satu interval penuh. */
  const scrollByCard = (dir: 1 | -1) => {
    slide(dir);
    hold(AUTO_INTERVAL);
  };

  // auto slide per kartu
  const running = autoPlay && !isHovering && !active;
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      if (performance.now() >= holdUntilRef.current) slide(1);
    }, AUTO_INTERVAL);
    return () => window.clearInterval(timer);
  }, [running, slide]);

  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={cn(
                spaceGrotesk.className,
                "text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              )}
            >
              Reels & Video Singkat
            </h2>
            <p
              className={cn(
                montserrat.className,
                "mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base"
              )}
            >
              Momen singkat dari kampus kami — acara, kegiatan kelas, olahraga,
              dan keseharian santri.
            </p>
          </motion.div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Reel sebelumnya"
              className="grid size-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:cursor-pointer hover:bg-slate-200 sm:size-11"
            >
              <ArrowLeft className="size-4 sm:size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Reel berikutnya"
              className="grid size-10 place-items-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition hover:cursor-pointer hover:bg-blue-700 sm:size-11"
            >
              <ArrowRight className="size-4 sm:size-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Track (3 salinan, infinite + auto slide). Kartu terakhir sengaja terpotong di tepi kanan seperti referensi */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onPointerEnter={(e) => e.pointerType === "mouse" && setIsHovering(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setIsHovering(false)}
          onTouchStart={() => hold(AUTO_INTERVAL)}
          onTouchEnd={() => hold(AUTO_INTERVAL)}
          onWheel={() => hold(AUTO_INTERVAL)}
          className="-mr-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-4 [scrollbar-width:none] sm:-mr-6 sm:mt-10 sm:pr-6 lg:-mr-8 lg:pr-8 [&::-webkit-scrollbar]:hidden"
        >
          {loopedReels.map((reel, index) => (
            <motion.button
              key={`${index}-${reel.shortcode}`}
              type="button"
              data-reel-card
              onClick={() => setActive(reel)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % reels.length) * 0.06 }}
              aria-label={`Putar reel: ${reel.title}`}
              className="group relative aspect-[4/5] w-[70%] shrink-0 snap-start overflow-hidden rounded-3xl bg-slate-100 text-left hover:cursor-pointer sm:w-[42%] lg:w-[calc((100%-3rem)/3.4)]"
            >
              <Image
                src={reel.cover}
                alt={reel.title}
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 42vw, 340px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

              {/* Tombol play */}
              <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-300 group-hover:scale-110 sm:size-14">
                <Play className="size-5 translate-x-0.5" fill="currentColor" aria-hidden />
              </span>

              {/* Info bawah */}
              <span
                className={cn(
                  montserrat.className,
                  "absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 px-4 pb-4 text-xs font-semibold text-white sm:text-sm"
                )}
              >
                <span className="line-clamp-1">{reel.title}</span>
                {reel.duration && (
                  <>
                    <span aria-hidden className="h-3 w-px bg-white/60" />
                    <span className="shrink-0 tabular-nums">{reel.duration}</span>
                  </>
                )}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal pemutar (embed Instagram) */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="reel-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ scale: 0.94, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[min(85vh,760px)] w-full max-w-[400px] overflow-hidden rounded-2xl bg-white"
            >
              <iframe
                src={`https://www.instagram.com/reel/${active.shortcode}/embed`}
                title={active.title}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                allowFullScreen
              />
            </motion.div>

            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Tutup"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:cursor-pointer hover:bg-white/25"
            >
              <X className="size-5" aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReelsSection;
