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
  { id: '1', name: 'Tueste Medio - Notas Frutales', price: '$45.000 COP', image: '/assets/1.jpeg' },
  { id: '2', name: 'Tueste Oscuro - Intenso', price: '$45.000 COP', image: '/assets/2.jpeg' },
  { id: '3', name: 'Edición Especial Limitada', price: '$60.000 COP', image: '/assets/3.jpeg' },
];

export default function ProductCardList() {
  const openWhatsApp = (productName: string) => {
    const message = `Hola Monte Lucero, quiero comprar el café ${productName}. Me interesa la opción de [Pago Contraentrega / Transferencia]. Mi ciudad es: `;
    window.open(`https://wa.me/573000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 bg-background px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Nuestras Variedades</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Selecciona tu perfil de taza ideal. Todos nuestros cafés están disponibles para envío seguro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-foreground/5 border border-foreground/5 group hover:shadow-2xl hover:border-gold-500/20 transition-all"
            >
              <div className="aspect-[4/5] relative bg-background overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                {/* Fallback pattern */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                   <span className="text-foreground font-bold tracking-widest rotate-[-45deg] scale-150">MONTE LUCERO</span>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0" 
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-gold-500 mb-4">{product.price}</p>
                
                <div className="flex items-center gap-2 text-sm text-foreground/80 bg-gold-500/10 w-fit px-3 py-1.5 rounded-full mb-6">
                  <CheckCircle2 size={16} className="text-gold-600" />
                  <span className="font-medium text-gold-600">Pago Contraentrega</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp(product.name)}
                  className="w-full bg-white hover:bg-gold-500 border-2 border-gold-500 text-gold-600 hover:text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 group-hover:bg-gold-500 group-hover:text-white"
                >
                  <MessageCircle size={20} />
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
