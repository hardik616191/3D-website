
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TESTIMONIALS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade-in Title
    gsap.fromTo(".testimonial-header", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".testimonial-header",
          start: "top 85%",
        }
      }
    );

    // Stagger Slide-up Cards (initial reveal)
    gsap.fromTo(".testimonial-card-anim",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-carousel-container",
          start: "top 80%",
        }
      }
    );

    // Animate stars fill
    gsap.fromTo(".star-fill",
      { width: "0%" },
      { 
        width: "100%", 
        duration: 1.5, 
        ease: "power2.out", 
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".testimonial-carousel-container",
          start: "top 75%",
        }
      }
    );

  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#0b0f14] via-[#111827] to-[#0b0f14] overflow-hidden"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="testimonial-header text-center mb-20">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 shadow-lg shadow-blue-500/5 group">
            <Globe className="text-blue-500 animate-spin-slow group-hover:scale-110 transition-transform" size={16} />
            <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">Trusted by Global Clients</p>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            What My <span className="font-serif-italic font-normal italic text-blue-500">Partners</span> Say
          </h2>
        </div>

        <div className="testimonial-carousel-container relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              768: { slidesPerView: 1.8 },
              1280: { slidesPerView: 2.4 },
            }}
            navigation={{
              prevEl: '.testi-prev',
              nextEl: '.testi-next',
            }}
            className="!pb-32 !pt-12"
          >
            {TESTIMONIALS.map((t, idx) => (
              <SwiperSlide key={idx} className="testimonial-card-anim">
                <div className="group relative p-8 md:p-14 rounded-[48px] bg-[#111827]/60 border border-white/10 backdrop-blur-2xl transition-all duration-700 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_80px_rgba(79,91,255,0.15)]">
                  
                  {/* Rating & Quote Icon */}
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex space-x-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative w-6 h-6">
                          <Star className="text-white/10 fill-white/10" size={24} />
                          {i < Math.floor(t.rating) && (
                            <div className="star-fill absolute inset-0 overflow-hidden">
                              <Star className="text-yellow-500 fill-yellow-500" size={24} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-500 transition-all duration-500">
                      <Quote size={24} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-2xl md:text-3xl font-medium text-white/95 leading-relaxed mb-12 italic tracking-tight">
                    "{t.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-10">
                    <div className="flex items-center space-x-5">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-colors shadow-2xl">
                          <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white leading-tight">{t.author}</h4>
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">
                          {t.role} — <span className="text-blue-500">{t.company}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden lg:block">
                      <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
                        {t.date}
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent Decor */}
                  <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-12 z-20">
            <button className="testi-prev w-16 h-16 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-500 group shadow-2xl">
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="h-[1px] w-32 bg-white/10 relative">
               <div className="absolute inset-0 bg-blue-500/20 blur-sm"></div>
            </div>
            <button className="testi-next w-16 h-16 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-500 group shadow-2xl">
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
