"use client";

import { useEffect, useRef } from "react";
import { Award, Home, MapPin, Users, type LucideIcon } from "lucide-react";
import styles from "./WhyUs.module.css";

interface Stat { icon: LucideIcon; value: string; label: string; desc: string; }

const stats: Stat[] = [
  { icon: Award, value: "10+", label: "Years of Excellence", desc: "Over a decade building trust and delivering premium real estate across Abuja." },
  { icon: Home, value: "500+", label: "Homes Delivered", desc: "From bespoke builds to turnkey properties — every home crafted to perfection." },
  { icon: MapPin, value: "15", label: "Locations in Abuja", desc: "Presence across every prime district — Maitama, Wuse, Guzape, Jabi and more." },
  { icon: Users, value: "1,000+", label: "Families Served", desc: "A growing community of homeowners who trusted us with their biggest investment." },
];

const delays = ["", "fade-up-delay-1", "fade-up-delay-2", "fade-up-delay-3"];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} fade-up`}>
          <p className="section-label">Why King&apos;s City Estate</p>
          <h2 className="section-title">Built on <span>Trust.</span> Driven by Excellence.</h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </div>
        <div className={styles.grid}>
          {stats.map(({ icon: Icon, value, label, desc }, i) => (
            <div key={label} className={`${styles.card} fade-up ${delays[i]}`}>
              <div className={styles.iconWrap}><Icon size={28} strokeWidth={1.5} /></div>
              <div className={styles.value}>{value}</div>
              <div className={styles.label}>{label}</div>
              <p className={styles.desc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
