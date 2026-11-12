import { cn } from "@/lib/utils";

/**
 * Motif dekorasi "kipas" (sinar melengkung) untuk sudut halaman.
 * murni SVG, tanpa aset gambar.
 */
const FanPattern = ({ className }: { className?: string }) => {
  const rays = Array.from({ length: 15 }, (_, index) => {
    const angle = (-92 + index * 6.6) * (Math.PI / 180);
    const length = 120 + (index % 4) * 26;
    const x = 8 + Math.cos(angle) * length;
    const y = 212 + Math.sin(angle) * length;

    return (
      <line
        key={index}
        x1="8"
        y1="212"
        x2={x}
        y2={y}
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        opacity={0.35 + (index % 3) * 0.18}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 220 220"
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
    >
      {rays}
    </svg>
  );
};

export default FanPattern;
