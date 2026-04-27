// Fallback declaration for older lucide-react installs that lack bundled types.
// Safe to delete once lucide-react >= 0.263 is installed.
declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  export type LucideIcon = FC<LucideProps>;
  export const ArrowRight: LucideIcon;
  export const Award: LucideIcon;
  export const Bath: LucideIcon;
  export const Bed: LucideIcon;
  export const CalendarCheck: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const KeyRound: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Maximize2: LucideIcon;
  export const Menu: LucideIcon;
  export const Phone: LucideIcon;
  export const Quote: LucideIcon;
  export const Search: LucideIcon;
  export const Send: LucideIcon;
  export const Users: LucideIcon;
  export const Home: LucideIcon;
  export const X: LucideIcon;
  export const ZoomIn: LucideIcon;
}
