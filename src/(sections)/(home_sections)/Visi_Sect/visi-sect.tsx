"use client";
import { Space_Grotesk, Montserrat, Poppins, Raleway } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

interface TabContent {
  title: string;
  description: string;
  img_title: string;
  img: string;
}

const content: Record<TabKey, TabContent> = {
  visi: {
    title:
      "Membina Generasi Pemimpin yang Beradab, Berilmu, dan Berwawasan Global",
    description:
      "Membangun generasi penerus bangsa yang beradab, berilmu, dan berwawasan global, siap menjawab tantangan zaman.",
    img_title: "Pemimpin Qur’ani untuk Peradaban Global",
    img: "/assets/thumbnail/img-thumb-1.jpg",
  },
  misi: {
    title: "Belajar Ilmu Al Quran, Mengamalkan Sunnah, dan Berprestasi",
    description:
      "Menjadikan Al-Qur’an sebagai pedoman, Sunnah sebagai teladan, dan prestasi sebagai wujud pengabdian.",
    img_title: "Belajar Ilmu Al Quran & Hadits",
    img: "/assets/thumbnail/img-thumb-2.jpg",
  },
};

export default function VisiSect(): JSX.Element {
  const [activeTab, setTabActive] = useState<TabKey>("visi");

  return (
    <>
      <div className="min-h-screen md:mt-20 lg:mt-0 flex items-center justify-center flex-col transition-all duration-300 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="my-8 sm:my-10 lg:my-0 lg:mb-10 flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 max-w-6xl w-full mx-auto">
          {/* Section Title */}
          <div
            className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-3xl`}
          >
            <p>{`< Visi Singkat Sekolah />`}</p>
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
              Kami Tidak Mencetak Lulusan Biasa, Tapi Pemimpin yang Beradab
            </ScrollReveal>
          </div>

          {/* Content */}
          <div className="container-content flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10 w-full">
            {/* LEFT SIDE */}
            <div className="right-side-tab flex justify-center lg:justify-end lg:flex-1 w-full">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-lg overflow-hidden group">
                <Image
                  src={content[activeTab].img}
                  alt="gambar"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0"></div>
                <p
                  className={`${raleway.className} absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight`}
                >
                  {content[activeTab].img_title}
                </p>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="left-side-tab flex flex-col gap-4 sm:gap-6 lg:flex-1 w-full">
              {/* TAB BUTTON */}
              <div className="tab-button flex gap-2 justify-center lg:justify-start flex-wrap">
                {(["visi", "misi"] as TabKey[]).map((tab) => (
                  <Button
                    key={tab}
                    onClick={() => setTabActive(tab)}
                    className={`text-blue-500 text-xs sm:text-sm md:text-base ${
                      montserrat.className
                    } font-semibold px-6 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-3 md:py-4 hover:cursor-pointer active:bg-blue-500 active:text-white duration-200 ease-in-out ${
                      activeTab === tab
                        ? "bg-blue-500 text-white border border-blue-500"
                        : "bg-transparent border border-blue-500"
                    }`}
                  >
                    {tab === "visi" ? "Visi" : "Misi"}
                  </Button>
                ))}
              </div>

              {/* TAB CONTENT */}
              <div className="tab-title space-y-3 sm:space-y-4 md:space-y-6 text-center lg:text-left">
                <p
                  className={`${raleway.className} font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800`}
                >
                  {content[activeTab].title}
                </p>
                <p
                  className={`${montserrat.className} text-slate-700 text-xs sm:text-sm md:text-base lg:text-lg`}
                >
                  {content[activeTab].description}
                </p>
              </div>

              {/* DESKTOP ONLY BUTTON */}
              <div className="button-learn hidden lg:block">
                <Button variant={"outline"} className="py-3 md:py-4">
                  <span
                    className={`${poppins.className} text-sm md:text-base hover:cursor-pointer hover:text-blue-500`}
                  >
                    Selengkapnya
                  </span>
                  <ArrowRight className="!h-4 !w-4" />
                </Button>
              </div>
            </div>

            {/* MOBILE ONLY BUTTON */}
            <div className="button-learn lg:hidden w-full group">
              <Button variant={"outline"} className="py-3 w-full">
                <span
                  className={`${poppins.className} text-sm group-hover:cursor-pointer group-hover:text-blue-500`}
                >
                  Selengkapnya
                </span>
                <ArrowRight className="!h-4 !w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
