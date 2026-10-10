import { Clock, Coffee, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { categories, storeInfo } from "../data/menu";

interface FooterProps {
  onNavigate: (id: string) => void;
  onCategorySelect: (key: string) => void;
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Localbrew2022/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/localbrew_main/" },
];

export default function Footer({ onNavigate, onCategorySelect }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-coffee-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Local Brew footer
      </h2>

      <div className="container mx-auto px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src="/Images/logo.webp"
              alt="Local Brew Logo"
              className="h-16 w-16 object-contain brightness-0 invert"
            />
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-tight text-cream-50">
                  Local Brew
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500/80">
                  Imus, Cavite
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/60">
              Handcrafted coffee &amp; comfort food, locally sourced. The home
              away from home for coffee lovers in Imus, Cavite.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cream-100/60 transition hover:border-amber-500/50 hover:text-amber-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu links */}
          <nav aria-label="Footer menu categories">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/40">
              Menu
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {categories
                .filter((c) => c.key !== "all")
                .map((c) => (
                  <li key={c.key}>
                    <button
                      onClick={() => {
                        onCategorySelect(c.key);
                        onNavigate("menu");
                      }}
                      className="text-cream-100/60 transition hover:text-amber-400"
                    >
                      {c.short ?? c.label}
                    </button>
                  </li>
                ))}
            </ul>
            <div className="mt-4 border-t border-white/10 pt-4">
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => onNavigate("amenities")}
                    className="font-medium text-amber-400/90 transition hover:text-amber-400"
                  >
                    Amenities
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("about")}
                    className="font-medium text-amber-400/90 transition hover:text-amber-400"
                  >
                    About Us
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          {/* Visit us */}
          <div id="visit-us" className="scroll-mt-28">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/40">
              Visit us
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <a
                  href={storeInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-cream-100/60 transition hover:text-amber-400"
                >
                  {storeInfo.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <a
                  href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
                  className="text-cream-100/60 transition hover:text-amber-400"
                >
                  {storeInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/40">
              Opening hours
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span className="text-cream-100/60">
                  Mon – Fri · {storeInfo.hours.weekday}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span className="text-cream-100/60">
                  Sat – Sun · {storeInfo.hours.weekend}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream-100/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Local Brew. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <Coffee className="h-3.5 w-3.5 text-amber-500/60" />
            Brewed with love in Imus, Cavite
          </p>
        </div>
      </div>
    </footer>
  );
}