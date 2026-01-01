import React, { useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
    useEffect(() => {
        const handleClick = (e) => {
            const particleCount = 12;
            const container = document.body;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('click-particle');

                particle.style.left = `${e.clientX}px`;
                particle.style.top = `${e.clientY}px`;

                const angle = (Math.PI * 2 * i) / particleCount;
                const velocity = 50 + Math.random() * 50;
                const x = Math.cos(angle) * velocity;
                const y = Math.sin(angle) * velocity;

                particle.style.setProperty('--x', `${x}px`);
                particle.style.setProperty('--y', `${y}px`);

                container.appendChild(particle);

                setTimeout(() => {
                    particle.remove();
                }, 800);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    // No visual component needed for just the click effect, 
    // functionality is handled via direct DOM manipulation in the event listener.
    return null;
};

export default CursorEffect;
