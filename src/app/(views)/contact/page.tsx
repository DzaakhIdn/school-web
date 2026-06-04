"use client";

import { Space_Grotesk, Montserrat, Raleway } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState, useLayoutEffect } from "react";

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

interface CabangData {
  id: string;
  nama: string;
  tipe: "ikhwan" | "akhwat";
  nomor: string;
  email: string;
  icon: string;
  color: string;
  badgeColor: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  link: string;
  username: string;
}

const cabangData: CabangData[] = [
  {
    id: "sukabumi",
    nama: "HSI Boarding School Sukabumi",
    tipe: "ikhwan",
    nomor: "089623039600",
    email: "boardingschool@hsi.id",
    icon: "🔷",
    color: "green",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    id: "purworejo",
    nama: "HSI Boarding School Purworejo",
    tipe: "ikhwan",
    nomor: "085126184921",
    email: "boardingschool@hsi.id",
    icon: "🔷",
    color: "blue",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "bekasi",
    nama: "HSI Boarding School Bekasi",
    tipe: "akhwat",
    nomor: "089524513151",
    email: "boardingschool@hsi.id",
    icon: "💗",
    color: "pink",
    badgeColor: "bg-pink-100 text-pink-700",
  },
];

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    link: "https://instagram.com/hsiboardingschool",
    username: "@hsiboardingschool",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://linkedin.com/company/hsi-boarding-school",
    username: "HSI Boarding School",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6" />,
    link: "https://youtube.com/@HSI-BOARDING-SCHOOL",
    username: "HSI BOARDING SCHOOL",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [expandedCabang, setExpandedCabang] = useState<string | null>(null);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <div className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl mb-4`}>
            <p>{`< Hubungi Kami />`}</p>
          </div>
          <h1
            className={`${raleway.className} font-extrabold text-4xl sm:text-5xl md:text-6xl text-blue-600 mb-6 leading-tight`}
          >
            Siap Membantu Anda
          </h1>
          <p className={`${montserrat.className} text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto`}>
            Hubungi kami untuk informasi pendaftaran, program pembelajaran, atau pertanyaan lainnya tentang HSI
            Boarding School
          </p>
        </motion.div>
      </section>

      {/* QUICK CONTACT SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-blue-500">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className={`${raleway.className} font-bold text-lg text-blue-600 mb-2`}>Email</h3>
                  <Link
                    href="mailto:boardingschool@hsi.id"
                    className="text-slate-700 hover:text-blue-600 transition-colors font-semibold"
                  >
                    boardingschool@hsi.id
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-200/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-green-500">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className={`${raleway.className} font-bold text-lg text-green-600 mb-2`}>WhatsApp</h3>
                  <Link
                    href="https://wa.me/6289524513151"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-green-600 transition-colors font-semibold"
                  >
                    +62 895-2451-3151
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-200/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-orange-500">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className={`${raleway.className} font-bold text-lg text-orange-600 mb-2`}>Jam Operasional</h3>
                  <p className={`${montserrat.className} text-slate-700 text-sm font-semibold`}>
                    Senin - Jumat <br />
                    07:30 - 17:00 WIB
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CABANG CONTACT SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600 mb-4`}>
              Kontak Per Cabang
            </h2>
            <p className={`${montserrat.className} text-lg text-slate-600 max-w-3xl mx-auto`}>
              Hubungi cabang terdekat untuk mendapatkan informasi lebih detail
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {cabangData.map((cabang) => (
              <motion.div key={cabang.id} variants={itemVariants}>
                <button
                  onClick={() => setExpandedCabang(expandedCabang === cabang.id ? null : cabang.id)}
                  className={`w-full text-left p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                    expandedCabang === cabang.id
                      ? `bg-gradient-to-r ${
                          cabang.color === "green"
                            ? "from-green-50 to-emerald-50 border-green-400"
                            : cabang.color === "blue"
                              ? "from-blue-50 to-indigo-50 border-blue-400"
                              : "from-pink-50 to-rose-50 border-pink-400"
                        }`
                      : "bg-white border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{cabang.icon}</span>
                      <div>
                        <h3 className={`${raleway.className} font-bold text-lg sm:text-xl text-slate-800`}>
                          {cabang.nama}
                        </h3>
                        <p className={`${montserrat.className} text-sm text-slate-500`}>
                          {cabang.tipe === "ikhwan" ? "Santri Ikhwan" : "Santri Akhwat"}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-slate-600 transition-transform duration-300 ${
                        expandedCabang === cabang.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedCabang === cabang.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`overflow-hidden rounded-b-2xl border-2 border-t-0 border-${cabang.color}-400 bg-${cabang.color}-50 p-6 sm:p-8`}
                    >
                      <div className="space-y-4">
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <Phone className={`w-5 h-5 text-${cabang.color}-500`} />
                          </div>
                          <div className="flex-1">
                            <p className={`${montserrat.className} text-xs font-semibold text-slate-500 uppercase`}>
                              Nomor Telepon
                            </p>
                            <Link
                              href={`https://wa.me/62${cabang.nomor.substring(1)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-lg font-bold text-${cabang.color}-600 hover:underline`}
                            >
                              {cabang.nomor}
                            </Link>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <Mail className={`w-5 h-5 text-${cabang.color}-500`} />
                          </div>
                          <div className="flex-1">
                            <p className={`${montserrat.className} text-xs font-semibold text-slate-500 uppercase`}>
                              Email
                            </p>
                            <Link
                              href={`mailto:${cabang.email}`}
                              className={`text-lg font-bold text-${cabang.color}-600 hover:underline`}
                            >
                              {cabang.email}
                            </Link>
                          </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <Link
                          href={`https://wa.me/62${cabang.nomor.substring(1)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 bg-green-500 hover:bg-green-600 mt-4 w-full`}
                        >
                          <Phone className="w-5 h-5" />
                          Chat via WhatsApp
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600 mb-4`}>
              Ikuti Media Sosial Kami
            </h2>
            <p className={`${montserrat.className} text-lg text-slate-600 max-w-3xl mx-auto`}>
              Dapatkan update terbaru, tips, dan cerita inspiratif dari HSIBS
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {socialLinks.map((social, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/30 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                    {social.icon}
                  </div>
                  <h3 className={`${raleway.className} font-bold text-lg text-slate-800 mb-2`}>{social.name}</h3>
                  <p className={`${montserrat.className} text-sm text-slate-600 mb-4`}>{social.username}</p>
                  <span className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all">
                    Kunjungi <span>→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-12 sm:p-16 text-white shadow-2xl"
        >
          <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6`}>
            Siap Bergabung dengan HSIBS?
          </h2>
          <p className={`${montserrat.className} text-lg sm:text-xl mb-8 text-blue-100`}>
            Daftarkan diri Anda sekarang dan mulai perjalanan menuju generasi unggul yang bertauhid, berakhlak Qurani,
            dan berdaya saing global.
          </p>
          <Link
            href="https://psb.hsiboardingschool.id/auth/auth-user"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Mulai Pendaftaran
            <span>→</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
