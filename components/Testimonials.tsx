
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TESTIMONIALS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);

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
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">Trusted by Global Clients</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
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
            className="!pb-24 !pt-12"
          >
            {TESTIMONIALS.map((t, idx) => (
              <SwiperSlide key={idx} className="testimonial-card-anim">
                <div className="group relative p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(79,91,255,0.1)]">
                  
                  {/* Rating & Quote Icon */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative w-5 h-5">
                          <Star className="text-white/10 fill-white/10" size={20} />
                          {i < Math.floor(t.rating) && (
                            <div className="star-fill absolute inset-0 overflow-hidden">
                              <Star className="text-yellow-500 fill-yellow-500" size={20} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <Quote size={40} className="text-blue-500/20 group-hover:text-blue-500 transition-colors duration-500" />
                  </div>

                  {/* Review Text */}
                  <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-10 italic">
                    "{t.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-colors shadow-lg">
                        <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white leading-tight">{t.author}</h4>
                        <p className="text-sm text-gray-500 font-medium">
                          {t.role} • <span className="text-blue-400">{t.company}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block">
                      <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {t.date}
                      </span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-3 h-3 bg-blue-500 rounded-full blur-sm"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-10 z-20">
            <button className="testi-prev w-14 h-14 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              <ChevronLeft size={24} />
            </button>
            <div className="h-[1px] w-24 bg-white/10"></div>
            <button className="testi-next w-14 h-14 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
