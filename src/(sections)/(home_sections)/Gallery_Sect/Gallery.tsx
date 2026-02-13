"use client";

import { Space_Grotesk, Montserrat } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Responsivitas Lebar Kartu
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? 280 : 380; 
  const gap = 20;

  // Rumus Ajaib: Menghitung posisi agar card aktif tepat di tengah viewport
  const centerOffset = (windowWidth - cardWidth) / 2;
  const xTranslation = -current * (cardWidth + gap) + centerOffset;

  const nextSlide = () => setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-gray-50 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-2xl mb-2`}
        >
          {`< Kegiatan Seru Santri />`}
        </motion.div>
        <h2 className={`${montserrat.className} font-extrabold text-3xl md:text-5xl text-blue-600 mb-6`}>
          Keseruan Santri HSIBS
        </h2>
      </div>

      <div className="relative w-full">
        {/* Navigation Buttons - Hidden on Mobile for cleaner look */}
        {!isMobile && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-30 px-10 pointer-events-none">
            <button onClick={prevSlide} className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-lg hover:bg-white text-blue-600 rounded-full p-4 transition-all active:scale-90 border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-lg hover:bg-white text-blue-600 rounded-full p-4 transition-all active:scale-90 border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}

        {/* Slider Container */}
        <div className="relative h-[550px] w-full flex items-center cursor-grab active:cursor-grabbing">
          <motion.div 
            className="flex items-center"
            animate={{ x: xTranslation }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            drag="x"
            dragConstraints={{ left: -((data.length - 1) * (cardWidth + gap)), right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x + velocity.x;
              if (swipe < -100 && current < data.length - 1) nextSlide();
              else if (swipe > 100 && current > 0) prevSlide();
            }}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: current === index ? 1 : 0.85,
                  opacity: current === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
                style={{ 
                  width: cardWidth,
                  marginRight: index === data.length - 1 ? 0 : gap 
                }}
                className="relative h-[450px] md:h-[500px] rounded-[32px] overflow-hidden shadow-xl flex-shrink-0 bg-white group"
              >
                <div className="w-full h-full relative">
                   <ModalDialogImage
                    image_triger={`/assets/gallery/${item.img}`}
                    image={`/assets/gallery/${item.img}`}
                    title={item.title}
                    description={item.desc}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Text Content */}
                  <div className="absolute bottom-8 left-6 right-6 text-white pointer-events-none">
                    <motion.h3 
                      animate={{ y: current === index ? 0 : 10 }}
                      className={`${montserrat.className} text-xl md:text-2xl font-bold mb-2`}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      animate={{ opacity: current === index ? 1 : 0 }}
                      className="text-sm text-gray-200 line-clamp-2"
                    >
                      {item.desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                current === i ? "w-8 bg-blue-600 h-2" : "w-2 bg-blue-200 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}