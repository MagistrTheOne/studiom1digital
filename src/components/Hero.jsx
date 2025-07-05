import React, { useEffect, useRef } from 'react';
import { Zap, Globe, Brain } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.fillStyle = '#ff0040';
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(255, 0, 64, 0.1)';
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20 pointer-events-none z-0" />

      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 z-10" />

      <div className="relative z-20 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            While you were thinking
          </span>
          <br />
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">
            Web3, God became our
          </span>
          <br />
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">
            subscriber
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-4 mb-8">
          One Developer. Infinite LLMs. End of story.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            {
              icon: <Zap className="w-10 h-10 text-red-500 mb-2 mx-auto" />,
              label: 'Web5 Architecture',
              desc: 'Next-gen decentralized stack',
            },
            {
              icon: <Brain className="w-10 h-10 text-red-500 mb-2 mx-auto" />,
              label: 'LLM Core Integration',
              desc: 'Self-improving autonomous agents',
            },
            {
              icon: <Globe className="w-10 h-10 text-red-500 mb-2 mx-auto" />,
              label: 'Global Reach',
              desc: 'Deployed across multiverses',
            },
          ].map((block, i) => (
            <div key={i} className="glass-card text-center p-6">
              {block.icon}
              <h3 className="text-lg font-semibold text-white mb-1">{block.label}</h3>
              <p className="text-gray-400 text-sm">{block.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-gray-500 text-sm">
          Built by the M♾️1 Collective. You were warned.
        </div>
      </div>
    </section>
  );
};

export default Hero;
