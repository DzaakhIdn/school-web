"use client";

import { spaceGrotesk, montserrat } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";

import AuroraBackground from "@/components/ui/aurora-background";
import YoutubeVideo from "@/components/ui/youtube-video";
import BentoGallery from "@/(sections)/(gallery_sections)/Bento_Sect/bento-sect";
import ReelsSection from "@/(sections)/(gallery_sections)/Reels_Sect/reels-sect";
import FeaturedPhoto from "@/(sections)/(gallery_sections)/Featured_Sect/featured-photo";
import MomentsCollage from "@/(sections)/(gallery_sections)/Moments_Sect/moments-collage";




export default function GalleryPage() {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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
            className={`${spaceGrotesk.className} inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-[13px] font-medium text-blue-600`}
          >
            Galeri
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`${spaceGrotesk.className} mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl`}
          >
            Jelajahi Kehidupan Kampus Kami
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className={`${montserrat.className} mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base`}
          >
            Sekilas tentang kelas, kegiatan, acara, dan momen belajar sehari-hari
            di HSI Boarding School.
          </motion.p>
        </div>

        {/* Kartu video — embed YouTube (autoplay muted) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-6xl sm:mt-14"
        >
          <YoutubeVideo
            videoId="3tWGITKsc1M"
            title="Tur_virtual kampus HSI Boarding School"
            poster="/assets/gallery/img-2.jpg"
          />
        </motion.div>
      </section>

      {/* BENTO GALLERY SECTION */}
      <BentoGallery />

      {/* REELS SECTION */}
      <ReelsSection />

      {/* FOTO UTAMA */}
      <FeaturedPhoto />

      {/* KOLASE MOMEN / DOKUMENTASI */}
      <MomentsCollage />
    </div>
  );
}
