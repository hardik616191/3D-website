
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface CategorySliderProps {
  title: string;
  subtitle: string;
  projects: Project[];
  index: string;
}

const CategorySlider: React.FC<CategorySliderProps> = ({ title, subtitle, projects, index }) => {
  if (projects.length === 0) return null;

  const sliderId = `slider-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="py-24 border-b border-white/5 last:border-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-blue-500 font-black text-sm tracking-tighter">{index}</span>
              <div className="h-[1px] w-12 bg-blue-500/30"></div>
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">{subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              {title}
            </h2>
          </div>
          
          <div className="flex space-x-3">
            <button className={`${sliderId}-prev p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white`}>
              <ArrowLeft size={20} />
            </button>
            <button className={`${sliderId}-next p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white`}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="pl-6 lg:pl-12">
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          spaceBetween={30}
          slidesPerView={1.2}
          freeMode={true}
          navigation={{
            prevEl: `.${sliderId}-prev`,
            nextEl: `.${sliderId}-next`,
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1536: { slidesPerView: 4.2 },
          }}
          className="!overflow-visible"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 relative shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs font-bold uppercase tracking-widest">Launch Site</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>

                  {/* Aesthetic corner tag */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0">
                    <ArrowRight size={20} className="text-white -rotate-45" />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
