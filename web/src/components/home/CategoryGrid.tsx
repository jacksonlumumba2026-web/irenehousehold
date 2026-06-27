import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { categories } from "@/lib/products";

export function CategoryGrid() {
  const [first, ...rest] = categories;

  return (
    <section className="bg-cream px-[4%] py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Shop by Category</h2>
          <Link href="/shop" className="text-sm font-semibold text-gold hover:underline">
            View All →
          </Link>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          <RevealItem className="col-span-2 row-span-2">
            <CatCard slug={first.slug} label={first.label} img={first.img} big />
          </RevealItem>
          {rest.slice(0, 6).map((c) => (
            <RevealItem key={c.slug}>
              <CatCard slug={c.slug} label={c.label} img={c.img} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function CatCard({
  slug,
  label,
  img,
  big = false,
}: {
  slug: string;
  label: string;
  img: string;
  big?: boolean;
}) {
  return (
    <Link
      href={`/shop?cat=${slug}`}
      className="group relative block h-full min-h-[150px] overflow-hidden rounded-2xl"
    >
      <Image
        src={`/images/${img}`}
        alt={label}
        fill
        sizes={big ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 50vw"}
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-4">
        <h3 className={big ? "text-xl font-bold text-white" : "text-sm font-bold text-white"}>
          {label}
        </h3>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
