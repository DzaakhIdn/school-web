"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import { PostCard } from "@/components/Blog/post-card";
import { formatPostDate, getAllPosts, getCategories, getFeaturedPosts, type BlogPost } from "@/lib/blog-data";

const PER_PAGE = 9;
const AUTO_INTERVAL = 6000;
const ALL = "Semua";

/* ------------------------------------------------------------------ */
/* Hero carousel (fade)                                                */
/* ------------------------------------------------------------------ */

const FeaturedCarousel = ({ posts }: { posts: BlogPost[] }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = posts.length;
  const post = posts[index];

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (paused || reduceMotion || total < 2) return;
    const t = setTimeout(() => go(1), AUTO_INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, reduceMotion, total, go]);

  if (!post) return null;

  return (
    <section className="bg-white px-2 pt-16 sm:px-4 sm:pt-20">
      <div
        className="relative isolate h-[78svh] min-h-[480px] max-h-[760px] overflow-hidden rounded-3xl bg-slate-900"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Artikel pilihan"
      >
        {/* Gambar: crossfade */}
        <AnimatePresence initial={false}>
          <motion.div
            key={post.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={post.cover} alt="" fill priority sizes="100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

        {/* Konten */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-8 lg:p-12">
          <div className="max-w-2xl">
            <span
              className={cn(
                montserrat.className,
                "inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
              )}
            >
              {total} Artikel Pilihan
            </span>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={post.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
                aria-live="polite"
              >
                <h1
                  className={cn(
                    spaceGrotesk.className,
                    "mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
                  )}
                >
                  {post.title}
                </h1>
                <p
                  className={cn(
                    montserrat.className,
                    "mt-3 line-clamp-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
                  )}
                >
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        montserrat.className,
                        "rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className={cn(montserrat.className, "text-xs text-white/70")}>
                    · {formatPostDate(post.publishedAt)}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indikator */}
            {total > 1 && (
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {posts.map((p, i) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Tampilkan artikel ${i + 1}`}
                      aria-current={i === index}
                      className="relative h-1.5 overflow-hidden rounded-full bg-white/30 transition-all duration-300"
                      style={{ width: i === index ? 32 : 10 }}
                    >
                      {i === index && (
                        <motion.span
                          key={`${p.slug}-${paused}`}
                          initial={{ scaleX: paused || reduceMotion ? 1 : 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: paused || reduceMotion ? 0 : AUTO_INTERVAL / 1000, ease: "linear" }}
                          className="absolute inset-0 origin-left rounded-full bg-white"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            aria-label={`Baca artikel: ${post.title}`}
            className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-slate-900 shadow-lg transition-transform hover:scale-105 sm:size-14"
          >
            <ArrowUpRight className="size-5 sm:size-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/** [1, 2, 3, "…", 10] */
function pageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push("…");
    out.push(p);
  });
  return out;
}

const Pagination = ({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) => {
  if (totalPages <= 1) return null;
  const arrow =
    "grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600 disabled:pointer-events-none disabled:opacity-40";

  return (
    <nav aria-label="Navigasi halaman" className="mt-12 flex items-center justify-center gap-2">
      <button type="button" onClick={() => onChange(page - 1)} disabled={page === 1} aria-label="Halaman sebelumnya" className={arrow}>
        <ChevronLeft className="size-4" />
      </button>
      {pageNumbers(page, totalPages).map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="px-1 text-slate-400">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              spaceGrotesk.className,
              "grid size-10 place-items-center rounded-full text-sm font-semibold transition-colors",
              p === page ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100"
            )}
          >
            {p}
          </button>
        )
      )}
      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Halaman berikutnya"
        className={arrow}
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
};

/* ------------------------------------------------------------------ */
/* Halaman                                                             */
/* ------------------------------------------------------------------ */

export default function BlogPage() {
  const allPosts = useMemo(() => getAllPosts(), []);
  const featured = useMemo(() => getFeaturedPosts(), []);
  const categories = useMemo(() => [ALL, ...getCategories()], []);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allPosts.filter(
      (p) =>
        (category === ALL || p.category === category) &&
        (!q || [p.title, p.excerpt, ...p.tags].some((s) => s.toLowerCase().includes(q)))
    );
  }, [allPosts, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const changePage = (p: number) => {
    setPage(p);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      <FeaturedCarousel posts={featured.length ? featured : allPosts.slice(0, 4)} />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2
              className={cn(
                spaceGrotesk.className,
                "text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              )}
            >
              Berita & Artikel Terbaru
            </h2>
            <p className={cn(montserrat.className, "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base")}>
              Kabar terbaru seputar kegiatan santri, pengumuman penting, dan cerita inspiratif dari HSI Boarding
              School.
            </p>
          </motion.div>

          {/* Pencarian & kategori */}
          <div ref={listRef} className="mt-8 scroll-mt-24 sm:scroll-mt-28">
            <div className="relative mx-auto max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Cari artikel…"
                aria-label="Cari artikel"
                className={cn(
                  montserrat.className,
                  "w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                )}
              />
            </div>

            <div className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCategory(c);
                    setPage(1);
                  }}
                  aria-pressed={category === c}
                  className={cn(
                    montserrat.className,
                    "shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
                    category === c
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid 3 x 3 */}
          {visible.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${category}-${query}-${currentPage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {visible.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </motion.div>
            </AnimatePresence>
          ) : (
            <p className={cn(montserrat.className, "mt-12 text-center text-sm text-slate-500")}>
              Tidak ada artikel yang cocok dengan pencarian Anda.
            </p>
          )}

          <Pagination page={currentPage} totalPages={totalPages} onChange={changePage} />
        </div>
      </section>
    </div>
  );
}
