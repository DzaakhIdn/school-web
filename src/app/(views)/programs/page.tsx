"use client";

import { Space_Grotesk, Montserrat, Raleway } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  Globe,
  Heart,
  Medal,
  BarChart3,
  Feather,
  Code2,
  Users,
  Lightbulb,
  Clock,
  Award,
} from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  book: <BookOpen className="w-5 h-5" />,
  language: <Globe className="w-5 h-5" />,
  hafalan: <Heart className="w-5 h-5" />,
  islam: <Medal className="w-5 h-5" />,
  fiqh: <BarChart3 className="w-5 h-5" />,
  hadits: <Feather className="w-5 h-5" />,
  code: <Code2 className="w-5 h-5" />,
  app: <Users className="w-5 h-5" />,
  mindset: <Lightbulb className="w-5 h-5" />,
  time: <Clock className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  award: <Award className="w-5 h-5" />,
};

function getIcon(iconType: string): React.ReactNode {
  return iconMap[iconType] || iconMap["book"];
}

type ProgramId = "k10" | "k11" | "k12";

interface Subject {
  name: string;
  iconType: string;
}

interface Distribution {
  label: string;
  percentage: number;
}

interface Semester {
  name: string;
  subjects: Subject[];
  distribution: Distribution[];
}

interface Output {
  icon: string;
  text: string;
}

interface ClassProgram {
  id: ProgramId;
  color: string;
  colorBg: string;
  grade: string;
  phase: string;
  description: string;
  semesters: Semester[];
  outputs: Output[];
  yearDistribution: Distribution[];
}

