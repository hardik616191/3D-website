
import React from 'react';
import { Trophy, Rocket, FlaskConical, Brain, MessageSquare } from 'lucide-react';

const SideNav: React.FC = () => {
  const navItems = [
    { icon: Trophy, label: 'Awards', href: '#awards' },
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
          {/* Label (Visible on hover) - Updated to dark glassmorphism */}
          <div className="absolute right-0 flex items-center bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-full h-12 px-6 pr-14 shadow-2xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
            <span className="text-sm font-semibold tracking-wide text-white whitespace-nowrap">
              {item.label}
            </span>
          </div>

          {/* Icon Circle - Updated to blue accent and glass effect */}
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/70 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] transition-all duration-300 shadow-sm">
            <item.icon size={20} strokeWidth={2} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SideNav;
