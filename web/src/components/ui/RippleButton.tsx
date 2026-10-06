"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type MouseEvent,
  useState,
} from "react";
import { clsx } from "clsx";

type Ripple = { id: number; x: number; y: number; size: number };

type RippleButtonProps<T extends ElementType> = {
  as?: T;
  className?: string;
  rippleColor?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function RippleButton<T extends ElementType = "button">({
  as,
  className,
  rippleColor = "rgba(255,255,255,0.45)",
  onClick,
  children,
  ...rest
}: RippleButtonProps<T>) {
  const Component = as || "button";
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function spawnRipple(e: MouseEvent<HTMLElement>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }

  return (
    <Component
      className={clsx("relative overflow-hidden isolate", className)}
      onClick={(e: MouseEvent<HTMLElement>) => {
        spawnRipple(e);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
      <span className="pointer-events-none absolute inset-0">
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              className="absolute rounded-full"
              style={{
                left: r.x,
                top: r.y,
                width: r.size,
                height: r.size,
                background: rippleColor,
              }}
              initial={{ opacity: 0.6, scale: 0 }}
              animate={{ opacity: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>
      </span>
    </Component>
  );
}
