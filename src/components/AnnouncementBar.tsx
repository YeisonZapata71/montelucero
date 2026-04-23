import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-gold-500 text-white py-2 px-4 shadow-md text-sm font-semibold flex justify-center items-center overflow-hidden">
      <div className="animate-pulse text-center w-full max-w-4xl tracking-wide">
        🇨🇴 Pago Contraentrega en toda Colombia <span className="opacity-70 mx-2">|</span> 🌎 Envíos Internacionales habilitados
      </div>
    </div>
  );
}

