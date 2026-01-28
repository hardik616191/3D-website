
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Projects', 'App Projects', 'Designing Projects'];

  useEffect(() => {
    const handleFilterEvent = (e: any) => {
      if (categories.includes(e.detail)) {
        setActiveCategory(e.detail);
      }
    };

    window.addEventListener('filterProjects', handleFilterEvent);
    return () => window.removeEventListener('filterProjects', handleFilterEvent);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-[#A89078] font-medium tracking-[0.2em] uppercase mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-serif">Selected <span className="italic">Work</span></h2>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#1C1C1C] text-white shadow-lg shadow-black/10' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${project.title}-${index}`} 
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index % 6 * 100}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 bg-white text-black rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Case Study
                  </span>
                </div>
              </div>
              <p className="text-[#A89078] text-[10px] uppercase tracking-widest font-bold mb-2">{project.category}</p>
              <h3 className="text-xl font-serif font-medium group-hover:text-[#4f5bff] transition-colors">{project.title}</h3>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
