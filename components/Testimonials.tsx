
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Quote size={48} className="text-[#A89078] mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-12">
              Words from <span className="italic text-[#A89078]">Partners</span>
            </h2>
            <div className="space-y-12">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="border-l-2 border-[#A89078] pl-8 py-2">
                  <p className="text-xl md:text-2xl italic font-light mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div>
                    <h5 className="font-bold text-lg">{t.author}</h5>
                    <p className="text-[#A89078] text-sm tracking-widest uppercase">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-square rounded-full border border-white/10 p-12">
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-[#A89078]">
                <img src="https://picsum.photos/seed/testimonial-bg/800" alt="Culture" className="w-full h-full object-cover grayscale opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
