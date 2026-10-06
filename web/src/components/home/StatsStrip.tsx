import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { target: 500, suffix: "+", label: "Happy Customers" },
  { target: 1000, suffix: "+", label: "Products Available" },
  { target: 47, suffix: "", label: "Counties Served" },
  { target: 5, suffix: "★", label: "Average Rating" },
];

export function StatsStrip() {
  return (
    <div className="bg-ink px-[4%] py-12 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <strong className="block font-display text-3xl text-gold md:text-4xl">
              <AnimatedCounter target={s.target} suffix={s.suffix} />
            </strong>
            <span className="text-xs uppercase tracking-wide text-white/60">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
