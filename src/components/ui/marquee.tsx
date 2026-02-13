"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface MarqueeProps extends ComponentProps<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  children?: React.ReactNode;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex overflow-hidden [--duration:25s]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-6 will-change-transform",
          vertical
            ? "animate-marquee-vertical"
            : reverse
            ? "animate-marquee-reverse"
            : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
