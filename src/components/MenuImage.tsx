import { memo, useState } from "react";
import { Coffee } from "lucide-react";
import { cn } from "../lib/utils";

interface MenuImageProps {
  src?: string;
  alt: string;
  categoryLabel: string;
  className?: string;
}

function MenuImageInner({ src, alt, categoryLabel, className }: MenuImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const showImage = Boolean(src && !failed);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-900/90",
        className
      )}
    >
      {showImage && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover will-change-transform duration-500 group-hover:scale-105",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Skeleton pulse while loading */}
      {showImage && !loaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-800" />
      )}

      {!showImage && <FallbackCard categoryLabel={categoryLabel} />}
    </div>
  );
}

function FallbackCard({ categoryLabel }: { categoryLabel: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
      <div
        aria-hidden
        className="absolute inset-4 rounded-[inherit] border border-amber-500/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,159,62,0.12),transparent_55%)]"
      />
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-amber-500/20">
        <Coffee className="h-6 w-6 text-amber-400/80" />
      </div>
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cream-100/40">
          {categoryLabel}
        </p>
        <p className="mt-1 text-xs text-cream-100/60">Local Brew</p>
      </div>
    </div>
  );
}

const MenuImage = memo(MenuImageInner);
export default MenuImage;