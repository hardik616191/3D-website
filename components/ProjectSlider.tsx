
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
    handleSlideChange(swiper);
  };

  return (
    <section id="work-demo" className="py-32 bg-[#0b0f14] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <p className="text-[#4f5bff] font-bold uppercase tracking-[0.3em] text-xs mb-4">Live Demonstrations</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The <span className="font-serif-italic font-normal italic text-blue-500">Art</span> of <br />
            Execution
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.1}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            onSlideChange={handleSlideChange}
            onSwiper={onSwiperInit}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1280: { slidesPerView: 2 },
            }}
            navigation={{
              prevEl: '.demo-prev',
              nextEl: '.demo-next',
            }}
            className="!py-20"
          >
            {VIDEO_PROJECTS.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-[48px] bg-[#111827] border border-white/5 shadow-2xl aspect-[16/10] mx-4">
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    src={project.videoUrl}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
                    muted={isMuted}
                    loop
                    playsInline
                    poster={project.image}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>

                  <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-8 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {project.description}
                    </p>
                    <a href={project.url} className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-500 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-700 delay-200">
                      <span>View Project</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>

                  <div className="absolute top-10 right-10 flex space-x-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all flex items-center justify-center pointer-events-auto"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center space-x-6 mt-12">
            <button className="demo-prev w-16 h-16 bg-white/5 hover:bg-white hover:text-black border border-white/10 rounded-full text-white transition-all flex items-center justify-center group">
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="h-[1px] w-24 bg-white/10"></div>
            <button className="demo-next w-16 h-16 bg-white/5 hover:bg-white hover:text-black border border-white/10 rounded-full text-white transition-all flex items-center justify-center group">
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
