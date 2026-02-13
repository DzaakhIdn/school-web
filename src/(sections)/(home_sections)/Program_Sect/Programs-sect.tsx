"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Space_Grotesk, Montserrat } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const programs = [
  {
    id: 1,
    number: "01",
    subtitle: "Tahfidzul Qur'an",
    title: "Menghafal Al-Qur’an dengan bimbingan intensif",
    description: "Program hafalan Al-Qur’an berfokus pada target terukur, metode pengulangan, dan bimbingan ustadz/ustadzah.",
    image: "/assets/programs_card/quran.jpg",
  },
  {
    id: 2,
    number: "02",
    subtitle: "Teknologi Informasi",
    title: "Bekal Teknologi Informasi untuk Masa Depan Santri",
    description: "Program Teknologi Informasi HSIBS membekali santri dengan keterampilan digital melalui pembelajaran terarah dan praktik nyata, agar siap menghadapi tantangan masa depan.",
    image: "/assets/programs_card/code.jpg",
  },
  {
    id: 3,
    number: "03",
    subtitle: "Program Penguatan Bahasa Berjenjang",
    title: "Menguatkan Bahasa, Memahami Ilmu Agama dan Dunia",
    description: "Program ini menguatkan Bahasa Arab sebagai kunci pemahaman keislaman dan Bahasa Inggris sebagai jendela wawasan dunia, guna membentuk kesiapan intelektual dan spiritual santri secara seimbang.",
    image: "/assets/programs_card/bahasa.jpg",
  },
  {
    id: 4,
    number: "04",
    subtitle: "Fondasi Ilmu Diniyah",
    title: "Pemahaman Agama yang Lurus dan Mendalam",
    description: "Program ini menghadirkan pembelajaran keislaman yang sistematis untuk menumbuhkan keyakinan yang kuat, pemahaman ibadah yang benar, serta akhlak yang mulia.",
    image: "/assets/programs_card/kitab.jpg",
  },
];

export default function ProgramSection() {
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="w-full min-h-screen bg-white py-16 px-4 md:px-10">
      
      {/* JUDUL ATAS */}
      <div className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-3xl mb-4 text-center`}>
        <p>{`< Program Kami />`}</p>
      </div>

      {/* TEKS HERO */}
      <div className={`${montserrat.className} text-center font-extrabold tracking-tight text-2xl text-blue-500 md:text-4xl mb-16 max-w-4xl mx-auto px-4`}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         Empat Program Inti HSIBS untuk Mempersiapkan Santri Bersaing di Era Global
        </motion.div>
      </div>

      {/* CONTAINER CARD UTAMA */}
      <div className="flex h-[70vh] min-h-[600px] w-full bg-white overflow-hidden rounded-3xl shadow-xl border border-gray-100">
        {programs.map((program) => {
          const isActive = activeId === program.id;

          return (
            <motion.div
              key={program.id}
              onClick={() => setActiveId(program.id)}
              animate={{
                flex: isActive ? 4 : 1,
                // Berubah ke Blue-500 saat tertutup, Putih saat terbuka
                backgroundColor: isActive ? "#ffffff" : "#3b82f6"
              }}
              transition={{ 
                duration: 0.7, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="relative overflow-hidden cursor-pointer border-r border-white/10 flex flex-col items-start"
            >
              {/* Nomor Index - Putih transparan saat tertutup agar tetap elegan */}
              <div className={`absolute top-8 right-8 font-bold text-xl transition-colors duration-500 z-20 ${isActive ? 'text-blue-600' : 'text-blue-100/60'}`}>
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
                    <span className="rotate-[-90deg] whitespace-nowrap text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
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
                    className="w-full h-full flex flex-col justify-between p-10 md:p-14 z-10"
                  >
                    <div className="max-w-3xl">
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block"
                      >
                        {program.subtitle}
                      </motion.span>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-3xl md:text-5xl font-black mb-6 text-gray-900 leading-[1.1]"
                      >
                        {program.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed max-w-xl"
                      >
                        {program.description}
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="relative h-64 md:h-80 w-full mt-auto"
                    >
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        priority
                        className="rounded-2xl object-cover shadow-2xl shadow-blue-100"
                      />
                    </motion.div>
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