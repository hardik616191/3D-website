
import React, { useEffect, useRef } from 'react';
import { MapPin, Globe, ArrowRight, ArrowDownRight } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
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

    // Description and Visual Entry
    tl.fromTo(descRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    );

    tl.fromTo(visualRef.current,
      { x: 50, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'expo.out' },
      "-=1.2"
    );

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (visualRef.current) {
        gsap.to(visualRef.current, {
          y: scrolled * 0.15,
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-glow absolute w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Animated Location Badge */}
            <div 
              ref={badgeRef}
              className="location-badge-container group relative mb-8"
            >
              {/* Outer Pulse Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative flex items-center space-x-3 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full cursor-default transition-all duration-300 hover:border-blue-500/50 hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                  <div className="relative w-2.5 h-2.5 bg-blue-500 rounded-full border border-white/20"></div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                  Located in <span className="text-blue-400">India</span>
                </span>
                <MapPin size={12} className="text-purple-400 animate-bounce" />
              </div>
            </div>

            {/* 2. Main Headline */}
            <div ref={titleRef} className="space-y-2 mb-8 overflow-hidden">
              <div className="hero-text-line">
                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                  HARDIK
                </h1>
              </div>
              <div className="hero-text-line">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                  <span className="font-serif-italic font-normal italic text-blue-500">SONAGARA</span>
                </h1>
              </div>
            </div>

            {/* 3. Sub-headline / Description */}
            <div ref={descRef} className="space-y-12">
              <div className="flex flex-col items-start space-y-4">
                <ArrowDownRight className="text-white/40" size={32} />
                <div className="space-y-1">
                  <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight">Freelance</h2>
                  <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight">Designer & Developer</h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all duration-300 hover:pr-12"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Portfolio <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div 
              ref={visualRef}
              className="relative aspect-[4/5] md:aspect-square"
            >
              {/* Profile Background Graphics */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[40px] rotate-3 blur-2xl"></div>
              
              {/* Main Profile Frame */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
                  alt="Hardik Sonagara" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                
                {/* Floating Tech Badges */}
                <div className="absolute top-8 right-8 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl animate-float-slow">
                  <Globe className="text-blue-400 mb-2" size={24} />
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">Global Ops</p>
                </div>
                
                <div className="absolute bottom-8 left-8 p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl animate-float-delayed">
                   <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                     <p className="text-[10px] font-bold text-white uppercase tracking-widest">Active Partner</p>
                   </div>
                </div>
              </div>

              {/* Decorative Geometric Elements */}
              <div className="absolute -top-10 -left-10 w-24 h-24 border-t-2 border-l-2 border-blue-500/50 rounded-tl-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-2 border-r-2 border-purple-500/50 rounded-br-3xl"></div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        .location-badge-container {
          animation: badge-float 6s ease-in-out infinite;
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}} />
    </section>
  );
};

export default Hero;
