import React from 'react';
import { Home, ChevronDown } from 'lucide-react';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Logo */}
      <div onClick={() => scrollTo('hero')} className="bg-brand-orange p-2 rounded-lg cursor-pointer">
          <Home className="w-6 h-6 text-white" />
      </div>

      {/* Pill Navigation (Centered) */}
      <div className="hidden md:flex items-center gap-3">
        <button onClick={() => scrollTo('booking')} className="bg-gray-100 text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Frequently Booked
        </button>
        <button onClick={() => scrollTo('booking')} className="text-gray-500 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors">
            Meeting
        </button>
        <button onClick={() => scrollTo('booking')} className="text-gray-500 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors">
            Dedicated
        </button>
        <button onClick={() => scrollTo('booking')} className="text-gray-500 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors">
            Private
        </button>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 border border-gray-100 rounded-full pl-1 pr-4 py-1 hover:shadow-sm cursor-pointer transition-all">
        <div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="User" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="hidden md:block text-left leading-tight">
            <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-gray-900">Alexandre New</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>
            <span className="text-[10px] text-gray-400 block">alex@email.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;