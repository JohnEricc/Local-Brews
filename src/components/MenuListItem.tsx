import { memo } from "react";
import type { MenuProduct } from "../data/menu";
import { formatPrice } from "../lib/utils";
import MenuImage from "./MenuImage";

interface MenuListItemProps {
  product: MenuProduct;
  categoryLabel: string;
}

function MenuListItemInner({ product, categoryLabel }: MenuListItemProps) {
  return (
    <article className="group flex gap-4 rounded-2xl border border-white/10 bg-[#13161c]/90 p-3 will-change-transform duration-300 hover:border-amber-500/40 hover:bg-[#161a21] sm:p-4 [content-visibility:auto] [contain-intrinsic-size:120px]">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
        <MenuImage
          src={product.image}
          alt={product.name}
          categoryLabel={categoryLabel}
          className="absolute inset-0"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-semibold leading-snug text-cream-50 sm:text-xl">
              {product.name}
            </h3>
            {product.badge ? (
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-400/80">
                {product.badge}
              </p>
            ) : (
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-cream-100/40">
                {categoryLabel}
              </p>
            )}
          </div>
          <span className="shrink-0 rounded-lg bg-amber-500/15 px-2.5 py-1 text-sm font-bold text-amber-400">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-cream-100/60 sm:text-sm">
          {product.description}
        </p>

        <div className="mt-auto flex min-h-[44px] items-center justify-between gap-3 pt-3">
          <span className="truncate text-xs text-cream-100/45">
            {product.size ? product.size : categoryLabel}
          </span>
          <button
            type="button"
            className="inline-flex shrink-0 min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-cream-50 ring-1 ring-white/10 transition-transform-colors hover:bg-amber-500 hover:text-coffee-950 hover:ring-amber-500 active:scale-[0.96]"
            aria-label={`Add ${product.name} to order`}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

const MenuListItem = memo(MenuListItemInner);
export default MenuListItem;