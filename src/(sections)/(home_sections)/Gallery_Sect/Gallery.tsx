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
      <div className="lg:mt-32 md:mt-16 flex items-center justify-center flex-col transition-all duration-300">
        <div className="my-8 lg:my-0 lg:mb-8 flex flex-col justify-center px-6 items-center gap-4 md:gap-3 max-w-6xl w-full mx-auto">
          <div className="text-container flex flex-col justify-center items-center space-y-4">
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Baris 1: ke kiri, Baris 2: ke kanan
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
          <motion.div style={{ x }} className="flex gap-6 min-w-max pb-6">
            {data.map((item, idx) => (
              <div
                key={`baris1-${idx}`}
                className="flex-shrink-0 w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-88 lg:w-72 lg:h-96 xl:w-80 xl:h-[26rem] 2xl:w-84 2xl:h-[28rem]"
              >
                <div className="w-full h-full rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105">
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

          <motion.div
            style={{ x: xReverse }}
            className="flex gap-6 min-w-max pt-6"
          >
            {data.map((item, idx) => (
              <div
                key={`baris2-${idx}`}
                className="flex-shrink-0 w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-88 lg:w-72 lg:h-96 xl:w-80 xl:h-[26rem] 2xl:w-84 2xl:h-[28rem]"
              >
                <div className="w-full h-full rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105">
                  <ModalDialogImage
                    image_triger={`/assets/gallery/${item.img}`}
                    image={`/assets/gallery/${item.img}`}
                    title={item.title}
                    description={`Deskripsi lengkap tentang ${item.title} yang dilakukan oleh para santri HSI Boarding School`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
