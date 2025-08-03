"use client";
// import Image from "next/image";
import HeroHome from "@/(sections)/(home_sections)/Hero_Home/HomeHero";
import Program from "@/(sections)/(home_sections)/Program_Sect/Programs-sect";
import VisiSect from "@/(sections)/(home_sections)/Visi_Sect/visi-sect";
import Gallery from "@/(sections)/(home_sections)/Gallery_Sect/Gallery";
import Stats from "@/(sections)/(home_sections)/Stats_Sect/stats";
import Testimonial from "@/(sections)/(home_sections)/Testimonials_Sect/testimonials";
import Pricing from "@/(sections)/(home_sections)/Pricing_Sect/pricing";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <VisiSect />
      <Program />
      <Gallery />
      <Stats />
      <Testimonial />
      <Pricing />
    </>
  );
}
