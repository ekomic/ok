"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import styles from "./Contact.module.css";

interface FormState { name: string; email: string; phone: string; message: string; }

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.info} fade-up`}>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Let&apos;s Find Your<br /><span>Perfect Property</span></h2>
          <div className="gold-divider" />
          <p className={styles.desc}>Whether you&apos;re buying, selling, or building — our team is ready to guide you every step of the way.</p>

          <div className={styles.details}>
            {[
              { icon: Phone, label: "Phone", value: "+234 800 000 0000", href: "tel:+2348000000000" },
              { icon: Mail, label: "Email", value: "info@kingscityestate.com", href: "mailto:info@kingscityestate.com" },
              { icon: MapPin, label: "Office", value: "Plot 123, Maitama District, Abuja, FCT", href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className={styles.detail}>
                <div className={styles.detailIcon}><Icon size={18} /></div>
                <div>
                  <div className={styles.detailLabel}>{label}</div>
                  {href
                    ? <a href={href} className={styles.detailValue}>{value}</a>
                    : <span className={styles.detailValue}>{value}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className={styles.hours}>
            <p className={styles.hoursTitle}>Office Hours</p>
            <p>Monday – Friday: 8:00am – 6:00pm</p>
            <p>Saturday: 9:00am – 4:00pm</p>
            <p>Sunday: By appointment</p>
          </div>
        </div>

        <div className={`${styles.formWrap} fade-up fade-up-delay-2`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Book a Free Consultation</h3>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label>Full Name</label>
                <input type="text" placeholder="John Okafor" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className={styles.field}>
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div className={styles.field}>
              <label>Phone Number</label>
              <input type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className={styles.field}>
              <label>Message</label>
              <textarea rows={5} placeholder="Tell us about the property you're looking for..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" className={`btn-gold ${styles.submit} ${sent ? styles.submitSent : ""}`}>
              {sent ? "✓ Message Sent!" : <><Send size={15} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
