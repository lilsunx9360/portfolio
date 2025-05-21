// src/components/ShanmugamBackground.jsx
import React from 'react';

const ShanmugamBackground = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-black to-gray-700 text-white flex items-center justify-center overflow-hidden">
      {/* Background Text with Subtle Gradient and White Border */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[30rem] font-bold uppercase opacity-10 select-none pointer-events-none relative border-4 border-white"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          SHANMUGAM
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent" />
        </h1>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
       
        </h2>
      </div>
    </div>
  );
};

export default ShanmugamBackground;