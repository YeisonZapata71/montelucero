"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageSrc: string;
  opacity?: number;
  speed?: "-slow" | "slow" | "medium" | "fast";
  blendMode?: string;
  className?: string;
}

export default function ParallaxBackground({ 
  imageSrc, 
  opacity = 0.05, 
  speed = "medium",
  blendMode = "mix-blend-luminosity",
  className = ""
}: ParallaxBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  
  // Choose parallax distance based on speed
  const mappedSpeed = {
    "-slow": ["10%", "-10%"],
    "slow": ["-10%", "10%"],
    "medium": ["-20%", "20%"],
    "fast": ["-30%", "30%"]
  };

  const y = useTransform(scrollYProgress, [0, 1], mappedSpeed[speed]);

  return (
    <div ref={ref} className={`absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center ${className}`}>
      {/* Fallback color gradient before image load to maintain mood */}
      <motion.img 
        src={imageSrc} 
        style={{ y, opacity }} 
        className={`w-[120%] h-[120%] min-w-full min-h-full max-w-none object-cover filter grayscale transition-opacity duration-1000 ${blendMode}`}
        alt="Texture background"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
    </div>
  );
}
