"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "🏠 Home" },
  { href: "/shop", label: "🛍️ Shop All Products" },
  { href: "/#payment", label: "💳 M-Pesa Payment" },
  { href: "/#hotel", label: "🏨 Hotel / Airbnb" },
  { href: "/#community", label: "🌍 Community" },
  { href: "/about", label: "ℹ️ About Us" },
  { href: "/contact", label: "📞 Contact" },
];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 z-[61] flex h-full w-[78%] max-w-xs flex-col gap-1 bg-ink-2 p-6 pt-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            <button
              onClick={onClose}
              className="mb-4 self-end text-2xl text-white"
              aria-label="Close menu"
            >
              ✕
            </button>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={onClose}
                className="rounded-lg px-3 py-3 text-[15px] text-white/90 transition-colors hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-green px-3 py-3 text-[15px] font-semibold text-white"
            >
              💬 WhatsApp Us
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
