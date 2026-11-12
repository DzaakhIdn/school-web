"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import { CirclePlay } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";



/** Foto banner full-bleed milik project — ambil dari aset lama, bukan mockup. */
const HERO_PHOTO = "/assets/background_about/morning_spirit.jpg";

/** Jarak (px) pergeseran gambar untuk efek parallax. */
const PARALLAX = 70;

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/** Section hero edisi editorial: heading serif besar, deskripsi + CTA, banner foto. */
const HeroHome = () => {
  const bandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start end", "end start"],
  });
  // gambar bergeser lebih lambat dari scroll → ilusi kedalaman
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-PARALLAX, PARALLAX]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-10 pt-24 sm:pb-12 sm:pt-28 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-16 lg:pb-16 lg:pt-32">
          {/* Heading */}
          <motion.h1
            {...entrance(0.05)}
            className={cn(
              "font-bold tracking-tight !leading-[1.12] text-slate-900",
              "text-4xl text-balance sm:text-5xl xl:text-[3.75rem]",
              spaceGrotesk.className
            )}
          >
            Sekolah Islam & Teknologi untuk{" "}
            <span className="text-blue-600">Generasi Rabbani</span>
          </motion.h1>

          {/* Deskripsi + aksi */}
          <motion.div
            {...entrance(0.15)}
            className="flex flex-col gap-6 lg:pt-3"
          >
            <p
              className={cn(
                "max-w-md text-sm leading-relaxed text-slate-600 sm:text-base",
                montserrat.className
              )}
            >
              Kombinasi kurikulum diniyah, tahfidz, bahasa, dan teknologi modern
              untuk mencetak santri yang beradab, cerdas, dan siap menghadapi
              tantangan zaman.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-blue-600/25 hover:bg-blue-700 hover:cursor-pointer"
              >
                <Link href="https://psb.smaithsi.sch.id/">
                  Daftar Sekarang
                </Link>
              </Button>

              {/* Aksi sekunder: bulat outline di ujung kanan (video profil) */}
              <Link
                href="https://youtu.be/3tWGITKsc1M?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tonton profil sekolah"
                className="ml-auto grid size-11 place-items-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:cursor-pointer hover:border-blue-600 hover:text-blue-600"
              >
                <CirclePlay className="size-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Banner foto full-bleed dengan parallax: wrapper dibesarkan PARALLAX
          di tiap sisi supaya gambar tetap menutup band saat bergeser */}
      <motion.div
        ref={bandRef}
        {...entrance(0.25)}
        className="relative h-72 w-full overflow-hidden sm:h-96 lg:h-[480px]"
      >
        <motion.div
          className="absolute inset-x-0"
          style={{
            top: -PARALLAX,
            height: `calc(100% + ${PARALLAX * 2}px)`,
            y: parallaxY,
          }}
        >
          <Image
            src={HERO_PHOTO}
            alt="Santri HSI Boarding School berkumpul pada kegiatan pagi"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroHome;
