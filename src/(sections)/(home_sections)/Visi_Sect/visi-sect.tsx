"use client";
import { Space_Grotesk, Montserrat, Poppins, Raleway } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";
import Image from "next/image";
import { ArrowRight, CheckCircle2, BookOpen, Heart, Globe, Zap, Users } from "lucide-react";
import React, { JSX, useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "600", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type TabKey = "visi" | "misi";

interface VisiContent {
  title: string;
  pillars: Array<{
    name: string;
    description: string;
  }>;
  img_title: string;
  img: string;
}

interface MisiContent {
  title: string;
  missions: Array<{
    icon: "book" | "globe" | "zap" | "heart" | "users";
    name: string;
    description: string;
  }>;
  img_title: string;
  img: string;
}

const visiContent: VisiContent = {
  title: "Terwujudnya Generasi Bertauhid, Berakhlaq Qurani, serta Berdaya Saing Global",
  pillars: [
    {
      name: "Bertauhid",
      description:
        "Memiliki Aqidah lurus bermanhaj Salaf, hafalan mutqin 6-9 Juz, dan faqih dalam ibadah — sehingga tauhid bukan sekadar ilmu tapi menjadi pondasi seluruh kehidupan.",
    },
    {
      name: "Berakhlaq Qurani",
      description:
        "Menjadikan Al-Qur'an sebagai pedoman akhlaq harian — dibangun melalui internalisasi 50 Hadits Arba'in, Bahasa Arab sebagai alat memahami wahyu, pembentukan karakter terprogram, dan pembiasaan adab Islami dalam kehidupan asrama.",
    },
    {
      name: "Berdaya Saing Global",
      description:
        "Mampu menembus batas internasional melalui Bahasa Inggris aktif untuk industri serta kemampuan Fullstack Web Engineering dengan produk nyata siap produksi.",
    },
  ],
  img_title: "Generasi Unggul untuk Masa Depan",
  img: "/assets/thumbnail/img-thumb-1.jpg",
};

const misiContent: MisiContent = {
  title: "Misi Kami",
  missions: [
    {
      icon: "book",
      name: "Pendidikan Al-Qur'an & Ilmu Syar'i",
      description:
        "Menyelenggarakan pendidikan Al-Qur'an, Ilmu Syar'i, dan hafalan secara intensif dan bermanhaj lurus sebagai fondasi utama santri.",
    },
    {
      icon: "globe",
      name: "Kecakapan Trilingual",
      description:
        "Membekali kecakapan Trilingual (Arab, Inggris, dan Indonesia) secara aktif — Arab untuk literatur agama, Inggris untuk industri global, Indonesia sebagai bahasa ibu yang kuat.",
    },
    {
      icon: "zap",
      name: "Pendidikan Teknologi",
      description:
        "Menyelenggarakan pendidikan Teknologi Informasi (Fullstack Web Engineering) bertaraf industri agar santri mampu menciptakan produk/solusi digital nyata.",
    },
    {
      icon: "heart",
      name: "Akhlak Mulia & Kecerdasan Spiritual",
      description:
        "Menanamkan akhlak mulia dan kecerdasan spiritual melalui pembiasaan adab harian serta internalisasi Hadits Nabawi.",
    },
    {
      icon: "users",
      name: "Kepemimpinan & Ketangguhan Mental",
      description:
        "Membangun jiwa kepemimpinan, ketangguhan mental (Anti-Fragile), dan karakter pembelajar mandiri agar siap berkontribusi di masyarakat.",
    },
  ],
  img_title: "Pemimpin Qur'ani untuk Peradaban Global",
  img: "/assets/thumbnail/img-thumb-2.jpg",
};

export default function VisiSect(): JSX.Element {
  const [activeTab, setTabActive] = useState<TabKey>("visi");

  const renderMissionIcon = (iconType: "book" | "globe" | "zap" | "heart" | "users") => {
    const iconProps = "w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors";
    
    switch (iconType) {
      case "book":
        return <BookOpen className={iconProps} />;
      case "globe":
        return <Globe className={iconProps} />;
      case "zap":
        return <Zap className={iconProps} />;
      case "heart":
        return <Heart className={iconProps} />;
      case "users":
        return <Users className={iconProps} />;
      default:
        return <BookOpen className={iconProps} />;
    }
  };

  return (
    <>
      <div className="min-h-screen md:mt-20 lg:mt-0 flex items-center justify-center flex-col transition-all duration-300 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="my-8 sm:my-10 lg:my-0 lg:mb-10 flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 max-w-7xl w-full mx-auto">
          {/* Section Title */}
          <div
            className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-3xl`}
          >
            <p>{`< Visi & Misi Sekolah />`}</p>
          </div>

          <div
            className={`${montserrat.className} text-center font-extrabold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500`}
          >
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              Fondasi Pendidikan HSI Boarding School
            </ScrollReveal>
          </div>

          {/* TAB BUTTON */}
          <div className="tab-button flex gap-2 justify-center flex-wrap mt-8 sm:mt-10">
            {(["visi", "misi"] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setTabActive(tab)}
                className={`text-blue-500 text-xs sm:text-sm md:text-base ${
                  montserrat.className
                } font-semibold px-6 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-3 md:py-4 hover:cursor-pointer active:bg-blue-500 active:text-white duration-200 ease-in-out border border-blue-500 rounded-lg ${
                  activeTab === tab
                    ? "bg-blue-500 text-white border border-blue-500"
                    : "bg-transparent border border-blue-500"
                }`}
              >
                {tab === "visi" ? "Visi" : "Misi"}
              </button>
            ))}
          </div>

          {/* VISI CONTENT */}
          {activeTab === "visi" && (
            <div className="w-full mt-12 sm:mt-16 space-y-8 sm:space-y-12">
              {/* Visi Title */}
              <div className="text-center space-y-4">
                <h2
                  className={`${raleway.className} font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 leading-tight`}
                >
                  {visiContent.title}
                </h2>
              </div>

              {/* Visi Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {visiContent.pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50"
                  >
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-300/20 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-300" />

                    {/* Pillar number */}
                    <div className="absolute top-4 right-4 text-4xl font-bold text-blue-200 group-hover:text-blue-300 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      <h3
                        className={`${raleway.className} font-bold text-xl sm:text-2xl text-blue-600 group-hover:text-blue-700 transition-colors`}
                      >
                        {pillar.name}
                      </h3>
                      <p
                        className={`${montserrat.className} text-slate-700 text-sm sm:text-base leading-relaxed`}
                      >
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-0 group-hover:w-full transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MISI CONTENT */}
          {activeTab === "misi" && (
            <div className="w-full mt-12 sm:mt-16 space-y-8 sm:space-y-12">
              {/* Misi Title */}
              <div className="text-center space-y-4">
                <h2
                  className={`${raleway.className} font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 leading-tight`}
                >
                  {misiContent.title}
                </h2>
                <p
                  className={`${montserrat.className} text-slate-600 text-base sm:text-lg max-w-2xl mx-auto`}
                >
                  Lima pilar misi kami untuk membentuk generasi unggul
                </p>
              </div>

              {/* Misi Items */}
              <div className="space-y-4 sm:space-y-6">
                {misiContent.missions.map((mission, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50"
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-xl group-hover:w-2 transition-all duration-300" />

                    {/* Content */}
                    <div className="flex gap-4 sm:gap-6 pl-2 sm:pl-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {renderMissionIcon(mission.icon)}
                      </div>

                      {/* Text */}
                      <div className="flex-1 space-y-2">
                        <h3
                          className={`${raleway.className} font-bold text-lg sm:text-xl text-slate-800 group-hover:text-blue-600 transition-colors`}
                        >
                          {mission.name}
                        </h3>
                        <p
                          className={`${montserrat.className} text-slate-600 text-sm sm:text-base leading-relaxed`}
                        >
                          {mission.description}
                        </p>
                      </div>

                      {/* Check icon */}
                      <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BUTTON */}
          <div className="button-learn mt-12 sm:mt-16 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 md:py-4 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:border-blue-600">
              <span className={`${poppins.className} text-sm md:text-base`}>
                Pelajari Lebih Lanjut
              </span>
              <ArrowRight className="!h-4 !w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
