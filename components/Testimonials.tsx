
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#0b0f14] text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
              <Quote size={32} className="text-blue-400" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-16 leading-[1.1]">
              Words from <span className="font-serif-italic font-normal italic text-blue-400">Partners</span>
            </h2>
            <div className="space-y-16">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="group pl-10 border-l border-white/10 py-2 hover:border-blue-500 transition-colors duration-500">
                  <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed text-gray-300 italic group-hover:text-white transition-colors">
                    "{t.quote}"
                  </p>
                  <div>
                    <h5 className="font-bold text-xl text-white mb-1">{t.author}</h5>
                    <p className="text-blue-500 text-xs tracking-widest uppercase font-black">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block relative group">
             <div className="aspect-square relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 border border-white/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000"></div>
                <div className="absolute inset-0 border border-white/5 rounded-full scale-100 group-hover:scale-115 transition-transform duration-1000 delay-100"></div>
                
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl p-4 bg-white/5 backdrop-blur-sm">
                   <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" 
                        alt="Collaboration" 
                        className="w-full h-full object-cover" 
                      />
                   </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 px-8 py-6 bg-[#111827] border border-white/10 rounded-3xl shadow-2xl animate-bounce">
                   <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">Success Rate</p>
                   <p className="text-3xl font-black text-blue-500">100%</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
