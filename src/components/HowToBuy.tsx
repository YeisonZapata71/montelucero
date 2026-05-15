"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MessageCircle, Truck } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

export default function HowToBuy() {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-[#0A1828]" />,
      title: "1. Selección",
      description: "Elige tus notas y el perfil de taza de tu preferencia."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#0A1828]" />,
      title: "2. Contacto",
      description: "Confírmanos tu pedido por WhatsApp y coordina el envío."
    },
    {
      icon: <Truck className="w-8 h-8 text-[#0A1828]" />,
      title: "3. Entrega",
      description: "Recibe tu café fresco en casa. Paga contraentrega o por medios electrónicos."
    }
  ];

  return (
    <section className="py-32 bg-[#0A1828] relative overflow-hidden px-6 border-y border-gold-500/10">
      <ParallaxBackground imageSrc="/assets/6.jpeg" opacity={0.05} speed="-slow" />
      <ParallaxBackground imageSrc="/assets/8.jpeg" opacity={0.03} speed="slow" blendMode="mix-blend-screen" className="rotate-180" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm text-gold-500 uppercase tracking-[0.4em] mb-4">¿Cómo Obtenerlo?</h2>
          <h3 className="text-3xl md:text-5xl font-normal text-[#F2EAE1] mb-6 uppercase tracking-wider">La Experiencia</h3>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex-1 text-center relative group"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-10 flex items-center justify-center shadow-[0_0_30px_rgba(207,160,113,0.3)] border-4 border-[#0A1828] outline outline-1 outline-gold-500/50 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-lg font-normal text-gold-500 mb-3 uppercase tracking-widest">{step.title}</h3>
              <p className="text-[#F2EAE1]/70 leading-relaxed font-light px-4">{step.description}</p>
              
              {/* Elegant Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[3rem] left-[65%] w-full h-[1px] bg-gradient-to-r from-gold-500/70 via-gold-500/20 to-transparent z-[-1]"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
