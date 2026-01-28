
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9F8F6] pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-12 uppercase">
          HARDIK <span className="font-light italic text-[#A89078]">SONAGARA</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a href="#about" className="text-sm font-medium tracking-[0.2em] uppercase hover:text-[#A89078] transition-colors">About</a>
          <a href="#services" className="text-sm font-medium tracking-[0.2em] uppercase hover:text-[#A89078] transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium tracking-[0.2em] uppercase hover:text-[#A89078] transition-colors">Work</a>
          <a href="#contact" className="text-sm font-medium tracking-[0.2em] uppercase hover:text-[#A89078] transition-colors">Contact</a>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest gap-4">
          <p>© 2024 Hardik Sonagara. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
          <p>Designed with Intent</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
