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
    title: "Membina Generasi Pemimpin yang Beradab, Berilmu, dan Berwawasan Global",
    description:
      "Membina generasi pemimpin yang beradab, berilmu, dan berwawasan global",
    img_title: "Belajar Ilmu Al Quran & Hadits",
    img: "/assets/thumbnail/img-thumb-1.jpg",
  },
  misi: {
    title: "Belajar Ilmu Al Quran, Mengamalkan Sunnah, dan Berprestasi",
    description:
      "Membina generasi pemimpin yang beradab, berilmu, dan berwawasan global",
    img_title: "Belajar Ilmu Al Quran & Hadits",
    img: "/assets/thumbnail/img-thumb-2.jpg",
  },
};

export default function VisiSect(): JSX.Element {
  const [activeTab, setTabActive] = useState<TabKey>("visi");
  return (
    <>
      <div className="min-h-screen md:mt-32 lg:mt-0 flex items-center justify-center flex-col transition-all duration-300">
        <div className="my-10 lg:my-0 lg:mb-10 flex flex-col justify-center px-6 items-center gap-4 md:gap-3 max-w-6xl w-full mx-auto">
          <div
            className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-3xl`}
          >
            <p>{`< Visi Singkat Sekolah />`}</p>
          </div>
          <div
            className={`${montserrat.className} text-center font-extrabold tracking-tight text-2xl text-blue-500 md:text-3xl`}
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
          <div className="container-content flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-12 mt-10">
            <div className="left-side-tab flex flex-col gap-6 lg:flex-1">
              <div className="tab-button flex gap-2">
                {(["visi", "misi"] as TabKey[]).map((tab) => (
                  <Button
                    key={tab}
                    onClick={() => setTabActive(tab)}
                    className={`text-slate-700 text-base ${
                      montserrat.className
                    } font-semibold px-20 py-5 hover:cursor-pointer hover:bg-blue-500 hover:text-white ${
                      activeTab === tab
                        ? "bg-blue-500 text-white border border-blue-500"
                        : "bg-transparent border border-slate-700"
                    }`}
                  >
                    {tab === "visi" ? "Visi" : "Misi"}
                  </Button>
                ))}
              </div>
              <div className="tab-title space-y-6">
                <p
                  className={`${raleway.className} font-extrabold text-2xl text-slate-800 md:text-3xl lg:text-4xl`}
                >
                  {content[activeTab].title}
                </p>
                <p
                  className={`${montserrat.className} text-slate-700 text-sm md:text-base lg:text-lg`}
                >
                  {content[activeTab].description}
                </p>
              </div>
              <div className="button-learn hidden lg:block">
                <Button variant={"outline"} className="py-6">
                  <span
                    className={`${poppins.className} text-base hover:cursor-pointer hover:text-blue-500`}
                  >
                    Selengkapnya
                  </span>
                  <ArrowRight className="!h-4 !w-4" />
                </Button>
              </div>
            </div>
            <div className="right-side-tab flex justify-center lg:justify-end lg:flex-1">
              <div className="relative w-full lg:max-w-lg xl:max-w-xl h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] rounded-lg overflow-hidden group">
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
                  className={`${raleway.className} absolute bottom-6 left-6 right-6 text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight`}
                >
                  {content[activeTab].img_title}
                </p>
              </div>
            </div>
            <div className="button-learn lg:hidden w-full group">
              <Button variant={"outline"} className="py-6 w-full">
                <span
                  className={`${poppins.className} text-base group-hover:cursor-pointer group-hover:text-blue-500`}
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
