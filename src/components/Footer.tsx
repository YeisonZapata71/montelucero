import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12 border-b border-foreground/10 pb-12">
          
          <div className="text-center md:text-left flex-1 md:max-w-xs">
            <h2 className="text-2xl font-bold text-gold-500 tracking-widest mb-4">MONTE LUCERO</h2>
            <p className="text-foreground/60 text-sm">
              Café de especialidad desde las montañas colombianas. Llevamos el lujo y el mejor sabor directo a tu puerta con opciones de pago contraentrega.
            </p>
          </div>

          <div className="flex-1 text-center font-semibold text-foreground/80 space-y-2">
            <p>🇨🇴 Colombia</p>
            <p>🌎 Internacional</p>
          </div>

          <div className="flex-1 text-center md:text-right">
            <h3 className="text-foreground font-semibold mb-4 text-sm tracking-wide">ENVÍOS SEGUROS CON:</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center grayscale opacity-60">
              {/* Fallbacks if logos don't exist */}
              <div className="font-bold text-xl uppercase tracking-wider">Servientrega</div>
              <div className="font-bold text-xl uppercase tracking-wider">Envía</div>
              <div className="font-bold text-xl uppercase tracking-wider">DHL</div>
            </div>
          </div>
        </div>

        <div className="text-center text-foreground/40 text-xs">
          <p>&copy; {new Date().getFullYear()} Monte Lucero Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
