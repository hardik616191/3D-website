
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const bubblePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const bubble = bubbleRef.current;
    if (!section || !bubble) return;

    // Only enable on desktop/tablet
    if (window.innerWidth < 768) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const updateBubble = () => {
      // Smooth lerp (linear interpolation) for that magnetic follow effect
      const lerpFactor = 0.15;
      bubblePos.current.x += (mousePos.current.x - bubblePos.current.x) * lerpFactor;
      bubblePos.current.y += (mousePos.current.y - bubblePos.current.y) * lerpFactor;

      gsap.set(bubble, {
        x: bubblePos.current.x,
        y: bubblePos.current.y
      });

      requestAnimationFrame(updateBubble);
    };

    section.addEventListener('mousemove', onMouseMove);
    const animationFrame = requestAnimationFrame(updateBubble);

    return () => {
      section.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="about-section relative py-24 bg-white overflow-hidden cursor-none"
    >
      {/* Interactive Bubble */}
      <div 
        ref={bubbleRef} 
        className="about-bubble hidden md:block"
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A decade of <span className="font-serif-italic italic text-[#4f5bff]">scaling</span> <br /> 
              the world's most <br /> 
              loved brands.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                My journey in engineering started with a simple obsession: why do some products feel intuitive while others feel like a struggle? After 7+ years in the industry, I've found the answer lies in the balance between rigorous architecture and invisible design.
              </p>
              <p>
                I don't just write code; I craft experiences. From stealth-mode startups to high-traffic platforms, my focus remains the same—building high-fidelity digital products that bridge the gap between complex engineering and human needs.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div className="group cursor-default">
                  <h4 className="text-3xl font-serif font-bold text-[#1C1C1C] transition-colors group-hover:text-[#4f5bff]">50+</h4>
                  <p className="text-sm uppercase tracking-widest text-gray-400">Projects Delivered</p>
                </div>
                <div className="group cursor-default">
                  <h4 className="text-3xl font-serif font-bold text-[#1C1C1C] transition-colors group-hover:text-[#4f5bff]">7+</h4>
                  <p className="text-sm uppercase tracking-widest text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="relative overflow-hidden rounded-xl">
                <img src="https://picsum.photos/seed/abt1/400/500" className="object-cover w-full h-64 shadow-lg hover:scale-105 transition-transform duration-700" alt="Lifestyle 1" />
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img src="https://picsum.photos/seed/abt2/400/500" className="object-cover w-full h-80 shadow-lg hover:scale-105 transition-transform duration-700" alt="Work space" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl">
                <img src="https://picsum.photos/seed/abt3/400/500" className="object-cover w-full h-80 shadow-lg hover:scale-105 transition-transform duration-700" alt="Meeting" />
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img src="https://picsum.photos/seed/abt4/400/500" className="object-cover w-full h-64 shadow-lg hover:scale-105 transition-transform duration-700" alt="Lifestyle 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
