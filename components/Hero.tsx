
import React, { useEffect, useRef } from 'react';
import { MapPin, ArrowRight, ArrowDownRight } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Initial Badge Entry
    tl.fromTo(badgeRef.current,
      { x: -50, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, delay: 0.5 }
    );

    // Headline Staggered Entry
    tl.fromTo('.hero-text-line',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
      "-=0.8"
    );

    // Description Entry
    tl.fromTo(descRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    );

    // Background Image Entry
    tl.fromTo(backgroundRef.current,
      { x: 50, opacity: 0, scale: 1.05 },
      { x: 0, opacity: 1, scale: 1, duration: 2.5, ease: 'expo.out' },
      "-=1.8"
    );

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          y: scrolled * 0.25,
          duration: 0.5,
          ease: 'none'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Mouse follow glow for the container
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      gsap.to('.hero-glow', {
        x: x,
        y: y,
        duration: 1.5,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-[#0b0f14] overflow-hidden pt-20"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <div className="hero-glow absolute w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      </div>

      {/* Hero Background Image - Using a placeholder for the user's photo */}
      <div 
        ref={backgroundRef}
        className="absolute top-0 right-0 w-full lg:w-[70%] h-full z-0 pointer-events-none overflow-hidden"
      >
        {/* Multi-layered Vignette Gradients for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f14] via-[#0b0f14]/80 lg:via-[#0b0f14]/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/10 z-0"></div> 
        
        <img 
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop" 
          alt="Hardik Sonagara" 
          className="w-full h-full object-cover lg:object-right-top grayscale-[0.2] brightness-90 lg:brightness-100"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-30">
        <div className="max-w-4xl">
          
          {/* 1. Animated Location Badge */}
          <div 
            ref={badgeRef}
            className="location-badge-container group relative mb-8"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="relative inline-flex items-center space-x-3 px-5 py-2.5 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-full cursor-default transition-all duration-300 hover:border-blue-500/50 hover:scale-105">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-2.5 h-2.5 bg-blue-500 rounded-full border border-white/20"></div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                Based in <span className="text-blue-400">India</span> — Available Worldwide
              </span>
              <MapPin size={12} className="text-purple-400 animate-bounce" />
            </div>
          </div>

          {/* 2. Main Headline */}
          <div ref={titleRef} className="space-y-2 mb-10 overflow-hidden">
            <div className="hero-text-line">
              <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
                HARDIK
              </h1>
            </div>
            <div className="hero-text-line">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase drop-shadow-2xl">
                <span className="font-serif-italic font-normal italic text-blue-500">SONAGARA</span>
              </h1>
            </div>
          </div>

          {/* 3. Sub-headline / Description */}
          <div ref={descRef} className="space-y-12">
            <div className="flex flex-col items-start space-y-4">
              <ArrowDownRight className="text-white/40 drop-shadow-lg" size={32} />
              <div className="space-y-1">
                <h2 className="text-4xl md:text-7xl font-medium text-white tracking-tight leading-tight drop-shadow-lg">Full Stack</h2>
                <h2 className="text-4xl md:text-7xl font-medium text-white tracking-tight leading-tight drop-shadow-lg">Developer & Strategist</h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 bg-white text-black rounded-full font-bold overflow-hidden transition-all duration-300 hover:pr-14 hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/10 hover:border-white/30 transition-all shadow-xl"
              >
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .location-badge-container {
          animation: badge-float 6s ease-in-out infinite;
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hero-text-line {
          overflow: hidden;
        }
      `}} />
    </section>
  );
};

export default Hero;
