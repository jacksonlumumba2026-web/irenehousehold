"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { clsx } from "clsx";
import { useCart } from "@/context/CartContext";
import { MobileMenu } from "./MobileMenu";
import { NavBadge } from "./NavBadge";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { scrollY } = useScroll();
  const router = useRouter();
  const { cartCount, wishlistCount } = useCart();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    router.push(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
  }

  return (
    <>
      <nav
        className={clsx(
          "animate-nav-in sticky top-0 z-50 flex items-center gap-2.5 px-[4%] py-2.5 backdrop-blur-xl transition-colors duration-300",
          scrolled ? "bg-ink shadow-lg" : "bg-ink/70"
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="Irene Household Collections"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border-2 border-gold object-cover"
          />
          <div className="hidden sm:block">
            <b className="block text-xs font-bold leading-tight text-white">
              Irene Household
            </b>
            <small className="text-[9px] uppercase tracking-[2px] text-gold">
              Collections
            </small>
          </div>
        </Link>

        <form
          onSubmit={handleSearch}
          className="relative max-w-[600px] flex-1"
        >
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search furniture, duvets, kitchenware..."
            className="w-full rounded-lg border-none bg-white py-2.5 pl-9 pr-16 text-[13.5px] text-ink outline-none placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 rounded-r-lg bg-gold px-3.5 text-[13px] font-bold text-ink transition-colors hover:bg-gold-2"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-1.5">
          <Link
            href="/wishlist"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg text-lg text-white transition-colors hover:bg-white/10"
            title="Wishlist"
          >
            ❤️
            <NavBadge count={wishlistCount} />
          </Link>
          <Link
            href="/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg text-lg text-white transition-colors hover:bg-white/10"
            title="Cart"
          >
            🛒
            <NavBadge count={cartCount} />
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </nav>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
