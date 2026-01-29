
import React, { useEffect, useState } from 'react';
import ProjectSlider from '../components/ProjectSlider';
import Work from '../components/Work';
import { ArrowDown } from 'lucide-react';

const WorkPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Work Page Header */}
      <section className="pt-40 pb-20 bg-[#ECEBE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <p className="text-[#4f5bff] font-bold uppercase tracking-[0.3em] text-xs mb-6">Archive — 2024</p>
              <h1 className="text-6xl md:text-8xl font-black text-[#1C1C1C] leading-[0.9] tracking-tighter mb-8">
                SELECTED <br /> <span className="font-serif-italic font-normal">WORKS</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                A collection of digital experiences, products, and experiments built at the intersection of high-fidelity design and rigorous engineering.
              </p>
            </div>
            <div className="pb-4">
               <div className="w-16 h-16 rounded-full border border-[#1C1C1C]/10 flex items-center justify-center animate-bounce">
                  <ArrowDown size={24} className="text-[#1C1C1C]" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Showcases */}
      <ProjectSlider />

      {/* The Full Portfolio Grid */}
      <Work />

      {/* Footer CTA specifically for the Work page */}
      <section className="py-32 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-6xl font-serif mb-8">Have a vision in mind?</h2>
           <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
             I am currently accepting new projects for Q3 2024. Let's build something that moves the needle.
           </p>
           <a 
             href="#contact" 
             className="inline-block px-12 py-5 bg-[#4f5bff] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#2f3cff] transition-all"
           >
             Start a Project
           </a>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
