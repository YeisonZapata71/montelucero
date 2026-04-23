"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MessageCircle, Truck } from 'lucide-react';

export default function HowToBuy() {
  const steps = [
    {
      icon: <MousePointerClick className="w-10 h-10 text-background" />,
      title: "1. Eliges tu Variedad",
      description: "Selecciona el café que más llame tu atención de nuestro catálogo de especialidad."
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-background" />,
      title: "2. Confirmas por WhatsApp",
      description: "Nos escribes para confirmar tus datos de envío y la opción de pago."
    },
    {
      icon: <Truck className="w-10 h-10 text-background" />,
      title: "3. Recibes y Pagas",
      description: "Recibe tu café fresco en la puerta de tu casa y págalo al mensajero."
    }
  ];

  return (
    <section className="py-24 bg-foreground/5 relative overflow-hidden px-6">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">¿Cómo Comprar?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Un proceso simple, rápido y 100% seguro.</p>
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
              <div className="w-20 h-20 mx-auto bg-gold-500 rounded-2xl rotate-3 mb-8 flex items-center justify-center shadow-lg shadow-gold-500/20">
                <div className="absolute inset-0 bg-gold-600 rounded-2xl -rotate-6 -z-10 opacity-50"></div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-gold-500/50 to-transparent z-[-1]"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
