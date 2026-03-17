import { useEffect, useCallback } from "react";

// Cria partículas de glitter que seguem o mouse
export const useGlitterEffect = () => {
  const createParticle = useCallback((x: number, y: number) => {
    const particle = document.createElement("div");
    particle.className = "glitter-particle";
    
    // Cores aleatórias: rosa, roxo ou verde neon
    const colors = [
      "hsl(292, 91%, 58%)", // rosa
      "hsl(258, 90%, 66%)", // roxo
      "hsl(145, 78%, 58%)", // verde
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 4;
    
    particle.style.left = `${x - size / 2}px`;
    particle.style.top = `${y - size / 2}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.boxShadow = `0 0 ${size}px ${color}`;
    
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }, []);

  useEffect(() => {
    let frameCount = 0;
    const handleMove = (e: MouseEvent) => {
      frameCount++;
      if (frameCount % 3 === 0) {
        createParticle(e.clientX, e.clientY);
      }
    };
    
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [createParticle]);
};

// Cria explosão de glitter ao clicar
export const useClickGlitter = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          const particle = document.createElement("div");
          particle.className = "glitter-particle";
          const colors = [
            "hsl(292, 91%, 58%)",
            "hsl(258, 90%, 66%)",
            "hsl(145, 78%, 58%)",
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 10 + 4;
          const offsetX = (Math.random() - 0.5) * 60;
          const offsetY = (Math.random() - 0.5) * 60;
          
          particle.style.left = `${e.clientX + offsetX}px`;
          particle.style.top = `${e.clientY + offsetY}px`;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.backgroundColor = color;
          particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
          
          document.body.appendChild(particle);
          setTimeout(() => particle.remove(), 1000);
        }, i * 30);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
};
