"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ParallaxBackground from './ParallaxBackground';

export default function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola Monte Lucero, quiero comprar café. ¿Me pueden ayudar?");
    window.open(`https://wa.me/573000000000?text=${message}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A1828]">
      
      {/* Abstract Faded Background Images utilizing multiple jpegs for a rich texture */}
      <ParallaxBackground imageSrc="/assets/14.jpeg" opacity={0.08} speed="slow" />
      <ParallaxBackground imageSrc="/assets/10.jpeg" opacity={0.05} speed="-slow" blendMode="mix-blend-screen" className="rotate-180" />

      {/* Lighting overlays to anchor text */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A1828]/60 to-[#0A1828]/95 z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 pt-10">
        
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block border border-gold-500/30 text-gold-500 text-xs px-3 py-1 tracking-[0.3em] uppercase mb-4 shadow-[0_0_20px_rgba(207,160,113,0.15)] bg-[#0A1828]/50 backdrop-blur-sm">
            Edición Premium Limitada
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-[#F2EAE1]">
            El Alma del<br className="hidden md:block"/>
            <span className="text-gold-500 font-serif italic text-6xl md:text-8xl font-medium drop-shadow-lg">Café Clásico.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F2EAE1]/80 max-w-xl mx-auto lg:mx-0 font-light mt-4 leading-relaxed">
            Cultivado a 1.850m en las imponentes montañas colombianas. Frescura inigualable para el paladar más exigente.
          </p>
          <motion.div 
            className="pt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-[#0A1828] font-black py-4 px-10 border border-gold-500/50 shadow-[0_0_30px_rgba(207,160,113,0.3)] transition-all text-lg flex items-center justify-center gap-4 mx-auto lg:mx-0 uppercase tracking-widest relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Pedir Ahora</span>
              <span className="relative z-10 text-[10px] font-bold bg-[#0A1828]/20 px-2 py-1 uppercase tracking-widest text-[#0A1828] border border-[#0A1828]/10">- Contraentrega</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full max-w-md lg:max-w-lg aspect-[4/5] relative"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          {/* Main Hero Product Display using PNGs on a classic stage presentation */}
          <div className="w-full h-full relative flex items-center justify-center">
             {/* Back Glow Orb */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold-500/20 rounded-full blur-[80px]"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold-500/40 rounded-full blur-[50px]"></div>
             
             {/* Stage Floor */}
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/50 blur-xl rounded-[100%] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"></div>
             
             {/* Product PNGs arranged beautifully */}
             <motion.img 
               src="/assets/500.png" 
               alt="Monte Lucero 500gr" 
               className="w-3/4 absolute bottom-12 left-1/2 -translate-x-1/2 z-20 drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]" 
               initial={{ y: 20 }}
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
             />
             <motion.img 
               src="/assets/250.png" 
               alt="Monte Lucero 250gr" 
               className="w-1/2 absolute bottom-6 right-0 z-30 drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] opacity-90 scale-90" 
               initial={{ y: 20 }}
               animate={{ y: [0, -8, 0] }}
               transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
             />
             <motion.img 
               src="/assets/2500.png" 
               alt="Monte Lucero 2.500gr" 
               className="w-3/4 absolute bottom-20 left-0 -translate-x-1/4 z-10 drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] opacity-80 scale-110 blur-[1px]" 
               initial={{ y: 10 }}
               animate={{ y: [0, -5, 0] }}
               transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
