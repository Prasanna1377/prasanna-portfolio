"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Jira", category: "delivery" },
  { name: "Monday.com", category: "delivery" },
  { name: "Confluence", category: "delivery" },
  { name: "Agile / Scrum", category: "delivery" },
  { name: "RAID Logs", category: "delivery" },
  { name: "SQL", category: "data" },
  { name: "Power BI", category: "data" },
  { name: "Tableau", category: "data" },
  { name: "Python", category: "data" },
  { name: "BRD / FRD", category: "analysis" },
  { name: "User Stories", category: "analysis" },
  { name: "UAT", category: "analysis" },
  { name: "Stakeholder Management", category: "analysis" },
  { name: "AWS", category: "tech" },
  { name: "Snowflake", category: "tech" },
  { name: "Vanta", category: "tech" },
];

const categoryColors: Record<string, string> = {
  delivery: "#2563eb",
  data: "#7c3aed",
  analysis: "#0891b2",
  tech: "#059669",
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
        scrollMarginTop: "110px",
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
            color: "#ffffff",
            margin: 0,
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            width: "100%",
            maxWidth: isTablet ? "420px" : "100%",
            margin: isTablet ? "0 auto" : "0",
          }}
        >
          <Image
            src="/LinkedIn-Headshot.png"
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
  <p
    style={{
      fontSize: "0.72rem",
      color: "#e5e7eb",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      margin: 0,
      fontFamily: "var(--font-geist-mono)",
      fontWeight: 600,
    }}
  >
    From planning to delivery
  </p>

  <h3
    style={{
      fontSize: isMobile ? "1.3rem" : "1.65rem",
      lineHeight: 1.35,
      letterSpacing: "-0.02em",
      color: "#ffffff",
      fontWeight: 700,
      margin: 0,
      maxWidth: "760px",
    }}
  >
    I work at the intersection of delivery, data, and cross-functional coordination.
  </h3>

  <p
    style={{
      fontSize: isMobile ? "0.95rem" : "1rem",
      color: "#e5e7eb",
      lineHeight: 1.85,
      margin: 0,
      maxWidth: "760px",
    }}
  >
    My focus is on keeping complex projects on track — translating
    requirements into structured backlogs, surfacing risks before they
    become blockers, and making sure every stakeholder has the
    visibility they need.
  </p>

  <p
    style={{
      fontSize: isMobile ? "0.95rem" : "1rem",
      color: "#e5e7eb",
      lineHeight: 1.85,
      margin: 0,
      maxWidth: "760px",
    }}
  >
    Whether I am coordinating cloud infrastructure workstreams,
    building dashboards for decision-making, or running UAT cycles,
    I bring structure and clarity to the work so teams can execute
    with confidence.
  </p>
</div>

          <div style={{ paddingTop: "0.15rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                color: "#e5e7eb",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "0.9rem",
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 600,
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
          marginTop: isMobile ? "2rem" : "2.75rem",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            color: "#cbd5e1",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "0.9rem",
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 600,
          }}
        >
          Work philosophy
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "0.75rem",
          }}
        >
          {[
            "Delivery over documentation",
            "Clarity over complexity",
            "Data-backed decisions",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
                  color: "#e5e7eb",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}