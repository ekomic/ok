"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.bg}>
        <Image
          src="https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=1920&q=80&auto=format&fit=crop"
          alt="Luxury Abuja property"
          fill
          sizes="100vw"
          className={styles.bgImg}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className="section-label fade-up">Take the First Step</p>
        <h2 className={`${styles.headline} fade-up fade-up-delay-1`}>
          Ready to Find Your<br /><span>Dream Home in Abuja?</span>
        </h2>
        <p className={`${styles.sub} fade-up fade-up-delay-2`}>
          Our consultants are available 7 days a week to help you find, finance, and own your perfect property.
        </p>
        <div className={`${styles.actions} fade-up fade-up-delay-3`}>
          <a href="#contact" className="btn-gold">Get in Touch Today <ArrowRight size={16} /></a>
          <a href="tel:+2348000000000" className="btn-outline">Call Us Now</a>
        </div>
      </div>
    </section>
  );
}
