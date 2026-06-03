"use client";

import { Space_Grotesk, Montserrat } from "next/font/google";
import { useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ModalDialogImage } from "@/components/alert/modal_dialog";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const data = [
  { img: "img-1.jpg", title: "Lomba Agustusan", desc: "Keseruan santri merayakan kemerdekaan." },
  { img: "img-2.jpg", title: "Momen Juara", desc: "Semangat kompetisi yang sportif dan religius." },
  { img: "img-3.jpg", title: "Outbond Seru", desc: "Membangun kerjasama tim di alam terbuka." },
  { img: "img-4.jpg", title: "Eksplorasi Alam", desc: "Tadabbur alam untuk mengagumi ciptaan-Nya." },
  { img: "img-5.jpg", title: "Bakti Sosial", desc: "Berbagi kebahagiaan dengan masyarakat sekitar." },
  { img: "img-8.jpg", title: "Ukhuwah Islamiyah", desc: "Kebersamaan yang erat antar santri HSIBS." },
];

export default function Gallery() {
  const [isMounted, setIsMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-play carousel - only on client
  useEffect(() => {
    if (!isMounted || !autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, isMounted]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    setAutoPlay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden w-full" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className={`${spaceGrotesk.className} font-bold text-yellow-500 text-lg sm:text-xl lg:text-2xl mb-3`}>
            {`< Kegiatan Seru Santri />`}
          </div>
          <h2 className={`${montserrat.className} font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600`}>
            Keseruan Santri HSIBS
          </h2>
        </motion.div>

        {/* Main Gallery */}
        <div className="space-y-8">
          {/* Main Image */}
          <motion.div
            key={`main-${current}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <ModalDialogImage
              image_triger={`/assets/gallery/${data[current].img}`}
              image={`/assets/gallery/${data[current].img}`}
              title={data[current].title}
              description={data[current].desc}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl font-bold mb-2`}
              >
                {data[current].title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base text-gray-200"
              >
                {data[current].desc}
              </motion.p>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 sm:px-6 z-20">
              <button 
                onClick={prevSlide}
                className="bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-full p-2 sm:p-3 transition-all active:scale-90 border border-white/30"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-full p-2 sm:p-3 transition-all active:scale-90 border border-white/30"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </motion.div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {data.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoPlay(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative h-20 sm:h-24 md:h-28 rounded-lg overflow-hidden transition-all duration-300 ${
                  current === index 
                    ? "ring-2 sm:ring-4 ring-blue-600 shadow-lg" 
                    : "ring-1 ring-gray-200 hover:ring-gray-300"
                }`}
              >
                <ModalDialogImage
                  image_triger={`/assets/gallery/${item.img}`}
                  image={`/assets/gallery/${item.img}`}
                  title={item.title}
                  description={item.desc}
                />
                
                {/* Overlay for inactive thumbnails */}
                {current !== index && (
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center items-center gap-2">
            <span className={`${montserrat.className} text-sm font-medium text-gray-600`}>
              {current + 1} / {data.length}
            </span>
            <div className="flex gap-1.5">
              {data.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setAutoPlay(false);
                  }}
                  animate={{
                    width: current === i ? 24 : 8,
                    backgroundColor: current === i ? "#2563eb" : "#e5e7eb"
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full transition-all"
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}