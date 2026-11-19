import { cache } from "react";

import { estimateReadTime, type BlogPost, type BlogPostSummary } from "@/lib/blog";
import { getSupabase } from "@/lib/supabase";

const POST_FIELDS = `
  id,
  title,
  slug,
  description,
  content,
  cover_url,
  tags,
  author_name,
  meta_title,
  meta_description,
  meta_keywords,
  published_at,
  created_at,
  categories ( name )
`;

type PostRow = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  cover_url: string | null;
  tags: string[] | null;
  author_name: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[] | null;
  published_at: string | null;
  created_at: string;
  categories: { name: string } | { name: string }[] | null;
};

const mapPost = (row: PostRow): BlogPost => {
  const category = Array.isArray(row.categories) ? row.categories[0]?.name : row.categories?.name;

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.description,
    content: row.content,
    cover: row.cover_url,
    category: category || "Umum",
    tags: row.tags ?? [],
    author: row.author_name.trim() || "Tim Media HSIBS",
    publishedAt: row.published_at ?? row.created_at,
    readTime: estimateReadTime(row.content),
    metaTitle: row.meta_title || null,
    metaDescription: row.meta_description || null,
    metaKeywords: row.meta_keywords ?? [],
  };
};

/** Semua artikel berstatus published, terbaru lebih dulu. */
const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const { data, error } = await getSupabase()
    .from("posts")
    .select(POST_FIELDS)
    .eq("publish", "published")
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Gagal memuat artikel: ${error.message}`);

  return ((data ?? []) as unknown as PostRow[]).map(mapPost);
});

const toSummary = ({ content, ...summary }: BlogPost): BlogPostSummary => {
  void content;
  return summary;
};

/** Ringkasan semua artikel; isi HTML tidak ikut dikirim ke client. */
export const getAllPostSummaries = cache(async (): Promise<BlogPostSummary[]> => {
  const posts = await getAllPosts();
  return posts.map(toSummary);
});

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | undefined> => {
  const { data, error } = await getSupabase()
    .from("posts")
    .select(POST_FIELDS)
    .eq("publish", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw new Error(`Gagal memuat artikel: ${error.message}`);

  return data ? mapPost(data as unknown as PostRow) : undefined;
});

export async function getLatestPostSummaries(limit: number): Promise<BlogPostSummary[]> {
  const posts = await getAllPostSummaries();
  return posts.slice(0, limit);
}
