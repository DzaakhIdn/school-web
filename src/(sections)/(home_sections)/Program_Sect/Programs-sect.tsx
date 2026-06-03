"use client";

import { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk, Montserrat } from "next/font/google";
import { ChevronDown } from "lucide-react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const programs = [
  {
    id: 1,
    number: "01",
    subtitle: "Diniyyah",
    title: "Aqidah Manhaj Salaf Berjenjang",
    description: "Aqidah Manhaj Salaf berjenjang: Mulazamah (K10) → Hifdzul Mutun (K11) → HSI Akademik 239 Hlq (K12). Tahfidz + Hadits Arba'in + Fiqh Ibadah.",
    highlights: ["Mulazamah K10", "Hifdzul Mutun K11", "HSI Akademik K12", "Fiqh Ibadah"],
    details: [
      {
        level: "K10",
        title: "Aqidah + Fiqh 'Ali + Tahfidz Juz 28-30",
        description: "Fondasi aqidah yang kuat dengan pemahaman fiqh mendalam dan mulai tahfidz dari juz 28-30"
      },
      {
        level: "K11",
        title: "Hifdzul Mutun + Tahfidz 4-6 Juz + Hadits 17-32",
        description: "Pendalaman hafalan dengan target 4-6 juz dan internalisasi hadits 17-32"
      },
      {
        level: "K12",
        title: "HSI Akademik 239 Hlq + Tahfidz 6-9 Juz + Hadits 33-50",
        description: "Puncak pencapaian dengan hafalan 6-9 juz dan penguasaan seluruh 50 hadits arba'in"
      }
    ]
  },
  {
    id: 2,
    number: "02",
    subtitle: "IT",
    title: "Dari HTML Dasar hingga Marketplace Islami",
    description: "Dari HTML dasar hingga Marketplace Islami live. Prinsip: Build Real Things yang Yanfa'uka.",
    highlights: ["HTML Dasar", "Web Development", "Marketplace Islami", "Build Real Things"],
    details: [
      {
        level: "K10",
        title: "HTML → JS → Golang → REST API Basics",
        description: "Memulai dari dasar HTML, JavaScript, hingga backend dengan Golang dan REST API fundamentals"
      },
      {
        level: "K11",
        title: "React.js + Redux + Dashboard RBAC",
        description: "Frontend development dengan React.js, state management Redux, dan dashboard dengan role-based access control"
      },
      {
        level: "K12",
        title: "Next.js + Go Fiber → Marketplace Live",
        description: "Full-stack development dengan Next.js dan Go Fiber untuk membangun Marketplace Islami yang live di production"
      }
    ]
  },
  {
    id: 3,
    number: "03",
    subtitle: "Bahasa",
    title: "Arab & Inggris Sebagai Alat Kerja",
    description: "Arab intensif (K10) sebagai alat agama + Inggris aktif (K11) sebagai alat industri. Keduanya melebur menjadi alat kerja di K12.",
    highlights: ["Arab Intensif K10", "Inggris Aktif K11", "Alat Kerja K12", "Trilingual"],
    details: [
      {
        level: "K10",
        title: "Arab Intensif (ABY 1-3) — Survival Arabic",
        description: "Pembelajaran Arab intensif dengan fokus pada survival Arabic untuk memahami literatur agama"
      },
      {
        level: "K11",
        title: "Inggris Intensif 22 Minggu — Global Literacy",
        description: "Program Inggris intensif selama 22 minggu untuk mencapai global literacy dan kemampuan industri"
      },
      {
        level: "K12",
        title: "Trilingual Project Maintenance — Alat Kerja",
        description: "Integrasi ketiga bahasa dalam project maintenance sebagai alat kerja profesional"
      }
    ]
  },
  {
    id: 4,
    number: "04",
    subtitle: "Karakter",
    title: "Akhlaq Qurani & Ketangguhan Mental",
    description: "Agile Mindset L1→3 + 50 Hadits Arba'in diamalkan + Kegiatan Kesiswaan — akhlaq Qurani dan ketangguhan dibangun dari dalam.",
    highlights: ["Agile Mindset", "50 Hadits Arba'in", "Kegiatan Kesiswaan", "Ketangguhan Mental"],
    details: [
      {
        level: "K10",
        title: "Level 1 — Anti-Fragile & Purpose of Life",
        description: "Membangun fondasi karakter dengan pemahaman anti-fragile dan menemukan purpose of life"
      },
      {
        level: "K11",
        title: "Level 2 — Resilience & Zuhud",
        description: "Pengembangan resilience dan zuhud sebagai kunci ketangguhan mental dan spiritual"
      },
      {
        level: "K12",
        title: "Level 3 — Leadership & Career Mentorship",
        description: "Puncak pengembangan karakter dengan fokus pada leadership dan career mentorship untuk masa depan"
      }
    ]
  },
];

