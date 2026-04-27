"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import styles from "./About.module.css";

const values = [
  "Transparent pricing — no hidden fees",
  "Full legal documentation support",
  "Post-sale property management",
  "Flexible payment plans available",
  "Certified by the Abuja Geographic Information Systems (AGIS)",
  "Member of the Nigerian Institution of Estate Surveyors",
];

const partners = ["AGIS", "NIESV", "REDAN", "FCDA"];

export default function About() {
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
    <section className={styles.section} id="about" ref={sectionRef}>
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.media} fade-up`}>
          <div className={styles.imgMain}>
            <Image src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80&auto=format&fit=crop" alt="King's City Estate team" fill sizes="(max-width:960px) 100vw,40vw" className={styles.img} loading="lazy" />
          </div>
          <div className={styles.imgAccent}>
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&auto=format&fit=crop" alt="Property handover" fill sizes="300px" className={styles.img} loading="lazy" />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeValue}>10+</span>
            <span className={styles.badgeLabel}>Years of<br />Excellence</span>
          </div>
        </div>

        <div className={styles.content}>
          <p className="section-label fade-up">Our Story</p>
          <h2 className={`section-title fade-up fade-up-delay-1`}>
            Abuja&apos;s Most <span>Trusted</span><br />Real Estate Partner
          </h2>
          <div className="gold-divider fade-up fade-up-delay-2" />

          <p className={`${styles.text} fade-up fade-up-delay-2`}>
            Founded over a decade ago, King&apos;s City Estate was built on a single conviction:
            every Nigerian family deserves access to premium real estate without compromise.
            From our first plot in Guzape to hundreds of completed homes across Abuja,
            we have grown into the city&apos;s most trusted name in luxury property.
          </p>
          <p className={`${styles.text} fade-up fade-up-delay-3`}>
            We don&apos;t just sell properties — we build communities. Our team of certified
            estate surveyors, architects, and legal experts work together to ensure every
            transaction is seamless, secure, and tailored to your vision.
          </p>

          <ul className={`${styles.values} fade-up fade-up-delay-3`}>
            {values.map((v) => (
              <li key={v} className={styles.valueItem}>
                <CheckCircle2 size={16} className={styles.check} />{v}
              </li>
            ))}
          </ul>

          <div className={`${styles.partners} fade-up fade-up-delay-4`}>
            <p className={styles.partnersLabel}>Accredited &amp; Recognised By</p>
            <div className={styles.partnerBadges}>
              {partners.map((b) => <div key={b} className={styles.partnerBadge}>{b}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
