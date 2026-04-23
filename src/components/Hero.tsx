"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola Monte Lucero, quiero comprar café. ¿Me pueden ayudar?");
    window.open(`https://wa.me/573000000000?text=${message}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A1828]">
      
      {/* Clean, Elegant Deep Blue Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#11263d] via-[#0A1828] to-[#04090F] z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16 pt-10">
        
        <motion.div 
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <div className="inline-block border border-gold-500/40 text-gold-500 text-xs px-4 py-1.5 tracking-[0.3em] uppercase mb-6 bg-[#0A1828]/50 backdrop-blur-sm rounded-full shadow-lg shadow-gold-500/10">
              Edición Premium
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-[#F2EAE1] drop-shadow-xl">
              El Alma del<br className="hidden md:block"/>
              <span className="text-gold-500 font-serif italic font-medium">Café Clásico.</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-[#F2EAE1]/70 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Cultivado a 1.850m en las imponentes montañas colombianas. Frescura inigualable para el paladar más exigente. De origen a tu mesa.
          </p>
          <motion.div 
            className="pt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-[#0A1828] font-black py-4 px-10 rounded-full shadow-[0_10px_30px_rgba(207,160,113,0.3)] transition-all text-lg flex items-center justify-center mx-auto lg:mx-0 uppercase tracking-widest relative"
            >
              Pedir Ahora
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full lg:max-w-xl aspect-[4/5] relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          {/* Main Hero Product Display: Clean Podium Style */}
          <div className="w-full h-full relative flex items-center justify-center">
             
             {/* Simple elegant glow behind the products */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold-500/15 rounded-full blur-[80px] pointer-events-none z-0"></div>
             
             {/* 2500gr - Back */}
             <motion.img 
               src="/assets/2500.png" 
               alt="Monte Lucero 2.500gr" 
               className="w-[50%] md:w-[60%] absolute top-[10%] left-[10%] z-10 drop-shadow-[0_30px_35px_rgba(0,0,0,0.8)] opacity-90" 
               initial={{ y: 20 }}
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />

             {/* 500gr - Front Center */}
             <motion.img 
               src="/assets/500.png" 
               alt="Monte Lucero 500gr" 
               className="w-[60%] md:w-[70%] absolute bottom-[10%] z-30 drop-shadow-[0_40px_45px_rgba(0,0,0,0.9)]" 
               initial={{ y: 20 }}
               animate={{ y: [0, -12, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />

             {/* 250gr - Right Mid */}
             <motion.img 
               src="/assets/250.png" 
               alt="Monte Lucero 250gr" 
               className="w-[40%] md:w-[45%] absolute top-[30%] right-[5%] z-20 drop-shadow-[0_25px_30px_rgba(0,0,0,0.7)]" 
               initial={{ y: 20 }}
               animate={{ y: [0, -8, 0] }}
               transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
