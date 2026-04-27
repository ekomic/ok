"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

const locations = ["All Locations", "Maitama", "Wuse", "Guzape", "Jabi", "Asokoro", "Garki", "Katampe", "Life Camp"];
const types = ["All Types", "House", "Land", "Duplex", "Apartment", "Terrace", "Penthouse"];
const budgets = ["Any Budget", "Under ₦50M", "₦50M – ₦100M", "₦100M – ₦250M", "₦250M – ₦500M", "Above ₦500M"];

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.section} id="search">
      <div className="container">
        <form className={styles.card} onSubmit={handleSearch}>
          <div className={styles.field}>
            <label className={styles.label}>Location</label>
            <select className={styles.select} value={location} onChange={(e) => setLocation(e.target.value)}>
              {locations.map((l) => <option key={l} value={l === "All Locations" ? "" : l}>{l}</option>)}
            </select>
          </div>
          <div className={styles.divider} />
          <div className={styles.field}>
            <label className={styles.label}>Property Type</label>
            <select className={styles.select} value={type} onChange={(e) => setType(e.target.value)}>
              {types.map((t) => <option key={t} value={t === "All Types" ? "" : t}>{t}</option>)}
            </select>
          </div>
          <div className={styles.divider} />
          <div className={styles.field}>
            <label className={styles.label}>Budget Range</label>
            <select className={styles.select} value={budget} onChange={(e) => setBudget(e.target.value)}>
              {budgets.map((b) => <option key={b} value={b === "Any Budget" ? "" : b}>{b}</option>)}
            </select>
          </div>
          <button type="submit" className={`btn-gold ${styles.btn}`}>
            <Search size={16} /> Search
          </button>
        </form>
      </div>
    </section>
  );
}
