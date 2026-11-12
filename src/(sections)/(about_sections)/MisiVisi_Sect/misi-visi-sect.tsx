"use client";

import { motion } from "framer-motion";
import { Lightbulb, Puzzle, Target } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";

/** Misi, visi, dan nilai inti — disusun dari data visi/misi sekolah. */
const pillars = [
  {
    key: "misi",
    label: "Misi",
    text: "Memberdayakan santri melalui pembelajaran yang inovatif dan lingkungan asrama yang suportif, sehingga tumbuh menjadi generasi yang beradab, cerdas, dan siap menghadapi tantangan zaman.",
    icon: Target,
    accent: "from-rose-500 to-red-600",
    position: "bottom",
  },
  {
    key: "visi",
    label: "Visi",
    text: "Menjadi lembaga pendidikan Islam yang membentuk generasi bertauhid, berakhlaq Qurani, serta berdaya saing global — berdaya guna dan memberi dampak bagi umat dan dunia.",
    icon: Lightbulb,
    accent: "from-amber-400 to-yellow-500",
    position: "top",
  },
  {
    key: "nilai",
    label: "Nilai Inti",
    text: "Bertauhid, berakhlaq Qurani, dan berdaya saing global — diraraskan dengan adab harian, ukhuwah, ketangguhan mental, serta kemandirian belajar.",
    icon: Puzzle,
    accent: "from-blue-500 to-indigo-600",
    position: "bottom",
  },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/**
 * Section Misi, Visi & Nilai Inti — tiga kartu dengan ilustrasi ikon besar
 * yang keluar dari tepi kartu (mengikuti ritme mockup).
 */
const MisiVisiSection = () => {
  return (
    <section className="bg-white px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div {...entrance(0)} className="mx-auto max-w-xl text-center">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
              spaceGrotesk.className
            )}
          >
            Misi, Visi &amp; Nilai
          </h2>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base",
              montserrat.className
            )}
          >
            Misi, visi, dan nilai kami menentukan siapa kami dan apa yang kami
            tuju.
          </p>
        </motion.div>

        {/* Kartu (jarak ekstra agar ilustrasi yang keluar dari tepi tidak menutupi header) */}
        <div className="mt-24 grid items-stretch gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isTop = pillar.position === "top";

            return (
              <motion.article
                key={pillar.key}
                {...entrance(0.1 + index * 0.1)}
                className="relative flex flex-col rounded-2xl bg-slate-100 p-6 sm:p-7"
              >
                {/* Ilustrasi ikon — keluar dari tepi kartu sesuai posisinya */}
                <div
                  className={cn(
                    "pointer-events-none absolute z-10",
                    isTop ? "-top-14 left-1/2 -translate-x-1/2" : "-bottom-14 left-1/2 -translate-x-1/2"
                  )}
                >
                  <div
                    className={cn(
                      "grid size-24 place-items-center rounded-full bg-gradient-to-br shadow-xl ring-8 ring-white sm:size-28",
                      pillar.accent
                    )}
                  >
                    <Icon className="size-10 text-white sm:size-12" aria-hidden />
                  </div>
                </div>

                <div className={cn(isTop && "pt-20 sm:pt-24", !isTop && "pb-16 sm:pb-20")}>
                  <h3
                    className={cn(
                      "text-base font-bold text-slate-900 sm:text-lg",
                      spaceGrotesk.className
                    )}
                  >
                    {pillar.label} :
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 text-sm leading-relaxed text-slate-600",
                      montserrat.className
                    )}
                  >
                    {pillar.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MisiVisiSection;
