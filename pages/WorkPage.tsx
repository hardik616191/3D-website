
import React, { useEffect, useState } from 'react';
import ProjectSlider from '../components/ProjectSlider';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import { ArrowDown } from 'lucide-react';

const WorkPage: React.FC = () => {
  return (
    <div className="bg-[#0b0f14]">
      {/* Work Page Header */}
      <section className="pt-48 pb-24 bg-[#0b0f14] relative overflow-hidden">
        {/* Header background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8">Engineering Archive — 2024</p>
              <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter mb-10">
                SELECTED <br /> <span className="font-serif-italic font-normal italic text-blue-500">WORKS</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                A collection of digital products and experiments built at the intersection of high-fidelity design and rigorous engineering.
              </p>
            </div>
            <div className="pb-4">
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center animate-bounce text-white">
                  <ArrowDown size={24} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Showcases */}
      <ProjectSlider />

      {/* The Full Portfolio Grid */}
      <Work />

      {/* Social Proof - Testimonials */}
      <div id="testimonials" className="reveal">
        <Testimonials />
      </div>

      {/* Footer CTA specifically for the Work page */}
      <section className="py-40 bg-[#0b0f14] border-t border-white/5 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1]">Have a vision <span className="font-serif-italic font-normal italic text-blue-400">in mind?</span></h2>
           <p className="text-gray-400 mb-16 max-w-xl mx-auto text-lg leading-relaxed">
             I am currently accepting new projects for Q3 2024. Let's build something that moves the needle.
           </p>
           <a 
             href="#contact" 
             className="inline-block px-14 py-6 bg-white text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-500 hover:text-white transition-all shadow-2xl"
           >
             Start a Project
           </a>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
