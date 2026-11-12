import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/** Logo sekolah (`public/important/logo.png`, rasio 3721x3206). */
export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/important/logo.png"
      alt="Logo HSI Boarding School"
      width={372}
      height={320}
      priority={priority}
      className={cn("h-auto w-10", className)}
    />
  );
}

export default BrandLogo;
