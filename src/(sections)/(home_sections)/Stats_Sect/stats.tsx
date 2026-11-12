"use client";

import { spaceGrotesk, montserrat } from "@/lib/fonts";
import { motion } from "framer-motion";
import CountUp from "@/animate/CountUp";

import { cn } from "@/lib/utils";



/** Statistik real dari data lama section (tanpa tambahan angkarangan). */
const stats = [
  { value: 150, label: "Santri Aktif" },
  { value: 25, label: "Guru Berpengalaman" },
  { value: 8, label: "Program Unggulan" },
  { value: 2020, label: "Tahun Berdiri" },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/**
 * Section statistik: panel gelap dengan pola lingkaran konsentris (ripple)
 * memakai repeating-radial-gradient murni CSS — tanpa aset/gambar.
 */
const Stats = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...entrance(0)}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 50% 42%, #101010 0px, #101010 44px, #1c1c1c 44px, #1c1c1c 88px)",
          }}
        >
          <div className="relative mx-auto max-w-2xl text-center">
            <h2
              className={cn(
                "text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl",
                spaceGrotesk.className
              )}
            >
              Angka yang bercerita tentang{" "}
              <span className="text-blue-400">dedikasi kami</span>
            </h2>
          </div>

          <div className="relative mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                {...entrance(0.15 + index * 0.08)}
                className="rounded-2xl bg-white/[0.06] px-4 py-7 text-center ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.09] sm:py-9"
              >
                <CountUp
                  to={stat.value}
                  from={0}
                  direction="up"
                  duration={2}
                  className={cn(
                    "text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-none",
                    spaceGrotesk.className
                  )}
                />
                <p
                  className={cn(
                    "mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:text-xs",
                    montserrat.className
                  )}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
