"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const jobs = [
  {
    company: "ServiceNow",
    role: "Product Analyst",
    period: "May 2025 — Present",
    location: "Massachusetts",
    impact:
      "Built the analytics foundation for release readiness across the Now Platform.",
    metric: "25% less manual reporting",
    bullets: [
      "Defined KPI frameworks for activation, workflow completion, and feature engagement.",
      "Built Power BI dashboards that reduced manual reporting effort by 25%.",
      "Used SQL and Python to surface usability gaps in pre-production user journeys.",
      "Supported A/B test reviews for UI and workflow changes across product teams.",
      "Partnered with engineering on event tracking validation and instrumentation gaps.",
    ],
  },
  {
    company: "Orion Technolab",
    role: "Product Analyst",
    period: "Jan 2021 — Jul 2023",
    location: "India",
    impact:
      "Identified a 30%+ checkout drop-off and shaped product priorities through data.",
    metric: "30%+ checkout drop-off identified",
    bullets: [
      "Analyzed user, order, and funnel data across web and mobile journeys.",
      "Built cohort and retention analyses revealing repeat behavior patterns.",
      "Segmented performance by city tier, device type, and payment method.",
      "Evaluated merchandising and UX experiments to guide scaling decisions.",
    ],
  },
];

function Job({
  job,
  index,
  isMobile,
}: {
  job: (typeof jobs)[0];
  index: number;
  isMobile: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={!isMobile ? { y: -4 } : undefined}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
        gap: isMobile ? "1.5rem" : "2.5rem",
        padding: isMobile ? "1.25rem" : "1.75rem",
        border: hovered ? "1px solid #2563eb" : "1px solid #222",
        borderRadius: isMobile ? "14px" : "18px",
        background: hovered ? "#141414" : "#121212",
        transition: "all 0.3s ease",
        boxShadow: hovered
          ? "0 10px 28px rgba(0,0,0,0.2), 0 0 0 1px rgba(37,99,235,0.08)"
          : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1.25rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.68rem",
              color: "#6b7280",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.8rem",
            }}
          >
            {job.period}
          </p>

          <h3
            style={{
              fontSize: isMobile ? "1.15rem" : "1.35rem",
              fontWeight: 700,
              color: "#ededed",
              marginBottom: "0.35rem",
              lineHeight: 1.25,
            }}
          >
            {job.company}
          </h3>

          <p
            style={{
              fontSize: "0.88rem",
              color: "#60a5fa",
              marginBottom: "0.35rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            {job.role}
          </p>

          <p
            style={{
              fontSize: "0.8rem",
              color: "#7a7a7a",
              lineHeight: 1.5,
            }}
          >
            {job.location}
          </p>
        </div>

        <motion.div
          animate={{ scale: hovered && !isMobile ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            fontSize: "0.72rem",
            color: "#93c5fd",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            border: "1px solid rgba(37,99,235,0.25)",
            padding: "0.35rem 0.7rem",
            borderRadius: "999px",
            background: "rgba(37,99,235,0.08)",
          }}
        >
          {job.metric}
        </motion.div>
      </div>

      <div>
        <div
          style={{
            fontSize: isMobile ? "0.92rem" : "0.98rem",
            color: "#f3f4f6",
            fontWeight: 500,
            marginBottom: "1.25rem",
            lineHeight: 1.65,
            padding: isMobile ? "0.95rem 1rem" : "1rem 1.1rem",
            borderLeft: "2px solid #2563eb",
            background: "#0f0f0f",
            borderRadius: "0 12px 12px 0",
          }}
        >
          {job.impact}
        </div>

        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "0.75rem" : "0.85rem",
          }}
        >
          {job.bullets.map((bullet, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                fontSize: isMobile ? "0.84rem" : "0.88rem",
                color: "#9ca3af",
                lineHeight: 1.7,
              }}
            >
              <motion.span
                animate={{ scale: hovered && !isMobile ? 1.08 : 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#2563eb",
                  marginTop: "0.5rem",
                  flexShrink: 0,
                  boxShadow: "0 0 10px rgba(37,99,235,0.35)",
                }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="experience" style={{ borderTop: "1px solid #222" }}>
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
            Work Experience
          </h2>

          <p
            style={{
              fontSize: isMobile ? "0.95rem" : "1rem",
              color: "#7a7a7a",
              lineHeight: 1.7,
              maxWidth: "760px",
            }}
          >
            Experience across product analytics, experimentation, funnel
            optimization, and release readiness.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {jobs.map((job, i) => (
            <Job key={job.company} job={job} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}