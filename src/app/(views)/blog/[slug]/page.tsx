import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import { formatPostDate } from "@/lib/blog";
import { getAllPostSummaries, getPostBySlug } from "@/lib/blog-data";
import { PostCover } from "@/components/Blog/post-cover";
import RelatedCarousel from "@/components/Blog/related-carousel";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;

  return {
    title: `${title} | Blog HSIBS`,
    description,
    keywords: post.metaKeywords.length ? post.metaKeywords : post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.publishedAt,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPostSummaries();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(allPosts.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <article className="px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className={cn(
              montserrat.className,
              "inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
            )}
          >
            <ArrowLeft className="size-4" />
            Kembali ke Blog
          </Link>

          <span
            className={cn(
              montserrat.className,
              "mt-6 block w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
            )}
          >
            {post.category}
          </span>
          <h1
            className={cn(
              spaceGrotesk.className,
              "mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            )}
          >
            {post.title}
          </h1>
          <div
            className={cn(
              montserrat.className,
              "mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"
            )}
          >
            <span className="inline-flex items-center gap-1.5">
              <User className="size-4" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4" /> {formatPostDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" /> {post.readTime} menit baca
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-8 aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl bg-slate-100">
          <PostCover
            src={post.cover}
            alt={post.title}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <p
            className={cn(
              montserrat.className,
              "text-lg font-medium leading-relaxed text-slate-900 sm:text-xl"
            )}
          >
            {post.excerpt}
          </p>

          {post.content && (
            <div
              className={cn(montserrat.className, "blog-content mt-6")}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </div>

        {post.tags.length > 0 && (
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={cn(montserrat.className, "rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-500")}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      <RelatedCarousel posts={related} />
    </div>
  );
}
