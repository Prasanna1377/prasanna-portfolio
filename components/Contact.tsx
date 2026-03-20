"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prasannapingale/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/Prasanna1377",
      icon: Github,
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1LDmFUkssnuMi2FpFmymEcBpZiBDnNDIP/view",
      icon: FileText,
    },
  ];

  return (
    <section id="contact" style={{ borderTop: "1px solid #222" }}>
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
            gap: "1rem",
            marginBottom: isMobile ? "2rem" : "3rem",
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
            Let’s Connect
          </h2>

          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "#888",
              lineHeight: 1.7,
              maxWidth: "760px",
            }}
          >
            I&apos;m always open to conversations around product, analytics, and
            building better user experiences.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1.05fr 0.95fr",
            gap: isMobile ? "1.25rem" : "2rem",
            alignItems: "stretch",
            marginBottom: isMobile ? "3rem" : "4rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={!isMobile ? { y: -4 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredPanel("left")}
            onMouseLeave={() => setHoveredPanel(null)}
            style={{
              border: hoveredPanel === "left" ? "1px solid #2563eb" : "1px solid #222",
              borderRadius: isMobile ? "14px" : "18px",
              background: "linear-gradient(180deg, #141414 0%, #101010 100%)",
              padding: isMobile ? "1.25rem" : "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "100%",
              transition: "all 0.25s ease",
              boxShadow:
                hoveredPanel === "left"
                  ? "0 10px 28px rgba(0,0,0,0.18), 0 0 0 1px rgba(37,99,235,0.08)"
                  : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <motion.a
                href="mailto:prasannapingale471@gmail.com"
                whileHover={!isMobile ? { y: -2 } : undefined}
                transition={{ duration: 0.2 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  padding: isMobile ? "0.9rem 1.1rem" : "1rem 1.6rem",
                  borderRadius: "999px",
                  background: "#2563eb",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: isMobile ? "0.82rem" : "0.95rem",
                  fontWeight: 600,
                  boxShadow: "0 10px 30px rgba(37,99,235,0.25)",
                  transition: "all 0.25s ease",
                  marginBottom: "2rem",
                  width: isMobile ? "100%" : "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                  flexWrap: "wrap",
                }}
              >
                <Mail size={isMobile ? 16 : 18} />
                <span style={{ wordBreak: "break-word" }}>
                  prasannapingale471@gmail.com
                </span>
              </motion.a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: isMobile ? "0.6rem" : "1rem",
                  marginBottom: "1.75rem",
                  width: "100%",
                }}
              >
                <div style={{ flex: 1, height: "1px", background: "#222" }} />
                <span
                  style={{
                    fontSize: isMobile ? "0.72rem" : "0.8rem",
                    color: "#666",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}
                >
                  or find me on
                </span>
                <div style={{ flex: 1, height: "1px", background: "#222" }} />
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0.75rem",
                  width: "100%",
                }}
              >
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={!isMobile ? { y: -2 } : undefined}
                      transition={{ duration: 0.18 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.65rem",
                        padding: isMobile ? "0.85rem 1rem" : "0.95rem 1.2rem",
                        border: "1px solid #2a2a2a",
                        borderRadius: "999px",
                        background: "#111111",
                        color: "#d1d5db",
                        textDecoration: "none",
                        fontSize: isMobile ? "0.84rem" : "0.92rem",
                        transition: "all 0.25s ease",
                        minWidth: isMobile ? "calc(50% - 0.4rem)" : "auto",
                        flex: isMobile ? "1 1 calc(50% - 0.4rem)" : "0 0 auto",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#2563eb";
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.background = "#151515";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#2a2a2a";
                        e.currentTarget.style.color = "#d1d5db";
                        e.currentTarget.style.background = "#111111";
                      }}
                    >
                      <Icon size={isMobile ? 15 : 17} />
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={!isMobile ? { y: -4 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseEnter={() => setHoveredPanel("right")}
            onMouseLeave={() => setHoveredPanel(null)}
            style={{
              border: hoveredPanel === "right" ? "1px solid #2563eb" : "1px solid #222",
              borderRadius: isMobile ? "14px" : "18px",
              background: "linear-gradient(180deg, #141414 0%, #101010 100%)",
              padding: isMobile ? "1.2rem" : "1.5rem",
              minHeight: "100%",
              transition: "all 0.25s ease",
              boxShadow:
                hoveredPanel === "right"
                  ? "0 10px 28px rgba(0,0,0,0.18), 0 0 0 1px rgba(37,99,235,0.08)"
                  : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1.25rem",
              }}
            >
              <motion.span
                animate={{ scale: hoveredPanel === "right" ? 1.08 : 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 12px rgba(34,197,94,0.65)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: isMobile ? "0.74rem" : "0.78rem",
                  color: "#d1d5db",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Open to Work
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                ["Location", "Massachusetts, United States"],
                [
                  "Target Roles",
                  "Senior Product Analyst, Product Analyst, Business Analyst",
                ],
                ["Work Style", "Remote, Hybrid, or Open to relocate"],
              ].map(([label, value], idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  style={{
                    paddingBottom: "0.9rem",
                    borderBottom: "1px solid #1f1f1f",
                  }}
                >
                  <p
                    style={{
                      fontSize: isMobile ? "0.68rem" : "0.72rem",
                      color: "#6b7280",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: isMobile ? "0.9rem" : "0.95rem",
                      color: "#ededed",
                      lineHeight: 1.6,
                    }}
                  >
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? "0.75rem" : "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid #1a1a1a",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "#4b5563" }}>
            Copyright © Prasanna Pingale 2025
          </p>

          <motion.a
            href="#hero"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.18 }}
            style={{
              fontSize: "0.78rem",
              color: "#4b5563",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
          >
            Back to top
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}