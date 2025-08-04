import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CirclePlay } from "lucide-react";
import { Montserrat, Space_Grotesk } from "next/font/google";
import BlurText from "@/animate/BlurText";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroHome = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-10 text-center max-w-2xl">
        <p
          className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-3xl`}
        >{`< Selamat Datang />`}</p>
        <div className="flex">
          <BlurText
            text={`Membina Generasi Rabbani di Era Digital`}
            delay={150}
            animateBy="words"
            direction="top"
            className={`mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold flex justify-center items-center !leading-[1.2] tracking-tight text-blue-500 ${spaceGrotesk.className}`}
          />
        </div>
        <p className={`mt-6 text-[17px] md:text-lg ${montserrat.className} text-slate-700`}>
          Anakmu butuh lebih dari sekadar ijazah. Di HSI Boarding School, kami
          bentuk pemuda Qurani yang fasih bahasa, tangguh adab, dan melek
          teknologi. Mondok. Hafal Qur’an. Bisa Bahasa. Jago IT.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-md py-6 px-5 hover:cursor-pointer hover:bg-blue-600 text-base bg-blue-500 text-white">
            Tonton Profile Sekolah <CirclePlay className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
