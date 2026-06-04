import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIATING CORE SYSTEM...');

  const messages = [
    'INITIATING CORE SYSTEM...',
    'DECRYPTING STRATEGIES...',
    'SYNCHRONIZING INTELLECTUAL MATRIX...',
    'CONNECTING AN.FLIX COMMUNITY DATABASE...',
    'WELCOME TO THE ELITE REALM.'
  ];

  useEffect(() => {
    const totalDuration = 2500; // 2.5 seconds loading
    const intervalTime = 50;
    const increment = 100 / (totalDuration / intervalTime);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Swap texts sequentially
    const textIntervals = messages.map((msg, index) => {
      return setTimeout(() => {
        setStatusText(msg);
      }, (totalDuration / messages.length) * index);
    });

    const finishTimeout = setTimeout(() => {
      onComplete();
    }, totalDuration + 200);

    return () => {
      clearInterval(progressInterval);
      textIntervals.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      id="loader-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Abstract luxury background glow */}
      <div className="absolute inset-0 bg-radial-[circle_800px_at_50%_50%] from-[#D4AF37]/5 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Center loader artwork */}
      <div className="relative flex flex-col items-center max-w-md px-6 text-center z-10">
        
        {/* Animated Gold Ring & Logo */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          
          {/* External Spinning Ring */}
          <motion.div
            className="absolute inset-0 border border-t-[#D4AF37] border-r-transparent border-b-[#D4AF37]/20 border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />

          {/* Internal Slow Reverse Spinning Ring */}
          <motion.div
            className="absolute inset-2 border-2 border-t-transparent border-r-[#D4AF37]/80 border-b-transparent border-l-[#D4AF37]/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          {/* Dotted Inner Ring */}
          <div className="absolute inset-4 border border-dashed border-[#D4AF37]/30 rounded-full animate-pulse" />

          {/* Core Brand Initial Logo */}
          <motion.div 
            className="text-xl font-black tracking-[0.2em] text-[#D4AF37]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            AN.FLX
          </motion.div>
        </div>

        {/* Brand Text */}
        <motion.h1
          className="text-2xl font-black tracking-[0.4em] mb-2 uppercase text-white"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          AN.FLIX
        </motion.h1>

        <motion.p
          className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] mb-8 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Anime Elite Universe
        </motion.p>

        {/* Loading percentage counter */}
        <div className="font-mono text-3xl font-light text-[#D4AF37] tracking-widest mb-2 select-none">
          {Math.min(100, Math.floor(progress))}%
        </div>

        {/* Progress Fill Bar */}
        <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status terminal text */}
        <div className="h-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusText}
              className="text-[10px] font-mono tracking-widest text-[#BFBFBF]/60 uppercase"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {statusText}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>

      {/* Decorative vertical golden lines */}
      <div className="absolute left-6 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent hidden md:block" />
      <div className="absolute right-6 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent hidden md:block" />
    </motion.div>
  );
}
