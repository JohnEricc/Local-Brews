import { useCallback, useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { categories } from "../data/menu";
import { cn } from "../lib/utils";

interface NavbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onCategorySelect: (key: string) => void;
  activeCategory: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({
  search,
  onSearchChange,
  onCategorySelect,
  activeCategory,
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      // rAF-throttled scroll update for steady 60fps on mobile
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCategoryClick = useCallback(
    (key: string) => {
      onCategorySelect(key);
      onNavigate("menu");
      setMobileOpen(false);
    },
    [onCategorySelect, onNavigate]
  );

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onNavigate("menu");
      setSearchOpen(false);
    },
    [onNavigate]
  );

  const handleToggleMobile = useCallback(() => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (next) setSearchOpen(false);
      return next;
    });
  }, []);

  const handleToggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev);
  }, []);

  const handleGoHome = useCallback(() => onNavigate("home"), [onNavigate]);
  const handleGoMenu = useCallback(() => {
    onNavigate("menu");
    setMobileOpen(false);
  }, [onNavigate]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 will-change-transform",
        scrolled
          ? "bg-[#0b0b0e]/95 backdrop-blur-xl shadow-lg"
          : "bg-[#0b0b0e]/60 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto flex items-center gap-4 px-4 sm:px-6 h-16 sm:h-20">
        {/* Brand */}
        <button
          onClick={handleGoHome}
          className="flex items-center gap-2 sm:gap-3 text-left shrink-0"
          aria-label="Local Brew home"
        >
          <img
            src="/Images/logo.webp"
            alt="Local Brew Logo"
            className="h-9 w-9 sm:h-12 sm:w-12 object-contain brightness-0 invert scale-110"
          />
          <span className="flex flex-col leading-none">
            <span className="text-sm sm:text-lg font-bold tracking-tight text-white leading-tight">
              Local Brew
            </span>
            <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-amber-500 uppercase leading-none">
              Imus, Cavite
            </span>
          </span>
        </button>

        {/* Search (desktop) */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex-1 max-w-md hidden md:block"
          role="search"
        >
          <label htmlFor="nav-search" className="sr-only">
            Search the menu
          </label>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-100/40" />
          <input
            id="nav-search"
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search iced latte, carbonara, croissant…"
            className="w-full rounded-full bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 text-sm text-cream-100 placeholder:text-cream-100/40 outline-none transition-transform-colors focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 focus:bg-white/10"
          />
        </form>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleToggleSearch}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-cream-100/80 hover:text-cream-50 hover:bg-white/10 transition-transform-colors"
            aria-label="Search the menu"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            onClick={handleGoMenu}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-coffee-950 transition-transform-colors hover:bg-amber-400 active:scale-[0.97]"
          >
            <ShoppingBag className="h-4 w-4" />
            Order Now
          </button>

          <button
            onClick={handleToggleMobile}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-cream-100 hover:bg-white/10 transition-transform-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <form
          onSubmit={handleSearchSubmit}
          className="md:hidden px-4 pb-3"
          role="search"
        >
          <label htmlFor="mobile-nav-search" className="sr-only">
            Search the menu
          </label>
          <Search className="pointer-events-none absolute ml-3.5 mt-3 h-4 w-4 text-cream-100/40" />
          <input
            id="mobile-nav-search"
            type="search"
            autoFocus
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search our menu…"
            className="w-full rounded-full bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 text-sm text-cream-100 placeholder:text-cream-100/40 outline-none transition-transform-colors focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20"
          />
        </form>
      )}

      {/* Desktop category nav */}
      <nav
        className="hidden lg:block border-t border-white/[0.06]"
        aria-label="Menu categories"
      >
        <div className="container mx-auto flex items-center gap-1 overflow-x-auto px-6 py-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryClick(cat.key)}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-transform-colors",
                activeCategory === cat.key
                  ? "bg-amber-500/15 text-amber-400"
                  : "text-cream-100/60 hover:text-cream-100 hover:bg-white/5"
              )}
            >
              {cat.short ?? cat.label}
            </button>
          ))}
          <span
            aria-hidden
            className="mx-1 h-4 w-px shrink-0 bg-white/10"
          />
          <button
            onClick={() => onNavigate("amenities")}
            className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium text-amber-400/90 transition-transform-colors hover:bg-amber-500/10 hover:text-amber-400"
          >
            Amenities
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium text-amber-400/90 transition-transform-colors hover:bg-amber-500/10 hover:text-amber-400"
          >
            About Us
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-white/10 bg-coffee-950/95 backdrop-blur-xl"
          aria-label="Mobile category navigation"
        >
          <div className="container mx-auto grid grid-cols-2 gap-1 p-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
                className={cn(
                  "rounded-xl px-4 py-3 text-left text-sm font-medium transition-transform-colors",
                  activeCategory === cat.key
                    ? "bg-amber-500/15 text-amber-400"
                    : "text-cream-100/70 hover:bg-white/5"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 pt-3 pb-4">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => {
                  onNavigate("amenities");
                  setMobileOpen(false);
                }}
                className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-amber-400 transition-transform-colors hover:bg-amber-500/10"
              >
                Amenities
              </button>
              <button
                onClick={() => {
                  onNavigate("about");
                  setMobileOpen(false);
                }}
                className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-amber-400 transition-transform-colors hover:bg-amber-500/10"
              >
                About Us
              </button>
            </div>
          </div>
          <div className="border-t border-white/10 p-4">
            <button
              onClick={handleGoMenu}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-coffee-950 transition-transform-colors hover:bg-amber-400"
            >
              <ShoppingBag className="h-4 w-4" />
              Order Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}