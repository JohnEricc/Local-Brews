import { Quote, Sparkles, Target } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden bg-coffee-950 py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      {/* Ambient warm amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/8 via-amber-900/5 to-transparent"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            About Local Brew
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance text-cream-50 sm:text-4xl"
          >
            Our Story &amp; Heart
          </h2>
          <p className="mt-4 leading-relaxed text-cream-100/70">
            Crafting meaningful everyday visits right here in Cavite.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          {/* Mission */}
          <article className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-coffee-800/70 shadow-card">
            <header className="border-b border-white/10 px-7 pt-7 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-500/25">
                  <Target className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                    Our Mission
                  </p>
                  <h3 className="font-display text-xl font-semibold text-cream-50">
                    Coffee made with purpose
                  </h3>
                </div>
              </div>
            </header>
            <div className="flex flex-1 flex-col p-7">
              <Quote className="h-6 w-6 shrink-0 rotate-180 text-amber-500/40" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-cream-100/80">
                To bring people together through coffee made with purpose, where
                every cup is crafted with care and every guest is welcomed with
                genuine attention. Local Brew exists to create a space where
                conversations flow, moments are shared, and people feel a sense
                of belonging — growing into one of the most recognized cafés in
                Cavite.
              </blockquote>
            </div>
          </article>

          {/* Vision */}
          <article className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-coffee-800/70 shadow-card">
            <header className="border-b border-white/10 px-7 pt-7 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-500/25">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                    Our Vision
                  </p>
                  <h3 className="font-display text-xl font-semibold text-cream-50">
                    A familiar place to belong
                  </h3>
                </div>
              </div>
            </header>
            <div className="flex flex-1 flex-col p-7">
              <Quote className="h-6 w-6 shrink-0 text-amber-500/40" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-cream-100/80">
                To grow hand in hand with the community, becoming a familiar
                place people return to not only for coffee, but for comfort,
                connection, and shared experiences — where people gather, feel
                valued, and find a sense of home.
              </blockquote>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}