const programs: ClassProgram[] = [
  {
    id: "k10",
    color: "yellow",
    colorBg: "from-yellow-50 to-orange-50",
    grade: "Kelas 10",
    phase: "Fase Akuisisi Fundamental",
    description:
      "Prioritas utama adalah penguasaan perangkat dasar (Bahasa Inggris dan Logika Coding). Santri belum dituntut membuat maha karya kompleks, melainkan membangun kebiasaan.",
    semesters: [
      {
        name: "SEMESTER 1",
        subjects: [
          { name: "Tahajji (Qaidah Samiriyyah) — 2 Pekan Awal", iconType: "book" },
          { name: "Bahasa Inggris Intensif (13 Minggu Block Time Siang)", iconType: "language" },
          { name: "Tahfidz — Hafalan Baru Subuh + Muroja'ah Maghrib", iconType: "hafalan" },
          { name: "Aqidah (Mulazamah Intensif)", iconType: "islam" },
          { name: "Fiqh (Mulazamah)", iconType: "fiqh" },
          { name: "Hadits Arba'in 1-8", iconType: "hadits" },
          { name: "IT Dasar (HTML, CSS, JS — Malam ±2 Jam/Hari)", iconType: "code" },
          { name: "HSI Reguler — 5-10 Mnt/Hari via Laptop/HP", iconType: "app" },
          { name: "Agile Mindset Level 1", iconType: "mindset" },
        ],
        distribution: [
          { label: "Bahasa Inggris", percentage: 32 },
          { label: "Tahfidz", percentage: 22 },
          { label: "IT", percentage: 21 },
          { label: "Fiqh", percentage: 10 },
          { label: "Aqidah", percentage: 7 },
          { label: "Tahajji", percentage: 5 },
          { label: "Hadits", percentage: 2 },
          { label: "Agile", percentage: 1 },
        ],
      },
      {
        name: "SEMESTER 2",
        subjects: [
          { name: "Bahasa Inggris — Bootcamp Penuh 1 Bulan (Block Time)", iconType: "language" },
          { name: "Tahfidz — Hafalan Baru + Muroja'ah + Intensif Ramadhan", iconType: "hafalan" },
          { name: "Sirah — Sirah Nabi (Mulazamah 2 Pekan)", iconType: "hadits" },
          { name: "Hadits Arba'in 9-16", iconType: "hadits" },
          { name: "IT Lanjutan (Golang + REST API + MariaDB)", iconType: "code" },
          { name: "HSI Reguler — 5-10 Mnt/Hari via Laptop/HP", iconType: "app" },
          { name: "Agile Mindset Level 1 (Lanjutan)", iconType: "mindset" },
        ],
        distribution: [
          { label: "Tahfidz", percentage: 37 },
          { label: "IT", percentage: 30 },
          { label: "Bahasa Inggris", percentage: 16 },
          { label: "Sirah", percentage: 13 },
          { label: "Hadits", percentage: 3 },
          { label: "Agile", percentage: 1 },
        ],
      },
    ],
    outputs: [
      { icon: "globe", text: "Website Portofolio" },
      { icon: "book", text: "Hafal Juz 28-30" },
      { icon: "language", text: "Berani Berbahasa Inggris" },
      { icon: "islam", text: "Aqidah Bersih" },
      { icon: "hadits", text: "Hafal 16 Hadits Arba'in" },
      { icon: "mindset", text: "Karakter Anti-Fragile" },
    ],
    yearDistribution: [
      { label: "Tahfidz", percentage: 28 },
      { label: "Bahasa Inggris", percentage: 25 },
      { label: "IT", percentage: 25 },
      { label: "Diniyah", percentage: 16 },
      { label: "Tahajji", percentage: 3 },
      { label: "Hadits", percentage: 2 },
      { label: "Agile", percentage: 1 },
    ],
  },
  {
    id: "k11",
    color: "blue",
    colorBg: "from-blue-50 to-indigo-50",
    grade: "Kelas 11",
    phase: "Fase Eskalasi & Transisi",
    description:
      "K11 adalah transisi pandangan ke luar (Global). Fase Akuisisi bergeser dari penguasaan Bahasa Arab murni ke penguasaan Bahasa Inggris aktif.",
    semesters: [
      {
        name: "SEMESTER 1",
        subjects: [
          { name: "Bahasa Inggris Intensif (13 Minggu Block Time Siang)", iconType: "language" },
          { name: "Tahfidz — Hafalan Baru Subuh + Muroja'ah Maghrib", iconType: "hafalan" },
          { name: "IT — Website Sekolah Dinamis (React.js)", iconType: "code" },
          { name: "Hadits Arba'in 1-16", iconType: "hadits" },
          { name: "HSI Reguler — 5-10 Mnt/Hari via Laptop/HP", iconType: "app" },
          { name: "Agile Mindset Level 1", iconType: "mindset" },
        ],
        distribution: [
          { label: "Bahasa Inggris", percentage: 32 },
          { label: "IT", percentage: 21 },
          { label: "Tahfidz", percentage: 19 },
          { label: "Hadits", percentage: 2 },
          { label: "Agile", percentage: 1 },
        ],
      },
      {
        name: "SEMESTER 2",
        subjects: [
          { name: "Bahasa Inggris — Bootcamp Penuh 1 Bulan (Block Time)", iconType: "language" },
          { name: "Tahfidz — Hafalan Baru + Muroja'ah + Intensif Ramadhan", iconType: "hafalan" },
          { name: "4 Matan Dasar + Setoran ke Syaikh", iconType: "islam" },
          { name: "IT — Dashboard Admin RBAC (Redux + Go Fiber)", iconType: "code" },
          { name: "Hadits Arba'in 17-32", iconType: "hadits" },
          { name: "HSI Reguler — 5-10 Mnt/Hari via Laptop/HP", iconType: "app" },
          { name: "Agile Mindset Level 2", iconType: "mindset" },
        ],
        distribution: [
          { label: "Tahfidz", percentage: 37 },
          { label: "IT", percentage: 30 },
          { label: "Bahasa Inggris", percentage: 16 },
          { label: "Hifdzul Mutun", percentage: 10 },
          { label: "Hadits", percentage: 3 },
          { label: "Agile", percentage: 1 },
        ],
      },
    ],
    outputs: [
      { icon: "code", text: "Dashboard Admin Live" },
      { icon: "book", text: "Hafal 4-6 Juz" },
      { icon: "globe", text: "Bahasa Inggris Aktif" },
      { icon: "islam", text: "Sertifikasi Masjid Nabawiy" },
      { icon: "hadits", text: "Hafal 32 Hadits Arba'in" },
      { icon: "mindset", text: "Mental Resilien & Beradab" },
    ],
    yearDistribution: [
      { label: "Tahfidz", percentage: 26 },
      { label: "Bahasa Inggris", percentage: 25 },
      { label: "IT", percentage: 25 },
      { label: "Hifdzul Mutun", percentage: 4 },
      { label: "Hadits", percentage: 2 },
      { label: "Agile", percentage: 1 },
    ],
  },
  {
    id: "k12",
    color: "red",
    colorBg: "from-red-50 to-pink-50",
    grade: "Kelas 12",
    phase: "Fase Aplikasi — Bahasa Melebur Menjadi Alat",
    description:
      "Kedua bahasa (Arab & Inggris) melebur 100% menjadi 'Alat Kerja'. Inilah masa panen untuk menghasilkan produk berstandar industri (Marketplace Islami).",
    semesters: [
      {
        name: "SEMESTER 1",
        subjects: [
          { name: "IT — Next.js + Go Fiber + Payment Gateway", iconType: "code" },
          { name: "Hadits Arba'in 33-41", iconType: "hadits" },
          { name: "Agile Level 3 (Conflict & Design Thinking)", iconType: "mindset" },
          { name: "HSI Akademik (145 Hlq)", iconType: "islam" },
          { name: "Trilingual Project Maintenance (Arab & Inggris)", iconType: "language" },
        ],
        distribution: [
          { label: "IT", percentage: 40 },
          { label: "HSI Akademik", percentage: 30 },
          { label: "Agile", percentage: 20 },
          { label: "Hadits", percentage: 7 },
          { label: "Trilingual", percentage: 3 },
        ],
      },
      {
        name: "SEMESTER 2",
        subjects: [
          { name: "IT — Dashboard Admin/Seller + Bot Notifikasi", iconType: "code" },
          { name: "Setoran Duduk 50 Hadits Arba'in + Ibnu Rajab", iconType: "hadits" },
          { name: "Imam Tarawih + Finalisasi 6-9 Juz", iconType: "book" },
          { name: "HSI Akademik (94 Hlq)", iconType: "islam" },
          { name: "Agile Level 3 (Conflict & Design Thinking)", iconType: "mindset" },
          { name: "Trilingual Project Maintenance (Lanjutan)", iconType: "language" },
        ],
        distribution: [
          { label: "IT", percentage: 35 },
          { label: "HSI Akademik", percentage: 25 },
          { label: "Hafalan", percentage: 20 },
          { label: "Agile", percentage: 15 },
          { label: "Trilingual", percentage: 5 },
        ],
      },
    ],
    outputs: [
      { icon: "code", text: "Marketplace Islami Live" },
      { icon: "book", text: "6-9 Juz Mutqin" },
      { icon: "hadits", text: "50 Hadits Setoran Duduk" },
      { icon: "islam", text: "Khatam 239 Hlq HSI Akademik" },
      { icon: "award", text: "Imam Tarawih" },
      { icon: "language", text: "Generasi Muslim Unggul & Trilingual Aktif" },
    ],
    yearDistribution: [
      { label: "IT", percentage: 37 },
      { label: "HSI Akademik", percentage: 27 },
      { label: "Hafalan", percentage: 20 },
      { label: "Agile", percentage: 10 },
      { label: "Trilingual", percentage: 6 },
    ],
  },
];

