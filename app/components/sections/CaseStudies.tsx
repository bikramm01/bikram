"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Luxury Real Estate Landing Experience",
    desc: "Designed a high-end landing page focused on premium positioning and visual storytelling.",
    result: "Improved visual engagement and structured lead flow",
    img: "/case-studies/luxury.png",
  },
  {
    title: "Lead Generation System",
    desc: "Brands struggling with inconsistent leads.",
    result: "100+ leads in 30 days",
    img: "/case-studies/case1.png",
  },
  {
    title: "Website Optimization",
    desc: "Service site with traffic but low conversion.",
    result: "Higher inquiries",
    img: "/case-studies/case2.png",
  },
];

export default function CaseStudies() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: 600, color: "#fff" }}>
        Case Studies
      </h2>

      <div
        style={{ overflow: "hidden", width: "100%" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          style={{ display: "flex", gap: "20px", width: "max-content" }}
          animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
        >
          {[...caseStudies, ...caseStudies].map((item, i) => (
            <div
              key={i}
              style={{
                minWidth: "320px",
                maxWidth: "360px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                background: "#0f0f0f",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <div style={{ width: "100%", height: "190px" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "16px" }}>
                <h3 style={{ color: "#fff", fontSize: "16px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "13px" }}>
                  {item.desc}
                </p>
                <p style={{ color: "#d1d5db", fontSize: "13px" }}>
                  <strong>Result:</strong> {item.result}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}