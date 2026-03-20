"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    school: "Northeastern University",
    degree: "MS in Information Systems",
    year: "2025",
    location: "Boston, Massachusetts",
    tag: "Master's",
    detail: "Focused on analytics, systems, and data driven product thinking.",
  },
  {
    school: "University of Mumbai",
    degree: "BE in Computer Engineering",
    year: "2023",
    location: "Mumbai, India",
    tag: "Bachelor's",
    detail:
      "Built a strong foundation in engineering, problem solving, and technical systems.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
    <section id="education" style={{ borderTop: "1px solid #222" }}>
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
            Education
          </h2>

          <p
            style={{
              fontSize: isMobile ? "0.95rem" : "1rem",
              color: "#7a7a7a",
              lineHeight: 1.7,
              maxWidth: "760px",
            }}
          >
            Academic foundation in information systems, engineering, and analytical
            problem solving.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1rem" : "1.5rem",
            width: "100%",
          }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={!isMobile ? { y: -4 } : undefined}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: isMobile ? "1.2rem" : "1.75rem",
                border:
                  hoveredCard === index ? "1px solid #2563eb" : "1px solid #222",
                borderRadius: isMobile ? "14px" : "18px",
                background: "linear-gradient(180deg, #141414 0%, #101010 100%)",
                minHeight: isMobile ? "auto" : "240px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
                boxShadow:
                  hoveredCard === index
                    ? "0 10px 28px rgba(0,0,0,0.18), 0 0 0 1px rgba(37,99,235,0.08)"
                    : "none",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: isMobile ? "1.1rem" : "1.5rem",
                  gap: "1rem",
                }}
              >
                <motion.div
                  animate={{ scale: hoveredCard === index && !isMobile ? 1.04 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: isMobile ? "42px" : "48px",
                    height: isMobile ? "42px" : "48px",
                    borderRadius: isMobile ? "12px" : "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(37,99,235,0.1)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    color: "#60a5fa",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={isMobile ? 20 : 22} />
                </motion.div>

                <div
                  style={{
                    fontSize: isMobile ? "0.66rem" : "0.72rem",
                    color: "#93c5fd",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(37,99,235,0.25)",
                    padding: "0.3rem 0.65rem",
                    borderRadius: "999px",
                    background: "rgba(37,99,235,0.08)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {edu.tag}
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.8rem",
                  }}
                >
                  {edu.year}
                </p>

                <h3
                  style={{
                    fontSize: isMobile ? "1.2rem" : "1.45rem",
                    fontWeight: 700,
                    color: "#ededed",
                    marginBottom: "0.55rem",
                    lineHeight: 1.3,
                    wordBreak: "break-word",
                  }}
                >
                  {edu.school}
                </h3>

                <p
                  style={{
                    fontSize: isMobile ? "0.92rem" : "1rem",
                    color: "#cfcfcf",
                    marginBottom: "0.9rem",
                    lineHeight: 1.5,
                    wordBreak: "break-word",
                  }}
                >
                  {edu.degree}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    marginBottom: "0.9rem",
                    color: "#7a7a7a",
                    fontSize: isMobile ? "0.84rem" : "0.9rem",
                  }}
                >
                  <MapPin
                    size={15}
                    style={{ marginTop: "0.15rem", flexShrink: 0 }}
                  />
                  <span style={{ lineHeight: 1.6, wordBreak: "break-word" }}>
                    {edu.location}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: isMobile ? "0.86rem" : "0.92rem",
                    color: "#9a9a9a",
                    lineHeight: 1.7,
                    wordBreak: "break-word",
                  }}
                >
                  {edu.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}