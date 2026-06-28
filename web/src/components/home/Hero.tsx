"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RippleButton } from "@/components/ui/RippleButton";
import { site, waLink } from "@/lib/site";

const stats = [
  { target: 95, suffix: "+", label: "Products" },
  { target: 500, suffix: "+", label: "Customers" },
  { target: 9, suffix: "", label: "Categories" },
];

export function Hero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    router.push(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
  }

  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden text-white">
      <ParallaxImage
        src="/images/furniture.1.jpg"
        alt="Premium furniture and home décor by Irene Household Collections"
        className="absolute inset-0 -z-10 h-full w-full"
        strength={60}
        priority
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className="relative mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <span
          className="animate-fade-up mb-4 inline-block rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[2px] text-gold"
        >
          ✦ Quality. Comfort. Style.
        </span>

        <h1
          className="animate-fade-up text-balance text-4xl font-bold leading-tight md:text-6xl [animation-delay:100ms]"
        >
          Transform Your House Into
          <br />
          Your <em className="text-gold not-italic">Dream Home</em>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-5 max-w-xl text-white/75 [animation-delay:200ms]"
        >
          Premium furniture, beddings, kitchenware and décor — delivered
          across Kenya
        </p>

        <form
          onSubmit={handleSearch}
          className="animate-fade-up mx-auto mt-7 flex max-w-lg overflow-hidden rounded-xl bg-white shadow-lift [animation-delay:300ms]"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="What are you looking for? e.g. fluffy duvet, marble table..."
            className="flex-1 px-4 py-3.5 text-sm text-ink outline-none"
          />
          <button
            type="submit"
            className="bg-gold px-5 text-sm font-bold text-ink transition-colors hover:bg-gold-2"
          >
            🔍 Search
          </button>
        </form>

        <div
          className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-3 [animation-delay:400ms]"
        >
          <RippleButton
            as={Link}
            href="/shop"
            className="rounded-lg bg-gold px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-gold-2"
          >
            🛍️ Shop Collection
          </RippleButton>
          <RippleButton
            as="a"
            href={waLink(
              "Hi! I'd like to place an order from Irene Household Collections"
            )}
            target="_blank"
            rippleColor="rgba(255,255,255,0.35)"
            className="rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            💬 WhatsApp Order
          </RippleButton>
        </div>

        <div
          className="animate-fade-up mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-7 sm:grid-cols-4 [animation-delay:550ms]"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <strong className="block font-display text-2xl text-gold md:text-3xl">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </strong>
              <span className="text-[11px] uppercase tracking-wide text-white/60">
                {s.label}
              </span>
            </div>
          ))}
          <div className="hidden sm:block">
            <strong className="block text-2xl md:text-3xl">🚚</strong>
            <span className="text-[11px] uppercase tracking-wide text-white/60">
              Fast Delivery
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 hidden justify-center gap-3 md:flex">
        {["🔒 M-Pesa Secure", "⭐ 500+ Happy Customers", "🚚 Countrywide Delivery"].map(
          (b, i) => (
            <div
              key={b}
              style={{ animationDelay: `${600 + i * 100}ms` }}
              className="animate-fade-up rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md"
            >
              {b}
            </div>
          )
        )}
      </div>
    </section>
  );
}
