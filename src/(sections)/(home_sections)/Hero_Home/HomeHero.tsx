"use client";
import { CirclePlay } from "lucide-react";
import { Montserrat, Space_Grotesk } from "next/font/google";
import BlurText from "@/animate/BlurText";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const imagesLeft = [
  "/assets/gallery/img-1.jpg",
  "/assets/gallery/img-2.jpg",
  "/assets/gallery/img-3.jpg",
  "/assets/gallery/img-4.jpg",
];
const imagesRight = [
  "/assets/gallery/img-5.jpg",
  "/assets/gallery/img-6.jpg",
  "/assets/gallery/img-7.jpg",
  "/assets/gallery/img-8.jpg",
];

const VerticalLoop = ({
  images,
  direction = "up",
}: {
  images: string[];
  direction?: "up" | "down";
}) => {
  const itemHeight = 320 + 24;
  const totalHeight = itemHeight * images.length;

  return (
    <div
      className="
        relative 
        w-[280px] 
        h-[720px] 
        overflow-hidden 
        sm:w-[220px] 
        sm:h-[560px] 
        xs:w-[180px] 
        xs:h-[460px]
      "
    >
      <motion.div
        className="flex flex-col gap-6 sm:gap-5 xs:gap-4"
        animate={{
          y: direction === "up" ? [0, -totalHeight] : [-totalHeight, 0],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="
              relative 
              w-[160px] 
              h-[200px] 
              rounded-xl 
              overflow-hidden 
              shadow-lg
              sm:w-[220px] 
              sm:h-[260px]
              xs:w-[180px] 
              xs:h-[210px]
            "
          >
            <Image src={src} alt={`img-${idx}`} fill className="object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const HeroHome = () => {
  return (
    <section className="relative bg-white mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 py-20">
          {/* LEFT SIDE - Text */}
          <div className="text-left max-w-2xl mx-auto lg:mx-0">
            <BlurText
              text={`Sekolah Islam & Teknologi untuk Generasi Rabbani`}
              delay={150}
              animateBy="words"
              direction="top"
              className={`
                mt-6 
                font-extrabold 
                !leading-[1.2] 
                tracking-tight 
                text-blue-500 
                ${spaceGrotesk.className}
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              `}
            />

            <p
              className={`${montserrat.className} mt-6 text-base sm:text-lg md:text-xl text-slate-700 max-w-lg`}
            >
              Kombinasi kurikulum diniyah, tahfidz, bahasa, dan teknologi modern
              untuk mencetak santri yang beradab, cerdas, dan siap menghadapi
              tantangan zaman.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6">
              <Link
                href="https://youtu.be/3tWGITKsc1M?feature=shared"
                className="rounded-md py-4 px-7 w-full sm:w-auto hover:cursor-pointer hover:bg-blue-600 text-base bg-blue-500 text-white flex items-center justify-center gap-2 font-semibold duration-200 ease-in-out"
              >
                Tonton Profil Sekolah <CirclePlay className="!h-5 !w-5" />
              </Link>
              <Link
                href="https://psb.smaithsi.sch.id/"
                className="rounded-md py-4 px-7 w-full sm:w-auto hover:cursor-pointer hover:bg-slate-200 text-base border border-blue-500 bg-white text-blue-500 flex items-center justify-center gap-2 font-semibold duration-200 ease-in-out"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - Animation */}
          <div className="relative flex gap-6 justify-center w-full h-[720px] sm:h-[560px] xs:h-[460px]">
            {/* Gradient overlay atas & bawah */}
            <div className="absolute top-0 left-0 w-full h-40 sm:h-32 xs:h-24 bg-gradient-to-b from-white via-white/70 to-transparent z-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-40 sm:h-32 xs:h-24 bg-gradient-to-t from-white via-white/70 to-transparent z-40 pointer-events-none" />

            <VerticalLoop images={imagesLeft} direction="up" />
            <VerticalLoop images={imagesRight} direction="down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
