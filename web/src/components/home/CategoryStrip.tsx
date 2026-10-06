"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { categories } from "@/lib/products";

export function CategoryStrip() {
  const [active, setActive] = useState("all");
  const router = useRouter();

  function go(slug: string) {
    setActive(slug);
    router.push(slug === "all" ? "/shop" : `/shop?cat=${slug}`);
  }

  return (
    <div className="border-b border-border bg-white">
      <div className="flex gap-4 overflow-x-auto px-[4%] py-4 [&::-webkit-scrollbar]:hidden">
        <CatItem
          label="All"
          img="/images/furniture.1.jpg"
          active={active === "all"}
          onClick={() => go("all")}
        />
        {categories.map((c) => (
          <CatItem
            key={c.slug}
            label={c.label}
            img={`/images/${c.img}`}
            active={active === c.slug}
            onClick={() => go(c.slug)}
          />
        ))}
      </div>
    </div>
  );
}

function CatItem({
  label,
  img,
  active,
  onClick,
}: {
  label: string;
  img: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex shrink-0 flex-col items-center gap-1.5"
    >
      <div
        className={clsx(
          "h-16 w-16 overflow-hidden rounded-full border-2 transition-colors",
          active ? "border-gold" : "border-border"
        )}
      >
        <Image src={img} alt={label} width={64} height={64} className="h-full w-full object-cover" />
      </div>
      <span
        className={clsx(
          "text-[11px] font-medium",
          active ? "text-gold" : "text-ink"
        )}
      >
        {label}
      </span>
    </button>
  );
}
