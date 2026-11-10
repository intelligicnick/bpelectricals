export type NavItem = {
  label: string;
  href: string;
};

export type NavEntry =
  | { type: "link"; label: string; href: string }
  | {
      type: "dropdown";
      label: string;
      items: NavItem[];
    };

export const mainNav: NavEntry[] = [
  { type: "link", label: "Home", href: "/" },
  { type: "link", label: "About Us", href: "/about-us" },
  {
    type: "dropdown",
    label: "Products",
    items: [
      { label: "All Products", href: "/products" },
      {
        label: "Electrical Distribution Equipment",
        href: "/electrical-distribution-equipment",
      },
      {
        label: "Industrial Electrical Products",
        href: "/industrial-electrical-products",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Services",
    items: [
      { label: "Electrical Contracting", href: "/electrical-contracting" },
      {
        label: "Electrical Supply & Procurement",
        href: "/electrical-supply-procurement",
      },
    ],
  },
  { type: "link", label: "Projects", href: "/projects" },
  { type: "link", label: "Industries", href: "/industries" },
  { type: "link", label: "Contact Us", href: "/contact" },
];

export const primaryPages = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  { title: "Products", path: "/products" },
  {
    title: "Electrical Distribution Equipment",
    path: "/electrical-distribution-equipment",
  },
  {
    title: "Industrial Electrical Products",
    path: "/industrial-electrical-products",
  },
  { title: "Electrical Contracting", path: "/electrical-contracting" },
  {
    title: "Electrical Supply & Procurement",
    path: "/electrical-supply-procurement",
  },
  { title: "Projects & Work Experience", path: "/projects" },
  { title: "Industries We Serve", path: "/industries" },
  { title: "Contact Us", path: "/contact" },
] as const;
