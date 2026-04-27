"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/types";
import styles from "./Gallery.module.css";

const images: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop", alt: "Luxury living room", span: "wide" },
  { id: 2, src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop", alt: "Modern kitchen", span: "tall" },
  { id: 3, src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop", alt: "Exterior facade", span: "" },
  { id: 4, src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format&fit=crop", alt: "Master bedroom", span: "" },
  { id: 5, src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80&auto=format&fit=crop", alt: "Swimming pool", span: "wide" },
  { id: 6, src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80&auto=format&fit=crop", alt: "Garden terrace", span: "" },
  { id: 7, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop", alt: "Dining area", span: "" },
  { id: 8, src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80&auto=format&fit=crop", alt: "Home office", span: "" },
];

const spanClass: Record<GalleryImage["span"], string> = {
  wide: styles.wide,
  tall: styles.tall,
  "": "",
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section className={styles.section} id="gallery" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} fade-up`}>
          <p className="section-label">Our Portfolio</p>
          <h2 className="section-title">Properties <span>&amp; Projects</span></h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </div>

        <div className={styles.grid}>
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`${styles.item} fade-up fade-up-delay-${i % 4} ${spanClass[img.span]}`}
              onClick={() => setLightbox(img)}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width:500px) 50vw,(max-width:900px) 50vw,25vw" className={styles.img} loading="lazy" />
              <div className={styles.overlay}><ZoomIn size={28} /></div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.close} onClick={() => setLightbox(null)} aria-label="Close"><X size={24} /></button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImgWrap}>
              <Image
                src={lightbox.src.replace("w=600", "w=1400").replace("w=800", "w=1400")}
                alt={lightbox.alt}
                fill
                sizes="90vw"
                className={styles.lightboxImg}
              />
            </div>
            <p className={styles.caption}>{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
