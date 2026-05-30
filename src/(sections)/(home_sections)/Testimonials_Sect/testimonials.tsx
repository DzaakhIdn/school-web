import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Marquee from "@/components/ui/marquee";
import ScrollReveal from "@/animate/ScrollReveal";
import { Space_Grotesk, Montserrat } from "next/font/google";
import React from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const testimonials = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    role: "Alumni Santri",
    year: "Angkatan 2023",
    testimonial:
      "HSI Boarding School memberikan pendidikan yang luar biasa. Saya tidak hanya belajar ilmu agama, tapi juga life skills yang sangat berguna.",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    role: "Wali Santri",
    year: "Orang Tua",
    testimonial:
      "Alhamdulillah, anak saya berkembang pesat di HSI. Akhlaknya semakin baik dan hafalannya bertambah setiap hari.",
  },
  {
    id: 3,
    name: "Muhammad Rizki",
    role: "Alumni Santri",
    year: "Angkatan 2022",
    testimonial:
      "Program tahfidz di HSI sangat terstruktur. Dalam 3 tahun, saya berhasil menghafal 15 juz dengan metode yang menyenangkan.",
  },
  {
    id: 4,
    name: "Fatimah Az-Zahra",
    role: "Santri Aktif",
    year: "Kelas 11",
    testimonial:
      "Lingkungan di HSI sangat mendukung untuk belajar. Teman-teman dan ustadz/ustadzah selalu memotivasi kami untuk menjadi lebih baik.",
  },
  {
    id: 5,
    name: "Abdullah Rahman",
    role: "Alumni Santri",
    year: "Angkatan 2021",
    testimonial:
      "HSI tidak hanya mengajarkan ilmu agama, tapi juga mempersiapkan kami untuk masa depan dengan berbagai program unggulan.",
  },
  {
    id: 6,
    name: "Khadijah Ummu",
    role: "Wali Santri",
    year: "Orang Tua",
    testimonial:
      "Keputusan terbaik adalah menyekolahkan anak di HSI. Pendidikan holistik yang menggabungkan dunia dan akhirat.",
  },
];

const Testimonials = () => (
  <div className="py-12 sm:py-16 md:py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div
          className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4`}
        >
          <p>{`< Testimoni Santri & Wali />`}</p>
        </div>

        <div
          className={`${montserrat.className} font-extrabold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500`}
        >
          <ScrollReveal baseOpacity={0} enableBlur baseRotation={5} blurStrength={15}>
            Cerita Inspiratif dari Keluarga Besar HSI
          </ScrollReveal>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient kiri kanan */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-[8%] sm:w-[10%] bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-[8%] sm:w-[10%] bg-gradient-to-l from-background to-transparent z-10" />

        {/* Line atas → kiri */}
        <Marquee pauseOnHover className="[--duration:25s] mb-4 sm:mb-6">
          <TestimonialList />
        </Marquee>

        {/* Line bawah → kanan */}
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((t) => (
    <div
      key={t.id}
      className="group mx-2 sm:mx-3 md:mx-4 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-lg md:rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg p-4 sm:p-6"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <Avatar className="w-10 sm:w-12 h-10 sm:h-12">
          <AvatarFallback className="bg-blue-500 text-white font-semibold text-sm sm:text-lg">
            {t.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <p className={`${montserrat.className} font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors text-sm sm:text-base truncate`}>
            {t.name}
          </p>
          <p className={`${montserrat.className} text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate`}>
            {t.role} • {t.year}
          </p>
        </div>
      </div>

      <p className={`${montserrat.className} text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm line-clamp-4`}>
        {t.testimonial}
      </p>
    </div>
  ));

export default Testimonials;
