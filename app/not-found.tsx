"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg)",
        color: "var(--fg)",
        padding: "2rem",
        fontFamily: "var(--font-geist-mono)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.85rem",
            color: "#f87171",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 700,
            padding: "0.3rem 0.8rem",
            background: "rgba(248,113,113,0.1)",
            border: "1px solid rgba(248,113,113,0.2)",
            borderRadius: "999px",
            marginBottom: "0.5rem",
          }}
        >
          Error 404
        </div>
        
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          Dataset Not Found
        </h1>
        
        <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
          The query returned zero results. The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          style={{
            padding: "0.8rem 1.6rem",
            background: "#ededed",
            color: "#111",
            textDecoration: "none",
            borderRadius: "999px",
            fontSize: "0.85rem",
            fontWeight: 600,
            transition: "transform 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Return to Dashboard
        </Link>
      </motion.div>
    </main>
  );
}
