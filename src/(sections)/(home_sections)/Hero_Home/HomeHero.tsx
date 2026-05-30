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
  // Responsive dimensions
  const getCardDimensions = () => {
    // Mobile: 140x180, Tablet: 160x200, Desktop: 220x280
    return { width: 140, height: 180, gap: 16 };
  };
  
  const { width: cardWidth, height: cardHeight, gap } = getCardDimensions();
  const itemHeight = cardHeight + gap;
  const totalHeight = itemHeight * images.length;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-4 sm:gap-5 md:gap-6"
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
            className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
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
    <section className="relative bg-white mt-16 sm:mt-20 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 py-12 sm:py-16 md:py-20">
          {/* LEFT SIDE - Text */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <BlurText
              text={`Sekolah Islam & Teknologi untuk Generasi Rabbani`}
              delay={150}
              animateBy="words"
              direction="top"
              className={`
                mt-4 sm:mt-6
                font-extrabold 
                !leading-[1.2] 
                tracking-tight 
                text-blue-500 
                ${spaceGrotesk.className}
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              `}
            />

            <p
              className={`${montserrat.className} mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 max-w-lg mx-auto lg:mx-0`}
            >
              Kombinasi kurikulum diniyah, tahfidz, bahasa, dan teknologi modern
              untuk mencetak santri yang beradab, cerdas, dan siap menghadapi
              tantangan zaman.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 md:gap-6">
              <Link
                href="https://youtu.be/3tWGITKsc1M?feature=shared"
                className="rounded-md py-3 sm:py-4 px-6 sm:px-7 w-full sm:w-auto hover:cursor-pointer hover:bg-blue-600 text-sm sm:text-base bg-blue-500 text-white flex items-center justify-center gap-2 font-semibold duration-200 ease-in-out transition-colors"
              >
                Tonton Profil Sekolah <CirclePlay className="!h-4 sm:!h-5 !w-4 sm:!w-5" />
              </Link>
              <Link
                href="https://psb.smaithsi.sch.id/"
                className="rounded-md py-3 sm:py-4 px-6 sm:px-7 w-full sm:w-auto hover:cursor-pointer hover:bg-slate-100 text-sm sm:text-base border border-blue-500 bg-white text-blue-500 flex items-center justify-center gap-2 font-semibold duration-200 ease-in-out transition-colors"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - Animation */}
          <div className="relative flex gap-3 sm:gap-4 md:gap-6 justify-center w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px]">
            {/* Gradient overlay atas & bawah */}
            <div className="absolute top-0 left-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-b from-white via-white/70 to-transparent z-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-40 pointer-events-none" />

            <VerticalLoop images={imagesLeft} direction="up" />
            <VerticalLoop images={imagesRight} direction="down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
