/* eslint-disable @next/next/no-img-element */
import { Space_Grotesk, Montserrat, Raleway } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

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

const benefits_beasiswa = [
  "Bebas biaya pendidikan selama 3 tahun",
  "Fasilitas asrama dan makan gratis",
  "Program tahfidz intensif dengan metode terbaru",
];

const benefits_reguler = [
  "Bebas biaya pendidikan selama 3 tahun",
  "Fasilitas asrama dan makan gratis",
  "Program tahfidz intensif dengan metode terbaru",
];

export default function Pricing() {
  return (
    <>
      <div className="lg:mt-32 md:mt-16 flex items-center justify-center flex-col transition-all duration-300">
        <div className="my-8 lg:my-0 lg:mb-8 flex flex-col justify-center px-6 items-center gap-4 md:gap-3 lg:gap-5 max-w-6xl w-full mx-auto">
          {/* Text container */}
          <div className="text-container flex flex-col justify-center items-center space-y-4">
            <div
              className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-3xl`}
            >
              <p>{`< Info Pendaftaran />`}</p>
            </div>
            <div
              className={`${montserrat.className} text-center font-extrabold tracking-tight text-2xl text-blue-500 md:text-3xl lg:text-4xl`}
            >
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={0}
                blurStrength={10}
              >
                Pintu Menuju HSI Telah Dibuka
              </ScrollReveal>
            </div>
            <div className="desc_Sect max-w-4xl">
              <p
                className={`${montserrat.className} text-center text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed`}
              >
                Kami membuka jalur Beasiswa & Reguler untuk tahun ajaran baru.
                Jangan lewatkan kesempatan membentuk masa depan anak Anda di
                tempat terbaik.
              </p>
            </div>
          </div>
          <div className="pricing">
            <div className="pircing-nav relative mx-auto bg-white rounded-md border-2 gap-3 border-blue-500 flex p-2 w-1/2">
              <div className="beasiswa relative uppercase">Beasiswa</div>
              <div className="reguler">Reguler</div>
            </div>
            <div className="pircing-container w-full border-2 border-blue-500 shadow-[5px_5px_0px_0px_oklch(62.3%_0.214_259.815)] rounded-md p-5 overflow-hidden">
              <PircingCard
                title="Program Beasiswa"
                btn_title="Info Lengkap Beasiswa"
                desc="Kesempatan emas untuk putra-putri berprestasi mendapatkan pendidikan berkualitas dengan bantuan biaya pendidikan."
                img="/assets/icon/beasiswa.png"
                features={benefits_beasiswa}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PircingCard({
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
    <div className="pricing-card max-w-4xl mx-auto">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-6 text-center">
          <div className="pricing-header">
            <h3
              className={`${raleway.className} text-2xl font-bold text-slate-800 mb-4`}
            >
              {title}
            </h3>
            <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center">
              <img
                src={img}
                alt={`${title} Icon`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="pricing-content space-y-4">
            <p
              className={`${montserrat.className} text-slate-600 leading-relaxed`}
            >
              {desc}
            </p>

            <div className="benefits-list space-y-3">
              {features.map((feature, index) => (
                <div className="flex items-start gap-3" key={index}>
                  <CircleCheck
                    className="text-yellow-500 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span
                    className={`${montserrat.className} text-sm text-slate-700 text-left`}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block">
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 lg:w-64 lg:h-64 flex items-center justify-center">
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
                className={`${raleway.className} text-3xl lg:text-4xl font-bold text-slate-800 mb-3`}
              >
                {title}
              </h3>
              <p
                className={`${montserrat.className} text-slate-600 text-lg leading-relaxed`}
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
                    className={`${montserrat.className} text-slate-700 leading-relaxed`}
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
      <div className="mt-8 pt-6 border-t border-slate-200">
        <button
          className={`${montserrat.className} w-full md:w-auto mx-auto block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        >
          {btn_title}
        </button>
      </div>
    </div>
  );
}
