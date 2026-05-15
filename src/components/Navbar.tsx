"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
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
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6 md:py-8'}`}
      >
        <div className="container mx-auto px-6 flex justify-between md:justify-end items-center">
          
          {/* Mobile Logo / Brand Name (only visible on mobile to balance the hamburger) */}
          <div className={`md:hidden font-serif italic text-gold-500 tracking-widest transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
            M.L
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300 ${isScrolled ? 'bg-[#0A1828]/90 backdrop-blur-md shadow-lg shadow-black/20 border border-gold-500/20' : 'bg-transparent backdrop-blur-none border-transparent'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[#F2EAE1] hover:text-gold-500 text-xs font-medium tracking-[0.2em] uppercase transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-3 rounded-full transition-colors ${isScrolled ? 'bg-[#0A1828]/90 backdrop-blur-md text-[#F2EAE1] border border-gold-500/20 shadow-lg' : 'bg-[#0A1828]/40 backdrop-blur-md text-[#F2EAE1] border border-gold-500/10'}`}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0A1828] flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 text-gold-500 hover:text-[#F2EAE1] transition-colors"
              aria-label="Cerrar menú"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-[#F2EAE1] hover:text-gold-500 text-2xl font-serif italic tracking-widest uppercase transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-gold-500/50 text-xs tracking-[0.3em] uppercase"
            >
              Monte Lucero
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
