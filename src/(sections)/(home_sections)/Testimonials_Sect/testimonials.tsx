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
  <div className="py-16 md:py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16 lg:mb-20">
        <div className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-3xl mb-4`}>
          <p>{`< Testimoni Santri & Wali />`}</p>
        </div>
        <div className={`${montserrat.className} font-extrabold tracking-tight text-2xl text-blue-500 md:text-3xl lg:text-4xl`}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={10}
          >
            Cerita Inspiratif dari Keluarga Besar HSI
          </ScrollReveal>
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="relative">
        <div className="absolute left-0 inset-y-0 w-[10%] bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 inset-y-0 w-[10%] bg-gradient-to-l from-background to-transparent z-10" />
        
        <Marquee pauseOnHover className="[--duration:25s] mb-6">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:25s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="group mx-4 w-80 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg p-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarFallback className="bg-blue-500 text-white font-semibold text-lg">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className={`${montserrat.className} font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300`}>
            {testimonial.name}
          </p>
          <p className={`${montserrat.className} text-sm text-slate-600 dark:text-slate-400`}>
            {testimonial.role} • {testimonial.year}
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="relative">
        <div className="absolute -top-2 -left-1 text-4xl text-yellow-500/30 font-serif">&quot;</div>
        <p className={`${montserrat.className} text-slate-700 dark:text-slate-300 leading-relaxed pl-4`}>
          {testimonial.testimonial}
        </p>
        <div className="absolute -bottom-4 -right-1 text-4xl text-yellow-500/30 font-serif rotate-180">&quot;</div>
      </div>
    </div>
  ));

export default Testimonials;
