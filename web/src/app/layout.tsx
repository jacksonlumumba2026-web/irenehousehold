import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { site } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Quality. Comfort. Style.`,
    template: `%s | ${site.name}`,
  },
  description:
    "Irene Household Collections — Kenya's Favourite Household Store. Premium furniture, duvets, carpets, kitchenware, mosquito nets and more. Order via WhatsApp or email. Delivery across Kenya.",
  keywords: [
    "household kenya",
    "furniture nairobi",
    "duvets kenya",
    "carpets kenya",
    "kitchenware kenya",
    "mosquito nets kenya",
    "irene household",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Kenya's Favourite Store`,
    description:
      "Premium furniture, duvets, carpets, kitchenware and more. Order via WhatsApp.",
    url: site.url,
    siteName: site.name,
    images: ["/images/logo.jpg"],
    type: "website",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: "#0c0c0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
