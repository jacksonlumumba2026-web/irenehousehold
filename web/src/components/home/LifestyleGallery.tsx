"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const items = [
  { img: "furniture.1.jpg", alt: "Dining room styling", tall: true },
  { img: "decor.1.jpg", alt: "Throw blanket styling", tall: false },
  { img: "duvet.1.jpg", alt: "Bedroom styling", tall: false },
  { img: "carpet.1.jpg", alt: "Living room rug styling", tall: true },
  { img: "furniture.2.jpg", alt: "Coffee table styling", tall: false },
  { img: "bath.1.jpg", alt: "Bathroom styling", tall: false },
  { img: "kitchenware.9.jpg", alt: "Dinnerware styling", tall: false },
  { img: "decor.3.jpg", alt: "Side table styling", tall: false },
];

export function LifestyleGallery() {
  const [zoomed, setZoomed] = useState<string | null>(null);

  return (
    <section className="bg-cream px-[4%] py-16">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[2px] text-gold">
            ✦ Style Inspiration
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Shop the Look</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Real Kenyan homes styled with our pieces — tap any photo to zoom in
          </p>
        </Reveal>
        <RevealGroup className="mt-10 grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((it) => (
            <RevealItem
              key={it.img}
              className={it.tall ? "row-span-2" : ""}
            >
              <button
                onClick={() => setZoomed(it.img)}
                className={`relative block w-full overflow-hidden rounded-xl ${
                  it.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={`/images/${it.img}`}
                  alt={it.alt}
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative h-[80vh] w-full max-w-2xl"
            >
              <Image
                src={`/images/${zoomed}`}
                alt="Zoomed product"
                fill
                sizes="90vw"
                className="rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
