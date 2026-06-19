import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Award, ChevronRight, Zap } from 'lucide-react';
import { CHARACTERS } from '../data';
import { Character } from '../types';

export default function CharacterShowcase() {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);

  return (
    <section 
      id="characters" 
      className="relative bg-[#050505]/75 backdrop-blur-xs py-24 px-6 overflow-hidden"
    >
      {/* Background premium textures */}
      <div className="absolute inset-0 bg-radial-[ellipse_800px_800px_at_50%_-10%] from-[#D4AF37]/5 via-transparent to-transparent opacity-40 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.4em] uppercase mb-3 border border-[#D4AF37]/20 px-3 py-1 rounded bg-[#0e0e0e]">
            AUTHENTIC LEADERS OF THE BOARD
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            ELITE STRATEGISTS & MIND MASTERS
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />
          <p className="max-w-2xl text-[#BFBFBF]/80 text-sm leading-relaxed tracking-wider font-light">
            Meet the intellectual giants, shadow monarchs, and tactical legends. Their minds are weapons, and the universe is their chessboard. Hover to scan their tactical capability.
          </p>
        </div>

        {/* Character Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CHARACTERS.map((char) => {
            const isHovered = hoveredChar === char.id;
            return (
              <motion.div
                key={char.id}
                onMouseEnter={() => setHoveredChar(char.id)}
                onMouseLeave={() => setHoveredChar(null)}
                onClick={() => setSelectedChar(char)}
                className="relative bg-[#0e0e0e] border border-white/5 hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)] group flex flex-col h-[460px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                
                {/* Character Thumbnail Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={char.imageUrl}
                    alt={char.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-110 group-hover:rotate-1"
                    referrerPolicy="no-referrer"
                  />
                  {/* Luxury dynamic dark gradients inside image thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
                  
                  {/* Strategic Rank Badge floating on top right */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/35 text-[#D4AF37] px-3 py-1 rounded-md text-[9px] font-mono tracking-widest font-black uppercase shadow-lg">
                    {char.rank}
                  </div>

                  {/* Archetype badge on top left */}
                  <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-white/5 text-[#BFBFBF] px-2.5 py-1 rounded text-[8px] font-mono tracking-widest uppercase">
                    {char.archtype}
                  </div>
                </div>

                {/* Card Content block */}
                <div className="p-5 flex-1 flex flex-col justify-between relative z-10 bg-gradient-to-b from-transparent to-neutral-950/60">
                  
                  {/* Heading & Details */}
                  <div>
                    <h3 className="text-lg font-black tracking-wide text-white group-hover:text-[#D4AF37] transition-all duration-300">
                      {char.name}
                    </h3>
                    <p className="text-[10px] font-mono text-[#BFBFBF]/40 uppercase tracking-widest mb-3">
                      {char.anime}
                    </p>
                    <p className="text-xs text-[#BFBFBF]/75 leading-relaxed font-light line-clamp-3">
                      {char.description}
                    </p>
                  </div>

                  {/* Dynamic hovering tactical metrics reveal overview inside card */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#D4AF37] tracking-widest text-[10px] uppercase font-semibold">TACTICAL INTEL</span>
                    <span className="text-white/40 flex items-center group-hover:text-[#D4AF37] group-hover:pl-2 transition-all duration-300 uppercase text-[9px] tracking-wider">
                      REVEAL MATRIX <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>

                </div>

                {/* Animated overlay border with gold lines on card hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-amber-300 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Immersive Lightbox Modal to show detailed Character stats */}
        <AnimatePresence>
          {selectedChar && (
            <motion.div
              id="character-lightbox-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                className="absolute inset-0" 
                onClick={() => setSelectedChar(null)} 
              />
              
              <motion.div
                id="character-detailed-card"
                className="bg-[#0e0e0e] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-[0_10px_50px_rgba(0,0,0,0.9)] flex flex-col md:flex-row"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                {/* Image panel in modal */}
                <div className="relative w-full md:w-1/2 min-h-[300px] md:h-auto bg-neutral-950">
                  <img
                    src={selectedChar.imageUrl}
                    alt={selectedChar.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0e0e0e] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 pr-6">
                    <span className="inline-block bg-[#D4AF37] text-black text-[9px] font-mono tracking-widest font-black uppercase px-2 py-0.5 rounded mb-2 shadow-lg">
                      {selectedChar.rank} • {selectedChar.archtype}
                    </span>
                    <h2 className="text-3xl font-black tracking-wide text-white mb-1 uppercase">
                      {selectedChar.name}
                    </h2>
                    <p className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
                      {selectedChar.anime}
                    </p>
                  </div>
                </div>

                {/* Analytical Stats Panel */}
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <button
                    id="close-char-modal"
                    onClick={() => setSelectedChar(null)}
                    className="absolute top-4 right-4 p-2 text-[#BFBFBF] hover:text-[#D4AF37] transition-colors focus:outline-none bg-black/60 rounded-full border border-white/5 cursor-pointer z-20"
                    aria-label="Close detailed view"
                  >
                    X
                  </button>

                  <div className="mb-8">
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-3">
                      OVERVIEW PROFILE
                    </span>
                    <p className="text-sm text-[#BFBFBF]/90 leading-relaxed font-light mb-6">
                      {selectedChar.description}
                    </p>

                    <blockquote className="border-l-2 border-[#D4AF37] pl-4 italic text-sm text-white/80 my-4 bg-white/2 py-3 rounded-r-lg">
                      “{selectedChar.quote}”
                    </blockquote>
                  </div>

                  {/* Quantitative System Stats Bars */}
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-4">
                      TACTICAL PERFORMANCE INDEX
                    </span>
                    <div className="space-y-4">
                      {selectedChar.metrics.map((metric, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs font-mono text-[#BFBFBF]/80 mb-1.5 uppercase tracking-wider">
                            <span>{metric.label}</span>
                            <span className="text-white font-bold">{metric.value}/100</span>
                          </div>
                          {/* Progress Line */}
                          <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden container-bar relative border border-white/[0.03]">
                            <motion.div
                              className="h-full bg-gradient-to-r from-amber-400 via-[#D4AF37] to-amber-600 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ duration: 1, delay: i * 0.15 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Follow CTA inside active frame */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#BFBFBF]/40">ANFLIX SYSTEM CAPABILITY</span>
                    <button
                      onClick={() => {
                        setSelectedChar(null);
                        const igSection = document.getElementById('instagram');
                        if (igSection) {
                          igSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center space-x-2 bg-gradient-to-r from-neutral-900 to-neutral-950 border border-[#D4AF37]/50 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span className="uppercase">STRATEGIC ALIGN</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
