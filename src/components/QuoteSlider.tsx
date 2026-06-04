import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote as QuoteIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { QUOTES } from '../data';

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds auto transition

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  const activeQuote = QUOTES[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section 
      id="quotes" 
      className="relative bg-[#0e0e0e] border-t border-b border-white/5 py-24 overflow-hidden"
    >
      {/* Background luxury graphics */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Quote Marker Icon */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-950 border border-[#D4AF37]/20 flex items-center justify-center mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <QuoteIcon className="w-5 h-5 text-[#D4AF37] opacity-80" />
        </div>

        {/* Quotes Display Card with Slider Transitions */}
        <div className="relative w-full min-h-[180px] flex items-center justify-center text-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full px-4 md:px-12 flex flex-col items-center"
            >
              <blockquote>
                <p className="text-lg sm:text-2xl font-light italic text-white/90 leading-relaxed tracking-wide mb-6 select-all font-sans max-w-3xl">
                  “{activeQuote.text}”
                </p>
              </blockquote>
              
              <cite className="not-italic flex flex-col items-center">
                <span className="text-sm font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-1">
                  {activeQuote.author}
                </span>
                <span className="text-[10px] font-mono text-[#BFBFBF]/50 tracking-[0.3em] uppercase">
                  {activeQuote.anime} • {activeQuote.role}
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sliding Navigation Controls (Gold Accented) */}
        <div className="flex items-center space-x-8 mt-12">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="p-2 border border-white/5 hover:border-[#D4AF37]/40 bg-neutral-900/50 hover:bg-neutral-950 rounded-full text-white/60 hover:text-[#D4AF37] cursor-pointer transition-all duration-300"
            aria-label="Previous Quote"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator Grid */}
          <div className="flex items-center space-x-2">
            {QUOTES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === index ? 'w-6 bg-[#D4AF37]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="p-2 border border-white/5 hover:border-[#D4AF37]/40 bg-neutral-900/50 hover:bg-neutral-950 rounded-full text-white/60 hover:text-[#D4AF37] cursor-pointer transition-all duration-300"
            aria-label="Next Quote"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
