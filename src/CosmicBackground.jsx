import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

const CosmicBackground = ({ children }) => {
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const effect = HALO({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                baseColor: 0x000000,
                backgroundColor: 0x000000,
                amplitudeFactor: 2.00,
                xOffset: 0.00,
                yOffset: 0.00,
                size: 1.50,
                color1: 0xFFFFFF,
                color2: 0x4A4A4A
            });

            return () => {
                if (effect) effect.destroy();
            };
        }
    }, []);

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <div
                ref={vantaRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1
                }}
            />
            {children}
        </div>
    );
};

export default CosmicBackground;