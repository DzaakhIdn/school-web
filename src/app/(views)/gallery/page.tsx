"use client";

import { spaceGrotesk, montserrat, raleway } from "@/lib/fonts";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useLayoutEffect } from "react";
import Link from "next/link";

import AuroraBackground from "@/components/ui/aurora-background";
import YoutubeVideo from "@/components/ui/youtube-video";
import BentoGallery from "@/(sections)/(gallery_sections)/Bento_Sect/bento-sect";




type LocationFilter = "all" | "ikhwan" | "akhwat";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  location: "ikhwan" | "akhwat";
  category: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Sosialisasi Pemadam Kebakaran",
    description: "Edukasi keselamatan dari profesional pemadam kebakaran",
    thumbnail: "page_gallery/sosialisasi_pemadam_kebakaran.jpg",
    link: "https://drive.google.com/drive/folders/1Wp7p4XuQJSrxePRCw39ANl_KF4Tw89KO?usp=drive_link",
    location: "akhwat",
    category: "Edukasi",
  },
  {
    id: 2,
    title: "The Real Market",
    description: "Pasar virtual dan pembelajaran entrepreneurship",
    thumbnail: "page_gallery/the_real_market.jpg",
    link: "https://photos.app.goo.gl/HykUwfgW1wJGe8b7A",
    location: "ikhwan",
    category: "Entrepreneurship",
  },
  {
    id: 3,
    title: "Campus Tour STAI Aisyah & UI",
    description: "Kunjungan kampus untuk kelas 12 mengenal pilihan universitas",
    thumbnail: "page_gallery/campus_tour.jpg",
    link: "https://drive.google.com/drive/folders/1CfAAu0S1GFovPtMuuSQS2bGJMKYhix8p?usp=drive_link",
    location: "akhwat",
    category: "Pendidikan",
  },
  {
    id: 4,
    title: "Morning Rise",
    description: "Kegiatan pagi santri dengan semangat penuh",
    thumbnail: "page_gallery/morning_rise.jpg",
    link: "https://drive.google.com/drive/folders/1wQtJzUKeTMVEG10tcgmPVtL8h7cQ629u?usp=drive_link",
    location: "akhwat",
    category: "Daily Activity",
  },
  {
    id: 5,
    title: "Ramadhan Berkah Berbagi Takjil",
    description: "Kebersamaan dalam berbagi kebaikan di bulan suci",
    thumbnail: "page_gallery/ramadhan_berkah.jpeg",
    link: "https://drive.google.com/drive/folders/1WsAvlmsPryeHGNaWPCLqRkwJbKAIjhe7",
    location: "akhwat",
    category: "Ramadhan",
  },
  {
    id: 6,
    title: "HSIBS Festival MHQ",
    description: "Festival Musabaqah Hifdzil Qur'an tingkat sekolah",
    thumbnail: "page_gallery/hsibs_festival_mhq.jpg",
    link: "https://drive.google.com/drive/folders/1xyXi1OPTNk04-Iqqc2vbfJ2kQ7LsiBxX?usp=drive_link",
    location: "akhwat",
    category: "Festival",
  },
  {
    id: 7,
    title: "HSIBS Festival Talkshow Remaja",
    description: "Forum diskusi dan sharing pengalaman remaja HSIBS",
    thumbnail: "page_gallery/hsibs_festival_talkshow.jpg",
    link: "https://drive.google.com/drive/folders/1MqP24Qo64X4cgEQCFv5KB_pNLCV50iV3?usp=drive_link",
    location: "akhwat",
    category: "Festival",
  },
  {
    id: 8,
    title: "HSIBS Festival Kajian Anak & Buka Bersama",
    description: "Kajian ilmu dan kebersamaan di ramadhan",
    thumbnail: "page_gallery/hsibs_festival_kajian_anak.jpg",
    link: "https://drive.google.com/drive/folders/1vUdJbGerjr7oz5h7jVKxyngRcLOoZB3y?usp=drive_link",
    location: "akhwat",
    category: "Festival",
  },
  {
    id: 9,
    title: "Dauroh Qur'an & Mutun Ramadhan",
    description: "Program intensif pembelajaran Al-Qur'an dan hadits",
    thumbnail: "page_gallery/dauroh_quran_dan_mutun.jpg",
    link: "https://drive.google.com/drive/folders/10eKAoOeuuVbxTWhcyBeVD5lZqsefiNvX?usp=drive_link",
    location: "akhwat",
    category: "Diniyyah",
  },
  {
    id: 10,
    title: "Ramadhan Connect",
    description: "Acara koneksi dan kebersamaan di bulan Ramadhan",
    thumbnail: "page_gallery/ramadhan_conext.jpg",
    link: "https://photos.app.goo.gl/WdjaxgtbknUAFjMr5",
    location: "ikhwan",
    category: "Ramadhan",
  },
  {
    id: 11,
    title: "Project Event Organizer Kelas 11",
    description: "Proyek pembelajaran manajemen acara oleh santri",
    thumbnail: "page_gallery/project_event.jpg",
    link: "https://drive.google.com/drive/folders/1qBFrm4YudGIEq75Aeutv5MJLMTV_2dAD?usp=drive_link",
    location: "akhwat",
    category: "Project",
  },
  {
    id: 12,
    title: "Tadabur Alam",
    description: "Pembelajaran dari alam yang indah ciptaan Allah",
    thumbnail: "page_gallery/tadabur_alam.JPG",
    link: "https://photos.app.goo.gl/iCfFQHmCpsoDhtQZ9",
    location: "ikhwan",
    category: "Outdoor",
  },
  {
    id: 13,
    title: "Farewell Party with Global English",
    description: "Perayaan perpisahan dengan suasana internasional",
    thumbnail: "page_gallery/farewell_party.jpg",
    link: "https://photos.app.goo.gl/NHYXEdpJTZAcQdxA6",
    location: "ikhwan",
    category: "Event",
  },
  {
    id: 14,
    title: "Kunjungan Panti Asuhan",
    description: "Kegiatan bakti sosial berbagi kasih sayang",
    thumbnail: "page_gallery/kunjungan_panti.jpg",
    link: "https://photos.google.com/share/AF1QipOd9o1z3q_YFzFGwkpxZzqx4fzPY7FkMVsrIOhtei3NIFQFE80tSCC3pk-dIcKtyA?key=S05vZkRHb0Zxekh2TFU1Z3ZidjRKdEVBTXF5ZzV3",
    location: "ikhwan",
    category: "Social",
  },
  {
    id: 15,
    title: "HSIBS Tree Climbing",
    description: "Kegiatan outdoor dan petualangan alam yang menantang",
    thumbnail: "page_gallery/tree_climbing.jpg",
    link: "https://photos.app.goo.gl/mjNtBSXN92BXfPhX8",
    location: "ikhwan",
    category: "Outdoor",
  },
  {
    id: 16,
    title: "HSIBS Goes to Masjid",
    description: "Kunjungan masjid dan pembelajaran spiritual",
    thumbnail: "page_gallery/hsi_goes_to_masjid.jpg",
    link: "https://photos.google.com/share/AF1QipMOTORk1aP9zjnpdKeAjLrP3PXTOPtT1dmO5Net7EIK9TbiVO9O--F9oFUV6zORFg?key=M3NDcVNleHJKYlJDR2ZMN2NsQVdYSnBSX0dvX3Jn",
    location: "ikhwan",
    category: "Spiritual",
  },
  {
    id: 17,
    title: "Pelantikan OSIS Gen 2",
    description: "Pengukuhan organisasi siswa generasi kedua",
    thumbnail: "page_gallery/pelantikan_osis_gen2.jpg",
    link: "https://photos.google.com/share/AF1QipOq2EDtIlt_bjP9VvmcDjahB9aX3T1M9cqR-Zi8ZG8Sm3TF84bs6vEMP_oikQQYjQ?key=d19obFlCdVdKTjJOZDB1UXdFakU4dUVDSzdGLWl3",
    location: "ikhwan",
    category: "Organization",
  },
  {
    id: 18,
    title: "Lomba 17 Agustus",
    description: "Perayaan kemerdekaan dengan semangat sportivitas",
    thumbnail: "page_gallery/lomba17_agustus.jpeg",
    link: "https://drive.google.com/drive/folders/1YZrbkGSHUIZWvuS0lC2LnnRGBHfkbHxC",
    location: "akhwat",
    category: "Competition",
  },
  {
    id: 19,
    title: "Nusantara Spirit Day",
    description: "Perayaan semangat nasionalisme Indonesia",
    thumbnail: "page_gallery/nusantara_spirit_day.JPG",
    link: "https://photos.app.goo.gl/vS1qTWQVPB56SFJr8",
    location: "ikhwan",
    category: "Event",
  },
  {
    id: 20,
    title: "Ekskul dan Workshop",
    description: "Kegiatan ekstrakurikuler dan workshop pembelajaran",
    thumbnail: "page_gallery/eskul_dan_workshop.jpeg",
    link: "https://drive.google.com/drive/folders/1b4NeOO33PZE571RVlXEVmduRVr92EGCR?usp=drive_link",
    location: "akhwat",
    category: "Workshop",
  },
  {
    id: 21,
    title: "MPLS",
    description: "Program penerimaan dan adaptasi santri baru",
    thumbnail: "page_gallery/MPLS.jpg",
    link: "https://drive.google.com/drive/folders/1Af7NLPsPiVaF6clMTqfTftJQ3sjo4hnl",
    location: "akhwat",
    category: "Orientation",
  },
  {
    id: 22,
    title: "Serah Terima Santri Baru",
    description: "Ceremony penyerahan santri baru ke sekolah",
    thumbnail: "page_gallery/serah_terima_santri.jpg",
    link: "https://photos.app.goo.gl/wZNYFJ2nmkWzyAbA6",
    location: "ikhwan",
    category: "Orientation",
  },
];

