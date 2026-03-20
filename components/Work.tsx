"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "SaaS Churn Prediction and Retention Analysis",
    subtitle: "How I predicted at-risk accounts before they churned",
    outcome: "End-to-end churn model built on B2B SaaS data",
    tags: ["Python", "SQL", "Scikit-learn", "Cohort Analysis", "A/B Testing"],
    type: "B2B · SaaS · Predictive Modeling",
    link: "https://github.com/Prasanna1377/SaaS-Churn-Analysis",
    year: "2024 — 2025",
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(15,23,42,0.95) 65%, rgba(10,10,10,1) 100%)",
  },
  {
    id: "02",
    title: "Ecommerce Funnel and Conversion Analysis",
    subtitle: "How I found where customers were dropping off and why",
    outcome: "Multi-step funnel breakdown across devices and segments",
    tags: ["Python", "SQL", "Funnel Analysis", "Segmentation", "Power BI"],
    type: "B2C · Ecommerce · Funnel Analysis",
    link: "https://github.com/Prasanna1377/ecommerce-funnel-analysis",
    year: "2024",
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(124,58,237,0.32) 0%, rgba(30,27,75,0.95) 65%, rgba(10,10,10,1) 100%)",
  },
  {
    id: "03",
    title: "Music Re-engagement Analysis",
    subtitle: "How I identified lapsed users and modeled re-engagement triggers",
    outcome: "Behavioral segmentation of churned music platform users",
    tags: ["Python", "Retention Analysis", "Segmentation", "SQL"],
    type: "Consumer · Retention · Segmentation",
    link: "https://github.com/Prasanna1377/music-reengagement-analysis",
    year: "2024",
    featured: false,
    gradient:
      "linear-gradient(135deg, rgba(5,150,105,0.28) 0%, rgba(6,46,37,0.95) 65%, rgba(10,10,10,1) 100%)",
  },
  {
    id: "04",
    title: "Duolingo Case Study",
    subtitle: "How I analyzed Duolingo's growth and engagement mechanics",
    outcome: "Product teardown with metric frameworks and growth analysis",
    tags: ["Product Analysis", "Growth", "Metrics", "Frameworks"],
    type: "EdTech · Product Analysis · Growth",
    link: "https://github.com/Prasanna1377/Duolingo-case-study",
    year: "2025",
    featured: false,
    gradient:
      "linear-gradient(135deg, rgba(217,119,6,0.28) 0%, rgba(69,26,3,0.95) 65%, rgba(10,10,10,1) 100%)",
  },
  {
    id: "05",
    title: "Rocathon Hybrid Search",
    subtitle:
      "How I built a hybrid search system combining semantic and keyword retrieval",
    outcome: "Semantic + keyword hybrid search engine built in Python",
    tags: ["Python", "NLP", "Search", "Embeddings"],
    type: "Search · NLP · Python",
    link: "https://github.com/Prasanna1377/rocathon-hybrid-search",
    year: "2025",
    featured: false,
    gradient:
      "linear-gradient(135deg, rgba(236,72,153,0.24) 0%, rgba(80,7,36,0.95) 65%, rgba(10,10,10,1) 100%)",
  },
];

