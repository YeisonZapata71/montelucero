"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

interface Product {
  id: string;
  name: string;
  price: string;
  grams: string;
  image: string;
}

const products: Product[] = [
  { id: '1', name: 'Café en Grano', grams: '240 gr', price: '$30.800 COP', image: '/assets/240.png?v=2' },
  { id: '2', name: 'Café en Grano', grams: '480 gr', price: '$44.900 COP', image: '/assets/480.png?v=2' },
  { id: '3', name: 'Café Molido', grams: '240 gr', price: '$29.900 COP', image: '/assets/240M.png?v=2' },
  { id: '4', name: 'Café Molido', grams: '480 gr', price: '$43.900 COP', image: '/assets/480M.png?v=2' },
];

export default function ProductCardList() {
  const openWhatsApp = (productName: string) => {
    const message = `Hola Monte Lucero, quiero comprar la presentación de ${productName}. Me interesa la opción Contraentrega. Mi ciudad es: `;
    window.open(`https://wa.me/573186470507?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-32 bg-[#06101c] relative px-6 overflow-hidden">
      {/* Background Parallax Texture */}
      <ParallaxBackground imageSrc="/assets/3.jpeg" opacity={0.06} speed="medium" />
      <ParallaxBackground imageSrc="/assets/11.jpeg" opacity={0.03} speed="-slow" blendMode="mix-blend-overlay" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm text-gold-500 uppercase tracking-[0.4em] mb-4">Nuestras Presentaciones</h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#F2EAE1] mb-6 uppercase tracking-wider">El Tamaño de tu Pasión</h3>
          <p className="text-[#F2EAE1]/60 max-w-2xl mx-auto font-light text-lg">Formatos en grano recién tostado para garantizar la máxima frescura y retención de perfil en cada taza.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#0A1828] border border-gold-500/10 overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(207,160,113,0.1)] hover:border-gold-500/30 transition-all duration-500 group flex flex-col"
            >
              <div className="aspect-[3/4] relative bg-gradient-to-br from-[#0D1F33] to-[#04080D] overflow-hidden flex items-center justify-center p-8">
                {/* Spotlight inside the card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gold-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-gold-500/20 transition-all duration-700"></div>
                
                {/* PNG Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 relative z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]" 
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              
              <div className="p-8 relative z-20 flex-1 flex flex-col justify-between bg-[#0A1828]">
                <div>
                  <p className="text-xs text-gold-500 uppercase tracking-[0.2em] mb-2 font-bold">{product.grams}</p>
                  <h3 className="text-2xl font-black text-[#F2EAE1] mb-2 uppercase tracking-wide">{product.name}</h3>
                  <div className="w-10 h-0.5 bg-gold-500/30 mb-6"></div>
                  <p className="text-3xl font-serif italic text-gold-500 mb-8">{product.price}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#F2EAE1]/80 mb-8 border-l-2 border-gold-500 pl-4 py-1">
                    <CheckCircle2 size={18} className="text-gold-500 shrink-0" />
                    <span className="font-light tracking-wide uppercase leading-tight">Disponible para<br/><b className="text-[#F2EAE1]">Pago Contraentrega</b></span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openWhatsApp(product.name)}
                    className="w-full bg-transparent hover:bg-gold-500 border border-gold-500/50 text-gold-500 py-4 font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group-hover:text-[#0A1828] group-hover:border-gold-500"
                  >
                    <MessageCircle size={18} />
                    Pedir Ahora
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#F2EAE1]/60 text-sm italic font-light tracking-wider">* Nuestros precios no incluyen costos de envío.</p>
        </div>
      </div>
    </section>
  );
}
