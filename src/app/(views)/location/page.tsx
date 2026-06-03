"use client";

import { Space_Grotesk, Montserrat, Raleway } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink, Navigation } from "lucide-react";
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

interface LocationData {
  id: number;
  name: string;
  type: "ikhwan" | "akhwat";
  city: string;
  province: string;
  address: string;
  mapCode: string;
  googleMapsLink: string;
  description: string;
  image: string;
  color: string;
  badgeColor: string;
  students: number;
  dorms: number;
  mushrif: number;
  headAsrama: string;
}

const locations: LocationData[] = [
  {
    id: 1,
    name: "HSI Boarding School Sukabumi",
    type: "ikhwan",
    city: "Sukabumi",
    province: "Jawa Barat",
    address: "2QJP+M6X, RT.03/RW.08, Cikembar, Kec. Cikembar, Kabupaten Sukabumi, Jawa Barat 43157",
    mapCode: "2QJP+M6X",
    googleMapsLink: "https://maps.app.goo.gl/rTqp7sD5zuHQmyKJ8",
    description: "Kampus utama HSI Boarding School yang berlokasi di kawasan Sukabumi, Jawa Barat. Menjadi pusat pendidikan bagi santri ikhwan dengan lingkungan belajar yang kondusif, fasilitas pendukung yang lengkap, serta pembinaan terarah untuk mengembangkan ilmu, keterampilan, karakter, dan nilai-nilai tauhid secara optimal.",
    image: "assets/location/sukabumi.jpg",
    color: "green",
    badgeColor: "bg-green-100 text-green-700",
    students: 60,
    dorms: 6,
    mushrif: 7,
    headAsrama: "Dega Muhammad Lazzuardy",
  },
  {
    id: 2,
    name: "HSI Boarding School Purworejo",
    type: "ikhwan",
    city: "Purworejo",
    province: "Jawa Tengah",
    address: "72WF+64Q, Krajan, Purworejo, Kec. Purworejo, Kabupaten Purworejo, Jawa Tengah 54118",
    mapCode: "72WF+64Q",
    googleMapsLink: "https://maps.app.goo.gl/aJNLHrHHsnefLFfk6",
    description: "Cabang HSI Boarding School yang berlokasi di Purworejo, Jawa Tengah. Menyediakan pendidikan bagi santri ikhwan dengan lingkungan belajar yang nyaman, fasilitas pendukung yang memadai, serta pembinaan terarah untuk mengembangkan ilmu, keterampilan, karakter, dan nilai-nilai tauhid sebagai bekal generasi muslim unggul.",
    image: "assets/location/purworejo.jpg",
    color: "blue",
    badgeColor: "bg-blue-100 text-blue-700",
    students: 85,
    dorms: 9,
    mushrif: 6,
    headAsrama: "Azis Soffan",
  },
  {
    id: 3,
    name: "HSI Boarding School Bekasi",
    type: "akhwat",
    city: "Bekasi",
    province: "Jawa Barat",
    address: "Jl. Kp. Tenggilis, RT.004/RW.012, Mustikajaya, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17158",
    mapCode: "Mustikajaya, Bekasi",
    googleMapsLink: "https://maps.app.goo.gl/1qtVUquDzGT5HPrt5",
    description: "Kampus HSI Boarding School yang berlokasi di Bekasi, Jawa Barat, khusus bagi santri akhwat. Menghadirkan lingkungan belajar yang aman dan nyaman, fasilitas pendukung yang lengkap, serta pembinaan terarah untuk mengembangkan ilmu, keterampilan, karakter, dan nilai-nilai tauhid sebagai bekal generasi muslimah yang unggul.",
    image: "assets/location/bekasi.jpg",
    color: "pink",
    badgeColor: "bg-pink-100 text-pink-700",
    students: 37,
    dorms: 3,
    mushrif: 3,
    headAsrama: "Aisyah al Badriyah",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function LocationPage() {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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
            <p>{`< Lokasi Kami />`}</p>
          </div>
          <h1
            className={`${raleway.className} font-extrabold text-4xl sm:text-5xl md:text-6xl text-blue-600 mb-6 leading-tight`}
          >
            Jangkauan HSIBS di Indonesia
          </h1>
          <p className={`${montserrat.className} text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto`}>
            Tiga cabang HSI Boarding School tersebar di lokasi strategis untuk memberikan akses pendidikan berkualitas bagi generasi muslim Indonesia. Kami hadir di berbagai kota strategis dengan komitmen yang sama: membentuk generasi unggul yang bertauhid, berakhlak Qurani, dan berdaya saing global.
          </p>
        </motion.div>
      </section>

      {/* MAP SECTION - INTRO */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      </section>

      {/* LOCATIONS GRID */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/30"
              >
                {/* Image Container */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-100">
                  {location.image ? (
                    <Image
                      src={`/${location.image}`}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 flex items-center justify-center">
                      <div className="text-center text-white px-6">
                        <MapPin className="w-20 h-20 mx-auto mb-4 opacity-80" />
                        <p className={`${montserrat.className} text-sm font-semibold opacity-90`}>
                          {location.city}, {location.province}
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${location.badgeColor}`}>
                      {location.type === "ikhwan" ? "🔷 Ikhwan" : "💗 Akhwat"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col">
                  {/* Title */}
                  <h3 className={`${raleway.className} font-bold text-xl sm:text-2xl text-slate-800 mb-2`}>
                    {location.name}
                  </h3>

                  {/* Location Info */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex gap-3 items-start">
                      <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className={`${montserrat.className} text-xs font-semibold text-slate-500 uppercase tracking-wide`}>
                          Alamat
                        </p>
                        <p className={`${montserrat.className} text-sm text-slate-700 leading-relaxed`}>
                          {location.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Navigation className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className={`${montserrat.className} text-xs font-semibold text-slate-500 uppercase tracking-wide`}>
                          Kode Peta
                        </p>
                        <p className={`${montserrat.className} text-sm text-slate-700 font-mono`}>{location.mapCode}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`${montserrat.className} text-slate-600 text-sm sm:text-base leading-relaxed mb-6`}>
                    {location.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className={`${raleway.className} text-xl font-bold text-blue-600`}>{location.students}</p>
                      <p className={`${montserrat.className} text-xs text-slate-600 mt-1`}>Santri Aktif</p>
                    </div>
                    <div className="text-center p-3 bg-indigo-50 rounded-lg">
                      <p className={`${raleway.className} text-xl font-bold text-indigo-600`}>{location.dorms}</p>
                      <p className={`${montserrat.className} text-xs text-slate-600 mt-1`}>Total Asrama</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className={`${raleway.className} text-xl font-bold text-purple-600`}>{location.mushrif}</p>
                      <p className={`${montserrat.className} text-xs text-slate-600 mt-1`}>Total Musyrif</p>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="mb-6">
                    <p className={`${montserrat.className} text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3`}>
                      Ketua Asrama
                    </p>
                    <p className={`${montserrat.className} text-sm font-semibold text-slate-700`}>
                      {location.headAsrama}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={location.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700`}
                  >
                    <Navigation className="w-5 h-5" />
                    <span>Buka di Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600 mb-4`}>
              Keunggulan Lokasi HSIBS
            </h2>
            <p className={`${montserrat.className} text-lg text-slate-600 max-w-3xl mx-auto`}>
              Setiap cabang dirancang dengan cermat untuk mendukung pembelajaran holistik
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🏫",
                title: "Lokasi Strategis",
                description:
                  "Tersebar di kota-kota besar dengan aksesibilitas mudah dari berbagai daerah",
              },
              {
                icon: "🌳",
                title: "Lingkungan Kondusif",
                description:
                  "Area yang asri dan nyaman untuk mendukung proses pembelajaran optimal",
              },
              {
                icon: "🚀",
                title: "Infrastruktur Modern",
                description:
                  "Fasilitas lengkap untuk menunjang pembelajaran akademik, spiritual, dan karakter",
              },
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
              >
                <p className="text-5xl mb-4">{highlight.icon}</p>
                <h3 className={`${raleway.className} font-bold text-xl text-slate-800 mb-3`}>{highlight.title}</h3>
                <p className={`${montserrat.className} text-slate-600 leading-relaxed`}>{highlight.description}</p>
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
            Kunjungi Kami
          </h2>
          <p className={`${montserrat.className} text-lg sm:text-xl mb-8 text-blue-100`}>
            Dapatkan informasi lebih lanjut tentang program dan pendaftaran santri baru. Hubungi kami atau kunjungi
            langsung kantor cabang terdekat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="https://api.whatsapp.com/send/?phone=6285126184921&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Hubungi Kami
            </Link>
            <Link
              href="https://psb.hsiboardingschool.id/auth/auth-user"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
            >
              Pendaftaran Santri Baru
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl text-blue-600 mb-4`}>
              Statistik HSIBS
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { label: "Cabang", value: "3" },
              { label: "Total Santri", value: "470+" },
              { label: "Tahun Berdiri", value: "2020+" },
              { label: "Fasilitas", value: "18+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className={`${montserrat.className} text-slate-600 text-sm sm:text-base`}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
