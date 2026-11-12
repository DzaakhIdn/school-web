"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";

/** Angka dari data sekolah yang sudah dipakai di section statistik home. */
const impacts = [
  { value: "150", label: "Santri Aktif", highlighted: false },
  { value: "25", label: "Guru Berpengalaman", highlighted: true },
  { value: "8", label: "Program Unggulan", highlighted: false },
  { value: "2020", label: "Tahun Berdiri", highlighted: false },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/**
 * Section dampak: ringkasan perjalanan sekolah + angka dampak, dengan foto
 * kegiatan Santri di sisi kanan.
 */
const ImpactSection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Kiri: judul di atas, angka di bawah — sejajar dengan tinggi foto */}
        <div className="flex h-full flex-col justify-between">
          <motion.h2
            {...entrance(0)}
            className={cn(
              "text-2xl leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem]",
              spaceGrotesk.className
            )}
          >
            <span className="font-bold">Perjalanan tumbuh,</span>{" "}
            <span className="font-medium text-slate-500">
              keunggulan, dan dampak
            </span>{" "}
            <span className="font-bold">pendidikan yang tak tertandingi.</span>
          </motion.h2>

          <div className="mt-8 grid flex-1 grid-cols-2 gap-3 sm:gap-4">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                {...entrance(0.1 + index * 0.08)}
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl px-5 py-8 text-center transition-shadow duration-300 sm:px-6 sm:py-10",
                  impact.highlighted
                    ? "bg-blue-600 shadow-lg shadow-blue-600/25"
                    : "bg-slate-100 hover:shadow-md"
                )}
              >
                <p
                  className={cn(
                    "text-3xl font-bold sm:text-4xl",
                    impact.highlighted ? "text-white" : "text-slate-900",
                    spaceGrotesk.className
                  )}
                >
                  {impact.value}
                </p>
                <p
                  className={cn(
                    "mt-2 text-xs font-medium uppercase tracking-[0.14em] sm:text-sm",
                    impact.highlighted ? "text-white/80" : "text-slate-500",
                    montserrat.className
                  )}
                >
                  {impact.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kanan: foto (ukuran aspect, tidak ikut tinggi kolom teks) */}
        <motion.div
          {...entrance(0.15)}
          className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/6]"
        >
          <Image
            src="/assets/gallery/img-9.jpg"
            alt="Santri HSI Boarding School dalam kegiatan life skills"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
