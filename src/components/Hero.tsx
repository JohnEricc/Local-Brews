import { Coffee, MapPin, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreMenu: () => void;
  onVisitStore: () => void;
}

export default function Hero({ onExploreMenu, onVisitStore }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0b0b0e] pt-32 sm:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* Ambient warm amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-amber-900/5 to-transparent blur-2xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-400 animate-fade-up will-change-transform">
            <Sparkles className="h-3.5 w-3.5" />
            Coffee shop in Imus, Cavite
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-cream-50 animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Local Brew —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Handcrafted Coffee
            </span>{" "}
            &amp; Comfort Food, Locally Sourced.
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-100/70 animate-fade-up will-change-transform sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Fresh brews made the lokal way. Locally sourced beans and comfort
            food, served with a smile right here in Imus, Cavite. Your daily
            cup just found its home.
          </p>

          <div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <button
              onClick={onExploreMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-coffee-950 shadow-glow transition hover:bg-amber-400 active:scale-95 sm:w-auto"
            >
              <Coffee className="h-4 w-4" />
              Explore Menu
            </button>
            <button
              onClick={onVisitStore}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-cream-100 transition hover:border-amber-500/50 hover:bg-white/10 active:scale-95 sm:w-auto"
            >
              <MapPin className="h-4 w-4 text-amber-400" />
              Visit Store
            </button>
          </div>

          {/* Stats strip */}
          <div
            className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] py-5 backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {[
              { value: "100%", label: "Locally sourced" },
              { value: "30+", label: "Menu items" },
              { value: "7–11", label: "Open daily" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 text-center">
                <p className="font-display text-2xl font-semibold text-amber-400 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-cream-100/50 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curved fade to next section */}
      <div className="mt-16 sm:mt-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full fill-coffee-900"
          aria-hidden
        >
          <path d="M0 120V40c240 40 480 60 720 60s480-20 720-60v80z" />
        </svg>
      </div>
    </section>
  );
}