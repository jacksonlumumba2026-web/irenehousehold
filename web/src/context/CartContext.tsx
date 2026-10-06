"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/products";

type CartLine = { product: Product; qty: number };

type CartState = {
  lines: CartLine[];
  wishlist: number[];
  cartCount: number;
  wishlistCount: number;
  cartTotal: number;
  addToCart: (product: Product) => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (id: number) => boolean;
};

const CartContext = createContext<CartState | null>(null);

const CART_KEY = "ihc_cart_v1";
const WISHLIST_KEY = "ihc_wishlist_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    try {
      const cartRaw = localStorage.getItem(CART_KEY);
      const wlRaw = localStorage.getItem(WISHLIST_KEY);
      if (cartRaw) setLines(JSON.parse(cartRaw));
      if (wlRaw) setWishlist(JSON.parse(wlRaw));
    } catch {
      // ignore corrupted storage
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(lines));
  }, [lines]);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = useCallback((product: Product) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  }, []);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  }, []);

  const isWishlisted = useCallback(
    (id: number) => wishlist.includes(id),
    [wishlist]
  );

  const cartCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty, 0),
    [lines]
  );
  const cartTotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty * l.product.price, 0),
    [lines]
  );

  const value: CartState = {
    lines,
    wishlist,
    cartCount,
    wishlistCount: wishlist.length,
    cartTotal,
    addToCart,
    toggleWishlist,
    isWishlisted,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
