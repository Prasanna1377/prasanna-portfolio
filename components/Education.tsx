"use client";
import { useRef, useState } from "react";
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
            marginBottom: "2rem",
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
              fontSize: "1rem",
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
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: "1.75rem",
                border: hoveredCard === index ? "1px solid #2563eb" : "1px solid #222",
                borderRadius: "18px",
                background: "linear-gradient(180deg, #141414 0%, #101010 100%)",
                minHeight: "240px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
                boxShadow:
                  hoveredCard === index
                    ? "0 10px 28px rgba(0,0,0,0.18), 0 0 0 1px rgba(37,99,235,0.08)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <motion.div
                  animate={{ scale: hoveredCard === index ? 1.04 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(37,99,235,0.1)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    color: "#60a5fa",
                  }}
                >
                  <GraduationCap size={22} />
                </motion.div>

                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#93c5fd",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(37,99,235,0.25)",
                    padding: "0.3rem 0.65rem",
                    borderRadius: "999px",
                    background: "rgba(37,99,235,0.08)",
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
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "#ededed",
                    marginBottom: "0.55rem",
                    lineHeight: 1.3,
                  }}
                >
                  {edu.school}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "#cfcfcf",
                    marginBottom: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  {edu.degree}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                    color: "#7a7a7a",
                    fontSize: "0.9rem",
                  }}
                >
                  <MapPin size={15} />
                  <span>{edu.location}</span>
                </div>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#9a9a9a",
                    lineHeight: 1.7,
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