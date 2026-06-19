import React, { useRef, useEffect, useState } from 'react';

// Import the actual high-fidelity given image frames from assets
import heroBg from '../assets/images/hero_cinematic_bg_1780508166814.png';
import wallpaper1 from '../assets/images/elite_wallpaper_1_1780508201068.png';
import wpCheckmate from '../assets/images/checkmate_strategy_1781600229650.jpg';
import wpSovereign from '../assets/images/divine_sovereign_1781600247260.jpg';
import wpCrimson from '../assets/images/crimson_justice_1781600269244.jpg';
import wpShadow from '../assets/images/shadow_domain_1781600288140.jpg';
import wpLimitless from '../assets/images/limitless_blue_1781600308742.jpg';

const backgroundImages = [
  heroBg,
  wallpaper1,
  wpCheckmate,
  wpSovereign,
  wpCrimson,
  wpShadow,
  wpLimitless
];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  maxAlpha: number;
}

export default function ScrollyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // High performance interpolation refs
  const scrollFractionRef = useRef(0);
  const lerpedFractionRef = useRef(0);
  const requestRef = useRef<number | null>(null);
  
  // Ambient gold gold dust particles
  const particlesRef = useRef<Particle[]>([]);

  // 1. Preload the actual available high-density wallpaper files
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    backgroundImages.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === backgroundImages.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback robust count logging
        loadedCount++;
        if (loadedCount === backgroundImages.length) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    });
    imagesRef.current = loadedImages;

    // Initialize premium floating gold dust components
    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(Math.random() * 0.6 + 0.2), // float upwards
        alpha: Math.random() * 0.5,
        maxAlpha: Math.random() * 0.6 + 0.2,
      });
    }
    particlesRef.current = particles;
  }, []);

  // 2. Continuous high-performance animation update & lerping loop
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScrollTop <= 0) return;

      const scrollFraction = scrollTop / maxScrollTop;
      scrollFractionRef.current = Math.min(1, Math.max(0, scrollFraction));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Resize event listener for particle regeneration boundaries
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * devicePixelRatio;
        canvas.height = window.innerHeight * devicePixelRatio;
        
        // Re-scatter particles out-of-bounds
        particlesRef.current.forEach(p => {
          p.x = Math.random() * window.innerWidth;
          p.y = Math.random() * window.innerHeight;
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Canvas render and animation frame logic
    const tick = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        requestRef.current = requestAnimationFrame(tick);
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        requestRef.current = requestAnimationFrame(tick);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Handle custom linear interpolation for elite buttery look on scroll
      const delta = scrollFractionRef.current - lerpedFractionRef.current;
      lerpedFractionRef.current += delta * 0.08; // smooth feedback speed ratio

      // Clear layout with elegant deep obsidian space
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      const totalImages = backgroundImages.length;
      
      // Calculate indices for seamless crossfading
      const scaledProgress = lerpedFractionRef.current * (totalImages - 1);
      const currentIndex = Math.max(0, Math.min(totalImages - 2, Math.floor(scaledProgress)));
      const nextIndex = Math.min(totalImages - 1, currentIndex + 1);
      const blend = scaledProgress - currentIndex;

      // Utility function to draw image centered with dynamic pan/zoom
      const drawLayer = (imgIndex: number, animBlend: number, opacity: number) => {
        const img = imagesRef.current[imgIndex];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        ctx.globalAlpha = opacity;

        const imgWidth = img.naturalWidth;
        const imgHeight = img.naturalHeight;
        const imgRatio = imgWidth / imgHeight;
        const canvasRatio = width / height;

        // Base Cover layout sizing calculations
        let renderWidth = width;
        let renderHeight = height;
        if (canvasRatio > imgRatio) {
          renderHeight = width / imgRatio;
        } else {
          renderWidth = height * imgRatio;
        }

        // Apply luxury cinematic "Ken Burns" zoom and positioning based on global scroll position
        const zoomFactor = 1.05 + 0.06 * Math.sin(lerpedFractionRef.current * Math.PI + (imgIndex * 0.4));
        const panX = Math.cos(lerpedFractionRef.current * Math.PI * 0.5 + imgIndex) * 20;
        const panY = Math.sin(lerpedFractionRef.current * Math.PI * 0.5 + imgIndex) * 15;

        // Apply combined transformations
        ctx.save();
        ctx.translate(width / 2 + panX, height / 2 + panY);
        ctx.scale(zoomFactor, zoomFactor);
        ctx.drawImage(
          img, 
          -renderWidth / 2, 
          -renderHeight / 2, 
          renderWidth, 
          renderHeight
        );
        ctx.restore();
      };

      // Draw the crossfading image layers dynamically
      if (imagesLoaded) {
        // Render base current wallpaper
        drawLayer(currentIndex, blend, 1 - blend);
        
        // Render incoming wallpaper overlay
        if (blend > 0.005) {
          drawLayer(nextIndex, blend, blend);
        }
      }

      // Restore full opacity for custom ambient overlays
      ctx.globalAlpha = 1.0;

      // Draw custom darkened elegant vignette for excellent accessibility (text contrast)
      const gradient = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * 0.25, width / 2, height / 2, Math.max(width, height) * 0.85);
      gradient.addColorStop(0, 'rgba(5, 5, 5, 0.45)');
      gradient.addColorStop(0.5, 'rgba(5, 5, 5, 0.7)');
      gradient.addColorStop(1, 'rgba(5, 5, 5, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw top-and-bottom horizontal sleek gradients (cinematic lens layout)
      const topGrad = ctx.createLinearGradient(0, 0, 0, 180);
      topGrad.addColorStop(0, 'rgba(5, 5, 5, 0.95)');
      topGrad.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, width, 180);

      const bottomGrad = ctx.createLinearGradient(0, height, 0, height - 180);
      bottomGrad.addColorStop(0, 'rgba(5, 5, 5, 0.95)');
      bottomGrad.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = bottomGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw premium tactical mastermind blueprint grid overlay at very low, tasteful opacity
      const drawBlueprintGrid = () => {
        const centerX = width * 0.85; // Place custom graphic offset to the right corner for desktop
        const centerY = height * 0.5;
        const progress = lerpedFractionRef.current;
        const rotationAngle = progress * Math.PI * 0.15;

        ctx.strokeStyle = 'rgba(214, 175, 55, 0.05)'; // Gold tint
        ctx.lineWidth = 1;

        // Draw concentric circle lattices
        for (let r = 1; r <= 3; r++) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, 80 * r * (1 + progress * 0.05), 0, Math.PI * 2);
          ctx.stroke();
        }

        // Draw rotation crosslines
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotationAngle);
        ctx.beginPath();
        ctx.moveTo(-280, 0); ctx.lineTo(280, 0);
        ctx.moveTo(0, -280); ctx.lineTo(0, 280);
        ctx.stroke();

        // Draw strategic coordinate marks
        ctx.font = '8px JetBrains Mono, monospace';
        ctx.fillStyle = 'rgba(214, 175, 55, 0.2)';
        ctx.textAlign = 'center';
        ctx.fillText('AN.FLIX HIGH COMMAND // BOARD VECTOR', 0, -250);
        ctx.fillText(`COORDS: X_284.S // ROT_STABLE // S_FRACT ${~~(progress * 100)}%`, 0, 260);

        // Draw compass star lines
        const rays = 8;
        for (let i = 0; i < rays; i++) {
          const angle = (i * Math.PI * 2) / rays;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(angle) * 120, Math.sin(angle) * 120);
          ctx.stroke();
        }
        ctx.restore();
      };

      drawBlueprintGrid();

      // Update and draw floating amber-gold dust particles
      const particles = particlesRef.current;
      particles.forEach(p => {
        // Move particle
        p.y += p.speedY;
        p.x += p.speedX;

        // Smoothly fade alpha in and out
        if (p.alpha < p.maxAlpha) p.alpha += 0.01;

        // Recycle particle when it goes off screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.alpha = 0;
        }
        if (p.x < -10 || p.x > width + 10) {
          p.x = Math.random() * width;
        }

        // Draw particle
        const pGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        pGrad.addColorStop(0, `rgba(214, 175, 55, ${p.alpha})`);
        pGrad.addColorStop(1, 'rgba(214, 175, 55, 0)');
        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render fine digital telemetry lines in footer area (unobtrusive, premium)
      ctx.font = '9px JetBrains Mono, monospace';
      ctx.fillStyle = 'rgba(214, 175, 55, 0.3)';
      ctx.textAlign = 'left';
      ctx.fillText(`[ AMBIENCE ENGINE v3.11 // ACT_IMAGE_IDX: ${currentIndex + 1} - ${nextIndex + 1} // SCROLL_SMOOTH: ${Math.round(lerpedFractionRef.current * 100)}% ]`, 30, height - 25);

      requestRef.current = requestAnimationFrame(tick);
    };

    // Begin render frame loops
    requestRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [imagesLoaded]);

  return (
    <canvas
      ref={canvasRef}
      id="scrollytelling-background"
      className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />
  );
}
