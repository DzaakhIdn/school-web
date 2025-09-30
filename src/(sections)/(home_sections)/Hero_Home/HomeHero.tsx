"use client";

import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { Montserrat, Space_Grotesk } from "next/font/google";
import BlurText from "@/animate/BlurText";
import Image from "next/image";
import { motion } from "framer-motion";

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
  // Use responsive sizes for card height and container height
  const itemHeight = 320 + 24; // smaller card on smaller screens (400 -> 320), gap 24px
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
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 xl:px-12 overflow-hidden mt-24">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Caption Section */}
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">


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
            className={`${montserrat.className} mt-6 text-base sm:text-lg md:text-xl text-slate-700 max-w-lg mx-auto lg:mx-0`}
          >
            Kombinasi kurikulum diniyah, tahfidz, bahasa, dan teknologi modern
            untuk mencetak santri yang beradab, cerdas, dan siap menghadapi
            tantangan zaman.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <Button
              size="lg"
              className="rounded-md py-7 px-6 w-full sm:w-auto hover:cursor-pointer hover:bg-blue-600 text-base bg-blue-500 text-white flex items-center justify-center gap-2"
            >
              Tonton Profil Sekolah <CirclePlay className="!h-5 !w-5" />
            </Button>
            <Button
              size="lg"
              className="rounded-md py-7 px-6 w-full sm:w-auto hover:cursor-pointer hover:text-bold hover:bg-slate-200 text-base border border-blue-500 bg-white text-blue-500 flex items-center justify-center gap-2"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>

        {/* Animation Section */}
        <div className="relative flex gap-6 justify-center h-[720px] sm:h-[560px] xs:h-[460px]">
          <div className="absolute top-0 left-0 w-full h-40 sm:h-32 xs:h-24 bg-gradient-to-b from-white via-white/70 to-transparent z-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-40 sm:h-32 xs:h-24 bg-gradient-to-t from-white via-white/70 to-transparent z-40 pointer-events-none" />

          <VerticalLoop images={imagesLeft} direction="up" />
          <VerticalLoop images={imagesRight} direction="down" />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
