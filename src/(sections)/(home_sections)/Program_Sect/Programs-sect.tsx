import { BentoGridDemo } from "@/components/Program/bento-grid-demo";
import { Space_Grotesk, Montserrat } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Page() {
  return (
    <>
      <div className="min-h-screen md:mt-32 lg:mt-32 flex items-center justify-center flex-col">
        <div className="header_container my-10 lg:my-0 lg:mb-10 flex flex-col justify-center px-6 items-center gap-4 md:gap-3 max-w-6xl w-full mx-auto">
          <div
            className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-3xl`}
          >
            <p>{`< Program Kami />`}</p>
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
              Empat pilar utama yang menjadi fondasi pendidikan di HSI
            </ScrollReveal>
          </div>
          <div className="mt-10 w-full max-w-6xl mx-auto">
            <BentoGridDemo />
          </div>
        </div>
      </div>
    </>
  );
}
