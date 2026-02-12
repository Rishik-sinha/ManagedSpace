import React, { useState } from 'react';
import { Home, ChevronDown, Menu, X } from 'lucide-react';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full py-4 sm:py-6 px-4 sm:px-6 md:px-12 bg-white sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => scrollTo('hero')} className="bg-brand-orange p-2 rounded-lg cursor-pointer">
            <Home className="w-6 h-6 text-white" />
        </div>

        {/* Pill Navigation (Desktop) */}
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

        {/* Right side: Profile + Hamburger */}
        <div className="flex items-center gap-3">
          {/* User Profile */}
          <div className="flex items-center gap-3 border border-gray-100 rounded-full pl-1 pr-2 sm:pr-4 py-1 hover:shadow-sm cursor-pointer transition-all">
            <div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="User" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="hidden sm:block text-left leading-tight">
                <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-gray-900">Alexandre New</span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>
                <span className="text-[10px] text-gray-400 block">alex@email.com</span>
            </div>
          </div>

          {/* Hamburger (Mobile only) */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {mobileOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pb-2 border-t border-gray-100 pt-4 flex flex-col gap-2 animate-in fade-in">
          <button onClick={() => { scrollTo('booking'); setMobileOpen(false); }} className="bg-gray-100 text-gray-900 px-5 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors text-left">
              Frequently Booked
          </button>
          <button onClick={() => { scrollTo('booking'); setMobileOpen(false); }} className="text-gray-500 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              Meeting
          </button>
          <button onClick={() => { scrollTo('booking'); setMobileOpen(false); }} className="text-gray-500 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              Dedicated
          </button>
          <button onClick={() => { scrollTo('booking'); setMobileOpen(false); }} className="text-gray-500 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              Private
          </button>
          <button onClick={() => { scrollTo('steps'); setMobileOpen(false); }} className="text-gray-500 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              How it Works
          </button>
          <button onClick={() => { scrollTo('about'); setMobileOpen(false); }} className="text-gray-500 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              About
          </button>
          <button onClick={() => { scrollTo('contact'); setMobileOpen(false); }} className="text-gray-500 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;