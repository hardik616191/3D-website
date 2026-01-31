
import React from 'react';
import { Mail, Linkedin, Instagram, ArrowRight, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#0b0f14] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <p className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Collaboration</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 leading-[1.1]">Ready to <span className="font-serif-italic font-normal italic text-blue-400">elevate</span> <br /> your brand?</h2>
            <p className="text-lg text-gray-400 mb-16 max-w-md leading-relaxed">
              Whether you're looking for a consultation or just want to chat about the future of digital product engineering, I'd love to hear from you.
            </p>
            
            <div className="space-y-10">
              <a href="mailto:hello@hardik.com" className="group flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Send an Email</p>
                  <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">hello@hardiksonagara.com</span>
                </div>
              </a>

              <div className="flex space-x-4">
                {[Linkedin, Github, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-500 shadow-lg">
                    <Icon size={24} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 md:p-14 rounded-[40px] border border-white/10 backdrop-blur-xl shadow-2xl relative">
            {/* Form decorative glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-[40px] pointer-events-none"></div>

            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700" placeholder="Hardik Sonagara" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700" placeholder="hardik@example.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Service Required</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                    <option className="bg-[#111827]">Full Stack Development</option>
                    <option className="bg-[#111827]">UI/UX Experience Design</option>
                    <option className="bg-[#111827]">Cloud Architecture</option>
                    <option className="bg-[#111827]">Digital Marketing Strategy</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none">
                     <ArrowRight size={16} className="rotate-90 text-gray-500" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Your Vision</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-gray-700" placeholder="Tell me about your project..."></textarea>
              </div>

              <button className="w-full bg-white text-black py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-500 hover:text-white transition-all shadow-xl flex items-center justify-center group">
                Send Message
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
