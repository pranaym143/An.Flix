import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Send, Heart, MessageCircle, CheckCircle2, Star, Shield, HelpCircle, Users } from 'lucide-react';
import { INSTAGRAM_MOCKS, INSTAGRAM_AVATAR } from '../data';

export default function InstagramSection() {
  const [followers, setFollowers] = useState(84261);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [vibeChecks, setVibeChecks] = useState<Array<{ id: number; name: string; action: string }>>([]);

  // Mock Live Ticker Sequencer for Followers Counter
  // Explanatory Note inside code for prospective developer: Change this function to poll an Instagram API backend (e.g. Meta Graph API)
  useEffect(() => {
    const handleLiveFollowSim = () => {
      // Periodic follow increments
      const randomTime = Math.random() * 8000 + 4000; // Increment every 4-12 seconds
      const timeout = setTimeout(() => {
        setIsIncrementing(true);
        setFollowers((prev) => prev + 1);
        
        // Add a live feedback bubble
        const userPool = ['@kyo.elite', '@zero_monarch', '@l_detective', '@gojo.infinite', '@solo.monarch', '@s策略家_99', '@ayanofold'];
        const randomUser = userPool[Math.floor(Math.random() * userPool.length)];
        const newCheck = {
          id: Date.now(),
          name: randomUser,
          action: 'just joined the board'
        };
        
        setVibeChecks((prev) => [newCheck, ...prev.slice(0, 2)]);
        
        // Clear increment bounce states
        setTimeout(() => setIsIncrementing(false), 1000);
        
        // Loop recursively
        handleLiveFollowSim();
      }, randomTime);

      return timeout;
    };

    const timer = handleLiveFollowSim();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="instagram" 
      className="relative bg-[#050505]/75 backdrop-blur-xs py-24 px-6 overflow-hidden"
    >
      {/* Absolute top glowing line and background gradients */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute right-[-10%] top-[20%] w-96 h-96 bg-[#D4AF37]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Core Conversion Panel Heading */}
        <div className="relative z-10 flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-2 rounded-full text-[10px] font-mono tracking-[0.3em] uppercase mb-4 shadow">
            <Instagram className="w-4 h-4 animate-pulse text-[#D4AF37]" />
            <span>PRIMARY CORE CONVERSION</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 uppercase">
            JOIN THE <span className="bg-gradient-to-r from-[#D4AF37] via-amber-200 to-amber-500 bg-clip-text text-transparent">AN.FLIX</span> SYNDICATE
          </h2>
          
          <p className="max-w-2xl text-[#BFBFBF] leading-relaxed text-sm sm:text-base font-light tracking-wide uppercase tracking-widest text-[#BFBFBF]/80">
            This is not just another anime page. This is an elite intelligence hub. If you understand the boards, the strategies, and the narratives — you belong with us. Follow now to lock in your connection.
          </p>
        </div>

        {/* Dynamic Dual-Column Presentation Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* LEFT PANEL: High Fidelity Conversion Control Portal */}
          <div className="lg:col-span-5 bg-[#0e0e0e]/90 border border-white/5 hover:border-[#D4AF37]/30 rounded-2xl p-8 shadow-[0_15px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between h-auto lg:min-h-[580px] relative transition-all duration-500 group">
            
            {/* Top design corners decoration */}
            <span className="absolute top-4 left-4 text-[9px] font-mono text-white/10 select-none">ID: FLX_CORE_V1</span>
            
            <div>
              {/* Profile Card Header resemblance */}
              <div className="flex items-center space-x-4 pb-6 border-b border-white/5 mb-8">
                <div className="relative w-16 h-16 rounded-full bg-neutral-900 border border-[#D4AF37]/40 p-[2px] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-cover bg-center bg-[#D4AF37]" style={{ backgroundImage: `url(${INSTAGRAM_AVATAR})` }}></div>
                  {/* Glowing active notification node */}
                  <span className="absolute bottom-0.5 right-0.5 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-[#0e0e0e]" />
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-black tracking-wide text-white">an.flix_</span>
                    <CheckCircle2 className="w-4 h-4 text-amber-400 fill-[#050505]" />
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">Elite Board Syndicate</span>
                  <span className="text-[10px] text-[#BFBFBF]/45 tracking-wide mt-0.5">Anime Recommendations & Masterclasses</span>
                </div>
              </div>

              {/* Psychological Copywriting bullet list */}
              <div className="space-y-4 mb-10 text-left">
                <div className="flex items-start space-x-3.5 group/bullet">
                  <div className="w-6 h-6 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 mt-0.5 transition-colors duration-300 group-hover/bullet:bg-[#D4AF37]/20">
                    <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">S-Class Strategic Breakdown Guides</h4>
                    <p className="text-[11px] text-[#BFBFBF]/75 leading-relaxed">Deconstructing mastermind moves of Ayanokoji, Johan, and L with high intellectual precision.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 group/bullet">
                  <div className="w-6 h-6 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 mt-0.5 transition-colors duration-300 group-hover/bullet:bg-[#D4AF37]/20">
                    <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">Breathtaking 4K Premium Reel Edits</h4>
                    <p className="text-[11px] text-[#BFBFBF]/75 leading-relaxed">Cinematic transitions, high fidelity soundtracks, and motivational sequences optimized to fuel your focus.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 group/bullet">
                  <div className="w-6 h-6 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 mt-0.5 transition-colors duration-300 group-hover/bullet:bg-[#D4AF37]/20">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">High IQ Anime Community Interaction</h4>
                    <p className="text-[11px] text-[#BFBFBF]/75 leading-relaxed font-light">Join the discussions in broadcast networks and meet fellow fans who choose intellect over noise.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LIVE ANIMATED FOLLOWER COUNT PANEL */}
            <div className="bg-black/60 border border-white/5 p-6 rounded-xl text-center mb-8 relative overflow-hidden group-hover:border-[#D4AF37]/25 transition-colors">
              <span className="text-[9px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">
                LIVE INDEPENDENT RECORD
              </span>
              
              <div className="flex items-center justify-center space-x-1 font-mono">
                {/* Rolling Follower State */}
                <motion.div
                  className="text-4xl sm:text-5xl font-black text-white tracking-widest font-sans"
                  animate={{ scale: isIncrementing ? [1, 1.05, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {followers.toLocaleString()}
                </motion.div>
                
                {/* Streaming indicators */}
                <span className="flex h-2.5 w-2.5 absolute top-[15px] right-[15px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              
              <p className="text-[10px] text-[#BFBFBF]/50 uppercase tracking-widest mt-2">Active Followers on Instagram</p>

              {/* Toast Feed representing recent active mock joins */}
              <div className="h-6 mt-3 relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {vibeChecks.length > 0 && (
                    <motion.p
                      key={vibeChecks[0].id}
                      className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 0.85, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {vibeChecks[0].name} {vibeChecks[0].action}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* FOLLOW CALL TO ACTIONS */}
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/an.flix_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 bg-[#D4AF37] hover:bg-amber-300 text-black py-4 rounded-xl text-xs font-extrabold tracking-[0.2em] transition-all duration-300 shadow-[0_5px_20px_rgba(212,175,55,0.2)] uppercase"
              >
                <Instagram className="w-4 h-4" />
                <span>FOLLOW @AN.FLIX_ NOW</span>
              </a>
              
              <div className="flex justify-between items-center px-2 text-[9px] font-mono text-[#BFBFBF]/40 uppercase tracking-widest">
                <span>✓ Authorized Registry</span>
                <span>• Average Rating 9.9/10</span>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Simulated High-End Instagram Previews */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            
            {/* Top title bar mock */}
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono text-[#BFBFBF]/50 uppercase tracking-[0.2em]">AN.FLIX CORE CONTENT STREAM</span>
              <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest">3 POSTS • REEL MONOTONE ARCHIVE</span>
            </div>

            {/* simulated 3 instagram posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INSTAGRAM_MOCKS.map((post) => {
                return (
                  <a
                    key={post.id}
                    href="https://www.instagram.com/an.flix_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#0e0e0e]/70 border border-white/5 hover:border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative flex flex-col justify-between h-[420px]"
                  >
                    <div>
                      {/* Image Preview with hover like/comments revealing */}
                      <div className="relative h-44 w-full overflow-hidden bg-neutral-950">
                        <img
                          src={post.imageUrl}
                          alt="AN.FLIX Instagram preview"
                          className="w-full h-full object-cover transition-transform duration-[1000ms] scale-100 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Shimmer gradient on image when hovered */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white z-10 backdrop-blur-xs">
                          <span className="flex items-center gap-1 font-mono text-sm font-bold text-[#D4AF37]">
                            <Heart className="w-4 h-4 fill-[#D4AF37]" /> {post.likes}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-sm font-bold text-white">
                            <MessageCircle className="w-4 h-4" /> {post.comments}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/20 to-transparent" />
                      </div>

                      {/* Mock IG account header */}
                      <div className="flex items-center space-x-2 px-4 pt-4 pb-2">
                        <div className="w-6 h-6 rounded-full bg-neutral-900 border border-[#D4AF37]/30 p-[1px]">
                          <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=60')` }}></div>
                        </div>
                        <span className="text-xs font-black text-white">an.flix_</span>
                        <CheckCircle2 className="w-3 h-3 text-amber-400 fill-[#050505]" />
                      </div>

                      {/* Caption text */}
                      <div className="px-4 pb-4">
                        <p className="text-[11px] text-[#BFBFBF]/80 leading-relaxed font-light line-clamp-6 text-left">
                          <span className="font-bold text-white mr-1.5 font-sans text-xs">an.flix_</span>
                          {post.caption}
                        </p>
                      </div>
                    </div>

                    {/* Bottom date and CTA */}
                    <div className="p-4 border-t border-white/5 bg-black/30 flex items-center justify-between text-[10px] font-mono mt-auto">
                      <span className="text-[#BFBFBF]/40 uppercase tracking-widest">{post.date}</span>
                      <span className="text-[#D4AF37] group-hover:underline flex items-center gap-1 uppercase tracking-widest font-semibold transition-all group-hover:pl-1">
                        VIEW FILE <Instagram className="w-3.5 h-3.5 ml-0.5" />
                      </span>
                    </div>

                  </a>
                );
              })}
            </div>

            {/* Social proof elements and followers banner */}
            <div className="mt-8 bg-[#0e0e0e]/50 border border-white/5 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="hidden sm:flex -space-x-3 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0e0e0e]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Audience 1" referrerPolicy="no-referrer" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0e0e0e]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Audience 2" referrerPolicy="no-referrer" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0e0e0e]" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=100" alt="Audience 3" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Trusted by 84,000+ Anime Thinkers</h4>
                  <p className="text-[10px] text-[#BFBFBF]/60 uppercase tracking-wider">Aligning strategical views from over 120 global regions.</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/an.flix_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto flex items-center justify-center space-x-2 bg-transparent hover:bg-white/[0.04] border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] px-6 py-3 rounded-lg text-xs font-bold tracking-widest transition-all duration-300 uppercase"
              >
                <span>OPEN INSTAGRAM INSTANTLY</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
