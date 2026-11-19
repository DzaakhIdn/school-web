import HeroHome from "@/(sections)/(home_sections)/Hero_Home/HomeHero";
import Tentang from "@/(sections)/(home_sections)/Tentang_Sect/Tentang-sect";
import Gallery from "@/(sections)/(home_sections)/Gallery_Sect/Gallery";
import Stats from "@/(sections)/(home_sections)/Stats_Sect/stats";
import Testimonial from "@/(sections)/(shared_sections)/Testimonials_Sect/testimonials";
import Campus from "@/(sections)/(shared_sections)/Kampus_Sect/Kampus-sect";
import Faq from "@/(sections)/(home_sections)/Faq_Sect/Faq-sect";
import Blog from "@/(sections)/(home_sections)/Blog_Sect/Blog-sect";
import { getLatestPostSummaries } from "@/lib/blog-data";

export const revalidate = 60;

export default async function HomePage() {
  const latestPosts = await getLatestPostSummaries(3).catch((error: unknown) => {
    console.error("Gagal memuat artikel terbaru:", error);
    return [];
  });

  return (
    <>
      <HeroHome />
      <Tentang />
      <Stats />
      <Gallery />
      <Testimonial />
      <Campus />
      <Faq />
      <Blog posts={latestPosts} />
    </>
  );
}
