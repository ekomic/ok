"use client";

import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Homes Delivered" },
  { value: "15", label: "Locations in Abuja" },
  { value: "1,000+", label: "Families Served" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <Image
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80&auto=format&fit=crop"
          alt="Luxury estate in Abuja"
          fill
          priority
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className="section-label">Abuja&apos;s Premier Real Estate</p>

        <h1 className={styles.headline}>
          Own a Piece of<br />
          <span>Abuja&apos;s Finest</span>
        </h1>

        <p className={styles.sub}>
          Discover luxury homes, premium land, and bespoke builds across
          Maitama, Wuse, Guzape, Jabi and beyond — crafted for those who demand the best.
        </p>

        <div className={styles.actions}>
          <a href="#properties" className="btn-gold">
            Explore Properties <ArrowRight size={16} />
          </a>
          <a href="#about" className="btn-outline">
            Learn More
          </a>
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#search" className={styles.scrollIndicator} aria-label="Scroll down">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
