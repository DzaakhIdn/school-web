"use client";

import { spaceGrotesk, montserrat } from "@/lib/fonts";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BarChart3,
  BookOpen,
  Clock,
  Code2,
  Feather,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Medal,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import AuroraBackground from "@/components/ui/aurora-background";

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  language: Globe,
  hafalan: Heart,
  islam: Medal,
  fiqh: BarChart3,
  hadits: Feather,
  code: Code2,
  app: Users,
  mindset: Lightbulb,
  time: Clock,
  globe: Globe,
  award: Award,
};

const getIcon = (iconType: string): LucideIcon => iconMap[iconType] ?? BookOpen;

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

/** Empat pilar kurikulum (gambar di /public/assets/programs_card). */
const pillars = [
  { title: "Al-Qur'an", caption: "Tahfidz & muroja'ah harian", image: "/assets/programs_card/quran.jpg" },
  { title: "Diniyah", caption: "Aqidah, fiqh, hadits & mutun", image: "/assets/programs_card/kitab.jpg" },
  { title: "Bahasa", caption: "Arab & Inggris aktif", image: "/assets/programs_card/bahasa.jpg" },
  { title: "Teknologi", caption: "Web & software engineering", image: "/assets/programs_card/code.jpg" },
];

/**
 * Warna tetap per mata pelajaran, supaya satu pelajaran selalu berwarna sama
 * di semua grafik distribusi beban.
 */
const subjectColors: Record<string, string> = {
  Tahfidz: "bg-emerald-500",
  Hafalan: "bg-emerald-500",
  "Bahasa Inggris": "bg-blue-500",
  IT: "bg-indigo-500",
  Fiqh: "bg-amber-400",
  Aqidah: "bg-teal-500",
  Tahajji: "bg-lime-500",
  Hadits: "bg-rose-400",
  Agile: "bg-slate-400",
  Sirah: "bg-orange-400",
  Diniyah: "bg-cyan-500",
  "Hifdzul Mutun": "bg-violet-500",
  "HSI Akademik": "bg-sky-400",
  Trilingual: "bg-pink-400",
};

const colorFor = (label: string) => subjectColors[label] ?? "bg-slate-300";

