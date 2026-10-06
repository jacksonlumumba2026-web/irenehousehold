import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink-2 pb-24 pt-14 text-white/80 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <Image
              src="/images/logo.jpg"
              alt="IHC"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <b className="block text-white">{site.name}</b>
              <small className="text-white/50">{site.tagline}</small>
            </div>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            Premium household items for homes, hotels and Airbnb properties
            across Nairobi, Kenya.
          </p>
          <div className="flex gap-2">
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px]">
              📱 M-Pesa
            </span>
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px]">
              💵 Cash on Delivery
            </span>
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px]">
              🔒 Secure Checkout
            </span>
          </div>
        </div>
        <FooterCol
          title="Quick Links"
          links={[
            { href: "/", label: "Home" },
            { href: "/shop", label: "Shop" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ]}
        />
        <FooterCol
          title="Categories"
          links={[
            { href: "/shop?cat=furniture", label: "Furniture" },
            { href: "/shop?cat=duvets", label: "Duvets" },
            { href: "/shop?cat=kitchenware", label: "Kitchenware" },
            { href: "/shop?cat=carpets", label: "Carpets" },
          ]}
        />
        <FooterCol
          title="Contact"
          links={[
            { href: `https://wa.me/${site.whatsapp}`, label: site.phone },
            { href: site.url, label: "irenehousehold.co.ke" },
            { href: site.instagram, label: site.instagramHandle },
          ]}
        />
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-2 border-t border-white/10 px-6 pt-6 text-xs text-white/40 md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</span>
        <span>Made with ❤️ in Nairobi, Kenya</span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-white">{title}</h4>
      <ul className="flex flex-col gap-2 text-sm text-white/60">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
