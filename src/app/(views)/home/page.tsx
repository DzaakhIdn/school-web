"use client";
// import Image from "next/image";
import HeroHome from "@/(sections)/(home_sections)/Hero_Home/HomeHero";
import Tentang from "@/(sections)/(home_sections)/Tentang_Sect/Tentang-sect";
import Gallery from "@/(sections)/(home_sections)/Gallery_Sect/Gallery";
import Stats from "@/(sections)/(home_sections)/Stats_Sect/stats";
import Testimonial from "@/(sections)/(shared_sections)/Testimonials_Sect/testimonials";
import Campus from "@/(sections)/(shared_sections)/Kampus_Sect/Kampus-sect";
import Faq from "@/(sections)/(home_sections)/Faq_Sect/Faq-sect";
import Blog from "@/(sections)/(home_sections)/Blog_Sect/Blog-sect";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <Tentang />
      <Stats />
      <Gallery />
      <Testimonial />
      <Campus />
      <Faq />
      <Blog />
    </>
  );
}
