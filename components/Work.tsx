
import React from 'react';
import { PROJECTS } from '../constants';
import CategorySlider from './CategorySlider';

const Work: React.FC = () => {
  const categories = [
    { 
      id: 'web', 
      name: 'Web Projects', 
      title: 'Digital Ecosystems', 
      subtitle: 'Shopify, WordPress & Custom Web',
      index: '01'
    },
    { 
      id: 'app', 
      name: 'App Projects', 
      title: 'Mobile Solutions', 
      subtitle: 'React Native & Flutter',
      index: '02'
    },
    { 
      id: 'design', 
      name: 'Designing Projects', 
      title: 'Visual Identities', 
      subtitle: 'UI/UX Design',
      index: '03'
    }
  ];

  return (
    <section id="work" className="bg-[#0b0f14] min-h-screen relative overflow-hidden pb-32">
      {/* Dynamic light leaks */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 relative z-10">
        <p className="text-blue-500 font-bold tracking-[0.4em] uppercase mb-6 text-xs">Portfolio</p>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-20 tracking-tighter uppercase leading-[0.8]">
          Selected <br />
          <span className="font-serif-italic font-normal italic text-blue-500">Masterpieces</span>
        </h2>
      </div>

      <div className="relative z-10">
        {categories.map((cat) => (
          <CategorySlider 
            key={cat.id}
            title={cat.title}
            subtitle={cat.subtitle}
            index={cat.index}
            projects={PROJECTS.filter(p => p.category === cat.name)}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
