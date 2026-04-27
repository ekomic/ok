"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = ["Property Sales", "Custom Home Builds", "Land Acquisition", "Property Management", "Investment Advisory", "Legal Documentation"];

const socials = [
  { label: "Facebook", href: "#", path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
  { label: "Instagram", href: "#", path: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" /></> },
  { label: "Twitter / X", href: "#", path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
  { label: "LinkedIn", href: "#", path: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></> },
  { label: "YouTube", href: "#", path: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image src="/logo.jpg" alt="King's City Estate" width={120} height={52} className={styles.logoImg} />
            </div>
            <p className={styles.tagline}>Abuja&apos;s most trusted name in luxury real estate. Building homes, building futures.</p>
            <div className={styles.socials}>
              {socials.map(({ label, href, path }) => (
                <a key={label} href={href} className={styles.social} aria-label={label}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="none">{path}</svg>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {navLinks.map((l) => <li key={l.label}><a href={l.href} className={styles.link}>{l.label}</a></li>)}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.links}>
              {services.map((s) => <li key={s}><a href="#contact" className={styles.link}>{s}</a></li>)}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}><Phone size={14} /><a href="tel:+2348000000000">+234 800 000 0000</a></div>
              <div className={styles.contactItem}><Mail size={14} /><a href="mailto:info@kingscityestate.com">info@kingscityestate.com</a></div>
              <div className={styles.contactItem}><MapPin size={14} /><span>Plot 123, Maitama District,<br />Abuja, FCT, Nigeria</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>© {new Date().getFullYear()} King&apos;s City Estate. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
