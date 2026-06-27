"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { NavBadge } from "./NavBadge";

export function BottomNav() {
  const { cartCount, wishlistCount } = useCart();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-white/95 backdrop-blur-md md:hidden">
      <div className="flex w-full">
        {[
          { href: "/", icon: "🏠", label: "Home" },
          { href: "/shop", icon: "🛍️", label: "Shop" },
          { href: "/wishlist", icon: "❤️", label: "Saved", badge: wishlistCount },
          { href: "/cart", icon: "🛒", label: "Cart", badge: cartCount },
          { href: "/contact", icon: "💬", label: "Chat" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] text-ink"
          >
            <span className="relative text-lg">
              {item.icon}
              {typeof item.badge === "number" && <NavBadge count={item.badge} />}
            </span>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
