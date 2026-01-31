
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#0b0f14] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-left mb-20 max-w-2xl">
          <p className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Capabilities</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Strategic <span className="font-serif-italic font-normal italic text-blue-400">Expertise</span></h2>
          <p className="text-gray-400 text-lg">
            I leverage modern stacks and strategic insights to build digital tools that drive measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <div 
                key={index} 
                className="bg-white/5 p-10 rounded-[32px] border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-blue-500 transition-all">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
