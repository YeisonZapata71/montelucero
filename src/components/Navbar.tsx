"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Perfil', href: '#perfil' },
    { name: 'Origen', href: '#origen' },
    { name: 'Galeria', href: '#galeria' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6 md:py-8'}`}
    >
      <div className="container mx-auto px-6 flex justify-center md:justify-end">
        <nav className={`flex items-center gap-4 md:gap-8 px-6 md:px-8 py-3 rounded-full transition-all duration-300 ${isScrolled ? 'bg-[#0A1828]/90 backdrop-blur-md shadow-lg shadow-black/20 border border-gold-500/20' : 'bg-[#0A1828]/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-gold-500/10 md:border-transparent'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-[#F2EAE1] hover:text-gold-500 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
