import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12 border-b border-foreground/10 pb-12">
          
          <div className="text-center md:text-left flex-1 md:max-w-xs">
            <h2 className="text-2xl font-black text-gold-600 tracking-widest mb-4 drop-shadow-sm">MONTE LUCERO</h2>
            <p className="text-foreground/70 text-sm font-medium">
              Café de especialidad desde las montañas colombianas. Llevamos la energía y el mejor sabor directo a tu puerta con opciones de pago contraentrega.
            </p>
          </div>

          <div className="flex-1 text-center font-bold text-foreground/80 space-y-2">
            <p>🇨🇴 Colombia</p>
            <p className="text-foreground/60 font-medium">🌎 Internacional</p>
          </div>

          <div className="flex-1 text-center md:text-right">
            <h3 className="text-foreground font-bold mb-4 text-sm tracking-wide">ENVÍOS SEGUROS CON:</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center grayscale opacity-70">
              <div className="font-bold text-lg uppercase tracking-wider text-foreground">Servientrega</div>
              <div className="font-bold text-lg uppercase tracking-wider text-foreground">Envía</div>
              <div className="font-bold text-lg uppercase tracking-wider text-foreground">DHL</div>
            </div>
          </div>
        </div>

        <div className="text-center text-foreground/50 text-xs font-semibold">
          <p>&copy; {new Date().getFullYear()} Monte Lucero Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
