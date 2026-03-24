"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "SaaS Churn Prediction and Retention Analysis",
    problem:
      "The team needed earlier visibility into which accounts were most likely to churn instead of reacting after revenue risk had already surfaced.",
    approach:
      "Built a churn analysis workflow using behavioral, usage, and account level signals to identify patterns tied to early drop off and declining engagement.",
    impact:
      "Created a clearer view of at risk accounts and helped frame retention decisions around measurable product behavior.",
    tag: "Analysis",
    type: "B2B · SaaS · Predictive Modeling",
    link: "https://github.com/Prasanna1377/SaaS-Churn-Analysis",
    year: "2024 — 2025",
    gradient:
      "linear-gradient(135deg, rgba(37,99,235,0.24) 0%, rgba(15,23,42,0.92) 65%, rgba(10,10,10,1) 100%)",
  },
  {
    title: "Ecommerce Funnel and Conversion Analysis",
    problem:
      "Customers were dropping out across the checkout journey, but the biggest sources of friction were not clearly understood.",
    approach:
      "Mapped the funnel across devices, user segments, and journey stages to find where conversion loss was highest and which user groups were most affected.",
    impact:
      "Turned a broad conversion problem into specific areas of focus for checkout, messaging, and UX improvement.",
    tag: "Funnel Analysis",
    type: "B2C · Ecommerce · Funnel Analysis",
    link: "https://github.com/Prasanna1377/ecommerce-funnel-analysis",
    year: "2025",
    gradient:
      "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(30,27,75,0.92) 65%, rgba(10,10,10,1) 100%)",
  },
  {
    title: "Music Re-engagement Analysis",
    problem:
      "The challenge was understanding which lapsed users were most likely to return and what behavioral signals mattered most.",
    approach:
      "Analyzed churned user behavior and built segments around listening patterns, inactivity windows, and re engagement triggers.",
    impact:
      "Helped structure retention thinking around user behavior instead of broad assumptions.",
    tag: "Retention",
    type: "Consumer · Retention · Segmentation",
    link: "https://github.com/Prasanna1377/music-reengagement-analysis",
    year: "2024",
    gradient:
      "linear-gradient(135deg, rgba(5,150,105,0.20) 0%, rgba(6,46,37,0.92) 65%, rgba(10,10,10,1) 100%)",
  },
  {
    title: "Duolingo Case Study",
    problem:
      "Duolingo’s growth feels simple on the surface, but its retention engine comes from tightly connected product loops and behavior design.",
    approach:
      "Broke down the product using engagement, growth, and habit formation frameworks to understand how its mechanics support repeat usage.",
    impact:
      "Created a structured product analysis showing how feature design, streak behavior, and motivation loops reinforce retention.",
    tag: "Case Study",
    type: "EdTech · Product Analysis",
    link: "https://github.com/Prasanna1377/Duolingo-case-study",
    year: "2026",
    gradient:
      "linear-gradient(135deg, rgba(217,119,6,0.20) 0%, rgba(69,26,3,0.92) 65%, rgba(10,10,10,1) 100%)",
  },
  {
    title: "Rocathon Hybrid Search",
    problem:
      "Semantic search alone was not enough to surface the most useful creator results for real business needs.",
    approach:
      "Built a hybrid retrieval approach that combined semantic similarity with keyword based matching to improve relevance and ranking quality.",
    impact:
      "Produced a more practical search experience that balanced contextual fit with direct business usefulness.",
    tag: "Search",
    type: "Search · NLP · Python",
    link: "https://github.com/Prasanna1377/rocathon-hybrid-search",
    year: "2026",
    gradient:
      "linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(80,7,36,0.92) 65%, rgba(10,10,10,1) 100%)",
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
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: isTablet ? "1fr" : "290px 1fr",
        gap: isMobile ? "1rem" : "1.5rem",
        padding: isMobile ? "1.15rem" : "1.4rem",
        border: hovered ? "1px solid #2563eb" : "1px solid #222",
        borderRadius: isMobile ? "14px" : "18px",
        textDecoration: "none",
        background: hovered ? "#141414" : "#111111",
        transition: "all 0.28s ease",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          background: project.gradient,
          borderRadius: isMobile ? "12px" : "14px",
          minHeight: isMobile ? "170px" : "210px",
          border: "1px solid rgba(255,255,255,0.05)",
          overflow: "hidden",
          padding: isMobile ? "0.95rem" : "1.1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
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
          <span
            style={{
              fontSize: isMobile ? "0.62rem" : "0.68rem",
              color: "#f8fafc",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: isMobile ? "0.28rem 0.5rem" : "0.32rem 0.6rem",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              alignSelf: "flex-start",
            }}
          >
            {project.tag}
          </span>

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

        <div
          style={{
            height: isMobile ? "56px" : "72px",
            display: "flex",
            alignItems: "flex-end",
            gap: "0.45rem",
          }}
        >
          {[26, 42, 35, 58, 44, 72].map((bar, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                height: `${bar}%`,
                borderRadius: "6px 6px 3px 3px",
                background:
                  idx === 5
                    ? "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.22) 100%)"
                    : "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 100%)",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: isMobile ? "0.64rem" : "0.7rem",
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            View Project
          </span>

          <span
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.8)",
              transform: hovered ? "translateX(4px)" : "translateX(0px)",
              transition: "transform 0.25s ease",
            }}
          >
            ↗
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: isMobile ? "0.75rem" : "0.85rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.7rem",
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
        </div>

        <div>
          <h3
            style={{
              fontSize: isMobile ? "1.08rem" : "1.32rem",
              fontWeight: 700,
              color: "#f3f4f6",
              marginBottom: "0.65rem",
              lineHeight: 1.28,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            <p
              style={{
                fontSize: isMobile ? "0.86rem" : "0.92rem",
                color: "#d5d8de",
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: "#ededed", fontWeight: 600 }}>Problem: </span>
              {project.problem}
            </p>

            <p
              style={{
                fontSize: isMobile ? "0.86rem" : "0.92rem",
                color: "#aab1bd",
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: "#ededed", fontWeight: 600 }}>What I did: </span>
              {project.approach}
            </p>

            <p
              style={{
                fontSize: isMobile ? "0.86rem" : "0.92rem",
                color: "#aab1bd",
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: "#ededed", fontWeight: 600 }}>Impact: </span>
              {project.impact}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
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
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
              lineHeight: 1.75,
              maxWidth: "100%",
            }}
          >
            A few examples of how I use product analytics, experimentation, and behavioral data to help teams decide what to improve next.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.35rem" }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isTablet={isTablet}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}