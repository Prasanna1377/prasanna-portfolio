"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isTablet) setMenuOpen(false);
  }, [isTablet]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
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
          backgroundColor:
            scrolled || menuOpen ? "rgba(10, 10, 10, 0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(255,255,255,0.06)"
              : "none",
          transition:
            "background-color 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease, padding 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="#hero"
            onClick={handleLinkClick}
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
            Prasanna
          </a>

          {!isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.65rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "999px",
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px rgba(16,185,129,0.8)",
                }}
              />
              <span
                style={{
                  fontSize: "0.62rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#aab1bd",
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 600,
                }}
              >
                Open to Work
              </span>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "0.75rem" : "2rem",
          }}
        >
          {/* Desktop links */}
          {!isTablet && (
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
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
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Resume button — always visible */}
          {!isTablet && (
            <a
              href="https://drive.google.com/file/d/19ROMh7uBm6QK5K18eXsRUqSR9JNvK61Z/view"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8rem",
                padding: "0.4rem 1rem",
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
          )}

          {/* Hamburger button — tablet/mobile only */}
          {isTablet && (
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.4rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                width: "32px",
                height: "32px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "#ededed",
                  borderRadius: "999px",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: menuOpen
                    ? "translateY(6.5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "#ededed",
                  borderRadius: "999px",
                  transition: "opacity 0.25s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "#ededed",
                  borderRadius: "999px",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: menuOpen
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isTablet && menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: isMobile ? "56px" : "64px",
              left: 0,
              right: 0,
              zIndex: 49,
              background: "rgba(10, 10, 10, 0.97)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: isMobile ? "1rem 1.5rem 1.25rem" : "1.25rem 3rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  fontSize: isMobile ? "1rem" : "1.05rem",
                  color: "#a3a3a3",
                  textDecoration: "none",
                  padding: "0.65rem 0",
                  borderBottom: "1px solid #1a1a1a",
                  letterSpacing: "0.02em",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ededed";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#a3a3a3";
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/19ROMh7uBm6QK5K18eXsRUqSR9JNvK61Z/view"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "0.75rem",
                fontSize: "0.82rem",
                padding: "0.6rem 1.25rem",
                border: "1px solid #333",
                borderRadius: "2rem",
                color: "#ededed",
                textDecoration: "none",
                alignSelf: "flex-start",
                transition: "all 0.2s",
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
