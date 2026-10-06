"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductCardSkeleton } from "@/components/ui/Skeleton";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { Product } from "@/lib/products";

export function ProductGrid({
  products,
  skeletonCount = 8,
  className = "grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5",
}: {
  products: Product[];
  skeletonCount?: number;
  className?: string;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(id);
  }, []);

  if (loading) {
    return (
      <div className={className}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <RevealGroup className={className} stagger={0.06}>
      {products.map((p) => (
        <RevealItem key={p.id}>
          <ProductCard product={p} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
