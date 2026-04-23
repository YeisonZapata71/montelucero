"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola Monte Lucero, quiero comprar café. ¿Me pueden ayudar?");
    window.open(`https://wa.me/573000000000?text=${message}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background with soft warm bronze glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gold-600/10 z-0"></div>
      
      {/* Subtle Side Illumination overlay to add depth to dark blue */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-foreground">
            Café de Especialidad,<br className="hidden md:block"/>
            <span className="text-gold-500 font-serif italic text-5xl md:text-7xl font-medium">Clásico y Premium.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 font-light">
            De nuestras fincas a tu mesa. Notas perfectas, tueste ideal y estilo impecable.
          </p>
          <motion.div 
            className="pt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={handleWhatsApp}
              className="bg-gold-500 hover:bg-gold-600 text-[#0A1828] font-bold py-4 px-8 rounded-none border-b-4 border-gold-600 shadow-xl shadow-gold-500/20 transition-all text-lg flex items-center justify-center gap-3 mx-auto lg:mx-0 uppercase tracking-widest"
            >
              Pedir Ahora
              <span className="text-xs font-bold bg-[#0A1828]/20 px-2 py-1 uppercase tracking-wider text-[#0A1828]">- Paga al Recibir</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full max-w-md lg:max-w-lg aspect-square relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main Hero Product Display tuned for dark blue visual */}
          <div className="w-full h-full rounded-tr-[4rem] rounded-bl-[4rem] bg-gradient-to-tr from-[#06101c] to-[#0d1e33] border border-gold-500/10 flex items-center justify-center overflow-hidden shadow-2xl relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl mix-blend-screen"></div>
             <img src="/assets/hero-coffee.jpeg" alt="Monte Lucero Premium Coffee" className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:mix-blend-normal transition-all duration-700 cursor-pointer mix-blend-luminosity brightness-75 drop-shadow-2xl" onError={(e) => (e.currentTarget.style.display = 'none')} />
             <div className="absolute inset-0 flex items-center justify-center text-gold-500/20 text-3xl font-serif font-black italic -z-10 tracking-widest drop-shadow-sm">
                MONTE LUCERO
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
