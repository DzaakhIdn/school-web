import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/blog-data";
import RelatedCarousel from "@/components/Blog/related-carousel";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return post ? { title: `${post.title} | Blog HSIBS`, description: post.excerpt } : {};
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(getAllPosts().filter((p) => p.slug !== post.slug && p.category !== post.category))
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
          <Image src={post.cover} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
        </div>

        <div className={cn(montserrat.className, "mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg")}>
          <p className="text-lg font-medium text-slate-900 sm:text-xl">{post.excerpt}</p>
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

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
      </article>

      <RelatedCarousel posts={related} />
    </div>
  );
}
