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
    { width: "92%", label: "View" },
    { width: "72%", label: "Product" },
    { width: "54%", label: "Cart" },
    { width: "38%", label: "Checkout" },
    { width: "24%", label: "Buy" },
  ];

  return (
    <div
      style={{
        height: isMobile ? "76px" : "96px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: isMobile ? "0.35rem" : "0.45rem",
      }}
    >
      {levels.map((level, idx) => (
        <div
          key={level.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.45rem",
          }}
        >
          <div
            style={{
              width: level.width,
              height: isMobile ? "8px" : "10px",
              borderRadius: "999px",
              background:
                idx === levels.length - 1
                  ? "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.34) 100%)"
                  : "linear-gradient(90deg, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.16) 100%)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: isMobile ? "0.44rem" : "0.5rem",
              color: "rgba(255,255,255,0.46)",
              letterSpacing: "0.05em",
              minWidth: isMobile ? "38px" : "48px",
              textAlign: "right",
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
        gridTemplateColumns: isTablet ? "1fr" : "320px 1fr",
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
          minHeight: isMobile ? "180px" : "210px",
          border: "1px solid rgba(255,255,255,0.05)",
          overflow: "hidden",
          padding: isMobile ? "1rem" : "1.1rem",
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
    <span style={{ color: "#22c55e", fontWeight: 600 }}>Impact: </span>
    {project.impact}
  </p>

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