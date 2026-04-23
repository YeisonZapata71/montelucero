import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050C14] pt-16 pb-8 px-6 border-t border-gold-500/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12 border-b border-white/5 pb-12">
          
          <div className="text-center md:text-left flex-1 md:max-w-xs">
            <h2 className="text-2xl font-black italic text-gold-500 font-serif tracking-widest mb-4">MONTE LUCERO</h2>
            <p className="text-foreground/60 text-sm font-light">
              Café de especialidad desde las montañas colombianas. Llevamos el lujo y el mejor sabor directo a tu puerta con la seguridad del pago contraentrega.
            </p>
          </div>

          <div className="flex-1 text-center text-foreground/80 space-y-2 uppercase tracking-widest text-sm font-bold">
            <p className="hover:text-gold-500 transition-colors cursor-pointer">🇨🇴 Colombia</p>
            <p className="text-foreground/40 font-medium">🌎 Internacional</p>
          </div>

          <div className="flex-1 text-center md:text-right">
            <h3 className="text-gold-500 font-bold mb-4 text-xs tracking-widest uppercase">Red de Envíos Seguros</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center grayscale opacity-50">
              <div className="font-bold text-sm uppercase tracking-widest text-foreground">Servientrega</div>
              <div className="font-bold text-sm uppercase tracking-widest text-foreground">Envía</div>
              <div className="font-bold text-sm uppercase tracking-widest text-foreground">DHL</div>
            </div>
          </div>
        </div>

        <div className="text-center text-foreground/40 text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Monte Lucero Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
