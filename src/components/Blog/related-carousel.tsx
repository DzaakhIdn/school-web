"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import type { BlogPost } from "@/lib/blog-data";
import { PostCard } from "@/components/Blog/post-card";

type Props = {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
};

/**
 * Rekomendasi artikel: judul di kiri, tombol ← → di kanan, kartu bergeser
 * horizontal dan kartu terakhir sedikit "mengintip" di tepi kanan.
 */
const RelatedCarousel = ({
  posts,
  title = "Artikel Lainnya",
  subtitle = "Kabar kegiatan santri, tips belajar, dan cerita inspiratif lainnya dari HSI Boarding School.",
}: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  if (posts.length === 0) return null;

  const arrow =
    "grid size-11 place-items-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-40";

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2
              className={cn(
                spaceGrotesk.className,
                "text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              )}
            >
              {title}
            </h2>
            <p className={cn(montserrat.className, "mt-2 text-sm leading-relaxed text-slate-600 sm:text-base")}>
              {subtitle}
            </p>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => slide(-1)}
              disabled={!canPrev}
              aria-label="Geser ke kiri"
              className={cn(arrow, "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600")}
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => slide(1)}
              disabled={!canNext}
              aria-label="Geser ke kanan"
              className={cn(arrow, "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700")}
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={update}
          className="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:-mr-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:ml-0 lg:scroll-pl-0 lg:pl-0 [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post) => (
            <div
              key={post.slug}
              data-card
              className="w-[80%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2.2)] lg:w-[340px]"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCarousel;
