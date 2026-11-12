"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import FanPattern from "@/components/ui/fan-pattern";

/**
 * Artikel/artikelUnggulan — isi diambil dari konten yang benar-benar ada di
 * project (program, tahfidz, kegiatanSantri), bukan artikel fiktif.
 * Aturan radius konsentris: kartu 16px = padding 8px + foto 8px.
 */
const articles = [
  {
    href: "/programs",
    image: "/assets/programs_card/quran.jpg",
    tags: ["Program", "Kurikulum"],
    title: "4 Pilar Keunggulan HSI Boarding School",
    description:
      "Diniyyah & tahfidz, teknologi fullstack, bahasa Arab & Inggris, serta karakter dan kesiswaan — empat pilar yang membentuk jati diri santri.",
  },
  {
    href: "/programs",
    image: "/assets/thumbnail/img-thumb-1.jpg",
    tags: ["Tahfidz", "Kelas"],
    title: "Mengenal Program Tahfidz 6–9 Juz",
    description:
      "Jalur belajar berjenjang dari Mulazamah, Hifdzul Mutun, hingga HSI Akademik dengan target hafalan dan pembiasaan yang terukur.",
  },
  {
    href: "/gallery",
    image: "/assets/gallery/img-4.jpg",
    tags: ["Aktivitas", "Asrama"],
    title: "Kegiatan Santri: Eksplorasi Alam hingga Bakti Sosial",
    description:
      "Rekaman kegiatan outbound, tadabbur alam, dan berbagi ke masyarakat sekitar — Life Skills yang tumbuh dari pengalaman langsung.",
  },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const BlogSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      {/* motif kipas di sudut kiri atas */}
      <FanPattern className="absolute -left-16 -top-10 h-56 w-56 text-slate-200 sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...entrance(0)} className="mx-auto max-w-xl text-center">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
              spaceGrotesk.className
            )}
          >
            Artikel Terbaru
          </h2>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base",
              montserrat.className
            )}
          >
            Informasi terkini tentang program, kegiatan sekolah, tips belajar, dan
            update komunitasSantri.
          </p>
        </motion.div>

        {/* Kartu artikel */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              {...entrance(0.1 + index * 0.08)}
              className="group rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-100 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <Link href={article.href} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="px-2.5 pb-2 pt-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-md border border-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-500",
                        montserrat.className
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className={cn(
                    "mt-3 text-base font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600",
                    spaceGrotesk.className
                  )}
                >
                  <Link href={article.href} className="hover:cursor-pointer">
                    {article.title}
                  </Link>
                </h3>

                <p
                  className={cn(
                    "mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600",
                    montserrat.className
                  )}
                >
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className={cn(
                    "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:cursor-pointer",
                    spaceGrotesk.className
                  )}
                >
                  Baca selengkapnya
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
