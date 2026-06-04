import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ChevronUp } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make it visible after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-2.5"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle live signal popup */}
          <motion.div 
            className="bg-black/90 border border-[#D4AF37]/30 px-3 py-1.5 rounded-lg text-[8px] font-mono tracking-widest text-[#D4AF37] uppercase shadow-[0_5px_15px_rgba(0,0,0,0.6)]"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            JOIN 84.2K+ FLX
          </motion.div>

          {/* Core Instantly recognizable follow button */}
          <a
            href="https://www.instagram.com/an.flix_/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-full flex items-center justify-center text-[#D4AF37] hover:text-black shadow-[0_10px_30px_rgba(214,175,55,0.3)] bg-neutral-900 border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 group overflow-hidden"
            aria-label="Follow an.flix_ on Instagram"
          >
            {/* Sliding Gold Background */}
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-amber-400 via-[#D4AF37] to-amber-600 transition-all duration-500 ease-out group-hover:w-full" />
            
            {/* Soft glowing outer pulsing rings */}
            <span className="absolute inset-0 rounded-full border border-[#D4AF37]/10 animate-ping pointer-events-none scale-125" />

            <Instagram className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
