"use client";

import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
}

export default function ParticleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate bubbles once on client mount to avoid SSR hydration mismatch
    const newBubbles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 12 + 6, // 6px to 18px
      left: Math.random() * 100, // percentage width
      delay: Math.random() * 10, // delay up to 10s
      duration: Math.random() * 8 + 8, // duration between 8s and 16s
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-t from-water-aqua/10 to-water-fresh/35 border border-white/20 animate-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            bottom: "-20px",
          }}
        />
      ))}
    </div>
  );
}
