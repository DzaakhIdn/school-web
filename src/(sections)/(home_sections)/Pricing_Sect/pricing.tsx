/* eslint-disable @next/next/no-img-element */
import { Space_Grotesk, Montserrat, Raleway, Poppins } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";
import { CircleCheck } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { GridBackground } from "@/components/ui/grid_background";

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "600", "900"],
});

const benefits_beasiswa = [
  "Bebas biaya pendidikan selama 3 tahun",
  "Fasilitas asrama dan makan gratis",
  "Program tahfidz intensif dengan metode terbaru",
];

const benefits_reguler = [
  "Biaya pendidikan terjangkau dengan cicilan",
  "Fasilitas asrama dan makan berkualitas",
  "Program tahfidz dengan bimbingan ustadz berpengalaman",
];

type TabKey = "beasiswa" | "reguler";
interface TabContent {
  title: string;
  btn_title: string;
  desc: string;
  img: string;
  features: string[];
}

const content: Record<TabKey, TabContent> = {
  beasiswa: {
    title: "Program Beasiswa",
    btn_title: "Info Lengkap Beasiswa",
    desc: "Kesempatan emas untuk putra-putri berprestasi mendapatkan pendidikan berkualitas dengan bantuan biaya pendidikan.",
    img: "/assets/icon/beasiswa.png",
    features: benefits_beasiswa,
  },
  reguler: {
    title: "Program Reguler",
    btn_title: "Info Lengkap Reguler",
    desc: "Program pendidikan berkualitas dengan fasilitas lengkap dan biaya terjangkau untuk semua kalangan.",
    img: "/assets/icon/reguler.png",
    features: benefits_reguler,
  },
};

export default function Pricing() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isBeasiswa, setIsBeasiswa] = useState<TabKey>("beasiswa");

  return (
    <div className="relative min-h-screen">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <GridBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div
              className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4`}
            >
              <p>{`< Info Pendaftaran />`}</p>
            </div>
            <div
              className={`${montserrat.className} font-extrabold tracking-tight text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6`}
            >
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={15}
              >
                Pintu Menuju HSI Telah Dibuka
              </ScrollReveal>
            </div>
            <div className="max-w-4xl mx-auto">
              <p
                className={`${montserrat.className} text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed`}
              >
                Kami membuka jalur Beasiswa & Reguler untuk tahun ajaran baru.
                Jangan lewatkan kesempatan membentuk masa depan anak Anda di
                tempat terbaik.
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8 md:mb-12">
            <div
              className={`pricing-nav relative mx-auto bg-white/90 backdrop-blur-sm rounded-xl border-2 border-blue-500 flex p-2 sm:p-3 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl ${poppins.className} font-semibold shadow-lg`}
            >
              {(["beasiswa", "reguler"] as TabKey[]).map((tab) => (
                <Tab
                  key={tab}
                  setPosition={setPosition}
                  onClick={() => setIsBeasiswa(tab)}
                  isActive={isBeasiswa === tab}
                >
                  {tab === "beasiswa" ? "Beasiswa" : "Reguler"}
                </Tab>
              ))}
              <Cursor position={position} />
            </div>
          </div>

          {/* Content Card */}
          <div className="pricing-container w-full max-w-6xl mx-auto border-2 border-blue-500 shadow-[5px_5px_0px_0px_oklch(62.3%_0.214_259.815)] rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white/90 backdrop-blur-sm">
            <PricingCard
              title={content[isBeasiswa].title}
              btn_title={content[isBeasiswa].btn_title}
              desc={content[isBeasiswa].desc}
              img={content[isBeasiswa].img}
              features={content[isBeasiswa].features}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.div
      className="absolute top-1 bottom-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg z-0"
      animate={{
        left: position.left + 4,
        width: position.width - 8,
        opacity: position.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    />
  );
};

const Tab = ({
  children,
  setPosition,
  onClick,
  isActive,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPosition: any;
  onClick: () => void;
  isActive: boolean;
}) => {
  const Reff = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && Reff.current) {
      const { width } = Reff.current.getBoundingClientRect();
      setPosition({
        left: Reff.current.offsetLeft,
        width: width,
        opacity: 1,
      });
    }
  }, [isActive, setPosition]);

  return (
    <div
      className={`relative uppercase flex-1 flex justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg font-medium cursor-pointer z-10 py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
        isActive ? "text-white" : "text-slate-600 hover:text-white"
      }`}
      ref={Reff}
      onMouseEnter={() => {
        if (!Reff.current) return;
        const { width } = Reff.current.getBoundingClientRect();
        setPosition({
          left: Reff.current.offsetLeft,
          width: width,
          opacity: 1,
        });
      }}
      onClick={onClick}
    >
      <span className="relative z-10 select-none whitespace-nowrap">
        {children}
      </span>
    </div>
  );
};

function PricingCard({
  title,
  btn_title,
  desc,
  img,
  features,
}: {
  title: string;
  btn_title: string;
  desc: string;
  img: string;
  features: string[];
}) {
  return (
    <div className="pricing-card w-full">
      {/* Mobile & Tablet Layout */}
      <div className="block lg:hidden">
        <div className="flex flex-col gap-6 text-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
              <img
                src={img}
                alt={`${title} Icon`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Header */}
          <div className="pricing-header">
            <h3
              className={`${raleway.className} text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-3 sm:mb-4`}
            >
              {title}
            </h3>
            <p
              className={`${montserrat.className} text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed`}
            >
              {desc}
            </p>
          </div>

          {/* Features */}
          <div className="benefits-list space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <div className="flex items-start gap-3 text-left" key={index}>
                <CircleCheck
                  className="text-yellow-500 mt-0.5 flex-shrink-0"
                  size={16}
                />
                <span
                  className={`${montserrat.className} text-xs sm:text-sm md:text-base text-slate-700`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex items-center gap-8 xl:gap-12">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 xl:w-64 xl:h-64 flex items-center justify-center">
              <img
                src={img}
                alt={`${title} Icon`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-6">
            <div className="pricing-header">
              <h3
                className={`${raleway.className} text-3xl xl:text-4xl font-bold text-slate-800 mb-4`}
              >
                {title}
              </h3>
              <p
                className={`${montserrat.className} text-slate-600 text-lg xl:text-xl leading-relaxed`}
              >
                {desc}
              </p>
            </div>
            <div className="benefits-list space-y-4">
              {features.map((feature, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <CircleCheck
                    className="text-yellow-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span
                    className={`${montserrat.className} text-slate-700 text-base xl:text-lg leading-relaxed`}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-slate-200">
        <button
          className={`${montserrat.className} w-full sm:w-auto sm:min-w-[200px] mx-auto block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base md:text-lg`}
        >
          {btn_title}
        </button>
      </div>
    </div>
  );
}
