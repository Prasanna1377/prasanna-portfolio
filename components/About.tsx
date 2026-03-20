"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

const principles = [
  {
    num: "01",
    title: "Start with the question, not the data",
    body: "Every analysis begins by asking what decision this will support. Data without a question is noise.",
  },
  {
    num: "02",
    title: "Make insights impossible to ignore",
    body: "A finding that lives in a spreadsheet changes nothing. I build dashboards and narratives that make the right action obvious.",
  },
  {
    num: "03",
    title: "Ship fast, iterate with evidence",
    body: "Gut instinct gets you to v1. Data gets you to v2 and beyond. I work in both modes.",
  },
];

function Principle({
  principle,
  index,
  isMobile,
}: {
  principle: (typeof principles)[0];
  index: number;
  isMobile: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={!isMobile ? { y: -3 } : undefined}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "90px 1fr",
        gap: isMobile ? "0.6rem" : "1.5rem",
        padding: isMobile ? "1rem" : "1.25rem",
        border: hovered ? "1px solid #2563eb" : "1px solid #1f1f1f",
        borderRadius: "14px",
        background: hovered ? "#151515" : "#0e0e0e",
        transition: "all 0.25s ease",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(37,99,235,0.08)"
          : "none",
      }}
    >
      <motion.span
        animate={{ scale: hovered && !isMobile ? 1.03 : 1 }}
        transition={{ duration: 0.2 }}
        style={{
          fontSize: isMobile ? "2rem" : "2.6rem",
          fontWeight: 800,
          color: "#1a1a1a",
          lineHeight: 1,
        }}
      >
        {principle.num}
      </motion.span>

      <div>
        <h3
          style={{
            fontSize: isMobile ? "0.95rem" : "1.05rem",
            fontWeight: 600,
            color: "#ededed",
            marginBottom: "0.35rem",
          }}
        >
          {principle.title}
        </h3>

        <p
          style={{
            fontSize: isMobile ? "0.82rem" : "0.88rem",
            color: "#6b7280",
            lineHeight: 1.7,
          }}
        >
          {principle.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" style={{ borderTop: "1px solid #222" }}>
      <div style={{ width: "100%" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
            marginBottom: isMobile ? "2rem" : "2.5rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid #222",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#ededed",
            }}
          >
            About
          </h2>

          <p
            style={{
              fontSize: isMobile ? "0.95rem" : "1rem",
              color: "#7a7a7a",
              lineHeight: 1.7,
              maxWidth: "720px",
            }}
          >
            I work where product decisions meet data, turning user behavior into
            clear product direction.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1.1fr 0.9fr",
            gap: isMobile ? "2rem" : "3rem",
            marginBottom: "2rem",
          }}
        >
          <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={!isMobile ? { y: -3 } : undefined}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
  onMouseEnter={() => setHoveredCard("bio")}
  onMouseLeave={() => setHoveredCard(null)}
>
  <div
    style={{
      border: hoveredCard === "bio" ? "1px solid #2563eb" : "1px solid #1f1f1f",
      borderRadius: "16px",
      padding: isMobile ? "1.2rem" : "1.5rem",
      background: hoveredCard === "bio" ? "#141414" : "#101010",
      transition: "all 0.25s ease",
      boxShadow:
        hoveredCard === "bio"
          ? "0 10px 28px rgba(0,0,0,0.18), 0 0 0 1px rgba(37,99,235,0.08)"
          : "none",
    }}
  >
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#60a5fa",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Product Analyst · 3+ Years
              </p>

              <p
                style={{
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  color: "#9ca3af",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                I define KPIs, build dashboards, analyze funnels, and run
                experiments that directly influence product decisions.
              </p>

              <p
                style={{
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  color: "#9ca3af",
                  lineHeight: 1.8,
                }}
              >
                Currently focused on roles where analytics directly drives
                product strategy and roadmap direction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                color: "#444",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Stack
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.map((skill, idx) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: idx * 0.015 }}
                  whileHover={!isMobile ? { y: -1 } : undefined}
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
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "0.5rem",
          }}
        >
          {principles.map((p, i) => (
            <Principle
              key={p.num}
              principle={p}
              index={i}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}