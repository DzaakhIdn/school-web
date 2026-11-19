import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  src: string | null;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Cover artikel dengan placeholder bila cover_url kosong. */
export function PostCover({ src, alt, sizes, priority, className }: Props) {
  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900">
        <span className="text-sm font-semibold tracking-[0.3em] text-white/70">HSIBS</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
