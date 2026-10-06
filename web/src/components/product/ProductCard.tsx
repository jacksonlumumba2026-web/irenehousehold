"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { RippleButton } from "@/components/ui/RippleButton";
import { productImage, type Product } from "@/lib/products";

const badgeStyles: Record<string, string> = {
  sale: "bg-red text-white",
  hot: "bg-gold text-ink",
  new: "bg-ink text-white",
};

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const showToast = useToast();
  const [imgError, setImgError] = useState(false);
  const wishlisted = isWishlisted(product.id);
  const discount =
    product.old > 0
      ? Math.round(((product.old - product.price) / product.old) * 100)
      : 0;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
    >
      <div className="relative aspect-square overflow-hidden bg-cream-2">
        {product.badge && (
          <span
            className={`absolute left-2.5 top-2.5 z-10 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${
              badgeStyles[product.badgeType] ?? "bg-ink text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
          className="absolute right-2.5 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm shadow-soft transition-transform hover:scale-110"
        >
          {wishlisted ? "❤️" : "♡"}
        </button>
        {imgError ? (
          <div className="flex h-full w-full items-center justify-center text-4xl opacity-25">
            📷
          </div>
        ) : (
          <Image
            src={productImage(product.img)}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 280px, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3.5">
        <span className="text-[11px] uppercase tracking-wide text-muted">
          {product.cat}
        </span>
        <h3 className="line-clamp-2 text-sm font-semibold text-ink">
          {product.name}
        </h3>
        {product.note && (
          <p className="line-clamp-1 text-xs text-muted">{product.note}</p>
        )}
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-base font-bold text-ink">
            KSh {product.price.toLocaleString()}
          </span>
          {product.old > 0 && (
            <>
              <span className="text-xs text-muted line-through">
                KSh {product.old.toLocaleString()}
              </span>
              <span className="text-xs font-semibold text-red">
                -{discount}%
              </span>
            </>
          )}
        </div>
        <RippleButton
          onClick={() => {
            addToCart(product);
            showToast(`Added "${product.name}" to cart`);
          }}
          className="mt-2 rounded-lg bg-ink py-2.5 text-xs font-semibold text-white transition-colors hover:bg-ink-3"
        >
          🛒 Add to Cart
        </RippleButton>
      </div>
    </motion.div>
  );
}
