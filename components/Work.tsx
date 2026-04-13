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
    tagColor: "rgba(59,130,246,0.15)",
    tagBorder: "rgba(59,130,246,0.3)",
    tagText: "#60a5fa",
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
    tagColor: "rgba(168,85,247,0.15)",
    tagBorder: "rgba(168,85,247,0.3)",
    tagText: "#c084fc",
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
    tagColor: "rgba(16,185,129,0.15)",
    tagBorder: "rgba(16,185,129,0.3)",
    tagText: "#34d399",
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
    tagColor: "rgba(245,158,11,0.15)",
    tagBorder: "rgba(245,158,11,0.3)",
    tagText: "#fbbf24",
    type: "EdTech · Product Analysis",
    link: "https://prasanna1377.github.io/Duolingo-case-study/",
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
    tagColor: "rgba(236,72,153,0.15)",
    tagBorder: "rgba(236,72,153,0.3)",
    tagText: "#f472b6",
    type: "Search · NLP · Python",
    link: "https://github.com/Prasanna1377/rocathon-hybrid-search",
    year: "2026",
    gradient:
      "linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(80,7,36,0.92) 65%, rgba(10,10,10,1) 100%)",
  },
];

function DefaultBarsVisual({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      style={{
        height: isMobile ? "58px" : "76px",
        display: "flex",
        alignItems: "flex-end",
        gap: "0.45rem",
      }}
    >
      {[24, 38, 30, 52, 40, 68].map((bar, idx) => (
        <div
          key={idx}
          style={{
            flex: 1,
            height: `${bar}%`,
            borderRadius: "8px 8px 4px 4px",
            background:
              idx === 5
                ? "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.24) 100%)"
                : "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 100%)",
            boxShadow:
              idx === 5 ? "0 0 18px rgba(255,255,255,0.08)" : "none",
          }}
        />
      ))}
    </div>
  );
}