/** Grafik batang bertumpuk + legenda persentase. */
const DistributionBar = ({
  items,
  title,
  compact = false,
}: {
  items: Distribution[];
  title: string;
  /** Legenda 2 kolom (untuk wadah sempit). */
  compact?: boolean;
}) => (
  <div>
    <p
      className={`${montserrat.className} mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500`}
    >
      {title}
    </p>
    <div
      className="flex h-3 w-full gap-0.5 overflow-hidden rounded-full bg-slate-100"
      role="img"
      aria-label={`${title}: ${items.map((i) => `${i.label} ${i.percentage}%`).join(", ")}`}
    >
      {items.map((item, index) => (
        <motion.span
          key={item.label}
          initial={{ width: 0 }}
          animate={{ width: `${item.percentage}%` }}
          transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
          className={cn("h-full first:rounded-l-full", colorFor(item.label))}
        />
      ))}
    </div>
    <ul
      className={cn(
        "mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5",
        !compact && "sm:grid-cols-3"
      )}
    >
      {items.map((item) => (
        <li
          key={item.label}
          className={`${montserrat.className} flex items-center gap-2 text-xs text-slate-600`}
        >
          <span className={cn("size-2 shrink-0 rounded-full", colorFor(item.label))} />
          <span className="truncate">{item.label}</span>
          <span className="ml-auto font-semibold tabular-nums text-slate-900">
            {item.percentage}%
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default function ProgramsPage() {
  const [activeId, setActiveId] = useState<ProgramId>("k10");
  const program = programs.find((p) => p.id === activeId) ?? programs[0];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16">
        <AuroraBackground />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${spaceGrotesk.className} inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-[13px] font-medium text-blue-600`}
          >
            <GraduationCap className="size-3.5" aria-hidden />
            Program Pembelajaran
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`${spaceGrotesk.className} mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl`}
          >
            Kurikulum Holistik HSIBS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className={`${montserrat.className} mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base`}
          >
            Perjalanan 3 tahun membentuk generasi unggul — memadukan aqidah,
            hafalan, akhlak, bahasa, dan teknologi.
          </motion.p>
        </div>

        {/* Empat pilar */}
        <div className="relative mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.07 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 sm:aspect-[4/4.5]"
            >
              <Image
                src={pillar.image}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p
                  className={`${spaceGrotesk.className} text-lg font-bold leading-tight text-white sm:text-xl`}
                >
                  {pillar.title}
                </p>
                <p className={`${montserrat.className} mt-1 text-xs text-white/80 sm:text-sm`}>
                  {pillar.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PERJALANAN 3 TAHUN */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-2xl"
          >
            <h2
              className={`${spaceGrotesk.className} text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl`}
            >
              Perjalanan 3 Tahun
            </h2>
            <p
              className={`${montserrat.className} mt-3 text-sm leading-relaxed text-slate-600 sm:text-base`}
            >
              Pilih jenjang untuk melihat fokus, mata pelajaran, dan target
              akhirnya.
            </p>
          </motion.div>

          {/* Stepper jenjang */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3" role="tablist">
            {programs.map((item, index) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border p-3 text-left transition hover:cursor-pointer sm:p-5",
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "border-slate-200 bg-white text-slate-900 hover:border-blue-300"
                  )}
                >
                  <span
                    className={cn(
                      spaceGrotesk.className,
                      "text-xs font-semibold sm:text-sm",
                      isActive ? "text-blue-100" : "text-blue-600"
                    )}
                  >
                    0{index + 1}
                  </span>
                  <p
                    className={`${spaceGrotesk.className} mt-1 text-base font-bold leading-tight sm:text-xl`}
                  >
                    {item.grade}
                  </p>
                  <p
                    className={cn(
                      montserrat.className,
                      "mt-1 hidden text-xs leading-snug sm:line-clamp-2 sm:block",
                      isActive ? "text-blue-100" : "text-slate-500"
                    )}
                  >
                    {item.phase}
                  </p>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-6 space-y-4 sm:mt-8"
            >
              {/* Fokus fase */}
              <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 sm:p-8">
                <p
                  className={`${montserrat.className} text-xs font-semibold uppercase tracking-wide text-blue-600`}
                >
                  {program.grade}
                </p>
                <h3
                  className={`${spaceGrotesk.className} mt-2 text-xl font-bold leading-tight text-slate-900 sm:text-2xl`}
                >
                  {program.phase}
                </h3>
                <p
                  className={`${montserrat.className} mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base`}
                >
                  {program.description}
                </p>
              </div>

              {/* Dua semester berdampingan */}
              <div className="grid gap-4 lg:grid-cols-2">
                {program.semesters.map((semester) => (
                  <div
                    key={semester.name}
                    className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 sm:p-7"
                  >
                    <h4
                      className={`${spaceGrotesk.className} text-lg font-bold capitalize text-slate-900`}
                    >
                      {semester.name.toLowerCase()}
                    </h4>

                    <ul className="mt-4 space-y-2.5">
                      {semester.subjects.map((subject) => {
                        const Icon = getIcon(subject.iconType);
                        return (
                          <li key={subject.name} className="flex items-start gap-3">
                            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600">
                              <Icon className="size-4" aria-hidden />
                            </span>
                            <span
                              className={`${montserrat.className} pt-1.5 text-sm leading-snug text-slate-700`}
                            >
                              {subject.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-6 border-t border-slate-100 pt-5 lg:mt-auto">
                      <DistributionBar items={semester.distribution} title="Distribusi beban" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Target akhir + beban setahun */}
              <div className="grid gap-4 rounded-3xl bg-blue-600 p-6 text-white sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
                <div>
                  <div className="flex items-center gap-2">
                    <Target className="size-5 text-blue-200" aria-hidden />
                    <h4 className={`${spaceGrotesk.className} text-lg font-bold sm:text-xl`}>
                      Target Akhir {program.grade}
                    </h4>
                  </div>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {program.outputs.map((output, index) => {
                      const Icon = getIcon(output.icon);
                      return (
                        <motion.li
                          key={output.text}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className="flex items-center gap-3 rounded-2xl bg-white/10 p-3"
                        >
                          <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-white text-blue-600">
                            <Icon className="size-4" aria-hidden />
                          </span>
                          <span
                            className={`${montserrat.className} text-sm font-medium leading-snug`}
                          >
                            {output.text}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>

                <div className="self-start rounded-2xl bg-white p-5 text-slate-900">
                  <DistributionBar
                    items={program.yearDistribution}
                    title="Total beban setahun"
                    compact
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
