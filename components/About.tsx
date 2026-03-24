"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "SQL", category: "core" },
  { name: "Python", category: "core" },
  { name: "Amplitude", category: "analytics" },
  { name: "Mixpanel", category: "analytics" },
  { name: "GA4", category: "analytics" },
  { name: "Power BI", category: "viz" },
  { name: "Tableau", category: "viz" },
  { name: "Funnel Analysis", category: "method" },
  { name: "Cohort Analysis", category: "method" },
  { name: "A/B Testing", category: "method" },
  { name: "Retention Analysis", category: "method" },
  { name: "Feature Adoption", category: "method" },
  { name: "Event Tracking", category: "method" },
  { name: "KPI Development", category: "method" },
  { name: "Agile", category: "process" },
  { name: "Jira", category: "process" },
];

const categoryColors: Record<string, string> = {
  core: "#2563eb",
  analytics: "#7c3aed",
  viz: "#0891b2",
  method: "#059669",
  process: "#d97706",
};

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      style={{
        paddingBottom: isMobile ? "3rem" : "4rem",
        borderTop: "1px solid #222",
      }}
    >
      <div
        style={{
          marginBottom: isMobile ? "1.5rem" : "2rem",
          borderBottom: "1px solid #222",
          paddingBottom: "1.2rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "#ededed",
          }}
        >
          About
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "420px 1fr",
          gap: isMobile ? "1.5rem" : "2rem",
          alignItems: "start",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            width: "100%",
            maxWidth: isTablet ? "420px" : "100%",
            margin: isTablet ? "0 auto" : "0",
          }}
        >
          <Image
            src="/Headshot.jpeg"
            alt="Prasanna Pingale"
            width={420}
            height={520}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "18px",
              objectFit: "cover",
              border: "1px solid #222",
              display: "block",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
  <p
    style={{
      fontSize: isMobile ? "0.95rem" : "1rem",
      color: "#b8bec9",
      lineHeight: 1.8,
    }}
  >
    Product Analyst working at the intersection of data, product thinking, and user behavior.
  </p>

  <p
    style={{
      fontSize: isMobile ? "0.95rem" : "1rem",
      color: "#b8bec9",
      lineHeight: 1.8,
    }}
  >
    Focused on understanding how users move through a product, where friction appears, and which signals matter most for decision making.
  </p>

  <p
    style={{
      fontSize: isMobile ? "0.95rem" : "1rem",
      color: "#b8bec9",
      lineHeight: 1.8,
    }}
  >
    Turning messy behavioral data into structured insights that teams can act on across conversion, retention, and feature adoption.
  </p>
</div>

          <div style={{ paddingTop: "0.35rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                color: "#4b5563",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "0.9rem",
              }}
            >
              Stack
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  style={{
                    fontSize: isMobile ? "0.7rem" : "0.75rem",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "999px",
                    border: `1px solid ${categoryColors[skill.category]}33`,
                    color: categoryColors[skill.category],
                    background: `${categoryColors[skill.category]}0d`,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div
        style={{
          marginTop: isMobile ? "2rem" : "2.5rem",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "0.75rem",
        }}
      >
        {[
          "Decisions over dashboards",
          "Behavior before metrics",
          "Clear actions from complexity",
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            style={{
              padding: "1rem 1.1rem",
              border: "1px solid #222",
              borderRadius: "14px",
              background: "#111111",
            }}
          >
            <p
              style={{
                fontSize: "0.92rem",
                color: "#d1d5db",
                lineHeight: 1.6,
              }}
            >
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}