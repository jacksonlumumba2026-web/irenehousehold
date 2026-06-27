import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const values = [
  { icon: "💯", title: "Authentic Quality", desc: "Every piece is hand-picked and quality-checked before it reaches you." },
  { icon: "🚚", title: "Fast Delivery", desc: "Same-day and next-day delivery across Nairobi and major towns." },
  { icon: "🔒", title: "Secure M-Pesa", desc: "Pay safely via Paybill — no card details, no hidden charges." },
  { icon: "💬", title: "Real Human Support", desc: "Chat with us directly on WhatsApp — no bots, no hold music." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white px-[4%] py-16">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[2px] text-gold">
            ✦ The Irene Difference
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Why Choose Us</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Trusted by hundreds of homes and hospitality businesses across Kenya
          </p>
        </Reveal>
        <RevealGroup className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {values.map((v) => (
            <RevealItem
              key={v.title}
              className="rounded-2xl border border-border bg-cream p-6 text-left transition-shadow hover:shadow-soft"
            >
              <span className="text-3xl">{v.icon}</span>
              <h3 className="mt-3 text-sm font-bold">{v.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{v.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
