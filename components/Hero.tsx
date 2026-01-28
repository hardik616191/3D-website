
import React from 'react';
import { ArrowRight, Globe, ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#ECEBE9] overflow-hidden pt-20">
      
      {/* 1. Background Layer: The Massive Sliding Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden layer-back opacity-[0.08]">
        <div className="animate-marquee">
          <span className="big-text text-[#1C1C1C] mr-20">Hardik Sonagara —</span>
          <span className="big-text text-[#1C1C1C] mr-20">Hardik Sonagara —</span>
        </div>
      </div>

      {/* 2. Mid Layer: Secondary Outline Text for depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden layer-mid mt-32">
        <div className="animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
          <span className="big-text text-outline mr-20">Developer — Designer —</span>
          <span className="big-text text-outline mr-20">Developer — Designer —</span>
        </div>
      </div>

      {/* 3. Foreground Layer: The Person & Labels */}
      <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center layer-front h-full">
        
        {/* Location / Availability Label */}
        <div className="absolute top-0 left-6 lg:left-12 flex flex-col space-y-1 animate-fade-in">
           <div className="flex items-center space-x-2 text-[#1C1C1C]">
             <Globe size={14} className="animate-pulse" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Ahmedabad, India</span>
           </div>
           <p className="text-[10px] uppercase tracking-widest text-[#1C1C1C] opacity-40">Available for freelance</p>
        </div>

        {/* Floating Standing Person Image (No Card/No Border) */}
        <div className="relative group flex items-end justify-center w-full max-w-[700px] h-[70vh] md:h-[85vh] animate-float-person">
          {/* Using a professional male portrait cutout style to represent Hardik. 
              Positioned to overlap the text for cinematic depth. */}
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
            alt="Hardik Sonagara" 
            className="h-full w-auto object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.2)] grayscale-[0.2] transition-all duration-700 hover:grayscale-0 hover:scale-[1.03] pointer-events-none"
          />
          
          {/* Floating Interaction Badge */}
          <div className="absolute bottom-[20%] right-0 md:-right-10 p-6 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center rotate-12 hover:rotate-0 transition-transform cursor-pointer pointer-events-auto z-30">
            <ArrowDownRight size={24} className="text-[#4f5bff] mb-1" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#1C1C1C]">View Work</span>
          </div>
        </div>

        {/* Hero Footer: Description & Primary CTA */}
        <div className="absolute bottom-12 left-6 right-6 lg:left-12 lg:right-12 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-md space-y-4 text-[#1C1C1C]">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Hardik Sonagara — 2024</p>
            <h2 className="text-2xl md:text-3xl font-medium leading-tight">
              A designer & developer <span className="font-serif-italic">obsessed</span> with details and results-driven interfaces.
            </h2>
          </div>

          <div className="flex flex-col items-end space-y-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-[#ECEBE9] shadow-sm" alt="client" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#ECEBE9] bg-[#1C1C1C] text-white flex items-center justify-center text-[10px] font-bold">10+</div>
            </div>
            <button className="flex items-center space-x-4 group pointer-events-auto">
              <span className="text-sm font-bold uppercase tracking-widest pb-1 border-b-2 border-[#1C1C1C] group-hover:pr-4 transition-all">Connect with me</span>
              <div className="w-12 h-12 bg-[#1C1C1C] text-white rounded-full flex items-center justify-center group-hover:bg-[#4f5bff] transition-colors">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        </div>

      </div>
      
      {/* Scroll Down Vertical Bar */}
      <div className="absolute bottom-0 right-12 h-24 w-[1px] bg-[#1C1C1C] opacity-20 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
