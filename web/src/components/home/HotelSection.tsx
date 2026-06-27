import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RippleButton } from "@/components/ui/RippleButton";
import { waLink } from "@/lib/site";

const packages = [
  {
    badge: "Most Popular",
    title: "Airbnb Starter Pack",
    price: "From KSh 4,500",
    items: ["2 bedsheet sets", "4 towels", "2 pillow cases", "1 duvet cover"],
  },
  {
    badge: "Best Value",
    title: "Hotel Standard Pack",
    price: "From KSh 9,800",
    items: ["5 bedsheet sets", "10 towels", "5 pillow cases", "Bulk pricing per room"],
  },
  {
    badge: "Premium",
    title: "Full Hospitality Pack",
    price: "From KSh 16,500",
    items: ["Bedding + bath + kitchen linen", "Carpets & decor", "Free same-day delivery"],
  },
];

export function HotelSection() {
  return (
    <section className="bg-cream px-[4%] py-16">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[2px] text-gold">
            ✦ For Business
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Hotel &amp; Airbnb Linen Packages
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Bulk pricing for hosts, hotels and short-let apartments across Kenya
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <RevealItem
              key={pkg.title}
              className="relative rounded-2xl border border-border bg-white p-6 text-left shadow-soft"
            >
              <span className="absolute -top-3 left-6 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold">
                {pkg.badge}
              </span>
              <h3 className="mt-3 text-lg font-bold">{pkg.title}</h3>
              <div className="mt-1 text-xl font-bold text-gold">{pkg.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <RippleButton
                as="a"
                href={waLink(`Hi Irene Household, I'm interested in the ${pkg.title} for my hotel/Airbnb. Can you share more details?`)}
                target="_blank"
                className="mt-5 flex w-full items-center justify-center rounded-xl border border-ink py-2.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-white"
              >
                Enquire on WhatsApp
              </RippleButton>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