export default function ProgramSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const [expandedDetail, setExpandedDetail] = useState<number | null>(null);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="w-full min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      
      {/* JUDUL ATAS */}
      <div className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-center`}>
        <p>{`< 4 Pilar Keunggulan />`}</p>
      </div>

      {/* TEKS HERO */}
      <div className={`${montserrat.className} text-center font-extrabold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500 mb-4 sm:mb-6 max-w-4xl mx-auto px-4`}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         4 Pilar Keunggulan
        </motion.div>
      </div>

      {/* SUBTITLE */}
      <div className={`${montserrat.className} text-center text-slate-600 text-sm sm:text-base md:text-lg mb-12 sm:mb-16 max-w-3xl mx-auto px-4`}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Identitas utama yang membedakan HSIBS dari institusi lainnya
        </motion.div>
      </div>

      {/* CONTAINER CARD UTAMA */}
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh] md:min-h-[600px] w-full bg-white overflow-hidden rounded-2xl md:rounded-3xl shadow-xl border border-gray-100">
        {programs.map((program) => {
          const isActive = activeId === program.id;

          return (
            <motion.div
              key={program.id}
              onClick={() => setActiveId(program.id)}
              animate={{
                flex: isActive ? 4 : 1,
                backgroundColor: isActive ? "#ffffff" : "#3b82f6"
              }}
              transition={{ 
                duration: 0.7, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="relative overflow-hidden cursor-pointer border-r border-b md:border-b-0 border-white/10 flex flex-col items-start min-h-32 md:min-h-0"
            >
              {/* Nomor Index */}
              <div className={`absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 font-bold text-lg sm:text-xl transition-colors duration-500 z-20 ${isActive ? 'text-blue-600' : 'text-blue-100/60'}`}>
                {program.number}
              </div>

              {/* Teks Vertikal (Hanya muncul saat card tertutup) */}
              <AnimatePresence mode="wait">
                {!isActive && (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                  >
                    <span className="md:rotate-[-90deg] whitespace-normal md:whitespace-nowrap text-white font-bold tracking-[0.2em] uppercase text-xs sm:text-sm line-clamp-2 md:line-clamp-none text-center">
                      {program.subtitle}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Konten Saat Card Aktif */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-14 z-10 overflow-y-auto"
                  >
                    <div className="max-w-3xl">
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-blue-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 block"
                      >
                        {program.subtitle}
                      </motion.span>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-gray-900 leading-[1.1]"
                      >
                        {program.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
                      >
                        {program.description}
                      </motion.p>

                      {/* Highlights */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-2 sm:gap-3 mb-8"
                      >
                        {program.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold"
                          >
                            {highlight}
                          </span>
                        ))}
                      </motion.div>

                      {/* Details Accordion */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="space-y-3"
                      >
                        <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Rincian Per Kelas</h4>
                        {program.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedDetail(expandedDetail === idx ? null : idx);
                              }}
                              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                              <div className="text-left">
                                <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded mr-3">
                                  {detail.level}
                                </span>
                                <span className="text-sm font-semibold text-gray-800">{detail.title}</span>
                              </div>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                                  expandedDetail === idx ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedDetail === idx && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="px-4 py-3 bg-white border-t border-gray-200"
                                >
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {detail.description}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
