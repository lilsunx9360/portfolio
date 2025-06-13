// src/components/ParticleBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: 'white' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 3, random: true, anim: { enable: true, speed: 4, size_min: 0.3, sync: false } },
          links: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, outModes: { default: 'out' }, bounce: false },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: true, mode: 'push' }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } },
        },
        detectRetina: true,
      }}
      style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0 }}
      className="pointer-events-none"
    />
  );
};

export default ParticleBackground;