
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

  const navLinks = [
    { name: 'About', href: '#/about' },
    { name: 'Services', href: '#/services' },
  ];

  const workSubLinks = [
    { name: 'Web Projects', filter: 'Web Projects' },
    { name: 'App Projects', filter: 'App Projects' },
    { name: 'Designing Projects', filter: 'Designing Projects' },
  ];

  const handleWorkClick = (filter: string) => {
    setIsOpen(false);
    setWorkDropdownOpen(false);
    
    // Navigate to the work page hash
    window.location.hash = '#/work';
    
    // Dispatch filter event after a small delay to ensure Work component is mounted
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('filterProjects', { detail: filter }));
    }, 100);
  };

  const navigateToHome = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.location.hash = '#/';
    
    // If we're already on home, scroll to the section
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl py-3 shadow-sm border-b border-white/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#/" onClick={(e) => navigateToHome(e, 'hero')} className="text-xl font-bold tracking-tight text-[#0f172a]">
          HARDIK<span className="font-light">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8 items-center">
            <a
              href="#/"
              onClick={(e) => navigateToHome(e, 'about')}
              className="text-sm font-semibold text-[#0f172a]/70 hover:text-[#0f172a] transition-colors"
            >
              About
            </a>
            <a
              href="#/"
              onClick={(e) => navigateToHome(e, 'services')}
              className="text-sm font-semibold text-[#0f172a]/70 hover:text-[#0f172a] transition-colors"
            >
              Services
            </a>
            
            {/* Work Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-semibold text-[#0f172a]/70 hover:text-[#0f172a] transition-colors">
                <span>Work</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${workDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-top ${workDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="py-2">
                  {workSubLinks.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => handleWorkClick(sub.filter)}
                      className="w-full text-left px-6 py-3 text-sm font-medium text-gray-600 hover:text-[#4f5bff] hover:bg-gray-50 transition-colors"
                    >
                      {sub.name}
                    </button>
                  ))}
                  <div className="border-t border-gray-100 my-1"></div>
                  <button 
                    onClick={() => handleWorkClick('All')}
                    className="w-full text-left px-6 py-3 text-sm font-bold text-[#0f172a] hover:bg-gray-50 transition-colors"
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
            className="px-6 py-2.5 bg-[#4f5bff] text-white rounded-full text-sm font-semibold hover:bg-[#2f3cff] transition-all shadow-lg shadow-blue-500/20"
          >
            Book Free Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#0f172a]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 flex flex-col p-8 space-y-6 animate-in slide-in-from-top duration-300">
          <a
            href="#/"
            className="text-lg font-semibold text-[#0f172a] text-center"
            onClick={(e) => navigateToHome(e, 'about')}
          >
            About
          </a>
          <a
            href="#/"
            className="text-lg font-semibold text-[#0f172a] text-center"
            onClick={(e) => navigateToHome(e, 'services')}
          >
            Services
          </a>
          
          <div className="flex flex-col space-y-4 border-y border-gray-100 py-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">Our Portfolio</p>
            {workSubLinks.map((sub) => (
              <button
                key={sub.name}
                onClick={() => handleWorkClick(sub.filter)}
                className="text-lg font-semibold text-[#0f172a] text-center"
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
