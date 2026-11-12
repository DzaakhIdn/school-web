"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Code2,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import AuroraBackground from "@/components/ui/aurora-background";

/**
 * Keunggulan sekolah — dirangkum dari konten yang sudah ada di site
 * (kurikulum & teknologi, pendampingan ustadz, disiplin asrama, life skills).
 */
const advantages = [
  {
    icon: Building2,
    title: "Ruang Belajar Cerdas",
    description:
      "Pembelajaran didukung teknologi informasi dan perangkat digital yang digunakan langsung di kelas.",
    badge: "bg-blue-100 text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Pendampingan Berpengalaman",
    description:
      "Ustadz dan ustadzah mendampingi Intens, sehingga adab dan pembiasaan hidup tumbuh setiap hari.",
    badge: "bg-orange-100 text-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Disiplin yang Konsisten",
    description:
      "Jadwal belajar, ibadah, dan asrama yang tertata membentuk kebiasaan disiplin yang konsisten.",
    badge: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: HeartHandshake,
    title: "Lingkungan yang Mendukung",
    description:
      "Lingkungan asrama yang aman dan saling menyokong dengan pendampingan yang terjadwal sepanjang hari.",
    badge: "bg-pink-100 text-pink-600",
  },
  {
    icon: Code2,
    title: "Teknologi Belajar Cerdas",
    description:
      "Fullstack Web Engineering bertaraf industri — santri belajar membuat produk digital yang nyata.",
    badge: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Trophy,
    title: "Kegiatan & Life Skills",
    description:
      "Outbound, eksplorasi alam, bakti sosial, dan kegiatan kesiswaan — karakter tumbuh dari pengalaman.",
    badge: "bg-lime-100 text-lime-700",
  },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/** Section "Mengapa Memilih Kami" — 6 kartu di atas latar biru lembut + aurora. */
const KeunggulanSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-50/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <AuroraBackground />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div {...entrance(0)} className="mx-auto max-w-xl text-center">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
              spaceGrotesk.className
            )}
          >
            Mengapa Memilih Kami
          </h2>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base",
              montserrat.className
            )}
          >
            Lingkungan belajar yang aman, modern, dan berfokus pada santri.
          </p>
        </motion.div>

        {/* Kartu keunggulan */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {advantages.map((advantage, index) => (
            <motion.article
              key={advantage.title}
              {...entrance(0.1 + (index % 3) * 0.08)}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-white transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div
                className={cn(
                  "grid size-12 place-items-center rounded-xl",
                  advantage.badge
                )}
              >
                <advantage.icon className="size-6" aria-hidden />
              </div>

              <h3
                className={cn(
                  "mt-5 text-base font-bold text-slate-900",
                  spaceGrotesk.className
                )}
              >
                {advantage.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed text-slate-600",
                  montserrat.className
                )}
              >
                {advantage.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeunggulanSection;
