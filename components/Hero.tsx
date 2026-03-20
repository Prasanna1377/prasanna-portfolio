"use client";
import Image from "next/image";
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
        paddingTop: isMobile ? "7rem" : isTablet ? "7.5rem" : "8rem",
        paddingBottom: isMobile ? "3rem" : "4rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
          gap: isMobile ? "2.5rem" : isTablet ? "2rem" : "4rem",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ order: isTablet ? 2 : 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: isMobile ? "0.78rem" : "0.85rem",
              color: "#7a7a7a",
              letterSpacing: "0.18em",
              fontWeight: 900,
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Hey, I&apos;m
          </motion.p>

          <div style={{ marginBottom: "0.25rem" }}>
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
                    : "clamp(5rem, 12vw, 14rem)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                color: "#e2e2e2",
                margin: 0,
              }}
            >
              Prasanna
            </motion.h1>
          </div>

          <div style={{ marginBottom: isMobile ? "2rem" : isTablet ? "2.25rem" : "3rem" }}>
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
                    : "clamp(5rem, 12vw, 14rem)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                color: "#e2e2e2",
                margin: 0,
              }}
            >
              Pingale
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.62,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              width: "100%",
              paddingTop: "1.75rem",
              borderTop: "1px solid #222",
            }}
          >
            <p
              style={{
                fontSize: isMobile ? "0.82rem" : "0.9rem",
                color: "#8a8a8a",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1.8,
                whiteSpace: "normal",
                maxWidth: isTablet ? "100%" : "78%",
              }}
            >
              Product Analyst turning user behavior into clear product decisions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.95,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            order: isTablet ? 1 : 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image
              src="/Headshot.jpeg"
              alt="Prasanna Pingale"
              width={800}
              height={600}
              style={{
                width: "100%",
                maxWidth: isMobile ? "360px" : isTablet ? "380px" : "100%",
                height: isMobile ? "420px" : isTablet ? "440px" : "600px",
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: "12px",
              }}
            />
          </div>
        </motion.div>
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
        whileHover={{ y: 2 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: isMobile ? "1rem" : isTablet ? "1.5rem" : "2.5rem",
          alignSelf: "center",
          textDecoration: "none",
          color: "#888",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#ededed";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#666";
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