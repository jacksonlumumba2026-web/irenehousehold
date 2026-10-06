"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const reviews = [
  { initials: "WM", name: "Wanjiku M.", loc: "Nairobi, Kenya", text: "Got the four-stand net and marble coffee table. Both arrived fast and look exactly as advertised!" },
  { initials: "AH", name: "Amina H.", loc: "Kilimani, Nairobi", text: "Irene Household is my go-to for Airbnb beddings. Guests always compliment how crisp everything looks!" },
  { initials: "BO", name: "Brian O.", loc: "Westlands, Nairobi", text: "Dinner set, duvet and carpet in one order. Same-day delivery and prices are unbeatable in Nairobi!" },
  { initials: "FK", name: "Faith K.", loc: "Karen, Nairobi", text: "The fluffy carpets are amazing! My living room looks completely transformed. Great quality for the price." },
  { initials: "JN", name: "James N.", loc: "Lavington, Nairobi", text: "Ordered the marble dining table and it is absolutely stunning. Delivery was on time and packaging was perfect." },
  { initials: "GW", name: "Grace W.", loc: "Ruaka, Nairobi", text: "Best household shop in Nairobi hands down. Wide selection, great prices and excellent customer service!" },
];

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track || pausedRef.current) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      track.scrollBy({ left: atEnd ? -track.scrollWidth : 300, behavior: "smooth" });
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white px-[4%] py-16">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[2px] text-gold">
            ✦ Customer Love
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            500+ happy customers across Kenya
          </p>
        </Reveal>
        <div
          ref={trackRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          className="mt-10 flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="w-[280px] shrink-0 rounded-2xl border border-border bg-cream p-5 text-left"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted">{r.loc}</div>
                </div>
              </div>
              <div className="mb-2 text-gold">★★★★★</div>
              <blockquote className="text-sm leading-relaxed text-ink/80">
                &ldquo;{r.text}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
