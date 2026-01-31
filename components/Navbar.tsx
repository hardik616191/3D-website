
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workSubLinks = [
    { name: 'Web Projects', filter: 'Web Projects' },
    { name: 'App Projects', filter: 'App Projects' },
    { name: 'Designing Projects', filter: 'Designing Projects' },
  ];

  const handleWorkClick = (filter: string) => {
    setIsOpen(false);
    setWorkDropdownOpen(false);
    
    window.location.hash = '#/work';
    
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('filterProjects', { detail: filter }));
    }, 100);
  };

  const navigateToHome = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.location.hash = '#/';
    
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0b0f14]/80 backdrop-blur-xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#/" onClick={(e) => navigateToHome(e, 'hero')} className="text-xl font-bold tracking-tight text-white">
          HARDIK<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8 items-center">
            <a
              href="#/"
              onClick={(e) => navigateToHome(e, 'about')}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#/"
              onClick={(e) => navigateToHome(e, 'services')}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              Services
            </a>
            
            <div 
              className="relative group"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-semibold text-white/70 hover:text-white transition-colors">
                <span>Work</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${workDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-48 bg-[#111827]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top ${workDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="py-2">
                  {workSubLinks.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => handleWorkClick(sub.filter)}
                      className="w-full text-left px-6 py-3 text-sm font-medium text-white/60 hover:text-[#4f5bff] hover:bg-white/5 transition-colors"
                    >
                      {sub.name}
                    </button>
                  ))}
                  <div className="border-t border-white/5 my-1"></div>
                  <button 
                    onClick={() => handleWorkClick('All')}
                    className="w-full text-left px-6 py-3 text-sm font-bold text-white hover:bg-white/5 transition-colors"
                  >
                    View All Work
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a 
            href="#/"
            onClick={(e) => navigateToHome(e, 'contact')}
            className="px-6 py-2.5 bg-[#4f5bff] text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
          >
            Book Free Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0f14]/95 backdrop-blur-xl border-t border-white/10 flex flex-col p-8 space-y-6 animate-in slide-in-from-top duration-300">
          <a
            href="#/"
            className="text-lg font-semibold text-white text-center"
            onClick={(e) => navigateToHome(e, 'about')}
          >
            About
          </a>
          <a
            href="#/"
            className="text-lg font-semibold text-white text-center"
            onClick={(e) => navigateToHome(e, 'services')}
          >
            Services
          </a>
          
          <div className="flex flex-col space-y-4 border-y border-white/10 py-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">Our Portfolio</p>
            {workSubLinks.map((sub) => (
              <button
                key={sub.name}
                onClick={() => handleWorkClick(sub.filter)}
                className="text-lg font-semibold text-white text-center"
              >
                {sub.name}
              </button>
            ))}
          </div>

          <a 
            href="#/" 
            className="w-full py-4 bg-[#4f5bff] text-white rounded-full text-center font-bold"
            onClick={(e) => navigateToHome(e, 'contact')}
          >
            Book Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
