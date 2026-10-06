"use client";

import { useRef } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/lib/products";

export function ProductCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: number) {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg shadow-lift md:flex"
      >
        ‹
      </button>
      <div
        ref={trackRef}
        className="flex gap-3.5 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => (
          <div key={p.id} className="w-[210px] shrink-0 sm:w-[250px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg shadow-lift md:flex"
      >
        ›
      </button>
    </div>
  );
}
