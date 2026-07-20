"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedMetric({ text }: { text: string }) {
  const match = text.match(/^(\d+)(.*)$/);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, { duration: 1500, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (inView && match) {
      spring.set(parseInt(match[1]));
    }
  }, [inView, match, spring]);

  if (!match) return <span ref={ref}>{text}</span>;

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {match[2]}
    </span>
  );
}

const jobs = [
  {
    company: "Responsible Systems",
    role: "Technical Project Manager",
    period: "Jun 2026 — Present",
    location: "Remote, London, UK · Contract",
    impact:
      "Coordinating delivery across cloud infrastructure, AI engineering, and governance workstreams for an AI accountability platform.",
    metric: "8 workstreams tracked",
    bullets: [
      "Orchestrated delivery across cloud infrastructure, platform development, AI engineering, and governance workstreams, giving the CTO and Tech Lead a single view of priorities, dependencies, and risks.",
      "Built Jira-based tracking for 8 active workstreams, making ownership, deadlines, and blockers consistently visible to engineering and senior leadership.",
      "Coordinated AWS multi-region consolidation across London, Mumbai, and Ohio into EU-West, tracking migration dependencies and surfacing risks before they delayed delivery.",
      "Partnered with the CTO, Tech Lead, and founder to facilitate standups, workshops, and roadmap execution across a distributed engineering team.",
      "Supported ISO 27001 readiness and internal audit through Vanta by tracking evidence, remediation actions, and control ownership across active governance requirements.",
    ],
  },
  {
    company: "Rebecca Everlene Trust Company",
    role: "Project Manager",
    period: "Sep 2025 — Jun 2026",
    location: "Boston, MA",
    impact:
      "Managed delivery of a four-program learning suite, coordinating a cross-functional content team from build through structured handover.",
    metric: "108 modules shipped",
    bullets: [
      "Managed delivery of the BIG Program Suite across four self-paced learning programs, coordinating an eight-person cross-functional content team in an Agile, board-driven workflow.",
      "Configured 13 Monday.com boards to structure task ownership, delivery tracking, and status visibility across the Unequivocally BIG workstream.",
      "Drove day-to-day content team alignment through Slack, keeping three programs in active build on track across content, design, and review handoffs.",
      "Shipped 108 learning modules across three programs for Google Classroom delivery, plus three program syllabi and three moderator handbooks.",
      "Authored the BIG Program Suite Master Brief as the single source of truth and led a structured KT-HO handover covering platform access, board links, and all deliverables.",
    ],
  },
  {
    company: "Sankey Solutions",
    role: "Business Analyst",
    period: "Jan 2021 — Jul 2023",
    location: "Thane, Maharashtra, India",
    impact:
      "Translated business needs into structured requirements and analytics for a retail data platform, reducing rework and replacing manual reporting.",
    metric: "12 hrs saved monthly",
    bullets: [
      "Translated 15–20 business needs into BRDs, FRDs, user stories, acceptance criteria, and UAT scenarios, reducing repeated clarification and rework during delivery.",
      "Evaluated Power BI against Tableau for an Azure-based retail client and drove Power BI adoption, citing native Azure integration and lower licensing cost.",
      "Cleaned 104,000 CRM and sales records using SQL and Power Query, giving sales and marketing teams reliable lead and pipeline data.",
      "Consolidated data from five sources into six Power BI dashboards, replacing manual reporting and saving 12 hours a month.",
      "Maintained a Jira backlog of 40 stories across two-week sprints and coordinated 25 UAT scenarios across four release cycles, catching data mapping and workflow gaps before production.",
    ],
  },
  {
    company: "Prijai Heat Exchangers",
    role: "Operations Analyst",
    period: "Jan 2020 — Dec 2020",
    location: "Mumbai, Maharashtra, India",
    impact:
      "Brought structure to manufacturing operations data, replacing fragmented spreadsheets with consistent reporting across production, inventory, and finance.",
    metric: "3 teams aligned",
    bullets: [
      "Integrated production, inventory, and WIP data from BaaN ERP into Power BI reports, replacing fragmented spreadsheets with a consistent view of manufacturing operations.",
      "Reconciled ERP records with production, inventory, and finance teams, resolving stock and work-order mismatches before monthly management reviews.",
      "Automated recurring production and inventory reports using SQL Server and Power BI, reducing the manual effort required for operational updates.",
      "Analyzed work-in-progress across manufacturing stages and prepared forecast-versus-actual reports to flag delayed orders and production bottlenecks.",
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
        gap: isMobile ? "1.5rem" : "2.5rem",
        padding: isMobile ? "1.25rem" : "1.75rem",
        border: "1px solid #222",
        borderRadius: isMobile ? "14px" : "18px",
        background: "#121212",
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
              color: "#9ca3af",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.8rem",
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 600,
            }}
          >
            {job.period}
          </p>

          <h3
            style={{
              fontSize: isMobile ? "1.15rem" : "1.35rem",
              fontWeight: 700,
              color: "#ffffff",
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

        <div
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
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 600,
          }}
        >
          <AnimatedMetric text={job.metric} />
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: isMobile ? "0.92rem" : "0.98rem",
            color: "#ffffff",
            fontWeight: 500,
            marginBottom: "1.25rem",
            lineHeight: 1.65,
            padding: isMobile ? "0.95rem 1rem" : "1rem 1.1rem",
            borderLeft: "2px solid #3b82f6",
            background: "rgba(59,130,246,0.06)",
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
              <span
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
  const inView = useInView(ref, { once: true });
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
              maxWidth: "100%",
            }}
          >
            Experience across Agile project delivery, business analysis, requirements management, and cross-functional coordination.
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