function FunnelVisual({ isMobile }: { isMobile: boolean }) {
  const levels = [
    { width: "100%", label: "View" },
    { width: "78%", label: "Product" },
    { width: "56%", label: "Cart" },
    { width: "36%", label: "Checkout" },
    { width: "20%", label: "Buy" },
  ];

  return (
    <div
      style={{
        height: isMobile ? "76px" : "96px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: isMobile ? "0.35rem" : "0.5rem",
        paddingRight: "0.5rem"
      }}
    >
      {levels.map((level, idx) => (
        <div
          key={level.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ flex: 1, display: "flex" }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: level.width }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              style={{
                height: isMobile ? "8px" : "10px",
                borderRadius: "999px",
                background:
                  idx === levels.length - 1
                    ? "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 100%)"
                    : "linear-gradient(90deg, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.16) 100%)",
              }}
            />
          </div>
          <span
            style={{
              fontSize: isMobile ? "0.5rem" : "0.55rem",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.05em",
              width: "48px",
              textAlign: "left",
            }}
          >
            {level.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function MusicVisual({ isMobile }: { isMobile: boolean }) {
  const bars = [22, 38, 28, 54, 34, 62, 42, 74, 48, 30];

  return (
    <div
      style={{
        height: isMobile ? "78px" : "102px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: isMobile ? "0.2rem" : "0.3rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: isMobile ? "30px" : "36px",
            height: isMobile ? "30px" : "36px",
            opacity: 0.9,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "13px",
              top: "2px",
              width: "4px",
              height: isMobile ? "18px" : "22px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.88)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "15px",
              top: "2px",
              width: isMobile ? "10px" : "12px",
              height: "4px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.88)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "5px",
              top: "16px",
              width: isMobile ? "11px" : "13px",
              height: isMobile ? "11px" : "13px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.30)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "14px",
              top: "22px",
              width: isMobile ? "11px" : "13px",
              height: isMobile ? "11px" : "13px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.88)",
              boxShadow: "0 0 14px rgba(255,255,255,0.08)",
            }}
          />
        </div>
      </div>

      <div
        style={{
          height: isMobile ? "46px" : "58px",
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        {bars.map((bar, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              height: `${bar}%`,
              borderRadius: "999px",
              background:
                idx === 7
                  ? "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.26) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 100%)",
              boxShadow:
                idx === 7 ? "0 0 18px rgba(255,255,255,0.08)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function DuolingoVisual({ isMobile }: { isMobile: boolean }) {
  const steps = [28, 40, 36, 54, 46, 68];

  return (
    <div
      style={{
        height: isMobile ? "78px" : "102px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          marginBottom: isMobile ? "0.2rem" : "0.35rem",
        }}
      >
        {[0, 1, 2, 3].map((idx) => (
          <div
            key={idx}
            style={{
              width: isMobile ? "14px" : "16px",
              height: isMobile ? "14px" : "16px",
              borderRadius: "999px",
              background:
                idx === 3
                  ? "rgba(255,255,255,0.9)"
                  : idx === 2
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(255,255,255,0.18)",
              boxShadow:
                idx === 3 ? "0 0 14px rgba(255,255,255,0.08)" : "none",
            }}
          />
        ))}
      </div>

      <div
        style={{
          height: isMobile ? "46px" : "58px",
          display: "flex",
          alignItems: "flex-end",
          gap: "0.35rem",
        }}
      >
        {steps.map((bar, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              height: `${bar}%`,
              borderRadius: "9px 9px 4px 4px",
              background:
                idx === steps.length - 1
                  ? "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.26) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 100%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function SearchVisual({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      style={{
        height: isMobile ? "78px" : "102px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: isMobile ? "0.2rem" : "0.3rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: isMobile ? "28px" : "34px",
            height: isMobile ? "28px" : "34px",
            opacity: 0.88,
          }}
        >
          <div
            style={{
              width: isMobile ? "16px" : "20px",
              height: isMobile ? "16px" : "20px",
              borderRadius: "999px",
              border: "2px solid rgba(255,255,255,0.82)",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              width: isMobile ? "10px" : "12px",
              height: "2px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.82)",
              position: "absolute",
              top: isMobile ? "15px" : "18px",
              left: isMobile ? "14px" : "17px",
              transform: "rotate(45deg)",
              transformOrigin: "left center",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.45rem",
          marginTop: "0.2rem",
        }}
      >
        {["88%", "68%", "78%"].map((width, idx) => (
          <div
            key={idx}
            style={{
              width,
              height: isMobile ? "8px" : "10px",
              borderRadius: "999px",
              background:
                idx === 0
                  ? "linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.24) 100%)"
                  : "linear-gradient(90deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 100%)",
              boxShadow:
                idx === 0 ? "0 0 16px rgba(255,255,255,0.06)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({
  project,
  isMobile,
}: {
  project: (typeof projects)[0];
  isMobile: boolean;
}) {
  if (project.title === "Ecommerce Funnel and Conversion Analysis") {
    return <FunnelVisual isMobile={isMobile} />;
  }

  if (project.title === "Music Re-engagement Analysis") {
    return <MusicVisual isMobile={isMobile} />;
  }

  if (project.title === "Duolingo Case Study") {
    return <DuolingoVisual isMobile={isMobile} />;
  }

  if (project.title === "Rocathon Hybrid Search") {
    return <SearchVisual isMobile={isMobile} />;
  }

  return <DefaultBarsVisual isMobile={isMobile} />;
}

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
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: -1000, y: -1000 }); }}
      style={{
        display: "grid",
        gridTemplateColumns: isTablet ? "1fr" : "380px 1fr",
        gap: isMobile ? "1rem" : "2rem",
        padding: isMobile ? "1.25rem" : "1.75rem",
        border: hovered ? "1px solid rgba(255,255,255,0.12)" : "1px solid #222",
        borderRadius: isMobile ? "16px" : "24px",
        textDecoration: "none",
        background: hovered ? "#141414" : "#111111",
        boxShadow: hovered ? "0 30px 60px rgba(0,0,0,0.6), inset 0 0 60px rgba(255,255,255,0.02)" : "none",
        transform: hovered && !isMobile ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 100%)`
        }} 
      />

      <div
        style={{
          background: project.gradient,
          borderRadius: isMobile ? "12px" : "16px",
          minHeight: isMobile ? "200px" : "260px",
          border: "1px solid rgba(255,255,255,0.05)",
          overflow: "hidden",
          padding: isMobile ? "1.2rem" : "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 10,
          boxShadow: "inset 0 0 40px rgba(0,0,0,0.2)",
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
              fontSize: "0.68rem",
              color: project.tagText,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.35rem 0.7rem",
              borderRadius: "999px",
              background: project.tagColor,
              border: "1px solid " + project.tagBorder,
              alignSelf: "flex-start",
              fontWeight: 600,
            }}
          >
            {project.tag}
          </span>

          <span
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {project.year}
          </span>
        </div>

        <ProjectVisual project={project} isMobile={isMobile} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            View Project
          </span>

          <span
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.9)",
              transform: hovered ? "translateX(4px) translateY(-4px)" : "translateX(0px) translateY(0px)",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
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
          gap: isMobile ? "1rem" : "1.25rem",
          padding: isTablet ? "0" : "0.5rem 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div>
          <span
            style={{
              fontSize: "0.7rem",
              color: "#6b7280",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 700,
              display: "block",
              marginBottom: "0.8rem",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {project.type}
          </span>

          <h3
            style={{
              fontSize: isMobile ? "1.4rem" : "clamp(1.8rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            {project.title}
          </h3>

          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", 
              gap: isMobile ? "0.75rem" : "1rem" 
            }}
          >
            {[
              { label: "Problem", text: project.problem, highlight: "#6b7280" },
              { label: "Approach", text: project.approach, highlight: "#6b7280" },
              { label: "Impact", text: project.impact, highlight: "#10b981" }
            ].map((bento) => (
              <div 
                key={bento.label}
                style={{ 
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "1rem",
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "0.4rem",
                  transition: "background 0.3s",
                }}
              >
                <span 
                  style={{ 
                    fontSize: "0.68rem", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.1em", 
                    color: bento.highlight, 
                    fontWeight: 700, 
                    fontFamily: "var(--font-geist-mono)",
                    background: bento.label === "Impact" ? "rgba(16,185,129,0.1)" : "transparent",
                    padding: bento.label === "Impact" ? "0.2rem 0.5rem" : "0",
                    borderRadius: "4px",
                    width: "fit-content"
                  }}
                >
                  {bento.label}
                </span>
                <p
                  style={{
                    fontSize: isMobile ? "0.86rem" : "0.9rem",
                    color: bento.label === "Impact" ? "#ffffff" : "#aab1bd",
                    lineHeight: 1.5,
                  }}
                >
                  {bento.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
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
        scrollMarginTop: "110px",
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