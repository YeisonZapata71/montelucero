"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: '1', name: 'Tueste Medio - Frutal', price: '$45.000 COP', image: '/assets/1.jpeg' },
  { id: '2', name: 'Tueste Oscuro - Intenso', price: '$45.000 COP', image: '/assets/2.jpeg' },
  { id: '3', name: 'Reserva Especial Oro', price: '$60.000 COP', image: '/assets/3.jpeg' },
];

export default function ProductCardList() {
  const openWhatsApp = (productName: string) => {
    const message = `Hola Monte Lucero, quiero comprar la variedad ${productName}. Me interesa la opción Contraentrega. Mi ciudad es: `;
    window.open(`https://wa.me/573000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-[#050C14] px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-wider">La Selección</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto font-light">Explora nuestros perfiles de taza desarrollados con maestría para el paladar más exigente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0D1F33] border border-white/5 overflow-hidden shadow-2xl hover:border-gold-500/40 transition-all group"
            >
              <div className="aspect-[4/5] relative bg-[#06101c] overflow-hidden border-b border-gold-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F33] to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0 mix-blend-luminosity brightness-90 group-hover:mix-blend-normal group-hover:brightness-100" 
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              
              <div className="p-8 relative z-20">
                <h3 className="text-xl font-bold text-foreground mb-1 uppercase tracking-wide">{product.name}</h3>
                <p className="text-2xl font-serif italic text-gold-500 mb-6">{product.price}</p>
                
                <div className="flex items-center gap-2 text-xs text-foreground/80 mb-6 border-l-2 border-gold-500 pl-3">
                  <CheckCircle2 size={16} className="text-gold-500" />
                  <span className="font-light uppercase tracking-wider">Pago Contraentrega</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp(product.name)}
                  className="w-full bg-transparent hover:bg-gold-500 border border-gold-500 text-gold-500 py-3 font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group-hover:text-[#0A1828]"
                >
                  Lo quiero
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
