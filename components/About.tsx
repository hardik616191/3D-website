
import React, { useEffect, useRef } from 'react';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Layers, 
  Cpu, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reveal animations for text
    const textElements = containerRef.current.querySelectorAll('.reveal-text');
    gsap.fromTo(textElements, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    // Floating animation for skill cards
    const cards = containerRef.current.querySelectorAll('.skill-card');
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: -15,
        duration: 2 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2
      });

      gsap.fromTo(card,
        { opacity: 0, scale: 0.8, x: 30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      );
    });

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
    { 
      title: "Web Development", 
      desc: "Pixel-perfect, ultra-responsive storefronts.", 
      icon: Cpu,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      title: "Full Stack Solutions", 
      desc: "Robust backends that scale with your users.", 
      icon: Layers,
      color: "from-purple-500/20 to-pink-500/20"
    },
    { 
      title: "Digital Marketing", 
      desc: "Data-driven strategies to boost your ROI.", 
      icon: Target,
      color: "from-orange-500/20 to-red-500/20"
    },
    { 
      title: "UI/UX Design", 
      desc: "User journeys optimized for conversion.", 
      icon: Sparkles,
      color: "from-emerald-500/20 to-teal-500/20"
    },
    { 
      title: "Performance Optimization", 
      desc: "Milliseconds shaved for maximum retention.", 
      icon: Zap,
      color: "from-yellow-500/20 to-amber-500/20"
    },
    { 
      title: "Business Automation", 
      desc: "Streamlining workflows to save time & money.", 
      icon: TrendingUp,
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-32 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
        {/* Mouse Follow Glow */}
        <div 
          ref={glowRef}
          className="absolute w-[400px] h-[400px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 lg:opacity-100"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Business Impact Messaging */}
          <div ref={contentRef} className="space-y-10">
            <div className="space-y-4">
              <span className="reveal-text inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                Growth-Driven Strategy
              </span>
              <h2 className="reveal-text text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                I build the engines that drive your <span className="font-serif-italic italic font-normal text-blue-400">business growth.</span>
              </h2>
            </div>

            <p className="reveal-text text-xl text-gray-400 leading-relaxed max-w-xl">
              I don't just build websites, I create high-performing digital assets. My approach fuses engineering rigor with user psychology and marketing strategy to solve your business's most pressing scaling challenges.
            </p>

            <div className="reveal-text grid grid-cols-2 gap-10 pt-6">
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-white">40%<span className="text-blue-500">+</span></h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Average Conversion Lift</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-white">70%<span className="text-blue-500">+</span></h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Workflow Efficiency Boost</p>
              </div>
            </div>

            <div className="reveal-text pt-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center space-x-4 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5"
              >
                <span>Scale Your Vision</span>
                <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={20} />
              </button>
            </div>
          </div>

          {/* Right Side: Skill Showcase Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div 
                key={i}
                className={`skill-card p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 group cursor-default`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{skill.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
            
            {/* CTA Badge floating element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full animate-pulse pointer-events-none"></div>
          </div>

        </div>
      </div>

      {/* Aesthetic Section Separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default About;
