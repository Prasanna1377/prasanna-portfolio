"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 18) + 4;
          return next > 100 ? 100 : next;
        });
      }, 75);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 350); 
    }
    return () => clearInterval(interval);
  }, [progress]);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: "#030303",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "2rem 3rem",
            borderBottom: "1px solid #222"
          }}
        >
          <div
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
