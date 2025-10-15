"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const programs = [
  {
    id: 1,
    number: "01",
    subtitle: "Tahfidz Intensif",
    title: "Menghafal Al-Qur’an dengan Metode Intensif",
    description:
      "Program hafalan Al-Qur’an berfokus pada target terukur, metode pengulangan, dan bimbingan ustadz/ustadzah. Tujuannya mencetak santri cinta, paham, serta mengamalkan Al-Qur’an dalam kehidupan sehari-hari.",
    image: "/assets/programs_card/quran.jpg",
  },
  {
    id: 2,
    number: "02",
    subtitle: "Digital Literacy & Programming",
    title: "Menjadi Kreator di Era Teknologi",
    description:
      "Santri dibekali pengetahuan literasi digital, keamanan informasi, serta keterampilan dasar coding. Fokus program ini adalah membentuk generasi yang adaptif, kreatif, dan mampu menggunakan teknologi untuk kebaikan.",
    image: "/assets/programs_card/code.jpg",
  },
  {
    id: 3,
    number: "03",
    subtitle: "Bahasa Inggris & Arab",
    title: "Menguasai Bahasa Global & Bahasa Qur’an",
    description:
      "Santri dilatih menguasai bahasa Inggris internasional dan bahasa Arab Al-Qur’an. Dengan praktik percakapan, kosakata, serta menulis, santri fasih berkomunikasi dan siap bersaing global memahami literatur Islam.",
    image: "/assets/programs_card/bahasa.jpg",
  },
  {
    id: 4,
    number: "04",
    subtitle: "Diniyah Terpadu",
    title: "Pendalaman Ilmu Agama (Diniyah)",
    description:
      "Program diniyah membimbing santri mempelajari aqidah, fiqih, dan akhlak. Santri diarahkan menjadi pribadi berilmu, beradab, serta berakhlak mulia sesuai ajaran Rasulullah Shallallahu 'Alaihi wa Sallam.",
    image: "/assets/programs_card/kitab.jpg",
  },
];

export default function ProgramSection() {
  const [activeId, setActiveId] = useState(2);

  return (
    <div className="flex h-[80vh] w-full">
      {programs.map((program) => {
        const isActive = activeId === program.id;

        return (
          <motion.div
            key={program.id}
            onClick={() => setActiveId(program.id)}
            animate={{
              flex: isActive ? 3 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative overflow-hidden cursor-pointer border border-gray-200 flex items-center justify-center"
          >
            {/* Nomor */}
            <div className="absolute top-4 right-4 text-gray-400 font-bold">
              {program.number}
            </div>

            {/* Subtitle (fade in/out) */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  key={program.subtitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center 
                    rotate-[-90deg] whitespace-nowrap text-sm md:text-base text-gray-400"
                >
                  {program.subtitle}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Konten aktif (judul + deskripsi + gambar) */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="p-6 text-left z-10 max-w-xl"
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-bold mb-3"
                  >
                    {program.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    className="text-gray-600 mb-4 leading-relaxed"
                  >
                    {program.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                    className="w-full"
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={400}
                      height={400}
                      className="rounded-xl shadow-md"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
