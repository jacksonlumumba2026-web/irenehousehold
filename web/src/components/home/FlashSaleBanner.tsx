"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function getRemaining() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end.getTime() - now.getTime());
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

export function FlashSaleBanner() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    setTime(getRemaining());
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-ink to-ink-3 px-[4%] py-5 text-white">
      <div className="flex items-center gap-3">
        <motion.span
          className="text-2xl"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.5 }}
        >
          🔥
        </motion.span>
        <div>
          <h3 className="font-display text-base font-bold">
            Flash Sale — Today Only!
          </h3>
          <p className="text-sm text-white/70">Up to 40% off selected items</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5 font-display text-sm font-bold">
          {[time.h, time.m, time.s].map((unit, i) => (
            <span key={i} className="rounded-md bg-white/10 px-2 py-1 tabular-nums">
              {String(unit).padStart(2, "0")}
            </span>
          ))}
        </div>
        <Link
          href="/shop"
          className="rounded-lg bg-gold px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-gold-2"
        >
          Shop Sale →
        </Link>
      </div>
    </div>
  );
}
