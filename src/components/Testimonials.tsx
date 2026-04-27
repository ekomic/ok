"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types";
import styles from "./Testimonials.module.css";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    location: "Maitama, Abuja",
    role: "Homeowner",
    quote: "King's City Estate made buying our family home completely stress-free. From the first consultation to key handover, every step was handled with professionalism and care. We couldn't be happier with our Maitama residence.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Emeka Nwosu",
    location: "Guzape, Abuja",
    role: "Property Investor",
    quote: "I've worked with several real estate firms in Abuja, but none match the transparency and market knowledge of King's City Estate. They helped me acquire three investment properties in Guzape — all at excellent valuations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Fatima Al-Hassan",
    location: "Jabi, Abuja",
    role: "First-time Buyer",
    quote: "As a first-time buyer, I was nervous about the process. The team at King's City Estate guided me through everything — legal checks, financing options, and negotiations. I now own a beautiful apartment in Jabi.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} fade-up`}>
          <p className="section-label">Client Stories</p>
          <h2 className="section-title">Trusted by <span>Families Across Abuja</span></h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </div>

        <div className={`${styles.carousel} fade-up fade-up-delay-1`}>
          <div className={styles.card}>
            <Quote size={40} className={styles.quoteIcon} />
            <p className={styles.text}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.author}>
              <div className={styles.avatarWrap}>
                <Image src={t.avatar} alt={t.name} fill sizes="56px" className={styles.avatar} />
              </div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.meta}>{t.role} · {t.location}</div>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button className={styles.btn} onClick={prev} aria-label="Previous"><ChevronLeft size={20} /></button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ""}`} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <button className={styles.btn} onClick={next} aria-label="Next"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
