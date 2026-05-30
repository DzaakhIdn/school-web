import { Space_Grotesk, Montserrat } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";
import CountUp from "@/animate/CountUp";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Stats() {
  return (
    <>
      <div className="md:mt-24 lg:mt-32 flex items-center justify-center flex-col transition-all duration-300 py-12 sm:py-16 md:py-20">
        <div className="my-8 sm:my-10 lg:my-0 lg:mb-10 flex flex-col justify-center px-4 sm:px-6 lg:px-8 items-center gap-3 md:gap-4 max-w-6xl w-full mx-auto">
          <div
            className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-3xl`}
          >
            <p>{`< HSI dalam Angka />`}</p>
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
              Angka yang Bercerita Tentang Dedikasi Kami
            </ScrollReveal>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          <StatCard
            title="Santri Aktif"
            value={150}
            desc="Menempuh pendidikan terpadu: diniyyah, formal, tahfidz, dan life skills."
          />
          <StatCard
            title="Guru Berpengalaman"
            value={25}
            desc="Tenaga pengajar profesional dengan dedikasi tinggi untuk pendidikan santri."
          />
          <StatCard
            title="Program Unggulan"
            value={8}
            desc="Program pendidikan terintegrasi yang mengembangkan potensi santri secara optimal."
          />
          <StatCard
            title="Tahun Berdiri"
            value={2020}
            desc="Pengalaman dalam membentuk generasi Qurani yang berakhlak mulia."
          />
        </div>
      </div>
    </>
  );
}

const StatCard = ({
  title,
  value,
  desc,
}: {
  title: string;
  value: number;
  desc: string;
}) => {
  return (
    <div className="group relative w-full bg-white dark:bg-slate-900 rounded-lg md:rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:cursor-pointer">
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 text-center space-y-3 sm:space-y-4">
        <h3
          className={`${montserrat.className} text-sm sm:text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300`}
        >
          {title}
        </h3>

        <div className="relative">
          <CountUp
            to={value}
            from={0}
            direction="up"
            duration={2}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${spaceGrotesk.className} font-bold text-blue-600 dark:text-blue-400`}
          />
        </div>

        <p
          className={`${montserrat.className} text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};
