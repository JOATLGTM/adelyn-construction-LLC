export const site = {
  name: "Adelyn Construction LLC",
  shortName: "Adelyn",
  owner: "Thomas Le",
  phone: "614-886-4769",
  phoneHref: "tel:+16148864769",
  email: "nhinho907@yahoo.com",
  address: {
    line1: "303 Cloverhill Dr",
    line2: "Galloway, OH 43119",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=303+Cloverhill+Dr+Galloway+OH+43119",
  },
  serviceArea: "Columbus, OH",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
