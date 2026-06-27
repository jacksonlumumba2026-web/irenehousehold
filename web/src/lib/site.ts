export const site = {
  name: "Irene Household Collections",
  tagline: "Quality. Comfort. Style.",
  url: "https://irenehousehold.co.ke",
  phone: "+254716060029",
  whatsapp: "254716060029",
  email: "irenehouseholds@gmail.com",
  paybill: "522533",
  account: "5997131",
  whatsappCommunity: "https://chat.whatsapp.com/KLvRlQ1YQR5IRYfzxB8rxA",
  facebook: "https://www.facebook.com/irenehouseholdcollections",
  instagram: "https://www.instagram.com/jaymieirene",
  instagramHandle: "@jaymieirene",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
