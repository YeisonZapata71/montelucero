"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TastingProfile() {
  const notes = [
    {
      id: "I.",
      title: "Caramelo",
      description: "Dulzura natural del grano maduro, sin amargor. La base cálida que abraza cada sorbo desde el inicio."
    },
    {
      id: "II.",
      title: "Chocolate",
      description: "Notas oscuras y envolventes que emergen en el retrogusto, propias de la altitud y el proceso cuidadoso."
    },
    {
      id: "III.",
      title: "Frutos Rojos",
      description: "Acidez brillante y frutal que da vida y complejidad. Un guiño a las cerezas del cafeto en su mejor momento."
    },
    {
      id: "IV.",
      title: "Nuez",
      description: "Finish limpio y persistente. La firma mineral del suelo volcánico andino que lo hace inconfundible."
    }
  ];

  return (
    <section className="bg-[#F2EAE1] w-full flex flex-col lg:flex-row">
      {/* Left side: Image with text */}
      <div className="w-full lg:w-[45%] relative min-h-[350px] lg:min-h-screen flex items-center justify-center p-8 md:p-16 lg:p-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/9.jpeg')" }}
        ></div>
        
        {/* Dark greenish overlay */}
        <div className="absolute inset-0 bg-[#1e2a22]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/70 via-transparent to-[#0A1828]/30"></div>
        
        <div className="relative z-10 w-full max-w-lg">
          <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase mb-8 font-bold flex items-center gap-3">
            <span className="w-6 h-[1px] bg-gold-500"></span> PERFIL DE TAZA
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-10 font-normal">
            Notas que <br /> 
            cuentan una <span className="text-gold-500 italic font-serif">historia.</span>
          </h2>
          <div className="text-[#F2EAE1]/80 text-sm font-light leading-relaxed max-w-sm">
            <p className="mb-1">Monte Lucero expresa lo mejor del terroir andino colombiano.</p>
            <p>Un café complejo pero accesible, profundo pero equilibrado.</p>
          </div>
        </div>
      </div>

      {/* Right side: List */}
      <div className="w-full lg:w-[55%] bg-[#F2EAE1] p-8 md:p-16 lg:p-24 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {notes.map((note, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`py-10 flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center border-[#0A1828]/10 ${index === 0 ? 'border-y' : 'border-b'}`}
            >
              <div className="flex items-baseline gap-6 md:w-5/12 shrink-0">
                <span className="text-[#0A1828]/40 text-xs font-serif tracking-widest w-6">{note.id}</span>
                <h3 className="text-2xl lg:text-3xl text-[#0A1828] font-serif font-normal">{note.title}</h3>
              </div>
              <p className="text-[#0A1828]/70 text-xs lg:text-sm font-light leading-relaxed flex-1">
                {note.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
