import type { Metadata } from "next";

import { getAllPostSummaries } from "@/lib/blog-data";
import { BlogList } from "@/components/Blog/blog-list";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | HSI Boarding School",
  description:
    "Kabar terbaru seputar kegiatan santri, pengumuman penting, dan cerita inspiratif dari HSI Boarding School.",
};

export default async function BlogPage() {
  const posts = await getAllPostSummaries();

  return <BlogList posts={posts} />;
}
