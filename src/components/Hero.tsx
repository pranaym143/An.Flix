import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Compass, ArrowDownCircle } from 'lucide-react';
import { HERO_BG } from '../data';

interface HeroProps {
  onScrollClick: (sectionId: string) => void;
}

export default function Hero({ onScrollClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; scale: number; duration: number }>>([]);

  // Generate responsive random floating particles on mount
  useEffect(() => {
    const list = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      top: Math.random() * 100, // percentage
      delay: Math.random() * 5, // random delay
      scale: Math.random() * 0.6 + 0.4, // size scalar
      duration: Math.random() * 10 + 10 // transition duration in seconds
    }));
    setParticles(list);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white overflow-hidden pt-20"
    >
      {/* Background Cinematic Image with Luxury Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-out scale-105"
        style={{ 
          backgroundImage: `url(${HERO_BG})`,
        }}
        referrerPolicy="no-referrer"
      />

      {/* Solid Dark Minimalist Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/90 z-0" />

      {/* Luxury Mouse Glowing Spotlight Mask Effect */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none z-1 transition-opacity duration-500 opacity-60 hidden md:block"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(214, 175, 55, 0.08) 0%, transparent 65%)`
          }}
        />
      )}

      {/* Floating Gold Dust Particles */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              scale: p.scale,
            }}
            animate={{
              y: [-10, -120],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Inner Content Grid */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 border border-[#D4AF37]/35 bg-[#0e0e0e]/90 backdrop-blur px-4 py-2 rounded-full mb-8 text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] shadow-[0_4px_30px_rgba(214,175,55,0.05)] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4AF37]"></span>
          </span>
          <span>AN.FLIX EXCLUSIVE REGIME</span>
        </motion.div>

        {/* Animated Brand Logo Reveal & Core Statement */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.1] select-none">
            ENTER THE WORLD OF <br />
            <span className="bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(212,175,55,0.15)] font-semibold">
              ANIME ELITES
            </span>
          </h1>
        </motion.div>

        {/* Subheadline (Sleek storytelling Copywriting) */}
        <motion.p
          className="max-w-xl text-[#BFBFBF] text-sm sm:text-base leading-relaxed tracking-wider mb-10 text-center font-light uppercase tracking-widest text-[#BFBFBF]/80"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Not everyone understands anime. Few comprehend the mastermind strategies, intense psychological battles, silent struggles, and eternal legends.
        </motion.p>

        {/* Dynamic High-End CTA Button Panel */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Main Gold Follow CTA */}
          <a
            href="https://www.instagram.com/an.flix_/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#D4AF37] hover:bg-amber-300 text-black px-8 py-4 rounded-xl text-xs font-bold tracking-[0.2em] transition-all duration-300 active:scale-95 shadow-[0_4px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.45)]"
          >
            <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="uppercase">FOLLOW ON INSTAGRAM</span>
          </a>

          {/* Secondary Outline Explore CTA */}
          <button
            onClick={() => onScrollClick('characters')}
            className="group w-full sm:w-auto flex items-center justify-center space-x-3 border border-white/10 hover:border-[#D4AF37]/50 bg-[#0e0e0e]/40 hover:bg-[#0e0e0e]/80 px-8 py-4 rounded-xl text-xs font-bold tracking-[0.2em] transition-all duration-300 text-white hover:text-[#D4AF37]"
          >
            <Compass className="w-4 h-4 text-[#BFBFBF] group-hover:text-[#D4AF37] group-hover:rotate-45 transition-all duration-500" />
            <span className="uppercase">EXPLORE UNIVERSE</span>
          </button>
        </motion.div>

        {/* Scroll down mouse animation indicator */}
        <motion.button
          onClick={() => onScrollClick('characters')}
          className="absolute bottom-8 cursor-pointer flex flex-col items-center text-white/40 hover:text-[#D4AF37] transition-all duration-300 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity, repeatDelay: 10 }}
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase mb-2">SCROLL DOWN FOR WISDOM</span>
          <ArrowDownCircle className="w-4 h-4 animate-bounce text-[#D4AF37]/80 group-hover:text-[#D4AF37]" />
        </motion.button>

      </div>

      {/* Bottom elegant diagonal luxury graphic cut block */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none z-0" />
    </section>
  );
}
