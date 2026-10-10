import { memo } from "react";
import type { MenuProduct } from "../data/menu";
import { formatPrice } from "../lib/utils";
import MenuImage from "./MenuImage";

interface MenuCardProps {
  product: MenuProduct;
  categoryLabel: string;
}

function MenuCardInner({ product, categoryLabel }: MenuCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#13161c]/90 shadow-card will-change-transform duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-[#161a21] [content-visibility:auto] [contain-intrinsic-size:380px]">
      <div className="relative aspect-[4/3]">
        <MenuImage
          src={product.image}
          alt={product.name}
          categoryLabel={categoryLabel}
          className="absolute inset-0"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-full bg-coffee-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-cream-50 sm:text-xl">
            {product.name}
          </h3>
          <span className="shrink-0 rounded-lg bg-amber-500/15 px-2.5 py-1 text-sm font-bold text-amber-400">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-cream-100/60 line-clamp-3 sm:text-sm">
          {product.description}
        </p>

        <div className="mt-4 flex min-h-[44px] items-center justify-between gap-3 pt-1">
          <span className="flex min-w-0 items-center gap-2">
            <span className="truncate text-[10px] font-medium uppercase tracking-[0.18em] text-cream-100/40">
              {categoryLabel}
            </span>
            {product.size && (
              <span className="shrink-0 rounded-full border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-amber-400">
                {product.size}
              </span>
            )}
          </span>
          <button
            type="button"
            className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-white/5 px-4 min-h-[44px] text-xs font-semibold text-cream-50 ring-1 ring-white/10 transition-transform-colors hover:bg-amber-500 hover:text-coffee-950 hover:ring-amber-500 active:scale-[0.96]"
            aria-label={`Add ${product.name} to order`}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

const MenuCard = memo(MenuCardInner);
export default MenuCard;