import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteSlider from './components/QuoteSlider';
import CharacterShowcase from './components/CharacterShowcase';
import TrendingAnime from './components/TrendingAnime';
import WallpaperSection from './components/WallpaperSection';
import CommunitySection from './components/CommunitySection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollyBackground from './components/ScrollyBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Navigate function: scrolls smoothly to target section
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section visibility tracker using IntersectionObserver
  useEffect(() => {
    if (isLoading) return;

    const sections = ['hero', 'characters', 'trending', 'wallpapers', 'community', 'instagram'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-40% 0px -40% 0px', // midpoint intersection threshold
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [isLoading]);

  return (
    <div className="text-white min-h-screen relative font-sans antialiased selection:bg-[#D4AF37] selection:text-black bg-[#050505]">
      
      {/* Intro Entrance Animation Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Scroll-driven premium frame animation sequence */}
      {!isLoading && <ScrollyBackground />}

      {/* Main Experience layout */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col min-h-screen relative"
        >
          {/* Main sticky navigation panel wrapper */}
          <Navbar onNavigate={handleNavigation} activeSection={activeSection} />

          {/* Core Universe elements rendering list sequentially */}
          <main className="flex-grow">
            <Hero onScrollClick={handleNavigation} />
            <QuoteSlider />
            <CharacterShowcase />
            <TrendingAnime />
            <WallpaperSection />
            <CommunitySection />
            <InstagramSection />
          </main>

          {/* Bottom Footer block */}
          <Footer onNavigate={handleNavigation} />

          {/* Float Action follow button */}
          <FloatingCTA />
        </motion.div>
      )}

    </div>
  );
}

// Simple motion component injection context in case needed
import { motion } from 'motion/react';
