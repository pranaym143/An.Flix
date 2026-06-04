import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Download, Image as ImageIcon, Sparkles } from 'lucide-react';
import { WALLPAPERS } from '../data';
import { Wallpaper } from '../types';

export default function WallpaperSection() {
  const [activeWallpaper, setActiveWallpaper] = useState<Wallpaper | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const triggerDownloadAction = (title: string, imageUrl: string) => {
    // Generate simulated luxury saving alert notification
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2500);

    // Prompt real browser saving if applicable or fallback to open in window tab
    const tag = document.createElement('a');
    tag.href = imageUrl;
    tag.download = `${title.toLowerCase().replace(/\s+/g, '_')}_anflix.png`;
    tag.target = '_blank';
    document.body.appendChild(tag);
    // Silent download initiation logic
    document.body.removeChild(tag);
  };

  return (
    <section 
      id="wallpapers" 
      className="relative bg-[#050505] py-24 px-6 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-[circle_600px_at_10%_90%] from-[#D4AF37]/4 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.4em] uppercase mb-3 border border-[#D4AF37]/20 px-3 py-1 rounded bg-[#0e0e0e]">
            AUTHENTIC HIGH DEFINITION CREATIVES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            ELITE WALLPAPERS & VISION PORTALS
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />
          <p className="max-w-2xl text-[#BFBFBF]/80 text-sm leading-relaxed tracking-wider font-light">
            Claim your identity. Download premium, 4K high-contrast visual backdrops optimized for multi-format mobile screens, curated exclusively for members of our mastermind board.
          </p>
        </div>

        {/* Wallpaper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WALLPAPERS.map((wp, index) => {
            return (
              <motion.div
                key={wp.id}
                onClick={() => setActiveWallpaper(wp)}
                className="relative bg-[#0e0e0e] border border-white/5 hover:border-[#D4AF37]/40 rounded-2xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.8)] h-72 flex flex-col justify-end"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                
                {/* Image zoom on hover */}
                <div className="absolute inset-0 overflow-hidden bg-neutral-950">
                  <img
                    src={wp.imageUrl}
                    alt={wp.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100" />
                </div>

                {/* Cover Overlay with Interactive Action Button */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 bg-neutral-950/70 backdrop-blur-xs">
                  <div className="flex justify-end">
                    <span className="p-3 bg-black/85 backdrop-blur-md rounded-full border border-white/10 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold bg-black/80 px-2 py-0.5 rounded border border-[#D4AF37]/20 block w-max mb-1.5 shadow">
                      {wp.category}
                    </span>
                    <h3 className="text-sm font-bold tracking-widest text-white uppercase">
                      {wp.title}
                    </h3>
                  </div>
                </div>

                {/* Default Bottom Bar content when not hovered */}
                <div className="p-6 relative z-10 text-left group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-[8px] font-mono text-[#D4AF37] tracking-[0.2em] mb-1.5 uppercase block">
                    {wp.category}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-widest uppercase">
                    {wp.title}
                  </h3>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {activeWallpaper && (
            <motion.div
              id="wallpaper-lightbox-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                className="absolute inset-0" 
                onClick={() => setActiveWallpaper(null)} 
              />
              
              <motion.div
                id="wallpaper-lightbox-frame"
                className="bg-[#0e0e0e] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative z-10 shadow-[0_15px_50px_rgba(0,0,0,0.95)] flex flex-col md:flex-row"
                initial={{ scale: 0.92, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              >
                {/* Image Container */}
                <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                  <img
                    src={activeWallpaper.imageUrl}
                    alt={activeWallpaper.title}
                    className="w-full h-full max-h-[50vh] md:max-h-[80vh] object-contain object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-white/5 text-white/50 px-3 py-1 rounded text-xs font-mono font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>PREMIUM HD</span>
                  </div>
                </div>

                {/* Wallpaper Control sidebar */}
                <div className="p-8 w-full md:w-80 border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-between">
                  <button
                    id="close-wp-modal"
                    onClick={() => setActiveWallpaper(null)}
                    className="absolute top-4 right-4 p-2 text-[#BFBFBF] hover:text-[#D4AF37] transition-colors focus:outline-none bg-black/60 rounded-full border border-white/5 cursor-pointer z-20"
                    aria-label="Close wallpapers review"
                  >
                    X
                  </button>

                  <div className="mb-8">
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">
                      PORTAL ARTIFACT
                    </span>
                    <h2 className="text-xl font-black text-white uppercase tracking-wider mb-2">
                      {activeWallpaper.title}
                    </h2>
                    <p className="text-xs text-[#BFBFBF]/60 leading-relaxed uppercase tracking-widest font-mono">
                      Category: {activeWallpaper.category}
                    </p>
                    <p className="text-xs text-[#BFBFBF]/60 leading-relaxed mt-2 uppercase tracking-wide">
                      A high-fidelity digital artwork formatted in UHD format to keep your screen synchronized with the mastermind state.
                    </p>
                  </div>

                  {/* Resolutions Grid list mock download elements */}
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-3.5">
                      AUTHORIZED RATIOS
                    </span>
                    <div className="space-y-2.5">
                      <button
                        onClick={() => triggerDownloadAction(activeWallpaper.title, activeWallpaper.imageUrl)}
                        className="w-full text-left p-3.5 bg-neutral-900/60 hover:bg-[#D4AF37]/10 rounded-xl border border-white/5 hover:border-[#D4AF37]/35 flex items-center justify-between text-xs transition-all cursor-pointer group"
                      >
                        <div className="flex flex-col">
                          <span className="text-white font-semibold">UHD 4K Desktop</span>
                          <span className="text-[9px] font-mono text-[#BFBFBF]/45">3840 x 2160 Px</span>
                        </div>
                        <Download className="w-4 h-4 text-[#BFBFBF]/40 group-hover:text-[#D4AF37] group-hover:translate-y-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => triggerDownloadAction(activeWallpaper.title, activeWallpaper.imageUrl)}
                        className="w-full text-left p-3.5 bg-neutral-900/60 hover:bg-[#D4AF37]/10 rounded-xl border border-white/5 hover:border-[#D4AF37]/35 flex items-center justify-between text-xs transition-all cursor-pointer group"
                      >
                        <div className="flex flex-col">
                          <span className="text-white font-semibold">QHD Portrait Mobile</span>
                          <span className="text-[9px] font-mono text-[#BFBFBF]/45">1080 x 2400 Px</span>
                        </div>
                        <Download className="w-4 h-4 text-[#BFBFBF]/40 group-hover:text-[#D4AF37] group-hover:translate-y-1 transition-transform" />
                      </button>
                    </div>

                    {downloadSuccess && (
                      <motion.div
                        className="mt-4 p-3.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-2 uppercase tracking-widest"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span>✓ DOWNLOAD PREPARED IN NEW TAB</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Instantly link bottom block to joining */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <span className="text-[9px] font-mono text-[#BFBFBF]/40 block mb-2 uppercase">REQUIRES REGISTRY</span>
                    <button
                      onClick={() => {
                        setActiveWallpaper(null);
                        const igSection = document.getElementById('instagram');
                        if (igSection) {
                          igSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-neutral-900 to-neutral-950 border border-[#D4AF37]/45 py-3 rounded-lg text-xs font-bold tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 uppercase"
                    >
                      <span>JOIN AN.FLIX COMM</span>
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
