"use client";

import Link from "next/link";
import Image from "next/image";
import { spaceGrotesk, montserrat } from "@/lib/fonts";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  HeartHandshake,
  Languages,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";



/** Kartu program unggulan — dirangkum dari data 4 pilar keunggulan. */
const programCards = [
  {
    icon: BookOpen,
    title: "Diniyyah & Tahfidz",
    description:
      "Aqidah manhaj Salaf berjenjang — Mulazamah, Hifdzul Mutun, hingga HSI Akademik — dengan tahfidz 6–9 juz dan Hadits Arba'in.",
  },
  {
    icon: Code2,
    title: "Teknologi Fullstack",
    description:
      "Dari HTML dasar hingga Marketplace Islami yang live — prinsip Build Real Things yang yanfa'uka.",
  },
  {
    icon: Languages,
    title: "Bahasa Arab & Inggris",
    description:
      "Arab intensif sebagai alat agama dan Inggris aktif sebagai alat industri — melebur menjadi alat kerja santri.",
  },
  {
    icon: HeartHandshake,
    title: "Karakter & Kesiswaan",
    description:
      "Agile Mindset, 50 Hadits Arba'in yang diamalkan, dan kegiatan kesiswaan membangun akhlaq serta ketangguhan mental.",
  },
];

/** Butir centang kartu Tentang — dirangkum dari misi sekolah. */
const aboutHighlights = [
  "Tahfidz mutqin 6–9 juz & aqidah manhaj Salaf",
  "Akhlak Qurani & adab harian asrama",
  "Kecakapan trilingual: Arab – Inggris – Indonesia",
  "Fullstack Web Engineering bertaraf industri",
  "Kepemimpinan & ketangguhan mental (anti-fragile)",
];

/** Kolase foto — aset lama milik project. */
const collagePhotos = {
  main: {
    src: "/assets/background_about/ukhuwah_islamiyah.jpg",
    alt: "Santri makan bersama di aula HSI Boarding School",
  },
  small: [
    {
      src: "/assets/thumbnail/img-thumb-1.jpg",
      alt: "Al-Qur'an terbuka di atas rehal",
    },
    {
      src: "/assets/gallery/img-9.jpg",
      alt: "Santri berkegiatan memasak bersama",
    },
    {
      src: "/assets/thumbnail/img-thumb-2.jpg",
      alt: "Kumpulan kitab kuning di perpustakaan",
    },
  ],
};

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/** Atom kartu program: ikon dalam lingkaran putus-putus + judul + deskripsi. */
const ProgramCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: typeof BookOpen;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    {...entrance(delay)}
    className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-blue-900/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-900/10"
  >
    <div className="grid size-14 place-items-center rounded-full border-2 border-dashed border-blue-200 transition-colors duration-300 group-hover:border-blue-400">
      <Icon className="size-6 text-blue-600" />
    </div>
    <h3
      className={cn(
        "mt-5 text-lg font-semibold text-slate-900",
        spaceGrotesk.className
      )}
    >
      {title}
    </h3>
    <p
      className={cn(
        "mt-2 text-sm leading-relaxed text-slate-600",
        montserrat.className
      )}
    >
      {description}
    </p>
  </motion.div>
);

/** Molekul kolase foto: satu foto besar + tiga foto kecil di bawahnya. */
const PhotoCollage = () => (
  <div className="flex flex-col gap-3.5">
    <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
      <Image
        src={collagePhotos.main.src}
        alt={collagePhotos.main.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 460px"
        className="object-cover object-center"
      />
    </div>
    <div className="grid grid-cols-3 gap-3.5">
      {collagePhotos.small.map((photo) => (
        <div key={photo.src} className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 1024px) 30vw, 140px"
            className="object-cover object-center"
          />
        </div>
      ))}
    </div>
  </div>
);

/**
 * Section setelah hero: kartu program unggulan + kartu Tentang Sekolah.
 * Aturan radius konsentris: outer = inner + padding — kartu besar memakai
 * radius 48px dengan padding 32px, sehingga foto di dalamnya 16px (2xl).
 */
const TentangSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <motion.div {...entrance(0)} className="mx-auto max-w-2xl text-center">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
              spaceGrotesk.className
            )}
          >
            Program Unggulan
          </h2>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base",
              montserrat.className
            )}
          >
            Empat pilar unggulan yang membentuk jati diri santri HSI Boarding
            School — dari tahfidz hingga teknologi.
          </p>
        </motion.div>

        {/* Kartu program */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4">
          {programCards.map((card, index) => (
            <ProgramCard key={card.title} {...card} delay={0.1 + index * 0.08} />
          ))}
        </div>

        {/* Kartu Tentang Sekolah — radius konsentris: 48 (kartu) = 32 (padding) + 16 (foto) */}
        <motion.div
          {...entrance(0.1)}
          className="relative mt-14 overflow-hidden rounded-[3rem] bg-blue-50/70 p-8 sm:mt-16 lg:mt-20"
        >
          {/* dekorasi sudut — lingkaran tipis */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full border-[12px] border-blue-100"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full border-[16px] border-blue-100"
          />

          <div className="relative grid items-start gap-8 lg:grid-cols-[5fr_6fr] lg:gap-12">
            <PhotoCollage />

            <div>
              <h3
                className={cn(
                  "flex items-start gap-1.5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl",
                  spaceGrotesk.className
                )}
              >
                Tentang Sekolah
                <Sparkles className="mt-0.5 size-5 shrink-0 text-blue-600" aria-hidden />
              </h3>

              <p
                className={cn(
                  "mt-4 text-sm leading-[1.8] text-slate-600 sm:text-[15px]",
                  montserrat.className
                )}
              >
                HSI Boarding School membentuk generasi yang bertauhid,
                berakhlaq Qurani, serta berdaya saing global — melalui
                pendidikan Al-Qur&apos;an &amp; ilmu syar&apos;i, kecakapan
                trilingual, dan teknologi informasi dalam lingkungan asrama
                yang Islami.
              </p>

              <ul className="mt-7 space-y-3.5">
                {aboutHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className={cn(
                      "flex items-start gap-3 text-sm leading-snug text-slate-700",
                      montserrat.className
                    )}
                  >
                    <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-blue-600" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className={cn(
                  "mt-8 inline-flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:cursor-pointer hover:bg-blue-700",
                  montserrat.className
                )}
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TentangSection;
