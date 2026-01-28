
import React from 'react';
import { Trophy, Rocket, FlaskConical, Brain, MessageSquare } from 'lucide-react';

const SideNav: React.FC = () => {
  const navItems = [
    { icon: Trophy, label: 'Awards', href: '#hero' },
    { icon: Rocket, label: 'Benefits', href: '#services' },
    { icon: FlaskConical, label: 'Works', href: '#work' },
    { icon: Brain, label: 'Process', href: '#about' },
    { icon: MessageSquare, label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end space-y-4">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group relative flex items-center justify-end"
        >
          {/* Label (Visible on hover) */}
          <div className="absolute right-0 flex items-center bg-white/80 backdrop-blur-md border border-gray-100 rounded-full h-12 px-6 pr-14 shadow-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
            <span className="text-sm font-medium tracking-wide text-[#2C2C2C] whitespace-nowrap">
              {item.label}
            </span>
          </div>

          {/* Icon Circle */}
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#E5E7EB]/40 backdrop-blur-sm border border-white/20 rounded-full text-[#2C2C2C] group-hover:bg-[#A89078] group-hover:text-white transition-all duration-300 shadow-sm">
            <item.icon size={20} strokeWidth={1.5} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SideNav;
