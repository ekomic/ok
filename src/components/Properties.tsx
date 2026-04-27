"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Bed, Bath, Maximize2, ArrowRight } from "lucide-react";
import type { Property } from "@/types";
import styles from "./Properties.module.css";

const properties: Property[] = [
  {
    id: 1,
    name: "The Maitama Residence",
    location: "Maitama, Abuja",
    price: "₦285,000,000",
    beds: 5, baths: 6, sqft: "6,200 sqft",
    type: "Luxury Villa",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop",
    badge: "Featured",
  },
  {
    id: 2,
    name: "Guzape Heights Duplex",
    location: "Guzape, Abuja",
    price: "₦145,000,000",
    beds: 4, baths: 4, sqft: "4,100 sqft",
    type: "Duplex",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    badge: "New Listing",
  },
  {
    id: 3,
    name: "Jabi Lake View Apartment",
    location: "Jabi, Abuja",
    price: "₦68,000,000",
    beds: 3, baths: 3, sqft: "2,400 sqft",
    type: "Apartment",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop",
    badge: null,
  },
  {
    id: 4,
    name: "Wuse 2 Premium Land",
    location: "Wuse 2, Abuja",
    price: "₦95,000,000",
    beds: null, baths: null, sqft: "1,500 sqm",
    type: "Land",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
    badge: "Hot Deal",
  },
];

const delays = ["", "fade-up-delay-1", "fade-up-delay-2", "fade-up-delay-3"];

export default function Properties() {
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
    <section className={styles.section} id="properties" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} fade-up`}>
          <p className="section-label">Featured Listings</p>
          <h2 className="section-title">Handpicked <span>Properties</span></h2>
          <div className="gold-divider" style={{ margin: "20px auto 24px" }} />
          <p className={styles.sub}>Curated selections across Abuja&apos;s most sought-after neighbourhoods.</p>
        </div>

        <div className={styles.grid}>
          {properties.map((p, i) => (
            <article key={p.id} className={`${styles.card} fade-up ${delays[i]}`}>
              <div className={styles.imgWrap}>
                <Image src={p.img} alt={p.name} fill sizes="(max-width:600px) 100vw,(max-width:1100px) 50vw,25vw" className={styles.img} loading="lazy" />
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
                <span className={styles.type}>{p.type}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.location}><MapPin size={13} />{p.location}</div>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.price}>{p.price}</p>
                <div className={styles.specs}>
                  {p.beds !== null && <span className={styles.spec}><Bed size={14} />{p.beds} Beds</span>}
                  {p.baths !== null && <span className={styles.spec}><Bath size={14} />{p.baths} Baths</span>}
                  <span className={styles.spec}><Maximize2 size={14} />{p.sqft}</span>
                </div>
                <a href="#contact" className={styles.viewBtn}>View Details <ArrowRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.footer} fade-up`}>
          <a href="#contact" className="btn-outline">View All Properties <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
