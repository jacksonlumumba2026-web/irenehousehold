import raw from "@/data/products.json";

export type Product = {
  id: number;
  cat: string;
  name: string;
  note: string;
  price: number;
  old: number;
  img: string;
  imgs: string[];
  badge: string;
  badgeType: "sale" | "hot" | "new" | "";
  inStock: boolean;
};

export const products = raw as Product[];

export const categories = [
  { slug: "furniture", label: "Furniture", img: "furniture.1.jpg" },
  { slug: "decor", label: "Home Décor", img: "decor.1.jpg" },
  { slug: "duvets", label: "Duvets", img: "duvet.1.jpg" },
  { slug: "kitchenware", label: "Kitchenware", img: "kitchenware.1.jpg" },
  { slug: "carpets", label: "Carpets", img: "carpet.1.jpg" },
  { slug: "nets", label: "Nets", img: "net.1.jpg" },
  { slug: "seatcovers", label: "Seat Covers", img: "seatcover.1.jpg" },
  { slug: "bath", label: "Bath", img: "bath.1.jpg" },
  { slug: "kids", label: "Kids", img: "kid.1.jpg" },
  { slug: "electronics", label: "Electronics", img: "electronics.1.jpg" },
  { slug: "cookware", label: "Cookware", img: "cookware.1.jpg" },
  { slug: "travel", label: "Travel", img: "travel.1.jpg" },
] as const;

export function productImage(filename: string) {
  return `/images/${filename}`;
}

export function getFeatured(): Product[] {
  return categories
    .map((c) => products.find((p) => p.cat === c.slug))
    .filter((p): p is Product => Boolean(p));
}

export function getBestSellers(limit = 12): Product[] {
  return products.filter((p) => p.badgeType === "hot").slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  return products.slice(-limit).reverse();
}
