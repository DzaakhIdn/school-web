"use client";

import { spaceGrotesk, montserrat } from "@/lib/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

import AuroraBackground from "@/components/ui/aurora-background";
import ImpactSection from "@/(sections)/(about_sections)/Impact_Sect/impact-sect";
import MisiVisiSection from "@/(sections)/(about_sections)/MisiVisi_Sect/misi-visi-sect";
import KeunggulanSection from "@/(sections)/(about_sections)/Keunggulan_Sect/keunggulan-sect";
import Testimonial from "@/(sections)/(shared_sections)/Testimonials_Sect/testimonials";
import SambutanSection from "@/(sections)/(about_sections)/Sambutan_Sect/sambutan-sect";
import Campus from "@/(sections)/(shared_sections)/Kampus_Sect/Kampus-sect";

/** Foto hero — memakai aset gambar yang sudah ada di project. */
const heroPhotos = [
  {
    src: "/assets/gallery/img-6.jpg",
    alt: "Suasana pembelajaran di aula sekolah",
  },
  {
    src: "/assets/gallery/img-3.jpg",
    alt: "Duadegenerasi estaria berfoto di luar sekolah",
  },
  {
    src: "/assets/location/sukabumi.jpg",
    alt: "Santri HSI Boarding School Sukabumi Berkumpul",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20">
        {/* efek aurora di belakang konten */}
        <AuroraBackground />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${spaceGrotesk.className} inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold text-blue-600`}
          >
            Tentang Kami
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`${spaceGrotesk.className} mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl`}
          >
            Lebih dari Sekolah
            <br />
            Rumah Kedua
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className={`${montserrat.className} mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base`}
          >
            Lingkungan yang dirancang untuk membantu siswa tumbuh — secara
            akademik maupun personal — di tengah lingkungan asrama yang Islami.
          </motion.p>
        </div>

        {/* Deretan foto */}
        <div className="mx-auto mt-12 flex max-w-5xl items-center justify-center gap-3 sm:mt-14 sm:gap-4">
          {heroPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
              className={`group relative flex-1 overflow-hidden rounded-2xl ${
                index === 1 ? "h-60 sm:h-76" : "h-52 sm:h-64"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 33vw, 30vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT / STATISTIK SECTION */}
      <ImpactSection />

      {/* MISI, VISI & NILAI SECTION */}
      <MisiVisiSection />

      {/* KEUNGGULAN / WHY CHOOSE US SECTION */}
      <KeunggulanSection />

      {/* TESTIMONI SECTION (sama dengan home) */}
      <Testimonial />

      {/* SAMBUTAN KEPALA SEKOLAH SECTION */}
      <SambutanSection />

      {/* GALERI KAMPUS SECTION (sama dengan home) */}
      <Campus />

    </div>
  );
}
