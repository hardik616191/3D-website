
import React, { useEffect, useRef } from 'react';
import { 
  Zap, 
  Target, 
  Code, 
  Layers, 
  Cpu, 
  Sparkles,
  ArrowUpRight,
  ShoppingCart,
  Layout,
  TrendingUp,
  Settings
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reveal animations for text
    const textElements = containerRef.current.querySelectorAll('.reveal-text');
    gsap.fromTo(textElements, 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      }
    );

    // Floating animation for skill cards
    const cards = containerRef.current.querySelectorAll('.skill-card');
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: -20,
        duration: 2.5 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3
      });

      gsap.fromTo(card,
        { opacity: 0, scale: 0.9, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cards-grid',
            start: 'top 85%',
          }
        }
      );
    });

    // Stats counter animation
    const stats = containerRef.current.querySelectorAll('.stat-item');
    gsap.fromTo(stats,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 90%',
        }
      }
    );

    // Mouse follow glow effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(glowRef.current, {
        x: x,
        y: y,
        duration: 1.5,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { title: "Shopify Development", desc: "High-converting e-commerce engines.", icon: ShoppingCart, color: "from-blue-500/10 to-blue-600/20" },
    { title: "WordPress Expert", desc: "Scalable enterprise CMS solutions.", icon: Layout, color: "from-purple-500/10 to-indigo-600/20" },
    { title: "MERN & MEAN Stack", desc: "Robust full-stack web applications.", icon: Code, color: "from-blue-400/10 to-cyan-500/20" },
    { title: "UI/UX Experience", desc: "User journeys optimized for conversion.", icon: Sparkles, color: "from-purple-400/10 to-fuchsia-500/20" },
    { title: "Performance Engine", desc: "Ultra-fast load times & core vitals.", icon: Zap, color: "from-blue-600/10 to-blue-700/20" },
    { title: "Digital Marketing", desc: "Data-driven ROI focused strategies.", icon: Target, color: "from-indigo-500/10 to-purple-600/20" },
    { title: "Business Automation", desc: "Streamlining complex workflows.", icon: TrendingUp, color: "from-blue-500/10 to-indigo-400/20" },
    { title: "Systems Optimization", desc: "Building resilient cloud architectures.", icon: Settings, color: "from-purple-600/10 to-blue-500/20" }
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-32 bg-[#0b0f14] text-white overflow-hidden"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full"></div>
        <div ref={glowRef} className="absolute w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 lg:opacity-100 transition-opacity"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Vision & Message */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="reveal-text inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                Growth-Driven Strategy
              </span>
              <h2 className="reveal-text text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                I Build Digital <span className="font-serif-italic italic font-normal text-blue-500">Engines</span> That Power <br /> <span className="text-white">Business Growth.</span>
              </h2>
            </div>

            <p className="reveal-text text-xl text-gray-400 leading-relaxed max-w-lg">
              Helping businesses scale with high-performing websites, automation, and conversion-focused digital solutions. I bridge the gap between complex engineering and profitable business outcomes.
            </p>

            <div className="reveal-text pt-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center space-x-6 px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all shadow-2xl hover:shadow-blue-500/20"
              >
                <span>Scale Your Vision</span>
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={18} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Cards Grid */}
          <div className="lg:col-span-7">
            <div className="cards-grid grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {skills.map((skill, i) => (
                <div 
                  key={i}
                  className="skill-card group p-8 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] hover:border-blue-500/50 transition-all duration-500 cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:border-blue-500/30 transition-all shadow-xl`}>
                    <skill.icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{skill.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {skill.desc}
                  </p>
                </div>
              ))}
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Performance Stats */}
        <div ref={statsRef} className="mt-40 pt-20 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="stat-item flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-6xl lg:text-8xl font-black text-white tracking-tighter">70</span>
                <span className="text-4xl lg:text-5xl font-bold text-blue-500">%+</span>
              </div>
              <p className="text-xs lg:text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Average Profit Growth</p>
            </div>

            <div className="stat-item flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-6xl lg:text-8xl font-black text-white tracking-tighter">40</span>
                <span className="text-4xl lg:text-5xl font-bold text-blue-500">%+</span>
              </div>
              <p className="text-xs lg:text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Conversion Rate Boost</p>
            </div>

            <div className="stat-item flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-6xl lg:text-8xl font-black text-white tracking-tighter">HIGH</span>
              </div>
              <p className="text-xs lg:text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Performance Optimization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Section Separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  );
};

export default About;
