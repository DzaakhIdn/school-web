"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import FanPattern from "@/components/ui/fan-pattern";

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/**
 * Sambutan kepala sekolah. Tidak ada nama individu di data project, jadi
 * tanda tangan memakai-automatic unit ("Tim Ustadz & Administrator") — tidak
 * mengarang orang. Slot foto memakai foto asli NPR.
 */
const SambutanSection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...entrance(0)}
          className="relative overflow-hidden rounded-[1.75rem] bg-slate-50 p-5 sm:p-8 lg:p-10"
        >
          {/* motif sinar di sudut kanan atas */}
          <FanPattern className="absolute -right-10 -top-12 h-64 w-64 rotate-[140deg] text-slate-200" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-stretch lg:gap-12">
            {/* Foto */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/assets/location/purworejo.jpg"
                alt="Santri HSI Boarding School Purworejo berdiri berbaris di depan musala"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-center"
              />
            </div>

            {/* Isi sambutan — tinggi sama dengan foto, isi distributes dengan justify-between */}
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-[13px] font-medium text-blue-600">
                  <Mail className="size-4" aria-hidden />
                  Pesan dari Kepala Sekolah
                </span>

                <h2
                  className={cn(
                    "mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl",
                    spaceGrotesk.className
                  )}
                >
                  Sambutan Hangat
                </h2>
              </div>

              <div className="space-y-3">
                <p
                  className={cn(
                    "text-sm leading-relaxed text-slate-600",
                    montserrat.className
                  )}
                >
                  Kami percaya setiap anak berhak bertumbuh, mengeksplorasi, dan
                  bersinar. Ustadz, ustadzah, dan seluruh lingkungan sekolah kami
                  mewujudkan visi itu setiap hari. Komitmen kami
                  bukan hanya pada prestasi akademik, tetapi juga pada
                  karakter, kreativitas, dan kepedulian.
                </p>
                <p
                  className={cn(
                    "text-sm leading-relaxed text-slate-600",
                    montserrat.className
                  )}
                >
                  &ldquo;Kami mengundang Anda untuk berkunjung dan mengenal
                  langsung komunitas belajar yang kami bangun
                  bersama.&rdquo;
                </p>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p
                    className={cn(
                      "text-sm font-bold text-slate-900",
                      spaceGrotesk.className
                    )}
                  >
                    Tim Ustadz &amp; Administrator
                  </p>
                  <p
                    className={cn(
                      "mt-0.5 text-xs text-slate-500",
                      montserrat.className
                    )}
                  >
                    HSI Boarding School
                  </p>
                </div>
                <Quote className="size-10 shrink-0 text-slate-300" aria-hidden />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SambutanSection;
