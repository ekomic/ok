export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  beds: number | null;
  baths: number | null;
  sqft: string;
  type: string;
  img: string;
  badge: string | null;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span: "wide" | "tall" | "";
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