export default function GalleryPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [filter, setFilter] = useState<LocationFilter>("all");

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredGallery =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.location === filter);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20">
        {/* efek aurora di belakang konten */}
        <AuroraBackground />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${spaceGrotesk.className} inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-[13px] font-medium text-blue-600`}
          >
            Galeri
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`${spaceGrotesk.className} mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl`}
          >
            Jelajahi Kehidupan Kampus Kami
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className={`${montserrat.className} mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base`}
          >
            Sekilas tentang kelas, kegiatan, acara, dan momen belajar sehari-hari
            di HSI Boarding School.
          </motion.p>
        </div>

        {/* Kartu video — embed YouTube (autoplay muted) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-6xl sm:mt-14"
        >
          <YoutubeVideo
            videoId="3tWGITKsc1M"
            title="Tur_virtual kampus HSI Boarding School"
            poster="/assets/gallery/img-2.jpg"
          />
        </motion.div>
      </section>

      {/* BENTO GALLERY SECTION */}
      <BentoGallery />

      {/* FILTER SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("all")}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                filter === "all"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500"
              }`}
            >
              Semua Kegiatan
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("ikhwan")}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                filter === "ikhwan"
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/50"
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-green-500"
              }`}
            >
              Ikhwan
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("akhwat")}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                filter === "akhwat"
                  ? "bg-pink-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-pink-500"
              }`}
            >
              Akhwat
            </motion.button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`${montserrat.className} text-center text-slate-600 text-sm sm:text-base mt-6`}
          >
            Menampilkan {filteredGallery.length} kegiatan
          </motion.p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/30"
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-100">
                    <Image
                      src={`/assets/thumbnail/${item.thumbnail}`}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.backgroundColor = "#e5e7eb";
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 ${
                        item.location === "ikhwan"
                          ? "bg-green-100 text-green-700"
                          : "bg-pink-100 text-pink-700"
                      }`}
                    >
                      {item.location === "ikhwan" ? "Ikhwan" : "Akhwat"}
                    </motion.div>

                    {/* Title */}
                    <h3 className={`${raleway.className} font-bold text-lg sm:text-xl text-slate-800 mb-2 line-clamp-2`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`${montserrat.className} text-slate-600 text-sm sm:text-base mb-4 line-clamp-2`}>
                      {item.description}
                    </p>

                    {/* Category Tag */}
                    <div className="flex items-center justify-between">
                      <span className={`${montserrat.className} text-xs font-medium text-slate-500`}>
                        {item.category}
                      </span>

                      {/* Link Button */}
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110"
                        title="Buka galeri lengkap"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredGallery.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center py-20"
            >
              <p className={`${montserrat.className} text-lg sm:text-xl text-slate-500`}>
                Tidak ada kegiatan ditemukan untuk filter ini
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${raleway.className} font-extrabold text-3xl sm:text-4xl text-blue-600 mb-4`}>
              Statistik Galeri
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
              { label: "Total Kegiatan", value: galleryData.length.toString() },
              { label: "Ikhwan", value: galleryData.filter((i) => i.location === "ikhwan").length.toString() },
              { label: "Akhwat", value: galleryData.filter((i) => i.location === "akhwat").length.toString() },
              { label: "Kategori", value: new Set(galleryData.map((i) => i.category)).size.toString() },
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
