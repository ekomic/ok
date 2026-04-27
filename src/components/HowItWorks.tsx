"use client";

import { useEffect, useRef } from "react";
import { Search, CalendarCheck, KeyRound, type LucideIcon } from "lucide-react";
import styles from "./HowItWorks.module.css";

interface Step { number: string; icon: LucideIcon; title: string; desc: string; }

const steps: Step[] = [
  { number: "01", icon: Search, title: "Browse Properties", desc: "Explore our curated listings across Abuja's finest neighbourhoods. Filter by location, type, and budget to find your perfect match." },
  { number: "02", icon: CalendarCheck, title: "Book a Site Visit", desc: "Schedule a guided tour with one of our expert consultants. We handle all logistics so you can focus on finding your dream home." },
  { number: "03", icon: KeyRound, title: "Own Your Home", desc: "Complete your purchase with full legal support and transparent documentation. We stay with you from contract to key handover." },
];

export default function HowItWorks() {
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
          <p className="section-label">Simple Process</p>
          <h2 className="section-title">Your Journey to <span>Home Ownership</span></h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </div>

        <div className={styles.steps}>
          {steps.map(({ number, icon: Icon, title, desc }, i) => (
            <div key={number} className={`${styles.step} fade-up fade-up-delay-${i}`}>
              <div className={styles.number}>{number}</div>
              <div className={styles.iconWrap}><Icon size={32} strokeWidth={1.5} /></div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
              {i < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>

        <div className={`${styles.cta} fade-up`}>
          <a href="#contact" className="btn-gold">Start Your Journey</a>
        </div>
      </div>
    </section>
  );
}
