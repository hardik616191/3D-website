
import React, { useEffect, useRef } from 'react';
import { Trophy, Award as AwardIcon, Star, CheckCircle, Zap, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AWARDS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const iconMap: { [key: string]: any } = {
  Trophy,
  Award: AwardIcon,
  Star,
  CheckCircle,
  Zap,
  Cpu
};

const Awards: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Heading Letter-by-letter reveal
    const heading = headingRef.current;
    if (heading) {
      const text = heading.textContent || "";
      heading.textContent = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.className = "heading-char inline-block opacity-0";
        heading.appendChild(span);
      });

      gsap.to(".heading-char", {
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
        }
      });
    }

    // 2. Award Cards Staggered Slide-up
    gsap.fromTo(".award-card", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".awards-grid",
          start: "top 80%",
        }
      }
    );

    // 3. Section Fade-in
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        }
      }
    );

    // 4. Counters Animation
    const stats = [
      { target: 70, element: ".stat-val-growth" },
      { target: 50, element: ".stat-val-projects" },
      { target: 100, element: ".stat-val-satisfaction" }
    ];

    stats.forEach((stat) => {
      const el = containerRef.current?.querySelector(stat.element);
      if (el) {
        gsap.to({ val: 0 }, {
          val: stat.target,
          duration: 2.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 90%",
          },
          onUpdate: function() {
            el.textContent = Math.floor(this.targets()[0].val).toString();
          }
        });
      }
    });

    // 5. Card Hover Effects handled via CSS + GSAP for micro-bounces
    const cards = containerRef.current.querySelectorAll('.award-card');
    cards.forEach(card => {
      const icon = card.querySelector('.award-icon');
      card.addEventListener('mouseenter', () => {
        gsap.to(icon, { y: -5, duration: 0.3, ease: "back.out(2)", repeat: 1, yoyo: true });
      });
    });

  }, []);

  return (
    <section 
      id="awards" 
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-[#0b0f14] via-[#0f172a] to-[#0b0f14] overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <p className="text-blue-500 font-bold tracking-[0.4em] uppercase mb-6 text-xs">Excellence</p>
          <h2 
            ref={headingRef}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]"
          >
            Awards & Recognitions
          </h2>
        </div>

        <div className="awards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AWARDS.map((award, index) => {
            const IconComp = iconMap[award.icon] || Trophy;
            return (
              <div 
                key={index}
                className="award-card group relative p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:bg-white/[0.08] hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(79,91,255,0.15)]"
              >
                <div className="award-icon w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-10 border border-white/10 transition-all duration-500 group-hover:from-blue-500 group-hover:to-purple-600 group-hover:rotate-6">
                  <IconComp className="text-white" size={30} />
                </div>
                
                <div className="space-y-4">
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">{award.org} • {award.year}</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {award.title}
                  </h3>
                </div>

                {/* Corner Decorative Accent */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Counter Stats Section */}
        <div ref={statsContainerRef} className="mt-32 pt-20 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center space-x-1 mb-4">
                <span className="stat-val-growth text-6xl md:text-8xl font-black text-white tracking-tighter">0</span>
                <span className="text-4xl md:text-5xl font-bold text-blue-500 group-hover:translate-x-1 transition-transform">%+</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 group-hover:text-blue-400 transition-colors">Business Growth Impact</p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center space-x-1 mb-4">
                <span className="stat-val-projects text-6xl md:text-8xl font-black text-white tracking-tighter">0</span>
                <span className="text-4xl md:text-5xl font-bold text-blue-500 group-hover:translate-x-1 transition-transform">+</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 group-hover:text-blue-400 transition-colors">Projects Delivered</p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center space-x-1 mb-4">
                <span className="stat-val-satisfaction text-6xl md:text-8xl font-black text-white tracking-tighter">0</span>
                <span className="text-4xl md:text-5xl font-bold text-blue-500 group-hover:translate-x-1 transition-transform">%</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 group-hover:text-blue-400 transition-colors">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