function ProjectCard({
  project,
  index,
  isTablet,
  isMobile,
}: {
  project: (typeof projects)[0];
  index: number;
  isTablet: boolean;
  isMobile: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
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
        gridTemplateColumns: isTablet ? "1fr" : "minmax(260px, 420px) 1fr",
        gap: isMobile ? "1.25rem" : "2rem",
        padding: isMobile ? "1.2rem" : project.featured ? "2.25rem" : "2rem",
        border: hovered ? "1px solid #2563eb" : "1px solid #222",
        borderRadius: isMobile ? "14px" : "18px",
        textDecoration: "none",
        background: hovered ? "#141414" : "#121212",
        transition: "all 0.28s ease",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 10px 30px rgba(0,0,0,0.22), 0 0 0 1px rgba(37,99,235,0.08)"
          : "none",
      }}
    >
      <div
        style={{
          background: project.gradient,
          borderRadius: isMobile ? "12px" : "14px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: isMobile ? "220px" : project.featured ? "280px" : "250px",
          border: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "1rem" : "1.2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "0.75rem",
          }}
        >
          {project.featured ? (
            <span
              style={{
                fontSize: isMobile ? "0.6rem" : "0.68rem",
                color: "#f8fafc",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: isMobile ? "0.3rem 0.5rem" : "0.35rem 0.65rem",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Featured
            </span>
          ) : (
            <span />
          )}

          <span
            style={{
              fontSize: isMobile ? "0.62rem" : "0.68rem",
              color: "rgba(255,255,255,0.62)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textAlign: "right",
            }}
          >
            {project.year}
          </span>
        </div>

        <motion.div
          animate={{ scale: hovered && !isMobile ? 1.02 : 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            fontSize: isMobile ? "4.8rem" : project.featured ? "6.25rem" : "5.5rem",
            fontWeight: 800,
            color: "rgba(255,255,255,0.12)",
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.04em",
          }}
        >
          {project.id}
        </motion.div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: isMobile ? "0.64rem" : "0.72rem",
              color: "rgba(255,255,255,0.78)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            GitHub Project
          </span>
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.78)",
            }}
          >
            ↗
          </motion.span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: isMobile ? "0.85rem" : "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontSize: isMobile ? "0.64rem" : "0.7rem",
              color: "#2563eb",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            {project.type}
          </span>

          {project.featured && (
            <span
              style={{
                fontSize: isMobile ? "0.62rem" : "0.68rem",
                color: "#93c5fd",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1px solid rgba(37,99,235,0.35)",
                padding: "0.25rem 0.55rem",
                borderRadius: "999px",
                background: "rgba(37,99,235,0.08)",
              }}
            >
              Priority Project
            </span>
          )}
        </div>

        <div>
          <h3
            style={{
              fontSize: isMobile ? "1.12rem" : project.featured ? "1.5rem" : "1.25rem",
              fontWeight: 700,
              color: "#f3f4f6",
              marginBottom: "0.5rem",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: isMobile ? "0.9rem" : "0.98rem",
              color: "#9ca3af",
              lineHeight: 1.65,
              maxWidth: "900px",
            }}
          >
            {project.subtitle}
          </p>
        </div>

        <div
          style={{
            fontSize: isMobile ? "0.84rem" : "0.9rem",
            color: "#d1d5db",
            padding: isMobile ? "0.8rem 0.9rem" : "0.9rem 1rem",
            background: "#0d0d0d",
            borderRadius: "12px",
            border: "1px solid #1f1f1f",
            lineHeight: 1.6,
          }}
        >
          {project.outcome}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={!isMobile ? { y: -1 } : undefined}
              transition={{ duration: 0.18 }}
              style={{
                fontSize: isMobile ? "0.66rem" : "0.72rem",
                padding: isMobile ? "0.34rem 0.65rem" : "0.38rem 0.75rem",
                border: "1px solid #2a2a2a",
                borderRadius: "999px",
                color: "#a3a3a3",
                letterSpacing: "0.03em",
                background: "#111111",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Work() {
  const ref = useRef(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    <section
      id="work"
      style={{
        borderTop: "1px solid #222",
        paddingBottom: isMobile ? "3.5rem" : "4.5rem",
      }}
    >
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
            marginBottom: isMobile ? "1.5rem" : "2rem",
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
            Projects
          </h2>

          <p
            style={{
              fontSize: isMobile ? "0.95rem" : "1rem",
              color: "#7a7a7a",
              lineHeight: 1.7,
              maxWidth: "760px",
            }}
          >
            A mix of product analytics, funnel analysis, retention work, and
            search experimentation built to answer real business questions.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              isTablet={isTablet}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}