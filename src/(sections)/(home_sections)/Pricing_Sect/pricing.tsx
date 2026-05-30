/* eslint-disable @next/next/no-img-element */
import { Space_Grotesk, Montserrat, Raleway, Poppins } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";
import { CircleCheck } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { GridBackground } from "@/components/ui/grid_background";

// ================= FONTS =================
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
  weight: ["100", "300", "400", "600", "700", "900"],
});

// ================= DATA =================
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

// ================= TYPES =================
type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

interface CursorProps {
  position: CursorPosition;
}

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  onClick: () => void;
  isActive: boolean;
}

// ================= MAIN COMPONENT =================
export default function Pricing() {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activeTab, setActiveTab] = useState<TabKey>("beasiswa");

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <GridBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div
              className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4`}
            >
              <p>{`< Info Pendaftaran />`}</p>
            </div>

            <div
              className={`${montserrat.className} font-extrabold tracking-tight text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6`}
            >
              <ScrollReveal baseOpacity={0} enableBlur baseRotation={5} blurStrength={15}>
                Pintu Menuju HSI Telah Dibuka
              </ScrollReveal>
            </div>

            <p
              className={`${montserrat.className} max-w-4xl mx-auto text-slate-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-4`}
            >
              Kami membuka jalur Beasiswa & Reguler untuk tahun ajaran baru. Jangan lewatkan kesempatan membentuk masa depan anak Anda di tempat terbaik.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-6 sm:mb-8 md:mb-12">
            <div
              className={`relative mx-auto bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl border-2 border-blue-500 flex p-1.5 sm:p-2 md:p-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ${poppins.className} font-semibold shadow-lg`}
            >
              {(["beasiswa", "reguler"] as TabKey[]).map((tab) => (
                <Tab
                  key={tab}
                  setPosition={setPosition}
                  onClick={() => setActiveTab(tab)}
                  isActive={activeTab === tab}
                >
                  {tab === "beasiswa" ? "Beasiswa" : "Reguler"}
                </Tab>
              ))}

              <Cursor position={position} />
            </div>
          </div>

          {/* Card */}
          <div className="w-full max-w-6xl mx-auto border-2 border-blue-500 shadow-[5px_5px_0px_0px_oklch(62.3%_0.214_259.815)] rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white/90 backdrop-blur-sm">
            <PricingCard {...content[activeTab]} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= CURSOR =================
const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.div
      className="absolute top-1 bottom-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg z-0"
      animate={{
        left: position.left + 4,
        width: position.width - 8,
        opacity: position.opacity,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );
};

// ================= TAB =================
const Tab: React.FC<TabProps> = ({ children, setPosition, onClick, isActive }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
    }
  }, [isActive, setPosition]);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`relative uppercase flex-1 flex justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg font-medium cursor-pointer z-10 py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-lg transition-all duration-300 ${
        isActive ? "text-white" : "text-slate-600"
      }`}
    >
      <span className="relative z-10 select-none whitespace-nowrap">{children}</span>
    </div>
  );
};

// ================= PRICING CARD =================
function PricingCard({ title, btn_title, desc, img, features }: TabContent) {
  return (
    <div className="w-full">
      {/* Mobile */}
      <div className="block lg:hidden flex flex-col gap-4 sm:gap-6 text-center">
        <div className="flex justify-center">
          <img src={img} alt={`${title} Icon`} className="w-32 sm:w-40 h-32 sm:h-40 object-contain" />
        </div>

        <h3 className={`${raleway.className} text-xl sm:text-2xl font-bold text-slate-800`}>{title}</h3>

        <p className={`${montserrat.className} text-slate-600 text-xs sm:text-sm leading-relaxed`}>{desc}</p>

        <div className="space-y-2 sm:space-y-3 text-left">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-2 sm:gap-3">
              <CircleCheck className="text-yellow-500 mt-0.5 flex-shrink-0" size={14} />
              <span className={`${montserrat.className} text-xs sm:text-sm text-slate-700`}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-8 md:gap-10 lg:gap-12">
        <img src={img} alt={`${title} Icon`} className="w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 object-contain flex-shrink-0" />

        <div className="space-y-4 md:space-y-6">
          <h3 className={`${raleway.className} text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800`}>{title}</h3>
          <p className={`${montserrat.className} text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed`}>{desc}</p>

          <div className="space-y-3 md:space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4">
                <CircleCheck className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <span className={`${montserrat.className} text-slate-700 text-sm md:text-base`}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-8 border-t border-slate-200 text-center">
        <button
          className={`${montserrat.className} bg-blue-500 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-lg md:rounded-xl transition-all duration-300 active:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base`}
        >
          {btn_title}
        </button>
      </div>
    </div>
  );
}
