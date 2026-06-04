import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Compass } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'characters', label: 'Characters' },
    { id: 'trending', label: 'Trending' },
    { id: 'wallpapers', label: 'Wallpapers' },
    { id: 'community', label: 'Community' },
    { id: 'instagram', label: 'Instagram' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check if nav is scrolled past threshold
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Scroll indicator bar at the absolute top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-51">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-amber-500 origin-left"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo with interactive click to scroll to top */}
          <button
            id="nav-logo"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative w-9 h-9 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <Compass className="w-5 h-5 text-[#D4AF37] group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-black tracking-[0.2em] text-white">
                AN<span className="text-[#D4AF37]">.</span>FLIX
              </span>
              <span className="text-[8px] font-mono tracking-[0.3em] text-[#BFBFBF]/60 leading-none">
                ELITE CORE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-menu" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-[#D4AF37]' : 'text-[#BFBFBF] hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-[#D4AF37] to-amber-200"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Subtle hover background pill */}
                  <span className="absolute inset-0 bg-white/2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </button>
              );
            })}
          </nav>

          {/* Call To Action Buttons (Instagram follow) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/an.flix_/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group flex items-center space-x-2 bg-gradient-to-r from-neutral-900 to-neutral-950 border border-[#D4AF37]/45 hover:border-[#D4AF37] px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest text-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            >
              {/* Gold sliding panel on hover */}
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37] transition-all duration-500 ease-out group-hover:w-full" />
              
              <Instagram className="w-4 h-4 relative z-10 transition-colors duration-300" />
              <span className="relative z-10 uppercase tracking-widest">FOLLOW @AN.FLIX_</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Glassmorphic Sliding Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            className="fixed inset-0 z-30 bg-[#050505]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-12 px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual background ambient details */}
            <div className="absolute top-[30%] left-[10%] w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Nav items container */}
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.4em] uppercase border-b border-[#D4AF37]/10 pb-2 mb-4">
                NAVIGATE UNIVERSE
              </span>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-left text-2xl font-black uppercase tracking-widest py-2 transition-all cursor-pointer ${
                      isActive ? 'text-[#D4AF37] pl-4' : 'text-[#BFBFBF] hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <span className="flex items-center">
                      {isActive && <span className="mr-2 text-xs">◆</span>}
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Footer Area */}
            <div className="flex flex-col space-y-6">
              <a
                href="https://www.instagram.com/an.flix_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-400 via-[#D4AF37] to-amber-600 text-black py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-transform active:scale-95 shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
              >
                <Instagram className="w-5 h-5" />
                <span>FOLLOW ON INSTAGRAM</span>
              </a>

              <div className="text-center font-mono text-[9px] text-[#BFBFBF]/40 uppercase tracking-[0.2em]">
                © 2026 AN.FLIX • ALL STORY LINES CONVERGE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
