import { useCallback, useEffect, useState } from "react";
import {
  Check,
  Mic,
  ShieldAlert,
  UserX,
  X,
} from "lucide-react";

interface Amenity {
  id: string;
  icon: typeof Mic;
  name: string;
  badge: string;
  rate: string;
  rateNote: string;
  policy: string;
  details: string[];
  buttonLabel: string;
  rulesTitle: string;
  rules: string[];
}

const amenityCards: Amenity[] = [
  {
    id: "ktv",
    icon: Mic,
    name: "Private KTV Room",
    badge: "Barkada Favorite",
    rate: "₱600 / hour",
    rateNote: "Non-consumable",
    policy: "First-come, first-served.",
    details: [
      "Private air-conditioned room",
      "Up to 10 pax capacity",
      "Full song selection system",
      "Dual microphones",
    ],
    buttonLabel: "View KTV Guidelines",
    rulesTitle: "KTV Room Guidelines",
    rules: [
      "Maximum of 10 pax per room.",
      "Payment is required upfront before the session starts.",
      "The room is under CCTV monitoring at all times.",
      "Outside food is not allowed inside the KTV rooms.",
      "Please take care of the microphones and equipment.",
      "Kindly keep the room clean and dispose of trash properly.",
    ],
  },
  {
    id: "billiards",
    icon: ShieldAlert,
    name: "Billiards Lounge",
    badge: "Hourly Rental",
    rate: "₱250 / hour",
    rateNote: "",
    policy: "First-come, first-served. No slot reservations.",
    details: [
      "Premium billiard table",
      "Quality cues provided",
      "Clean and spacious playing area",
    ],
    buttonLabel: "View House Rules",
    rulesTitle: "Billiards House Rules",
    rules: [
      "Playing gloves are required while on the table.",
      "Wear clean footwear at all times.",
      "No dusting or powder applied on the table surface.",
      "Please handle the cues and equipment with care.",
      "Damage to any equipment is chargeable.",
      "First-come, first-served — no slot reservations.",
    ],
  },
];

function RulesModal({
  amenity,
  onClose,
}: {
  amenity: Amenity;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rules-modal-title"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0b0b0e]/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-coffee-800 shadow-card will-change-transform animate-fade-up"
      >
        <header className="relative overflow-hidden border-b border-white/10 bg-coffee-900/80 px-6 py-5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_-20%,rgba(217,159,62,0.18),transparent_60%)]"
          />
          <div className="relative flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-500/25">
              <amenity.icon className="h-5 w-5 text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                {amenity.name}
              </p>
              <h3
                id="rules-modal-title"
                className="mt-1 font-display text-xl font-semibold text-cream-50"
              >
                {amenity.rulesTitle}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close guidelines"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-cream-100/70 transition-transform-colors hover:bg-white/10 hover:text-cream-50"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <ul className="space-y-3 px-6 py-6">
          {amenity.rules.map((rule) => (
            <li key={rule} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span className="leading-relaxed text-cream-100/80">{rule}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/10 bg-coffee-900/60 px-6 py-4">
          <p className="text-xs leading-relaxed text-cream-100/50">
            Rates are non-consumable. Rules are enforced to keep every session
            safe and enjoyable for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Amenities() {
  const [activeModal, setActiveModal] = useState<Amenity | null>(null);

  const openRules = useCallback((amenity: Amenity) => {
    setActiveModal(amenity);
  }, []);
  const closeRules = useCallback(() => setActiveModal(null), []);

  return (
    <section
      id="amenities"
      className="relative scroll-mt-28 overflow-hidden bg-[#0b0b0e] py-16 sm:py-24"
      aria-labelledby="amenities-heading"
    >
      {/* Ambient warm amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/8 via-amber-900/5 to-transparent"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            Amenities &amp; Entertainment
          </p>
          <h2
            id="amenities-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance text-cream-50 sm:text-4xl"
          >
            Beyond Coffee — Play &amp; Unwind in Imus
          </h2>
          <p className="mt-4 leading-relaxed text-cream-100/70">
            Whether you&apos;re singing your heart out or aiming for the corner
            pocket, Local Brew offers private entertainment spaces for your
            barkada.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {amenityCards.map((card) => (
            <article
              key={card.id}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-coffee-800/70 shadow-card will-change-transform duration-300 hover:-translate-y-1 hover:border-amber-500/40"
            >
              <header className="relative overflow-hidden bg-gradient-to-br from-amber-600/20 via-coffee-800 to-coffee-900 p-6 sm:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_-20%,rgba(217,159,62,0.2),transparent_60%)]"
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 ring-1 ring-amber-500/25">
                    <card.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                    {card.badge}
                  </span>
                </div>
                <h3 className="relative mt-4 font-display text-2xl font-semibold text-cream-50">
                  {card.name}
                </h3>
                <div className="relative mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-2xl font-semibold text-amber-400">
                    {card.rate}
                  </span>
                  {card.rateNote && (
                    <span className="text-xs font-medium text-cream-100/50">
                      ({card.rateNote})
                    </span>
                  )}
                </div>
              </header>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm leading-relaxed text-cream-100/70">
                  <span className="font-semibold text-amber-400/90">Policy:</span>{" "}
                  {card.policy}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {card.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      <span className="leading-relaxed text-cream-100/80">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-1">
                  <button
                    type="button"
                    onClick={() => openRules(card)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-400 transition-transform-colors hover:bg-amber-500 hover:text-coffee-950 active:scale-[0.98]"
                  >
                    <UserX className="h-4 w-4" />
                    {card.buttonLabel}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-cream-100/45">
          Amenity rates are non-consumable. A quick heads-up: local rules and
          rates may change — ask any staff for the latest.
        </p>
      </div>

      {/* Rules modal */}
      {activeModal && (
        <RulesModal amenity={activeModal} onClose={closeRules} />
      )}
    </section>
  );
}