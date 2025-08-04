// import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { LuCodeXml } from "react-icons/lu";
import { FaBookQuran, FaBookAtlas, FaPenNib } from "react-icons/fa6";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


export function BentoGridDemo() {
  return (
    <BentoGrid className={`max-w-6xl mx-auto md:auto-rows-[20rem] ${montserrat.className}`}>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          image={item.image}
          imageAlt={item.imageAlt}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );
const items = [
  {
    title: "Digital Literacy & Programming",
    description: "Belajar coding, desain grafis, dan pemrograman",
    className: "md:col-span-2",
    image: "/assets/programs_card/code.jpg",
    imageAlt: "The Dawn of Innovation",
    icon: <LuCodeXml className="h-4 w-4" />,
  },
  {
    title: "Tahfidz Intensif",
    description: "Target hafalan Al Qur'an dalam 3 tahun",
    className: "md:col-span-1",
    image: "/assets/programs_card/quran.jpg",
    imageAlt: "The Dawn of Innovation",
    icon: <FaBookQuran className="h-4 w-4" />,
  },
  {
    title: "Bahasa Inggris & Arab",
    description: "Belajar bahasa Inggris dengan metode yang menyenangkan",
    image: "/assets/programs_card/bahasa.jpg",
    imageAlt: "The Dawn of Innovation",
    className: "md:col-span-1",
    icon: <FaBookAtlas className="h-4 w-4" />,
  },
  {
    title: "Diniyah",
    description: "Belajar ilmu diniyyah sesuai tuntunan Rasulullah",
    image: "/assets/programs_card/kitab.jpg",
    imageAlt: "The Dawn of Innovation",
    className: "md:col-span-2",
    icon: <FaPenNib className="h-4 w-4" />,
  },
];

