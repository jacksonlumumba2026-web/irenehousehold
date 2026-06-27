import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const links = [
  {
    icon: "💬",
    title: "WhatsApp Community",
    desc: "Get early access to flash sales, new arrivals and restocks.",
    cta: "Join Community",
    href: site.whatsappCommunity,
    color: "bg-green",
  },
  {
    icon: "📘",
    title: "Facebook Page",
    desc: "Follow for styling tips, customer features and giveaways.",
    cta: "Follow on Facebook",
    href: site.facebook,
    color: "bg-[#1877F2]",
  },
  {
    icon: "📸",
    title: "Instagram",
    desc: `See our latest home styling looks ${site.instagramHandle}`,
    cta: "Follow on Instagram",
    href: site.instagram,
    color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
];

export function CommunitySection() {
  return (
    <section className="bg-white px-[4%] py-16">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[2px] text-gold">
            ✦ Stay Connected
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Join Our Community</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Be the first to know about new arrivals, flash sales and styling inspiration
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3">
          {links.map((l) => (
            <RevealItem
              key={l.title}
              className="rounded-2xl border border-border bg-cream p-6 text-left transition-shadow hover:shadow-soft"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${l.color}`}>
                {l.icon}
              </div>
              <h3 className="mt-4 text-base font-bold">{l.title}</h3>
              <p className="mt-1 text-sm text-muted">{l.desc}</p>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
              >
                {l.cta} →
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
