
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Play, Volume2, VolumeX, ArrowLeft, ArrowRight } from 'lucide-react';
import { VIDEO_PROJECTS } from '../constants';
import type { Swiper as SwiperType } from 'swiper';

const ProjectSlider: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (swiper: SwiperType) => {
    // Pause all videos first
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });

    // Play only the active slide's video
    const activeIndex = swiper.realIndex;
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo.play().catch(error => {
        console.log("Autoplay was prevented by browser:", error);
      });
    }
  };

  const onSwiperInit = (swiper: SwiperType) => {
    // Initial play for the first slide
    handleSlideChange(swiper);
  };

  return (
    <section id="work-demo" className="py-32 bg-[#0b0f14] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#4f5bff] font-bold uppercase tracking-[0.3em] text-xs mb-4">Live Demonstrations</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience the <span className="font-serif-italic font-normal">Execution</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A deeper look into the architecture and interaction of my most complex engineering projects.
          </p>
        </div>

        <div className="relative px-4 sm:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            onSlideChange={handleSlideChange}
            onSwiper={onSwiperInit}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            className="pb-20"
          >
            {VIDEO_PROJECTS.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-[32px] bg-[#111827] border border-white/5 shadow-2xl aspect-[16/10]">
                  {/* Video Background */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={project.videoUrl}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    muted={isMuted}
                    loop
                    playsInline
                    poster={project.image}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent opacity-90"></div>

                  {/* Glassmorphism Content */}
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                    <button className="flex items-center space-x-2 px-6 py-3 bg-[#4f5bff] text-white rounded-full font-bold text-sm hover:bg-[#2f3cff] transition-all transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 duration-500">
                      <span>View Project Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Play/Sound Overlay */}
                  <div className="absolute top-6 right-6 flex space-x-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/20 transition-all pointer-events-auto"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-20 h-20 bg-[#4f5bff]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <Play size={32} className="text-white fill-current ml-1" />
                    </div>
                  </div>

                  {/* Neon Edge Highlight */}
                  <div className="absolute inset-0 border border-white/5 rounded-[32px] group-hover:border-[#4f5bff]/50 transition-colors duration-500"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Controls */}
          <div className="flex justify-between items-center mt-12 px-4">
            <div className="flex space-x-4">
              <button className="swiper-prev p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all">
                <ArrowLeft size={20} />
              </button>
              <button className="swiper-next p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="swiper-pagination-custom flex space-x-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
