"use client";

import Image from "next/image";
import { spaceGrotesk, montserrat } from "@/lib/fonts";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useAutoScrollCarousel } from "@/hooks/use-auto-scroll-carousel";



/** Fotofasilitas & kehidupan kampus — memakai aset gambar yang sudah ada.
 *  `position` menentukan fokus crop agar bagian atas foto (wajah, plafon,
 *  banner) tetap terlihat — pemotongan terjadi di sisi bawah. */
const campusPhotos = [
  {
    src: "/assets/gallery/img-3.jpg",
    alt: "Santri berkegiatan tim di alam terbuka",
    position: "object-top",
  },
  {
    src: "/assets/gallery/img-6.jpg",
    alt: "Sosialisasi di aula sekolah",
    position: "object-top",
  },
  {
    src: "/assets/gallery/img-4.jpg",
    alt: "Kegiatan eksplorasi alam bersama santri",
    position: "object-center",
  },
  {
    src: "/assets/background_about/ukhuwah_islamiyah.jpg",
    alt: "Santri makan bersama di aula",
    position: "object-center",
  },
  {
    src: "/assets/gallery/img-9.jpg",
    alt: "Santri memasak bersama",
    position: "object-top",
  },
  {
    src: "/assets/gallery/img-1.jpg",
    alt: "Lomba Agustusan antar santri",
    position: "object-center",
  },
  {
    src: "/assets/gallery/img-8.jpg",
    alt: "Kebersamaan antar santri HSIBS",
    position: "object-center",
  },
  {
    src: "/assets/background_about/morning_spirit.jpg",
    alt: "Suasana pagi di sekolah",
    position: "object-center",
  },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/**
 * Galeri kehidupan kampus: baris foto besar yang bergeser otomatis,
 * foto aktif ditandai ring biru, tepi kiri/kanan pudar (peek kartu tetangga).
 */
const CampusSection = () => {
  const {
    trackRef,
    activeIndex,
    setIsPaused,
    scrollToIndex,
    handleScroll,
  } = useAutoScrollCarousel({
    itemSelector: "[data-campus-photo]",
    intervalMs: 3500,
    activeStrategy: "center",
  });

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...entrance(0)} className="mx-auto max-w-2xl text-center">
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-[0.2em] text-blue-600",
              spaceGrotesk.className
            )}
          >
            <span aria-hidden>— </span>
            Galeri
            <span aria-hidden> —</span>
          </p>
          <h2
            className={cn(
              "mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
              spaceGrotesk.className
            )}
          >
            Jelajahi Kehidupan Sekolah Kami
          </h2>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base",
              montserrat.className
            )}
          >
            Sekilas tentang kelas, kegiatan, acara, dan momen belajar
            sehari-hari Santri HSI Boarding School.
          </p>
        </motion.div>
      </div>

      {/* Baris foto — melebar penuh (edge-to-edge) */}
      <motion.div
        {...entrance(0.1)}
        className="relative mt-12 lg:mt-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {campusPhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              data-campus-photo
              onClick={() => scrollToIndex(index)}
              aria-label={`Lihat foto: ${photo.alt}`}
              className={cn(
                "group relative m-1.5 aspect-[3/5] w-[62vw] shrink-0 snap-start overflow-hidden rounded-[14px] bg-slate-100 transition-all duration-500 sm:w-[46vw] md:w-[34vw] lg:w-[20vw] xl:w-[16vw]",
                index === activeIndex
                  ? "shadow-xl shadow-blue-500/20 ring-2 ring-blue-500"
                  : "ring-1 ring-slate-200 hover:ring-slate-300"
              )}
            >
              {/* Tanpa padding di dalam: foto menempel pada border. Margin ada di
                  luar card supaya border (ring) punya ruang napas. */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 62vw, (max-width: 1280px) 34vw, 20vw"
                className={cn("object-cover", photo.position)}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </button>
          ))}
        </div>

        {/* pudar di tepi kiri & kanan */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent sm:w-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:w-20"
        />
      </motion.div>
    </section>
  );
};

export default CampusSection;
