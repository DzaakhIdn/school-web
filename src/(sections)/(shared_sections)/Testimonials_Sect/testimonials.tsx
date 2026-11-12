"use client";

import { spaceGrotesk, montserrat } from "@/lib/fonts";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useAutoScrollCarousel } from "@/hooks/use-auto-scroll-carousel";



/** Data testimoni yang sudah ada di project. */
const testimonials = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    role: "Alumni Santri",
    year: "Angkatan 2023",
    testimonial:
      "HSI Boarding School memberikan pendidikan yang luar biasa. Saya tidak hanya belajar ilmu agama, tapi juga life skills yang sangat berguna.",
    accent: "from-blue-600 to-blue-400",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    role: "Wali Santri",
    year: "Orang Tua",
    testimonial:
      "Alhamdulillah, anak saya berkembang pesat di HSI. Akhlaknya semakin baik dan hafalannya bertambah setiap hari.",
    accent: "from-rose-500 to-amber-400",
  },
  {
    id: 3,
    name: "Muhammad Rizki",
    role: "Alumni Santri",
    year: "Angkatan 2022",
    testimonial:
      "Program tahfidz di HSI sangat terstruktur. Dalam 3 tahun, saya berhasil menghafal 15 juz dengan metode yang menyenangkan.",
    accent: "from-emerald-600 to-teal-400",
  },
  {
    id: 4,
    name: "Fatimah Az-Zahra",
    role: "Santri Aktif",
    year: "Kelas 11",
    testimonial:
      "Lingkungan di HSI sangat mendukung untuk belajar. Teman-teman dan ustadz/ustadzah selalu memotivasi kami untuk menjadi lebih baik.",
    accent: "from-indigo-600 to-sky-400",
  },
  {
    id: 5,
    name: "Abdullah Rahman",
    role: "Alumni Santri",
    year: "Angkatan 2021",
    testimonial:
      "HSI tidak hanya mengajarkan ilmu agama, tapi juga mempersiapkan kami untuk masa depan dengan berbagai program unggulan.",
    accent: "from-amber-500 to-yellow-400",
  },
  {
    id: 6,
    name: "Khadijah Ummu",
    role: "Wali Santri",
    year: "Orang Tua",
    testimonial:
      "Keputusan terbaik adalah menyekolahkan anak di HSI. Pendidikan holistik yang menggabungkan dunia dan akhirat.",
    accent: "from-fuchsia-600 to-purple-400",
  },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

/**
 * Section testimoni: panel gelap, strip avatar (klik untuk Lompat ke kartu),
 * dan carousel kartu testimoni.
 * Aturan radius konsentris: panel 40px = padding 24px + kartu 16px.
 */
const Testimonials = () => {
  const {
    trackRef,
    activeIndex,
    setActiveIndex,
    setIsPaused,
    scrollToIndex,
    scrollByItem,
    handleScroll,
  } = useAutoScrollCarousel({
    itemSelector: "[data-testimonial-card]",
    intervalMs: 4500,
  });

  const scrollToCard = scrollToIndex;
  const scrollByCard = scrollByItem;

  return (
    <section id="testimoni" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...entrance(0)}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 sm:p-8 lg:p-12"
        >
          {/* dekorasi busur konsentris di sudut */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 size-[26rem] rounded-full opacity-70"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 28px, transparent 28px, transparent 56px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-32 size-[30rem] rounded-full opacity-60"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 30px, transparent 30px, transparent 60px)",
            }}
          />

          <div className="relative">
            {/* Badge + judul */}
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                <Sparkles className="size-3.5 text-blue-400" aria-hidden />
                Testimoni
              </span>

              <h2
                className={cn(
                  "mt-5 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl",
                  spaceGrotesk.className
                )}
              >
                Cerita dari{" "}
                <span className="text-blue-400">orang tua murid</span> kami
              </h2>
            </div>

            {/* Strip avatar — klik untuk lompat ke kartu */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    scrollToCard(index);
                    setActiveIndex(index);
                  }}
                  aria-label={`Lihat testimoni ${item.name}`}
                  aria-current={index === activeIndex}
                  className={cn(
                    "relative grid place-items-center overflow-hidden rounded-full transition-all duration-500",
                    index === activeIndex
                      ? "z-10 size-14 scale-105 ring-4 ring-blue-400 ring-offset-2 ring-offset-slate-950 shadow-lg shadow-blue-500/30"
                      : "size-11 opacity-70 ring-2 ring-white/15 hover:-translate-y-1 hover:scale-105 hover:opacity-100"
                  )}
                >
                  <span
                    className={cn(
                      "grid size-full place-items-center bg-gradient-to-br text-xs font-bold text-white",
                      item.accent
                    )}
                  >
                    {initials(item.name)}
                  </span>
                </button>
              ))}
            </div>

            {/* Carousel kartu testimoni */}
            <div
              ref={trackRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((item) => (
                <article
                  key={item.id}
                  data-testimonial-card
                  className="w-[85vw] shrink-0 snap-start rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.09] sm:w-[22rem]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br text-xs font-bold text-white",
                        item.accent
                      )}
                    >
                      {initials(item.name)}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={cn(
                          "truncate text-sm font-semibold text-white",
                          spaceGrotesk.className
                        )}
                      >
                        {item.name}
                      </p>
                      <p className={cn("truncate text-xs text-white/50", montserrat.className)}>
                        {item.role} · {item.year}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-amber-400 text-amber-400"
                        aria-hidden
                      />
                    ))}
                  </div>

                  <p
                    className={cn(
                      "mt-3 line-clamp-4 text-sm leading-relaxed text-white/75",
                      montserrat.className
                    )}
                  >
                    &ldquo;{item.testimonial}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
                      <MapPin className="size-3.5" aria-hidden />
                      {item.role}
                    </span>
                    <Quote className="size-4 text-white/30" aria-hidden />
                  </div>
                </article>
              ))}
            </div>

            {/* Navigasi carousel */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Testimoni sebelumnya"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-blue-400 hover:bg-blue-400 hover:text-white hover:cursor-pointer"
              >
                <ChevronLeft className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Testimoni berikutnya"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-blue-400 hover:bg-blue-400 hover:text-white hover:cursor-pointer"
              >
                <ChevronRight className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
