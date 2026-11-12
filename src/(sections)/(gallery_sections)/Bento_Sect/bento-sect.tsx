"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

/**
 * Mask scallop: tepi atas bergelombang (5 lengkung) — bentuk khas foto tinggi
 * pada referensi. Sisi bawah tetap dipotong membulat oleh container.
 */
const SCALLOP_MASK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M0,40 A40,40 0 0 1 80,40 A40,40 0 0 1 160,40 A40,40 0 0 1 240,40 A40,40 0 0 1 320,40 A40,40 0 0 1 400,40 V600 H0 Z'/%3E%3C/svg%3E")`;

const SCALLOP_MASK_STYLE: CSSProperties = {
  WebkitMaskImage: SCALLOP_MASK,
  maskImage: SCALLOP_MASK,
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

type Rect = { x: number; y: number; w: number; h: number };

/**
 * Posisi tiap peran slot per varian susunan (persen terhadap container).
 * UKURAN tiap peran TETAP di semua varian, sesuai referensi:
 * tinggi 42×100, besar 56×60, kecil 27×38 — yang berubah hanya posisinya.
 * Grid pita: kolom 0–42 / 44–71 / 73–100, baris 0–60 / 62–100, jarak 2%
 * → semua susunan tetap rapi dan sejajar.
 */
const ROLE_RECTS = {
  tinggi: [
    { x: 0, y: 0, w: 42, h: 100 },
    { x: 58, y: 0, w: 42, h: 100 },
    { x: 0, y: 0, w: 42, h: 100 },
    { x: 58, y: 0, w: 42, h: 100 },
  ],
  besar: [
    { x: 44, y: 0, w: 56, h: 60 },
    { x: 0, y: 0, w: 56, h: 60 },
    { x: 44, y: 40, w: 56, h: 60 },
    { x: 0, y: 40, w: 56, h: 60 },
  ],
  kecil1: [
    { x: 44, y: 62, w: 27, h: 38 },
    { x: 0, y: 62, w: 27, h: 38 },
    { x: 44, y: 0, w: 27, h: 38 },
    { x: 0, y: 0, w: 27, h: 38 },
  ],
  kecil2: [
    { x: 73, y: 62, w: 27, h: 38 },
    { x: 29, y: 62, w: 27, h: 38 },
    { x: 73, y: 0, w: 27, h: 38 },
    { x: 29, y: 0, w: 27, h: 38 },
  ],
} satisfies Record<string, Rect[]>;

type Role = keyof typeof ROLE_RECTS;

/**
 * Peran tiap foto berputar satu langkah setiap siklus: foto yang tadinya di
 * slot kecil bisa pindah ke slot tinggi (berubah bentuk jadi scallop), dst.
 * Susunan varian: 1) referensi, 2) cermin, 3) besar ke kanan-bawah, 4) cerminnya.
 */
const ROLE_ORDER: Role[] = ["tinggi", "besar", "kecil1", "kecil2"];

const rectFor = (photoIndex: number, cycle: number) =>
  ROLE_RECTS[ROLE_ORDER[(photoIndex + cycle) % ROLE_ORDER.length]][cycle % 4];

/** Empat set foto — fotonya berganti tiap beberapa detik. */
const photoSets = [
  [
    {
      src: "/assets/gallery/img-6.jpg",
      alt: "Sosialisasi di aula sekolah",
    },
    {
      src: "/assets/background_about/morning_spirit.jpg",
      alt: "Suasana pagi di sekolah",
    },
    { src: "/assets/gallery/img-2.jpg", alt: "Kegiatan outbound bersama" },
    { src: "/assets/gallery/img-9.jpg", alt: "Santri memasak bersama" },
  ],
  [
    {
      src: "/assets/gallery/img-3.jpg",
      alt: "Dua santri berfoto di luar sekolah",
    },
    {
      src: "/assets/background_about/ukhuwah_islamiyah.jpg",
      alt: "Santri makan bersama di aula",
    },
    { src: "/assets/gallery/img-4.jpg", alt: "Kegiatan eksplorasi alam" },
    { src: "/assets/gallery/img-1.jpg", alt: "Lomba Agustusan antar santri" },
  ],
  [
    {
      src: "/assets/background_about/ukhuwah_islamiyah.jpg",
      alt: "Suasana makan bersama di aula sekolah",
    },
    {
      src: "/assets/background_about/eksplorasi_alam.JPG",
      alt: "Eksplorasi alam bersama santri",
    },
    { src: "/assets/gallery/img-9.jpg", alt: "Santri memasak bersama" },
    { src: "/assets/gallery/img-8.jpg", alt: "Kegiatan santri di lapangan" },
  ],
  [
    {
      src: "/assets/gallery/img-4.jpg",
      alt: "Eksplorasi alam bersama santri",
    },
    { src: "/assets/gallery/img-6.jpg", alt: "Sosialisasi di aula sekolah" },
    {
      src: "/assets/background_about/bakti_sosial.jpeg",
      alt: "Bakti sosial di lingkungan sekolah",
    },
    {
      src: "/assets/background_about/morning_spirit.jpg",
      alt: "Suasana pagi di sekolah",
    },
  ],
];

/**
 * Bento grid sesuai referensi: semua slot persegi (rounded), pola satu foto
 * tinggi scallop + satu besar + dua kecil. Tiap 5 detik susunan berubah —
 * foto berpindah posisi (ukuran per peran tetap) dengan GSAP bouncy, dan
 * bentuk tiap foto ikut berubah saat ia masuk/keluar dari slot tinggi.
 */
const BentoGallery = () => {
  const [cycle, setCycle] = useState(0);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  const photos = photoSets[cycle % photoSets.length];

  // rotasi susunan + foto setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCycle((value) => (value + 1) % photoSets.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // morph posisi antar susunan dengan GSAP (bouncy)
  useEffect(() => {
    const timeline = gsap.timeline();

    wrapperRefs.current.forEach((wrapper, index) => {
      if (!wrapper) return;

      const rect = rectFor(index, cycle);

      timeline.to(
        wrapper,
        {
          left: `${rect.x}%`,
          top: `${rect.y}%`,
          width: `${rect.w}%`,
          height: `${rect.h}%`,
          duration: 1,
          ease: "back.out(1.7)",
        },
        index * 0.07
      );
    });

    return () => {
      timeline.kill();
    };
  }, [cycle]);

  const setWrapper = (index: number) => (element: HTMLDivElement | null) => {
    wrapperRefs.current[index] = element;
  };

  const renderPhoto = (photo: { src: string; alt: string }, masked: boolean) => (
    <AnimatePresence initial={false}>
      <motion.div
        key={photo.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute inset-0"
        style={masked ? SCALLOP_MASK_STYLE : undefined}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 1024px) 50vw, 56vw"
          className="object-cover"
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section
      data-bento-section
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Desktop/tablet: susunan bento yang berpindah posisi */}
        <div className="relative hidden aspect-[16/10] w-full overflow-hidden lg:block">
          {photos.map((photo, index) => {
            const rect = rectFor(index, 0);
            const isTall = (index + cycle) % ROLE_ORDER.length === 0;

            return (
              <div
                key={index}
                ref={setWrapper(index)}
                className="absolute overflow-hidden rounded-2xl"
                style={{
                  left: `${rect.x}%`,
                  top: `${rect.y}%`,
                  width: `${rect.w}%`,
                  height: `${rect.h}%`,
                }}
              >
                {renderPhoto(photo, isTall)}
              </div>
            );
          })}
        </div>

        {/* Mobile: grid 2×2 sederhana (fotonya tetap berganti) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              {renderPhoto(photo, false)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;
