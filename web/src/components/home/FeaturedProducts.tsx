import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { getBestSellers, getFeatured, getNewArrivals } from "@/lib/products";

export function FeaturedProducts() {
  const featured = getFeatured();
  return (
    <section className="bg-cream px-[4%] py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHead title="🏆 Featured Products" />
        <ProductGrid products={featured} />
      </div>
    </section>
  );
}

export function BestSellers() {
  const sellers = getBestSellers();
  return (
    <section className="bg-white px-[4%] py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHead title="🔥 Best Sellers" />
        <ProductCarousel products={sellers} />
      </div>
    </section>
  );
}

export function NewArrivals() {
  const arrivals = getNewArrivals();
  return (
    <section className="bg-white px-[4%] py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHead title="✨ New Arrivals" />
        <ProductGrid products={arrivals} />
      </div>
    </section>
  );
}

function SectionHead({ title }: { title: string }) {
  return (
    <Reveal className="mb-8 flex items-end justify-between">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <Link href="/shop" className="text-sm font-semibold text-gold hover:underline">
        View All →
      </Link>
    </Reveal>
  );
}
