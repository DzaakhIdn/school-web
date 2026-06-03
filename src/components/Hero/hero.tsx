// import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import BlurText from "@/animate/BlurText";
import { Montserrat, Space_Grotesk, Poppins } from "next/font/google";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SplitText from "@/animate/SplitText";
import { motion } from "motion/react";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between align-center gap-5 py-6 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
      <BackgroundPattern />
      <motion.div
        className="logo flex items-center justify-center z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        suppressHydrationWarning
      >
        <Image
          src="/important/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-12 h-auto sm:w-16 md:w-20"
        />
      </motion.div>
      <div className="flex items-center justify-center px-2 sm:px-6 flex-col gap-6 sm:gap-9 z-10">
        <Badge
          variant={"secondary"}
          className="bg-blue-500 text-white dark:bg-blue-600 text-xs sm:text-sm"
        >
          Official Website
        </Badge>
        <BlurText
          text={`Selamat Datang di HSI Boarding School`}
          delay={150}
          animateBy="words"
          direction="top"
          className={`${spaceGrotesk.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-slate-900 justify-center px-2`}
        />
        <SplitText
          text="Kami adalah lembaga pendidikan yang mengedepankan nilai-nilai keislaman dan akademik."
          className={`text-sm sm:text-md text-center text-slate-700 ${montserrat.className} px-4 max-w-2xl`}
          delay={100}
          duration={1.3}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.3 }}
            className="w-full sm:w-auto"
            suppressHydrationWarning
          >
            <Button
              variant="default"
              className={`${montserrat.className} bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-sm py-4 sm:py-6 px-6 w-full sm:w-auto`}
            >
              <Link href={"/home"}>Kenali Kami</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="w-full sm:w-auto"
            suppressHydrationWarning
          >
            <Button
              variant="outline"
              className={`${montserrat.className} text-sm py-4 sm:py-6 px-6 hover:cursor-pointer w-full sm:w-auto`}
            >
              Daftar Sekarang
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.3 }}
        className="px-4"
        suppressHydrationWarning
      >
        <p
          className={`${poppins.className} text-xs sm:text-sm font-light italic letter-spacing-2 text-slate-400 text-center`}
        >
          HSI Boarding School &copy; copyright 2025
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
