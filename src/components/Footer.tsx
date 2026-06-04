import React from 'react';
import { Compass, Instagram, MapPin, Mail, ArrowUpCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      id="main-footer" 
      className="bg-[#050505] border-t border-white/5 pt-20 pb-12 px-6 relative overflow-hidden"
    >
      {/* Structural golden line separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Main Grid elements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand identity */}
          <div className="md:col-span-1 text-left">
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center space-x-3 mb-6 group cursor-pointer focus:outline-none"
            >
              <div className="relative w-8 h-8 bg-neutral-900 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:border-[#D4AF37]">
                <Compass className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="text-xl font-black tracking-widest text-white uppercase">AN.FLIX</span>
            </button>
            
            <p className="text-xs text-[#BFBFBF]/60 leading-relaxed uppercase tracking-wider mb-6">
              A premium, high-integrity digital universe exploring anime masterpiece storylines, strategic systems, character-driven psychology, and strategic philosophy.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/an.flix_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-white/5 hover:border-[#D4AF37] flex items-center justify-center text-[#BFBFBF] hover:text-[#D4AF37] transition-all"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase mb-6 pb-2 border-b border-white/5">
              THE MAP
            </h4>
            <ul className="space-y-3.5 text-xs font-mono">
              <li>
                <button 
                  onClick={() => onNavigate('hero')} 
                  className="text-[#BFBFBF]/65 hover:text-[#D4AF37] uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Home Core
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('characters')} 
                  className="text-[#BFBFBF]/65 hover:text-[#D4AF37] uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Elite Strategists
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('trending')} 
                  className="text-[#BFBFBF]/65 hover:text-[#D4AF37] uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Curated Requisite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('wallpapers')} 
                  className="text-[#BFBFBF]/65 hover:text-[#D4AF37] uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Vision Portals
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Secondary Links */}
          <div className="text-left">
            <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase mb-6 pb-2 border-b border-white/5">
              REGIME INTEL
            </h4>
            <ul className="space-y-3.5 text-xs font-mono">
              <li>
                <button 
                  onClick={() => onNavigate('community')} 
                  className="text-[#BFBFBF]/65 hover:text-[#D4AF37] uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Audience Directory
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('instagram')} 
                  className="text-[#BFBFBF]/65 hover:text-[#D4AF37] uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Syndicate Panel
                </button>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/an.flix_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#BFBFBF]/65 hover:text-[#D4AF37] uppercase tracking-widest transition-colors"
                >
                  Broadcast Channel
                </a>
              </li>
              <li>
                <span className="text-[#BFBFBF]/40 uppercase tracking-widest">
                  White Room Database 🔒
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact/Enquiries & Quick Follow CTA */}
          <div className="text-left bg-[#0e0e0e] border border-white/5 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold text-[#D4AF37] tracking-[0.25em] uppercase mb-3">
                ENLIST WITH THE COMM
              </h4>
              <p className="text-[11px] text-[#BFBFBF]/70 leading-relaxed uppercase tracking-wider mb-4">
                We accept collaboration proposals from premium curators of anime edits, digital assets, or clothing brands.
              </p>
            </div>

            <a
              href="https://www.instagram.com/an.flix_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/35 py-3 rounded-lg text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] transition-all uppercase"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>FOLLOW @AN.FLIX_</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-[#BFBFBF]/45 tracking-widest uppercase">
          <div className="mb-4 md:mb-0">
            © 2026 AN.FLIX • PRIVATE CRITERION SYNDICATE • ALL DESIGN STRATEGIES CALCULATED.
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-help">TERMS OF ACCORD</span>
            <span className="hover:text-white transition-colors cursor-help">INTELLECTUAL CODES</span>
            
            {/* Scroll back up anchor */}
            <button
              onClick={handleScrollTop}
              className="p-2 border border-white/5 bg-neutral-900 rounded-full text-[#BFBFBF] hover:text-[#D4AF37] hover:border-[#D4AF37]/20 transition-all cursor-pointer flex items-center gap-1.5 uppercase tracking-widest text-[9px]"
              aria-label="Scroll back top"
            >
              <span>TOP CORE</span>
              <ArrowUpCircle className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
