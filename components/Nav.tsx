"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        paddingTop: scrolled
          ? isMobile
            ? "0.85rem"
            : "1rem"
          : isMobile
            ? "1rem"
            : "1.25rem",
        paddingBottom: scrolled
          ? isMobile
            ? "0.85rem"
            : "1rem"
          : isMobile
            ? "1rem"
            : "1.25rem",
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition:
          "background-color 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease, padding 0.3s ease",
      }}
    >
      <a
        href="#hero"
        style={{
          fontSize: isMobile ? "0.85rem" : "0.95rem",
          fontWeight: 700,
          color: "#ededed",
          textDecoration: "none",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Prasanna Pingale
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? "0.75rem" : "2rem",
        }}
      >
        {!isTablet && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {["Work", "Experience", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: "0.8rem",
                  color: "#666",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ededed";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#666";
                }}
              >
                {link}
              </a>
            ))}
          </div>
        )}

        <a
          href="https://drive.google.com/file/d/19ROMh7uBm6QK5K18eXsRUqSR9JNvK61Z/view"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: isMobile ? "0.75rem" : "0.8rem",
            padding: isMobile ? "0.4rem 0.85rem" : "0.4rem 1rem",
            border: "1px solid #333",
            borderRadius: "2rem",
            color: "#ededed",
            textDecoration: "none",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
            flexShrink: 0,
            background: scrolled ? "rgba(255,255,255,0.02)" : "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#2563eb";
            e.currentTarget.style.color = "#2563eb";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#333";
            e.currentTarget.style.color = "#ededed";
          }}
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}