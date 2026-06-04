import React from 'react';
import { motion } from 'motion/react';
import { Star, Eye, Layers } from 'lucide-react';
import { TRENDING } from '../data';

export default function TrendingAnime() {
  return (
    <section 
      id="trending" 
      className="relative bg-[#0e0e0e] py-24 px-6 border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute left-[20%] top-[40%] w-72 h-72 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.4em] uppercase mb-3 border border-[#D4AF37]/20 px-3 py-1 rounded bg-[#050505]">
            WEEKLY CURATED RECOMS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            TRENDING REQUISITES
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />
          <p className="max-w-2xl text-[#BFBFBF]/80 text-sm leading-relaxed tracking-wider font-light">
            Handpicked titles authorized by the AN.FLIX high command. If you possess the mental power to interpret elite plots, you must prioritize these tactical stories.
          </p>
        </div>

        {/* Cinematic Grid of curated titles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRENDING.map((anime, index) => {
            return (
              <motion.div
                key={anime.id}
                className="relative bg-[#050505] border border-white/5 hover:border-[#D4AF37]/30 rounded-2xl overflow-hidden group shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex flex-col h-full hover:shadow-[0_15px_45px_rgba(212,175,55,0.06)] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                
                {/* Ranking number background graphic */}
                <div className="absolute -top-6 -right-6 text-[110px] font-black font-mono text-white/[0.02] select-none pointer-events-none leading-none group-hover:text-[#D4AF37]/[0.03] transition-colors duration-500">
                  {anime.trendingRank}
                </div>

                {/* Banner Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={anime.coverUrl}
                    alt={anime.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-transparent" />
                  
                  {/* Status Tag floating */}
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded text-[9px] font-mono tracking-widest font-semibold uppercase flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    {anime.status}
                  </div>
                </div>

                {/* Content block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header line with star rating */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                        <span className="text-xs font-bold text-white font-mono">{anime.rating}</span>
                        <span className="text-[10px] text-[#BFBFBF]/40">/10 Index</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#BFBFBF]/55 tracking-wider">
                        {anime.episodes}
                      </span>
                    </div>

                    {/* Anime Title */}
                    <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-[#D4AF37] transition-all duration-300 mb-3 uppercase">
                      {anime.title}
                    </h3>

                    {/* Genre Pill Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {anime.genre.map((gen, gIdx) => (
                        <span 
                          key={gIdx}
                          className="bg-white/2 hover:bg-[#D4AF37]/10 text-[#BFBFBF] hover:text-[#D4AF37] border border-white/[0.04] hover:border-[#D4AF37]/30 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded transition-colors duration-300"
                        >
                          {gen}
                        </span>
                      ))}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-[#BFBFBF]/75 leading-relaxed font-light mb-6">
                      {anime.description}
                    </p>
                  </div>

                  {/* Elite Action Button linking to Instagram Portal */}
                  <div className="pt-4 border-t border-white/5 mt-auto">
                    <button
                      onClick={() => {
                        const igSection = document.getElementById('instagram');
                        if (igSection) {
                          igSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-neutral-900 to-neutral-950 hover:from-[#D4AF37] hover:to-amber-400 text-[#D4AF37] hover:text-black border border-[#D4AF37]/40 hover:border-[#D4AF37] py-3.5 rounded-xl text-xs font-bold tracking-[0.2em] transition-all duration-300 uppercase shadow-lg cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>WATCH ELITE EDITS</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
