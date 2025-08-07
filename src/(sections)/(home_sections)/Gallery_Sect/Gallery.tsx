import { Space_Grotesk, Montserrat } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";
import { ModalDialogImage } from "@/components/alert/modal_dialog";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Gallery() {
  return (
    <>
      <div className="lg:mt-32 md:mt-16 flex items-center justify-center flex-col transition-all duration-300 mb-20">
        <div className="my-8 lg:my-0 lg:mb-8 flex flex-col justify-center px-6 items-center gap-4 md:gap-3 max-w-6xl w-full mx-auto mb-20">
          <div className="text-container flex flex-col justify-center items-center space-y-4 mb-20">
            <div
              className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-3xl`}
            >
              <p>{`< Kegiatan Seru Santri />`}</p>
            </div>
            <div
              className={`${montserrat.className} text-center font-extrabold tracking-tight text-2xl text-blue-500 md:text-3xl lg:text-4xl`}
            >
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={15}
              >
                Keseruan Santri di HSI Boarding School
              </ScrollReveal>
            </div>
            <div className="desc_Sect max-w-4xl">
              <p
                className={`${montserrat.className} text-center text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed`}
              >
                Selama belajar di HSI, para santri nggak cuma fokus akademik dan
                tahfidz, tapi juga aktif ikut berbagai acara seru yang
                menumbuhkan ukhuwah, kepemimpinan, dan semangat belajar. Yuk,
                intip beberapa momen terbaik mereka!
              </p>
            </div>
          </div>
        </div>
          <ScrollableContent />
      </div>
    </>
  );
}

//

function ScrollableContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Auto scroll animations
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const xReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const data = [
    {
      img: "img-1.jpg",
      title: "Kegiatan Lomba Agustusan",
      desc: "Kegiatan lomba agustusan yang diselenggarakan oleh para santri HSI Boarding School.",
    },
    {
      img: "img-2.jpg",
      title: "Kegiatan Lomba Agustusan",
      desc: "Kegiatan lomba agustusan yang diselenggarakan oleh para santri HSI Boarding School.",
    },
    {
      img: "img-3.jpg",
      title: "Kegiatan Outbond",
      desc: "Kegiatan outbond yang diselenggarakan oleh para santri HSI Boarding School.",
    },
    {
      img: "img-4.jpg",
      title: "Kegiatan Outbond",
      desc: "Kegiatan outbond yang diselenggarakan oleh para santri HSI Boarding School.",
    },
    {
      img: "img-5.jpg",
      title: "Kegiatan Sosial",
      desc: "Kegiatan sosial yang diselenggarakan oleh para santri HSI Boarding School.",
    },
    {
      img: "img-8.jpg",
      title: "Kegiatan Sosial",
      desc: "Kegiatan sosial yang diselenggarakan oleh para santri HSI Boarding School.",
    },
  ];

  return (
    <div ref={containerRef} className="w-full h-[250vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-white">
        <div className="relative w-full px-4 py-5 sm:px-6 lg:px-8 overflow-hidden">
          {/* Row 1 - Auto scroll + Manual scroll */}
          <motion.div 
            ref={row1Ref}
            style={{ x }} 
            className="flex gap-4 min-w-max pb-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1500, right: 0 }}
            dragElastic={0.1}
            whileDrag={{ scale: 0.98 }}
          >
            {data.map((item, idx) => (
              <div
                key={`baris1-${idx}`}
                className="flex-shrink-0 w-72 h-96 sm:w-80 sm:h-[26rem] md:w-[22rem] md:h-[30rem] lg:w-[24rem] lg:h-[32rem] xl:w-[26rem] xl:h-[34rem]"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                  <ModalDialogImage
                    image_triger={`/assets/gallery/${item.img}`}
                    image={`/assets/gallery/${item.img}`}
                    title={item.title}
                    description={item.desc}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Row 2 - Auto scroll + Manual scroll */}
          <motion.div
            ref={row2Ref}
            style={{ x: xReverse }}
            className="flex gap-4 min-w-max pt-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1500, right: 0 }}
            dragElastic={0.1}
            whileDrag={{ scale: 0.98 }}
          >
            {data.map((item, idx) => (
              <div
                key={`baris2-${idx}`}
                className="flex-shrink-0 w-72 h-96 sm:w-80 sm:h-[26rem] md:w-[22rem] md:h-[30rem] lg:w-[24rem] lg:h-[32rem] xl:w-[26rem] xl:h-[34rem]"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                  <ModalDialogImage
                    image_triger={`/assets/gallery/${item.img}`}
                    image={`/assets/gallery/${item.img}`}
                    title={item.title}
                    description={item.desc}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile scroll indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:hidden">
            <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-xs text-white/80 ml-1">Swipe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
