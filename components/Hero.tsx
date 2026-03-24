"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
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
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: isMobile ? "7rem" : isTablet ? "6.5rem" : "7.5rem",
        paddingBottom: isMobile ? "3rem" : "3.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : isTablet ? "760px" : "980px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            fontSize: isMobile ? "0.78rem" : "0.85rem",
            color: "#7a7a7a",
            letterSpacing: "0.18em",
            fontWeight: 900,
            textTransform: "uppercase",
            marginBottom: "0.8rem",
          }}
        >
          Product · Analytics · Strategy
        </motion.p>

        <div style={{ marginBottom: "0.15rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: isMobile
                ? "clamp(3.8rem, 18vw, 5.6rem)"
                : isTablet
                  ? "clamp(4.5rem, 10vw, 6.5rem)"
                  : "clamp(5rem, 11vw, 12rem)",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
              color: "#e2e2e2",
              margin: 0,
            }}
          >
            Prasanna
          </motion.h1>
        </div>

        <div
          style={{
            marginBottom: isMobile ? "1.35rem" : isTablet ? "1.55rem" : "1.8rem",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.32,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: isMobile
                ? "clamp(3.8rem, 18vw, 5.6rem)"
                : isTablet
                  ? "clamp(4.5rem, 10vw, 6.5rem)"
                  : "clamp(5rem, 11vw, 12rem)",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
              color: "#e2e2e2",
              margin: 0,
            }}
          >
            Pingale
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.56,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            fontSize: isMobile ? "0.95rem" : isTablet ? "1rem" : "1.04rem",
            color: "#a3a3a3",
            lineHeight: 1.85,
            maxWidth: isMobile ? "100%" : "720px",
            margin: 0,
          }}
        >
          Product Analyst using user behavior, funnels, and data to shape product
          decisions and measurable business impact.
        </motion.p>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 1.05,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: isMobile ? "2.2rem" : isTablet ? "2.8rem" : "4rem",
          textDecoration: "none",
          color: "#7a7a7a",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#ededed";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#7a7a7a";
        }}
      >
        <span>Scroll down</span>
        <motion.span
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-flex" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}