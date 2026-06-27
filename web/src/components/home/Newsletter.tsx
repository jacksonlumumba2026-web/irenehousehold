"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RippleButton } from "@/components/ui/RippleButton";
import { useToast } from "@/context/ToastContext";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const showToast = useToast();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    showToast("Thanks for subscribing! Watch your inbox for deals.");
    setEmail("");
  }

  return (
    <section className="bg-gradient-to-br from-ink to-ink-2 px-[4%] py-16 text-white">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="text-xs uppercase tracking-[2px] text-gold">
          ✦ Never Miss a Deal
        </span>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          Get Exclusive Offers in Your Inbox
        </h2>
        <p className="mt-2 text-sm text-white/60">
          Subscribe for flash sale alerts, new arrivals and styling tips
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
          />
          <RippleButton
            type="submit"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink"
          >
            Subscribe
          </RippleButton>
        </form>
      </Reveal>
    </section>
  );
}
