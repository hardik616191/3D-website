
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <p className="text-[#A89078] font-medium tracking-[0.2em] uppercase mb-4">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-serif">Strategic <span className="italic">Expertise</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <div 
                key={index} 
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 bg-[#F9F8F6] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#A89078] group-hover:text-white transition-colors">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">
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
