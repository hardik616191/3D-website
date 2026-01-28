
import React from 'react';
import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#A89078] font-medium tracking-[0.2em] uppercase mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to <span className="italic">elevate</span> <br /> your brand?</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-md">
              Whether you're looking for a consultation or just want to chat about the future of digital marketing, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@hardik.com" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center group-hover:bg-[#A89078] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">hello@hardiksonagara.com</span>
              </a>
              <div className="flex space-x-4">
                {[Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center hover:bg-[#A89078] hover:text-white transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F9F8F6] p-10 md:p-12 rounded-3xl shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#A89078] transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#A89078] transition-colors" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Service Needed</label>
                <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#A89078] transition-colors appearance-none">
                  <option>Performance Marketing</option>
                  <option>Brand Strategy</option>
                  <option>Social Media</option>
                  <option>Full Scale Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#A89078] transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-[#2C2C2C] text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-all flex items-center justify-center group">
                Send Message
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
