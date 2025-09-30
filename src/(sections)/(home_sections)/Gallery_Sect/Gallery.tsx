import { Space_Grotesk, Montserrat } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ModalDialogImage } from "@/components/alert/modal_dialog";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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

export default function Gallery() {
  return (
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
            Keseruan Santri di HSI Boarding School
          </div>
          <div className="desc_Sect max-w-4xl">
            <p
              className={`${montserrat.className} text-center text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed`}
            >
              Selama belajar di HSI, para santri nggak cuma fokus akademik dan
              tahfidz, tapi juga aktif ikut berbagai acara seru yang menumbuhkan
              ukhuwah, kepemimpinan, dan semangat belajar. Yuk, intip beberapa
              momen terbaik mereka!
            </p>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden select-none">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={data[current].img}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <ModalDialogImage
            image_triger={`/assets/gallery/${data[current].img}`}
            image={`/assets/gallery/${data[current].img}`}
            title={data[current].title}
            description={data[current].desc}
          />
          {/* Overlay for text */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center max-w-3xl px-4">
            <h2
              className={`${montserrat.className} text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg`}
            >
              {data[current].title}
            </h2>
            <p
              className={`${montserrat.className} text-white/90 mt-2 text-sm md:text-lg drop-shadow-md`}
            >
              {data[current].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 z-20 transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/100 duration-300 text-white rounded-full p-2 md:p-3 z-20 transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
