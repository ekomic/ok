"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import type { NavLink } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import styles from "./Navbar.module.css";

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/logo.jpg"
            alt="King's City Estate"
            width={120}
            height={52}
            className={styles.logoImg}
            priority
          />
        </a>

        <nav className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.rightControls}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact" className={`btn-gold ${styles.cta}`}>
            Book a Consultation
          </a>
        </div>

        <div className={styles.mobileControls}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.drawerLink} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className={`btn-gold ${styles.drawerCta}`} onClick={closeMenu}>
          Book a Consultation
        </a>
      </div>
    </header>
  );
}
