import React from 'react';
import ParallaxBackground from './ParallaxBackground';

export default function Footer() {
  return (
    <footer className="bg-[#03080D] relative pt-20 pb-10 px-6 border-t border-gold-500/20 overflow-hidden">
      <ParallaxBackground imageSrc="/assets/7.jpeg" opacity={0.04} speed="slow" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 border-b border-white/5 pb-16">
          
          <div className="text-center md:text-left flex-1 md:max-w-xs">
            <h2 className="text-3xl font-black italic text-gold-500 font-serif tracking-widest mb-6 drop-shadow-sm">MONTE LUCERO</h2>
            <p className="text-[#F2EAE1]/60 text-sm font-light leading-relaxed">
              Café de especialidad desde las montañas colombianas. Llevamos el lujo y el mejor sabor directo a tu puerta con la seguridad e inmediatez del pago contraentrega.
            </p>
          </div>

          <div className="flex-1 text-center text-[#F2EAE1]/80 space-y-4 uppercase tracking-[0.2em] text-xs font-bold mt-4 md:mt-0">
            <p className="hover:text-gold-500 transition-colors cursor-pointer inline-flex items-center gap-2"><span className="text-lg">🇨🇴</span> Colombia</p><br/>
            <p className="text-[#F2EAE1]/40 font-medium inline-flex items-center gap-2"><span className="text-lg grayscale opacity-50">🌎</span> Internacional</p>
          </div>

          <div className="flex-1 text-center md:text-right mt-4 md:mt-0">
            <h3 className="text-gold-500 font-bold mb-6 text-xs tracking-[0.3em] uppercase">Red de Envíos Seguros</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 items-center grayscale opacity-40">
              <div className="font-bold text-sm uppercase tracking-widest text-[#F2EAE1]">Servientrega</div>
              <div className="font-bold text-sm uppercase tracking-widest text-[#F2EAE1]">Envía</div>
              <div className="font-bold text-sm uppercase tracking-widest text-[#F2EAE1]">DHL</div>
            </div>
          </div>
        </div>

        <div className="text-center text-[#F2EAE1]/30 text-xs tracking-[0.2em] uppercase">
          <p>&copy; {new Date().getFullYear()} Monte Lucero Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
