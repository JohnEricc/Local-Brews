import { useCallback, useMemo, useState } from "react";
import {
  ArrowDownWideNarrow,
  Grid2X2,
  List,
  Search,
  SlidersHorizontal,
  UtensilsCrossed,
} from "lucide-react";
import {
  categories,
  products,
  type MenuProduct,
} from "../data/menu";
import { cn } from "../lib/utils";
import MenuCard from "./MenuCard";
import MenuListItem from "./MenuListItem";

type SortKey = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";
type ViewMode = "grid" | "list";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "default", label: "Category Default" },
  { key: "price-asc", label: "Lowest Price" },
  { key: "price-desc", label: "Highest Price" },
  { key: "name-asc", label: "A → Z" },
  { key: "name-desc", label: "Z → A" },
];

interface MenuSectionProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: string;
  onCategoryChange: (key: string) => void;
}

const categoryToLabel = categories.reduce<Record<string, string>>((acc, c) => {
  acc[c.key] = c.label;
  return acc;
}, {});

const getCategoryLabel = (key: string) => categoryToLabel[key] ?? "";

export default function MenuSection({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: MenuSectionProps) {
  const [sort, setSort] = useState<SortKey>("default");
  const [view, setView] = useState<ViewMode>("grid");

  const handleSortChange = useCallback((value: string) => {
    setSort(value as SortKey);
  }, []);

  const handleSetGridView = useCallback(() => setView("grid"), []);
  const handleSetListView = useCallback(() => setView("list"), []);

  const handleReset = useCallback(() => {
    onSearchChange("");
    onCategoryChange("all");
    setSort("default");
  }, [onSearchChange, onCategoryChange]);

  const updateCategory = useCallback(
    (key: string) => {
      onCategoryChange(key);
      if (key === "all") setSort("default");
    },
    [onCategoryChange]
  );

  const visible = useMemo<MenuProduct[]>(() => {
    const q = search.trim().toLowerCase();
    let list: MenuProduct[] = products;

    if (activeCategory !== "all" || q) {
      list = products.filter((p) => {
        const inCategory =
          activeCategory === "all" || p.category === activeCategory;
        if (!inCategory) return false;
        if (!q) return true;
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      });
    }

    if (sort === "default") return list;

    const arr = list.slice();
    switch (sort) {
      case "price-asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price-desc":
        return arr.sort((a, b) => b.price - a.price);
      case "name-asc":
        return arr.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return arr.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return arr;
    }
  }, [activeCategory, search, sort]);

  const renderedItems = useMemo(() => {
    if (view === "grid") {
      return visible.map((product) => (
        <MenuCard
          key={product.id}
          product={product}
          categoryLabel={getCategoryLabel(product.category)}
        />
      ));
    }
    return visible.map((product) => (
      <MenuListItem
        key={product.id}
        product={product}
        categoryLabel={getCategoryLabel(product.category)}
      />
    ));
  }, [visible, view]);

  const searchTrimmed = search.trim();

  return (
    <section
      id="menu"
      className="relative scroll-mt-28 bg-coffee-900 py-16 sm:py-24"
      aria-labelledby="menu-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-700/10 blur-[100px]"
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            Our Menu
          </p>
          <h2
            id="menu-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream-50 sm:text-4xl"
          >
            Crafted to your craving
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream-100/65">
            Filter by category, sort by price or name, and switch between our
            Instaview grid and a clean list view. Everything is made fresh —
            just the way you like it.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-3">
          <div className="no-scrollbar -mx-4 flex w-full items-center gap-2 overflow-x-auto px-4 py-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => updateCategory(cat.key)}
                className={cn(
                  "shrink-0 touch-manipulation whitespace-nowrap rounded-full border px-4 text-xs font-semibold transition-transform-colors min-h-[44px]",
                  activeCategory === cat.key
                    ? "border-amber-500 bg-amber-500 text-coffee-950"
                    : "border-white/10 bg-white/5 text-cream-100/70 hover:border-amber-500/40 hover:text-cream-100"
                )}
                aria-pressed={activeCategory === cat.key}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <label htmlFor="sort-select" className="sr-only">
                Sort menu by
              </label>
              <ArrowDownWideNarrow className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-100/50" />
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none min-h-[44px] rounded-full border border-white/10 bg-coffee-800 py-2.5 pl-9 pr-9 text-xs font-semibold text-cream-100 outline-none transition-transform-colors focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.key} value={opt.key} className="bg-coffee-800">
                    {opt.label}
                  </option>
                ))}
              </select>
              <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-cream-100/40" />
            </div>

            <div
              className="flex items-center rounded-full border border-white/10 bg-coffee-800 p-1"
              role="group"
              aria-label="Toggle view"
            >
              <button
                onClick={handleSetGridView}
                aria-label="Instaview grid"
                aria-pressed={view === "grid"}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full transition-transform-colors",
                  view === "grid"
                    ? "bg-amber-500 text-coffee-950"
                    : "text-cream-100/60 hover:text-cream-100"
                )}
              >
                <Grid2X2 className="h-4 w-4" />
              </button>
              <button
                onClick={handleSetListView}
                aria-label="List view"
                aria-pressed={view === "list"}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full transition-transform-colors",
                  view === "list"
                    ? "bg-amber-500 text-coffee-950"
                    : "text-cream-100/60 hover:text-cream-100"
                )}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search within menu */}
        <div className="relative mt-4 md:hidden">
          <label htmlFor="menu-search" className="sr-only">
            Search the menu
          </label>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-100/40" />
          <input
            id="menu-search"
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search our menu…"
            className="w-full min-h-[44px] rounded-full bg-white/5 border border-white/10 px-4 pl-10 py-3 text-sm text-cream-100 placeholder:text-cream-100/40 outline-none transition-transform-colors focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20"
          />
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-cream-100/45">
          <span>
            Showing{" "}
            <span className="font-semibold text-amber-400">{visible.length}</span>{" "}
            {visible.length === 1 ? "item" : "items"}
            {searchTrimmed && <> · searching “{searchTrimmed}”</>}
          </span>
        </div>

        {visible.length > 0 ? (
          view === "grid" ? (
            <div
              className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:gap-6"
              aria-label="Product grid"
            >
              {renderedItems}
            </div>
          ) : (
            <div
              className="mt-5 grid grid-cols-1 gap-3 2xl:grid-cols-2"
              aria-label="Product list"
            >
              {renderedItems}
            </div>
          )
        ) : (
          <div className="mt-5 flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 ring-1 ring-amber-500/20">
              <UtensilsCrossed className="h-7 w-7 text-amber-400/70" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-cream-50">
              No matches found
            </h3>
            <p className="mt-2 max-w-sm text-sm text-cream-100/55">
              We couldn't find anything for that filter or search. Try a
              different category or clear your search.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-coffee-950 transition-transform-colors hover:bg-amber-400 active:scale-[0.98]"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}