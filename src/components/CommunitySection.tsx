import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Eye, TrendingUp, Sparkles, MessageSquare } from 'lucide-react';
import { STATS } from '../data';

// Custom Count Up Component
function CountUp({ value, suffix, isActive }: { value: number; suffix: string; isActive: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds count up duration
    const intervalTime = 30;
    const increment = end / (duration / intervalTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value, isActive]);

  // Format the visual counters beautifully
  const formatCount = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    // Handle floats like engagement rate (24.8)
    if (num % 1 !== 0) {
      return num.toFixed(1);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <span className="text-4xl sm:text-6xl font-black font-sans bg-gradient-to-r from-white via-[#D4AF37] to-amber-200 bg-clip-text text-transparent tracking-tight">
      {formatCount(count)}{suffix}
    </span>
  );
}

export default function CommunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const iconMapper = (id: string) => {
    switch (id) {
      case 's1':
        return <Users className="w-5 h-5 text-[#D4AF37]" />;
      case 's2':
        return <Eye className="w-5 h-5 text-[#D4AF37]" />;
      case 's3':
        return <TrendingUp className="w-5 h-5 text-[#D4AF37]" />;
      case 's4':
        return <MessageSquare className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section 
      id="community" 
      ref={sectionRef}
      className="relative bg-[#0e0e0e] py-24 px-6 border-t border-b border-white/5 overflow-hidden"
    >
      {/* Abstract dark tech background overlay elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.4em] uppercase mb-3 border border-[#D4AF37]/20 px-3 py-1 rounded bg-[#050505]">
            AUDIENCE INSIGHT DIRECTORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            COMMUNITY DOMINANCE METRICS
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />
          <p className="max-w-2xl text-[#BFBFBF]/80 text-sm leading-relaxed tracking-wider font-light">
            We do not compete; we dominate. Our audience size is forged in strategic curation. Review our live metrics and experience the expansion of the board.
          </p>
        </div>

        {/* Counters Grid list block with scroll anim triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            return (
              <motion.div
                key={stat.id}
                className="relative p-8 bg-[#050505] border border-white/5 hover:border-[#D4AF37]/25 rounded-2xl flex flex-col justify-between items-center text-center shadow-[0_10px_35px_rgba(0,0,0,0.8)] h-64 group hover:shadow-[0_15px_40px_rgba(212,175,55,0.04)] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                
                {/* Glowing subtle circular node in background */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#D4AF37]/2 rounded-full blur-2xl group-hover:bg-[#D4AF37]/5 transition-colors duration-500" />

                {/* Floating Top Icon */}
                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 group-hover:border-[#D4AF37]/45 flex items-center justify-center mb-4 shadow transition-all duration-300">
                  {iconMapper(stat.id)}
                </div>

                {/* Quantitative Metric Numbers with custom CountUp hook */}
                <div className="mb-2">
                  <CountUp value={stat.value} suffix={stat.suffix} isActive={isInView} />
                </div>

                {/* Label text */}
                <div className="mt-2">
                  <h3 className="text-sm font-semibold tracking-[0.1em] text-[#D4AF37] uppercase mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-[10px] font-mono text-[#BFBFBF]/40 uppercase tracking-widest block leading-snug">
                    {stat.subtext}
                  </p>
                </div>

                {/* Abstract visual line indicator */}
                <div className="w-12 h-[1px] bg-[#D4AF37]/20 group-hover:w-20 transition-all duration-500 mt-4" />
                
              </motion.div>
            );
          })}
        </div>

        {/* Conversion callout badge bottom */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="inline-flex items-center gap-2 bg-[#0e0e0e] border border-white/5 py-3 px-6 rounded-full text-xs font-mono tracking-widest text-[#BFBFBF] uppercase text-[10px]">
            <span>Are you on the board? Ensure you follow to receive daily analytical updates ♟️</span>
            <button
              onClick={() => {
                const igSection = document.getElementById('instagram');
                if (igSection) {
                  igSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[#D4AF37] hover:underline hover:text-white font-bold ml-1 cursor-pointer transition-all uppercase"
            >
              Verify Registry &rarr;
            </button>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
