"use client";
import React, { useEffect, useState } from "react";

export default function SpotlightBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[-2]"
        style={{
          backgroundColor: "#0a0a0a",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[-1]"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 80%)`,
        }}
      />
    </>
  );
}
