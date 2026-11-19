/** Tipe & helper blog yang aman dipakai di client maupun server. */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Isi artikel berupa HTML dari editor CMS. */
  content: string;
  cover: string | null;
  category: string;
  tags: string[];
  author: string;
  /** ISO timestamp */
  publishedAt: string;
  readTime: number;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string[];
}

/** Ringkasan artikel untuk kartu/listing (tanpa isi HTML penuh). */
export type BlogPostSummary = Omit<BlogPost, "content">;

/** Perkiraan waktu baca dari teks HTML, minimal 1 menit. */
export function estimateReadTime(html: string): number {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return 1;
  return Math.max(1, Math.ceil(text.split(" ").length / 200));
}

export function formatPostDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(date);
}
