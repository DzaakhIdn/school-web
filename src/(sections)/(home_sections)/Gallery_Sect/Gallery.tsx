"use client";

import { spaceGrotesk, montserrat } from "@/lib/fonts";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Maximize2,
  Mountain,
  PartyPopper,
  Presentation,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { ModalDialogImage } from "@/components/alert/modal_dialog";



/** Foto + keterangan dari data galeri lama (img-6/7 diberi judul sesuai isi foto). */
const facilities = [
  {
    img: "img-1.jpg",
    title: "Lomba Agustusan",
    desc: "Keseruan santri merayakan kemerdekaan.",
    icon: PartyPopper,
  },
  {
    img: "img-2.jpg",
    title: "Momen Juara",
    desc: "Semangat kompetisi yang sportif dan religius.",
    icon: Trophy,
  },
  {
    img: "img-3.jpg",
    title: "Outbond Seru",
    desc: "Membangun kerjasama tim di alam terbuka.",
    icon: Users,
  },
  {
    img: "img-4.jpg",
    title: "Eksplorasi Alam",
    desc: "Tadabbur alam untuk mengagumi ciptaan-Nya.",
    icon: Mountain,
  },
  {
    img: "img-5.jpg",
    title: "Bakti Sosial",
    desc: "Berbagi kebahagiaan dengan masyarakat sekitar.",
    icon: HeartHandshake,
  },
  {
    img: "img-6.jpg",
    title: "Sosialisasi & Seminar",
    desc: "Materi edukatif bersama narasumber ahli.",
    icon: Presentation,
  },
  {
    img: "img-7.jpg",
    title: "Simulasi Tanggap Darurat",
    desc: "Praktik pemadaman api bersama petugas.",
    icon: ShieldCheck,
  },
  {
    img: "img-8.jpg",
    title: "Ukhuwah Islamiyah",
    desc: "Kebersamaan yang erat antar santri HSIBS.",
    icon: Sparkles,
  },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/**
 * Grid foto fasilitas & kegiatan — klik foto membuka lightbox (ModalDialogImage).
 * Aturan radius konsentris: kartu 20px = padding 8px + foto 12px.
 */
const Gallery = () => {
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
            Fasilitas &amp; Kegiatan Santri
          </h2>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base",
              montserrat.className
            )}
          >
            Suasana belajar dan beraktivitas di HSI Boarding School — klik foto
            untuk melihat lebih dekat.
          </p>
        </motion.div>

        {/* Grid kartu foto (2 baris × 4 kolom seperti mockup) */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4">
          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.img}
                {...entrance(0.1 + (index % 4) * 0.08)}
                className="group rounded-[20px] bg-slate-100 p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <ModalDialogImage
                    image_triger={`/assets/gallery/${item.img}`}
                    image={`/assets/gallery/${item.img}`}
                    title={item.title}
                    description={item.desc}
                    imageClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* overlay gelap + tombol perbesar saat hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100">
                    <Maximize2 className="size-4" aria-hidden />
                  </span>

                  {/* badge ikon kategori */}
                  <span className="pointer-events-none absolute bottom-3 left-3 grid size-10 place-items-center rounded-xl bg-white text-blue-600 shadow-md ring-1 ring-slate-900/5">
                    <Icon className="size-5" aria-hidden />
                  </span>
                </div>

                <div className="px-3 pb-3 pt-4">
                  <h3
                    className={cn(
                      "text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600",
                      spaceGrotesk.className
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-xs leading-relaxed text-slate-500",
                      montserrat.className
                    )}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
