"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function OriginStory() {
  return (
    <section className="bg-[#F4F0E6] w-full flex flex-col lg:flex-row border-t border-[#0A1828]/5 overflow-hidden">
      {/* Left side: Images */}
      <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-screen">
        {/* Main misty background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/12.jpeg')" }}
        ></div>
        
        {/* Top left text overlay (optional based on mockup) */}
        <div className="absolute top-8 left-8 z-10">
          <p className="text-[#0A1828]/70 text-xs tracking-[0.4em] uppercase font-bold">Monte Lucero</p>
        </div>

        {/* Small overlaid image bottom right */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-10 right-0 lg:-right-16 w-3/4 max-w-[350px] aspect-square shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-8 border-[#F4F0E6]"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/11.jpeg')" }}
          ></div>
        </motion.div>
      </div>

      {/* Right side: Content */}
      <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-24 flex items-center bg-[#F4F0E6] relative z-10">
        <div className="w-full max-w-xl">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl text-[#0A1828] font-normal leading-[1.1] mb-12"
          >
            Tierra, altura <br />
            y <span className="text-gold-500 italic font-serif">paciencia.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-[#0A1828]/70 text-sm md:text-base font-light leading-relaxed mb-16"
          >
            <p>
              Monte Lucero nace de la convicción de que el mejor café colombiano
              merece encontrarse con quien sabe apreciarlo. Nuestra finca, a 1.850
              metros sobre el nivel del mar, ofrece condiciones perfectas: suelo rico en
              minerales, lluvias puntuales y una diferencia térmica que desarrolla
              azúcares complejos en el grano.
            </p>
            <p>
              Aquí no se apresura nada. Cada cereza se selecciona en su punto exacto
              de madurez, procesada con el cuidado artesanal que merece un producto
              de esta categoría.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-10 border-t border-[#0A1828]/10"
          >
            <div>
              <p className="text-3xl lg:text-4xl text-[#0A1828] font-serif mb-2">1.850</p>
              <p className="text-[9px] text-[#0A1828]/50 uppercase tracking-[0.2em] font-bold">Metros sobre el mar</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl text-[#0A1828] font-serif mb-2">100%</p>
              <p className="text-[9px] text-[#0A1828]/50 uppercase tracking-[0.2em] font-bold">Cosecha manual</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl text-[#0A1828] font-serif mb-2">Col.</p>
              <p className="text-[9px] text-[#0A1828]/50 uppercase tracking-[0.2em] font-bold">Origen único</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
