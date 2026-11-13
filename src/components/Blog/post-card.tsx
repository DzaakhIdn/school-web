import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import { formatPostDate, type BlogPost } from "@/lib/blog-data";

export const PostCard = ({ post }: { post: BlogPost }) => (
  <article className="group flex h-full flex-col rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-100 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5">
    <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
      <Image
        src={post.cover}
        alt={post.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </Link>

    <div className="flex flex-1 flex-col px-2.5 pb-2 pt-4">
      <div className="flex flex-wrap gap-1.5">
        {[post.category, ...post.tags.filter((t) => t !== post.category)].slice(0, 2).map((tag) => (
          <span
            key={tag}
            className={cn(
              montserrat.className,
              "rounded-md border border-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-500"
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3
        className={cn(
          spaceGrotesk.className,
          "mt-3 line-clamp-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 sm:text-lg"
        )}
      >
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className={cn(montserrat.className, "mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600")}>
        {post.excerpt}
      </p>

      <div
        className={cn(
          montserrat.className,
          "mt-auto flex items-center gap-4 pt-4 text-xs text-slate-500"
        )}
      >
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-3.5" aria-hidden />
          {formatPostDate(post.publishedAt)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" aria-hidden />
          {post.readTime} menit
        </span>
      </div>
    </div>
  </article>
);
