"use client";

import { Space_Grotesk, Montserrat, Raleway } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users, Heart, Globe, Zap, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function AboutPage() {
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
            <p>{`< Tentang HSI Boarding School />`}</p>
          </div>
          <h1
            className={`${raleway.className} font-extrabold text-4xl sm:text-5xl md:text-6xl text-blue-600 mb-6 leading-tight`}
          >
            Sekolahnya Generasi Unggul!
          </h1>
          <p className={`${montserrat.className} text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto`}>
            HSI Boarding School adalah sekolah berasrama se-level SMA yang dirancang untuk membina generasi muslim yang
            bertauhid, berakhlak Qurani, dan berdaya saing global.
          </p>
        </motion.div>
      </section>

      {/* DEFINITION SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 text-blue-500 mt-1">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`${raleway.className} font-bold text-xl sm:text-2xl text-blue-600 mb-2`}>
                    Fondasi Pendidikan Holistik
                  </h3>
                  <p className={`${montserrat.className} text-slate-700 leading-relaxed`}>
                    Diniyyah dan Karakter menjadi bekal jiwa yang tak ternilai. Trilingual dan IT adalah kunci agar tidak
                    tertinggal di zaman ini. Empat bekal utama — satu tujuan nyata: santri yang terus belajar, mandiri, dan
                    berkontribusi.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50"
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 text-blue-500 mt-1">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`${raleway.className} font-bold text-xl sm:text-2xl text-blue-600 mb-2`}>
                    Al-Qur'an dan Akhlak Qurani
                  </h3>
                  <p className={`${montserrat.className} text-slate-700 leading-relaxed`}>
                    Al-Qur'an dan ilmu syar'i menjadi pondasi utama. Adab dan pembiasaan hidup tumbuh bersama. Bukan teori
                    semata yang diajarkan, tapi nilai yang meresap dalam nadi setiap hari.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50"
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 text-blue-500 mt-1">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`${raleway.className} font-bold text-xl sm:text-2xl text-blue-600 mb-2`}>
                    Visi Generasi Unggul
                  </h3>
                  <p className={`${montserrat.className} text-slate-700 leading-relaxed`}>
                    Tujuannya bukan sekadar lulus dan berijazah. Tapi tumbuh jadi insan yang berilmu dan amanah, memberi
                    manfaat nyata kepada masyarakat dan peradaban.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4 PILAR SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600 mb-4`}>
              Empat Pilar Utama
            </h2>
            <p className={`${montserrat.className} text-lg text-slate-600 max-w-2xl mx-auto`}>
              Kombinasi sempurna antara agama, akhlak, bahasa, dan teknologi
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border-2 border-yellow-400 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-200/30"
            >
              <div className="absolute -top-6 left-6 bg-yellow-400 text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                Diniyyah
              </div>
              <div className="mt-4 space-y-3">
                <p className={`${montserrat.className} text-slate-700 leading-relaxed`}>
                  <strong>Aqidah Manhaj Salaf berjenjang</strong> dengan tahfidz 6-9 Juz, Hadits Arba'in, dan Fiqh Ibadah
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className={`${montserrat.className} text-sm text-slate-600`}>
                    ✓ Mulazamah intensif (K10) ✓ Hifdzul Mutun (K11) ✓ HSI Akademik 239 Hlq (K12)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/30"
            >
              <div className="absolute -top-6 left-6 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                IT
              </div>
              <div className="mt-4 space-y-3">
                <p className={`${montserrat.className} text-slate-700 leading-relaxed`}>
                  <strong>Fullstack Web Engineering</strong> dari HTML dasar hingga Marketplace Islami Live
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className={`${montserrat.className} text-sm text-slate-600`}>
                    ✓ HTML, JS, Golang (K10) ✓ React, Redux, Dashboard (K11) ✓ Next.js, Production Ready (K12)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border-2 border-green-500 hover:border-green-600 transition-all duration-300 hover:shadow-xl hover:shadow-green-200/30"
            >
              <div className="absolute -top-6 left-6 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                Trilingual
              </div>
              <div className="mt-4 space-y-3">
                <p className={`${montserrat.className} text-slate-700 leading-relaxed`}>
                  <strong>Arab & Inggris sebagai alat kerja</strong> — kedua bahasa melebur menjadi kompetensi profesional
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className={`${montserrat.className} text-sm text-slate-600`}>
                    ✓ Arab Intensif (K10) ✓ Inggris 22 Minggu (K11) ✓ Trilingual Project (K12)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border-2 border-red-500 hover:border-red-600 transition-all duration-300 hover:shadow-xl hover:shadow-red-200/30"
            >
              <div className="absolute -top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                Karakter
              </div>
              <div className="mt-4 space-y-3">
                <p className={`${montserrat.className} text-slate-700 leading-relaxed`}>
                  <strong>Agile Mindset & Ketangguhan Mental</strong> — santri yang anti-fragile dan siap berkontribusi
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className={`${montserrat.className} text-sm text-slate-600`}>
                    ✓ Anti-Fragile (K10) ✓ Resilience (K11) ✓ Leadership (K12)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMAGE SHOWCASE SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600 mb-4`}>
              Kehidupan Santri HSIBS
            </h2>
            <p className={`${montserrat.className} text-lg text-slate-600`}>Momen-momen berkesan dalam setiap hari</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
            >
              <Image
                src="/assets/background_about/morning_spirit.jpg"
                alt="Kegiatan Pagi"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="text-white px-6 py-8 sm:p-8 w-full">
                  <h3 className={`${raleway.className} font-bold text-2xl mb-2`}>Kegiatan Pagi</h3>
                  <p className={`${montserrat.className} text-sm`}>Santri memulai hari dengan semangat penuh</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
            >
              <Image
                src="/assets/background_about/bakti_sosial.jpeg"
                alt="Bakti Sosial"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="text-white px-6 py-8 sm:p-8 w-full">
                  <h3 className={`${raleway.className} font-bold text-2xl mb-2`}>Bakti Sosial</h3>
                  <p className={`${montserrat.className} text-sm`}>Berbagi kebahagiaan dengan masyarakat sekitar</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
            >
              <Image
                src="/assets/background_about/ukhuwah_islamiyah.jpg"
                alt="Ukhuwah Islamiyah"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="text-white px-6 py-8 sm:p-8 w-full">
                  <h3 className={`${raleway.className} font-bold text-2xl mb-2`}>Ukhuwah Islamiyah</h3>
                  <p className={`${montserrat.className} text-sm`}>Kebersamaan yang erat antar santri HSIBS</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
            >
              <Image
                src="/assets/background_about/eksplorasi_alam.JPG"
                alt="Eksplorasi Alam"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="text-white px-6 py-8 sm:p-8 w-full">
                  <h3 className={`${raleway.className} font-bold text-2xl mb-2`}>Eksplorasi Alam</h3>
                  <p className={`${montserrat.className} text-sm`}>Tadabbur alam untuk mengagumi ciptaan Allah</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600 mb-4`}>
              Nilai-Nilai Kami
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <div className="flex-shrink-0 text-blue-500 mt-1">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`${raleway.className} font-bold text-lg text-slate-800 mb-2`}>
                  Generasi Unggul yang Memberi Manfaat Nyata
                </h3>
                <p className={`${montserrat.className} text-slate-600`}>
                  Santri kami tidak hanya pandai dalam akademik, tapi juga memiliki jiwa kepemimpinan dan tanggung jawab
                  sosial.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <div className="flex-shrink-0 text-indigo-500 mt-1">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`${raleway.className} font-bold text-lg text-slate-800 mb-2`}>
                  Adab dan Pembiasaan Hidup Tumbuh Bersama
                </h3>
                <p className={`${montserrat.className} text-slate-600`}>
                  Karakter yang baik adalah hasil dari pembiasaan harian dalam lingkungan yang mendukung.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <div className="flex-shrink-0 text-green-500 mt-1">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`${raleway.className} font-bold text-lg text-slate-800 mb-2`}>
                  Berdaya Saing Global dengan Akar Islam Kuat
                </h3>
                <p className={`${montserrat.className} text-slate-600`}>
                  Santri kami siap menghadapi tantangan global tanpa meninggalkan nilai-nilai Islam.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <div className="flex-shrink-0 text-orange-500 mt-1">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`${raleway.className} font-bold text-lg text-slate-800 mb-2`}>
                  Santri yang Terus Belajar, Mandiri, dan Berkontribusi
                </h3>
                <p className={`${montserrat.className} text-slate-600`}>
                  Kami membina santri yang memiliki jiwa pembelajaran seumur hidup dan siap memberikan kontribusi nyata.
                </p>
              </div>
            </motion.div>
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
            Bergabunglah dengan Generasi Unggul HSIBS
          </h2>
          <p className={`${montserrat.className} text-lg sm:text-xl mb-8 text-blue-100`}>
            Wujudkan potensi terbaik Anda dengan pendidikan holistik yang menggabungkan Islam, Akhlak, Bahasa, dan
            Teknologi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://psb.hsiboardingschool.id/auth/auth-user"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300"
            >
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/hsiboardingschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
            >
              Tonton Profil <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
