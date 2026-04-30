"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GalleryMosaic() {
  const images = [
    '/assets/1.jpeg',
    '/assets/10.jpeg',
    '/assets/11.jpeg',
    '/assets/12.jpeg',
    '/assets/13.jpeg',
    '/assets/14.jpeg',
    '/assets/2.jpeg',
    '/assets/250.png',
    '/assets/2500.png',
    '/assets/3.jpeg',
    '/assets/4.jpeg',
    '/assets/5.jpeg',
    '/assets/500.png',
    '/assets/6.jpeg',
    '/assets/7.jpeg',
    '/assets/8.jpeg',
    '/assets/9.jpeg',
    '/assets/hero-coffee.jpeg'
  ];
  
  // Duplicate array for infinite scroll effect (marquee)
  const marqueeImages = [...images, ...images];

  return (
    <section className="bg-[#03080D] py-12 relative overflow-hidden border-t border-gold-500/10">
      <div className="absolute inset-0 bg-[#0A1828]/80 mix-blend-color z-10 pointer-events-none"></div>
      
      <div className="text-center mb-8 relative z-20">
         <h3 className="text-gold-500 font-bold text-xs tracking-[0.4em] uppercase">El Mundo Monte Lucero</h3>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <motion.div 
          className="flex gap-4 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {marqueeImages.map((src, index) => (
            <div 
              key={index} 
              className="relative w-40 h-56 md:w-56 md:h-72 rounded-xl overflow-hidden group flex-shrink-0 cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-[#0A1828] hover:border-gold-500/50 transition-all duration-500"
            >
              <img 
                src={src} 
                alt="Monte Lucero Gallery" 
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-700" 
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
