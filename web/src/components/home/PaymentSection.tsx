"use client";

import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RippleButton } from "@/components/ui/RippleButton";
import { site, waLink } from "@/lib/site";

const steps = [
  "Go to M-Pesa on your phone",
  "Select Lipa na M-Pesa, then Pay Bill",
  `Enter Business No. ${site.paybill}`,
  `Enter Account No. ${site.account}`,
  "Enter the order amount and your M-Pesa PIN",
  "Send us the confirmation message on WhatsApp",
];

export function PaymentSection() {
  const [copied, setCopied] = useState<"paybill" | "account" | null>(null);

  function copy(value: string, key: "paybill" | "account") {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <section className="bg-ink px-[4%] py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[2px] text-gold">
            ✦ Secure Payment
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Pay Easily with M-Pesa
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Fast, safe and convenient — pay directly from your phone
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green text-lg font-bold text-white">
                M
              </div>
              <div>
                <div className="font-semibold">Lipa na M-Pesa</div>
                <div className="text-xs text-white/50">Pay Bill</div>
              </div>
            </div>
            <button
              onClick={() => copy(site.paybill, "paybill")}
              className="mb-3 flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-left transition-colors hover:bg-white/15"
            >
              <span>
                <span className="block text-xs text-white/50">Business Number</span>
                <span className="text-lg font-bold tracking-wide">{site.paybill}</span>
              </span>
              <span className="text-xs font-semibold text-gold">
                {copied === "paybill" ? "Copied!" : "Tap to copy"}
              </span>
            </button>
            <button
              onClick={() => copy(site.account, "account")}
              className="flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-left transition-colors hover:bg-white/15"
            >
              <span>
                <span className="block text-xs text-white/50">Account Number</span>
                <span className="text-lg font-bold tracking-wide">{site.account}</span>
              </span>
              <span className="text-xs font-semibold text-gold">
                {copied === "account" ? "Copied!" : "Tap to copy"}
              </span>
            </button>

            <RippleButton
              as="a"
              href={waLink("Hi Irene Household, I have made an M-Pesa payment and would like to confirm my order.")}
              target="_blank"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green py-3 text-sm font-semibold text-white"
            >
              ✓ Send Payment Confirmation on WhatsApp
            </RippleButton>
          </Reveal>

          <RevealGroup className="space-y-3" stagger={0.08}>
            {steps.map((step, i) => (
              <RevealItem
                key={step}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-sm text-white/80">{step}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
