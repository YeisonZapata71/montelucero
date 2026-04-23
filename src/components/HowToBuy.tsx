"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MessageCircle, Truck } from 'lucide-react';

export default function HowToBuy() {
  const steps = [
    {
      icon: <MousePointerClick className="w-10 h-10 text-background" />,
      title: "1. Variedad",
      description: "Elige tus notas y perfil de taza favoritos."
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-background" />,
      title: "2. Contacto",
      description: "Confírmanos tu pedido por WhatsApp."
    },
    {
      icon: <Truck className="w-10 h-10 text-background" />,
      title: "3. Entrega",
      description: "Recibe fresco y paga al mensajero."
    }
  ];

  return (
    <section className="py-24 bg-[#0A1828] relative overflow-hidden px-6 border-y border-gold-500/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-wider">La Experiencia</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex-1 text-center relative"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-8 flex items-center justify-center shadow-lg shadow-gold-500/20 border-4 border-[#0A1828] outline outline-1 outline-gold-500/30">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed font-light">{step.description}</p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-gradient-to-r from-gold-500/50 to-transparent z-[-1]"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
