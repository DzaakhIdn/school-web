"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import { galleryData, type GalleryItem } from "@/lib/gallery-data";

/**
 * Susunan kolase per baris (id dari `galleryData`).
 * `grow` = lebar relatif tiap foto dalam barisnya, `height` = tinggi baris.
 */
const ROWS: { height: string; items: { id: number; grow: number }[] }[] = [
  {
    height: "h-28 sm:h-44 lg:h-56",
    items: [
      { id: 4, grow: 1 },
      { id: 2, grow: 1.2 },
      { id: 1, grow: 1.2 },
    ],
  },
  {
    height: "h-36 sm:h-56 lg:h-72",
    items: [
      { id: 16, grow: 1 },
      { id: 22, grow: 1.15 },
    ],
  },
  {
    height: "h-48 sm:h-80 lg:h-[26rem]",
    items: [{ id: 19, grow: 1 }],
  },
  {
    height: "h-24 sm:h-40 lg:h-48",
    items: [
      { id: 15, grow: 1 },
      { id: 18, grow: 1 },
      { id: 11, grow: 1 },
      { id: 14, grow: 1 },
    ],
  },
];

const byId = new Map(galleryData.map((item) => [item.id, item]));

const Tile = ({ item, delay }: { item: GalleryItem; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay }}
    className="h-full"
  >
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka dokumentasi: ${item.title}`}
      className="group relative block h-full overflow-hidden rounded-xl bg-slate-100 sm:rounded-2xl"
    >
      <Image
        src={`/assets/thumbnail/${item.thumbnail}`}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1152px) 60vw, 700px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay judul saat hover/focus */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4">
        <span
          className={cn(
            montserrat.className,
            "mb-1 hidden w-fit rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur sm:inline-block sm:text-xs"
          )}
        >
          {item.category}
        </span>
        <span
          className={cn(
            spaceGrotesk.className,
            "line-clamp-2 text-xs font-bold leading-tight text-white sm:text-base"
          )}
        >
          {item.title}
        </span>
      </div>

      <span className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-white text-blue-600 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:right-3 sm:top-3 sm:size-9">
        <ArrowUpRight className="size-4 sm:size-5" aria-hidden />
      </span>
    </Link>
  </motion.div>
);

/**
 * Kolase dokumentasi kegiatan: baris-baris foto dengan lebar berbeda.
 * Tiap foto bisa diklik untuk membuka album lengkapnya.
 */
const MomentsCollage = () => (
  <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-xl text-center sm:mb-12"
      >
        <h2
          className={cn(
            spaceGrotesk.className,
            "text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          )}
        >
          Momen Terbaik
          <br />
          di Sekolah Kami
        </h2>
        <p
          className={cn(
            montserrat.className,
            "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base"
          )}
        >
          Dokumentasi kegiatan santri — klik foto untuk melihat album lengkapnya.
        </p>
      </motion.div>

      <div className="flex flex-col gap-2 sm:gap-3">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className={cn("flex gap-2 sm:gap-3", row.height)}>
            {row.items.map(({ id, grow }, i) => {
              const item = byId.get(id);
              if (!item) return null;
              return (
                <div key={id} className="min-w-0" style={{ flex: `${grow} 1 0%` }}>
                  <Tile item={item} delay={i * 0.06} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MomentsCollage;
