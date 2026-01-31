
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0f14] pt-32 pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase text-white">
          HARDIK <span className="font-serif-italic font-normal italic text-blue-500">SONAGARA</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-10 mb-24">
          <a href="#about" className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#work" className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">Work</a>
          <a href="#contact" className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest gap-6">
          <p>© 2024 Hardik Sonagara. Handcrafted in India.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-gray-500 font-black">Growth Driven Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