export default function ProgramsPage() {
  const [expandedClass, setExpandedClass] = useState<ProgramId>("k10");
  const [expandedSemester, setExpandedSemester] = useState<number>(0);
  const [expandedOutput, setExpandedOutput] = useState<boolean>(false);

  const currentProgram = programs.find((p) => p.id === expandedClass);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl`}>
            <p>{`< Program Pembelajaran />`}</p>
          </div>
          <h1 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600`}>
            Kurikulum Holistik HSIBS
          </h1>
          <p className={`${montserrat.className} text-slate-600 text-base sm:text-lg max-w-3xl mx-auto`}>
            Perjalanan 3 Tahun Membentuk Generasi Unggul dengan Integrasi Sempurna antara Aqidah, Hafalan, Akhlak, Bahasa & Teknologi
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
          {programs.map((program) => (
            <motion.button
              key={program.id}
              onClick={() => {
                setExpandedClass(program.id);
                setExpandedSemester(0);
              }}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 ${
                expandedClass === program.id
                  ? `bg-gradient-to-r ${program.colorBg} text-slate-900 border-2 border-${program.color}-500 shadow-lg`
                  : "bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {program.grade}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        {currentProgram && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-8">
            {/* Phase */}
            <div className={`bg-gradient-to-r ${currentProgram.colorBg} rounded-2xl p-6 sm:p-8 border-2`}>
              <h2 className={`${raleway.className} font-bold text-xl sm:text-2xl text-slate-800 mb-3`}>{currentProgram.phase}</h2>
              <p className={`${montserrat.className} text-slate-700 text-sm sm:text-base leading-relaxed`}>{currentProgram.description}</p>
            </div>

            {/* Semesters */}
            <div className="space-y-4">
              {currentProgram.semesters.map((semester, idx) => (
                <motion.div key={idx} className="border-2 border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedSemester(expandedSemester === idx ? -1 : idx)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-4 sm:p-6 flex items-center justify-between"
                  >
                    <h3 className={`${raleway.className} font-bold text-lg sm:text-xl`}>{semester.name}</h3>
                    <ChevronDown className={`w-6 h-6 transition-transform ${expandedSemester === idx ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {expandedSemester === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 sm:p-8 space-y-6"
                      >
                        {/* Subjects */}
                        <div className="space-y-3">
                          {semester.subjects.map((subject, subIdx) => (
                            <div key={subIdx} className="flex gap-3 sm:gap-4 items-start">
                              <div className="flex-shrink-0 text-blue-500 mt-1">{getIcon(subject.iconType)}</div>
                              <p className={`${montserrat.className} text-slate-700 text-sm sm:text-base`}>{subject.name}</p>
                            </div>
                          ))}
                        </div>

                        {/* Distribution */}
                        <div className="pt-6 border-t border-slate-200">
                          <h4 className={`${raleway.className} font-bold text-slate-800 mb-4`}>Distribusi Beban</h4>
                          <div className="space-y-2">
                            {semester.distribution.map((item, distIdx) => (
                              <div key={distIdx} className="space-y-1">
                                <div className="flex justify-between text-xs sm:text-sm">
                                  <span className={`${montserrat.className} text-slate-700 font-semibold`}>{item.label}</span>
                                  <span className={`${montserrat.className} text-blue-600 font-bold`}>{item.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.percentage}%` }}
                                    transition={{ delay: distIdx * 0.1, duration: 0.8 }}
                                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Outputs */}
            <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 overflow-hidden">
              <button
                onClick={() => setExpandedOutput(!expandedOutput)}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-4 sm:p-6 flex items-center justify-between"
              >
                <h3 className={`${raleway.className} font-bold text-lg sm:text-xl`}>Output {currentProgram.grade}</h3>
                <ChevronDown className={`w-6 h-6 transition-transform ${expandedOutput ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedOutput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 space-y-4"
                  >
                    {/* Outputs List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {currentProgram.outputs.map((output, outIdx) => (
                        <motion.div
                          key={outIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: outIdx * 0.1 }}
                          className="flex gap-2 items-start"
                        >
                          <div className="text-blue-500 flex-shrink-0 mt-1">{getIcon(output.icon)}</div>
                          <p className={`${montserrat.className} text-slate-700 text-sm sm:text-base`}>{output.text}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Year Distribution */}
                    <div className="pt-6 border-t border-blue-200">
                      <h4 className={`${raleway.className} font-bold text-slate-800 mb-4`}>Total Beban Setahun</h4>
                      <div className="space-y-2">
                        {currentProgram.yearDistribution.map((item, yearIdx) => (
                          <div key={yearIdx} className="space-y-1">
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span className={`${montserrat.className} text-slate-700 font-semibold`}>{item.label}</span>
                              <span className={`${montserrat.className} text-blue-600 font-bold`}>{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.percentage}%` }}
                                transition={{ delay: yearIdx * 0.1, duration: 0.8 }}
                                className="bg-gradient-to-r from-blue-400 to-indigo-600 h-full rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
