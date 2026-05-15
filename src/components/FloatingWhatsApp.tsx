"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/573186470507?text=Hola%20Monte%20Lucero,%20tengo%20una%20duda.", "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-[56px] h-[56px] bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-[#25D366]/40 cursor-pointer flex items-center justify-center transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <path d="M12.031 0C5.405 0 .021 5.385.021 12.01c0 2.12.553 4.195 1.6 6.04L.014 24l6.095-1.6c1.782.97 3.791 1.48 5.922 1.48 6.626 0 12.01-5.384 12.01-12.01S18.657 0 12.031 0zm0 21.84c-1.802 0-3.567-.484-5.11-1.405l-.367-.217-3.797 1 .997-3.702-.238-.38c-.995-1.59-1.52-3.44-1.52-5.34 0-5.513 4.49-10.003 10.035-10.003 5.514 0 10.004 4.49 10.004 10.003 0 5.514-4.49 10.005-10.004 10.005zm5.503-7.518c-.302-.15-1.787-.88-2.064-.982-.276-.1-.477-.15-.678.15-.201.302-.779.983-.954 1.183-.176.202-.352.227-.654.075-1.282-.647-2.3-1.205-3.18-2.678-.201-.302.2-.283.498-.88.1-.202.05-.378-.025-.528-.075-.15-.678-1.637-.93-2.242-.243-.585-.49-.505-.678-.515-.176-.01-.377-.01-.578-.01-.201 0-.528.076-.804.378-.276.302-1.055 1.032-1.055 2.518s1.08 2.918 1.231 3.12 c.15.201 2.135 3.262 5.176 4.57 1.956.843 2.766.906 3.796.756 1.13-.165 2.56-1.045 2.91-2.055.35-1.01.35-1.875.25-2.055-.101-.18-.352-.28-.654-.43z" />
      </svg>
      {/* Optional tooltip */}
      <span className="absolute right-full mr-4 bg-foreground text-background text-sm font-bold px-4 py-2 rounded-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
        ¡Escríbenos!
      </span>
    </motion.button>
  );
}
