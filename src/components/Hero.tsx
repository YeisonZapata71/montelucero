"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleWhatsApp = () => {
    // Number could be passed via props or env
    const message = encodeURIComponent("Hola Monte Lucero, quiero comprar café. ¿Me pueden ayudar?");
    window.open(`https://wa.me/573000000000?text=${message}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background with soft gold gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gold-600/10 z-0"></div>
      
      {/* Optional Side Illumination / Dark Vignette wrapper */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/90 z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
            El Café de Especialidad<br className="hidden md:block"/> que esperabas,<br/>
            <span className="text-gold-500">directo a tu puerta.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0">
            Cultivado a 1.850m en las montañas colombianas. Sin intermediarios, frescura total.
          </p>
          <motion.div 
            className="pt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={handleWhatsApp}
              className="bg-gold-500 hover:bg-gold-600 text-background font-bold py-4 px-8 rounded-full shadow-lg shadow-gold-500/30 transition-all text-lg flex items-center justify-center gap-3 mx-auto lg:mx-0"
            >
              Pedir por WhatsApp
              <span className="text-sm font-medium bg-background/20 px-2 py-1 rounded-md">- Paga al Recibir</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full max-w-md lg:max-w-lg aspect-square relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main Hero Product Display. The image would have a side lighting to emphasize the gold letters against standard dark background. We assume an image will be placed here. */}
          <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-foreground/5 to-gold-500/20 backdrop-blur-sm border border-gold-500/10 flex items-center justify-center overflow-hidden shadow-2xl relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl mix-blend-screen"></div>
             {/* Note: since there are generic jpeg files in E:\2026\MONTELUCERO, we'll just reference /9.jpeg which is copied later, or just a placeholder string */}
             <img src="/assets/hero-coffee.jpeg" alt="Monte Lucero Premium Coffee" className="w-full h-full object-cover object-center mix-blend-luminosity brightness-75 hover:mix-blend-normal hover:brightness-100 transition-all duration-700 cursor-pointer" onError={(e) => (e.currentTarget.style.display = 'none')} />
             <div className="absolute inset-0 flex items-center justify-center text-gold-500/40 text-2xl font-bold -z-10 tracking-widest">
                MONTE LUCERO
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
