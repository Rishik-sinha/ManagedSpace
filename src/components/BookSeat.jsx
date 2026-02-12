import React, { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';

const BookSeat = () => {
  // State to track which space is currently selected
  const [activeTab, setActiveTab] = useState('Dedicated Desk');

  // Data for all the workspace options
  const spaces = [
    {
      id: 'Hot Desk',
      label: 'Hot Desk',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
      bestFor: 'Mobile Professional',
      options: 'Hourly or Daily',
      icon: null
    },
    {
      id: 'Dedicated Desk',
      label: 'Dedicated Desk',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
      bestFor: 'Remote Worker',
      options: 'Daily or Monthly',
      // Using the specific small icon from your HTML
      icon: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&h=50&fit=crop'
    },
    {
      id: 'Private Office',
      label: 'Private Office',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop',
      bestFor: 'Team & Start Up',
      options: 'Daily or Monthly',
      icon: null
    },
    {
      id: 'Meeting Room',
      label: 'Meeting Room',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=400&h=400&fit=crop',
      bestFor: 'Presentation',
      options: 'Hourly',
      icon: null
    }
  ];

  // Helper to find the active object for the main image display
  const activeSpace = spaces.find(s => s.id === activeTab);

  return (
    <section id="booking" className="px-4 sm:px-8 py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 bg-gray-50 border border-gray-100 text-xs font-medium rounded text-gray-600 cursor-pointer">
                Available Space
              </button>
              <div onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })} className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center cursor-pointer">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-gray-600 mb-2">Tailored Workspaces for</h2>
            <h2 className="text-2xl font-light text-gray-900">You. Reserve Now!</h2>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-normal text-gray-900 tracking-tighter md:text-right leading-none">
            Book a<br />Seat Now
          </h2>
        </div>

        {/* 2. MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          
          {/* COLUMN 1: Space Types List */}
          <div className="md:col-span-1 lg:col-span-1 space-y-8">
            <div>
              <p className="text-xs text-gray-400 mb-6">Space Type</p>
              
              <div className="space-y-6">
                {spaces.map((space) => (
                  <div 
                    key={space.id}
                    onClick={() => setActiveTab(space.id)}
                    className={`text-xl cursor-pointer transition-colors ${
                      activeTab === space.id 
                        ? 'font-medium text-orange-500 relative flex items-center' 
                        : 'font-light text-gray-900 hover:text-orange-500'
                    }`}
                  >
                    {/* Active Gradient Background Indicator */}
                    {activeTab === space.id && (
                      <div className="absolute -left-6 w-full h-12 bg-gradient-to-r from-gray-50 to-white -z-10 rounded-l"></div>
                    )}
                    {space.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Image Display (STRAIGHT / NO TILT) */}
          <div className="md:col-span-1 lg:col-span-1 flex justify-center">
            {/* Removed 'transform rotate-3' to keep it straight */}
            <div className="p-2 bg-white rounded-2xl shadow-xl transition-all duration-500">
              <img 
                src={activeSpace.image} 
                alt={activeSpace.label} 
                className="w-64 h-64 object-cover rounded-xl" 
              />
            </div>
          </div>

          {/* COLUMN 3 & 4: Details List */}
          <div className="md:col-span-2 lg:col-span-2 pl-0 lg:pl-12">
            
            {/* Table Headers */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6 border-b border-gray-100 pb-2">
              <p className="text-xs text-gray-400">Best For</p>
              <p className="text-xs text-gray-400">Booking Options</p>
              <p className="text-xs text-gray-400"></p>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {spaces.map((space) => {
                const isActive = activeTab === space.id;
                
                return (
                  <div 
                    key={space.id} 
                    className={`grid grid-cols-3 gap-4 sm:gap-8 items-center py-2 ${
                      isActive ? 'bg-gray-50 rounded px-3 -mx-3 py-3' : ''
                    }`}
                  >
                    {/* Best For Column */}
                    <div className="flex items-center gap-3">
                      {isActive && space.icon && (
                        <img 
                          src={space.icon} 
                          className="w-8 h-8 rounded-lg object-cover" 
                          alt="User Icon" 
                        />
                      )}
                      <div className={`text-sm font-medium ${isActive ? 'text-orange-500' : 'text-gray-900'}`}>
                        {space.bestFor}
                      </div>
                    </div>

                    {/* Options Column */}
                    <div className={`text-sm ${isActive ? 'text-orange-500' : 'text-gray-500'}`}>
                      {space.options}
                    </div>

                    {/* Button Column */}
                    <div className="flex justify-end">
                      <button className={`w-8 h-8 rounded flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                          : 'border border-orange-200 text-orange-500 hover:bg-orange-50'
                      }`}>
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* 3. BOTTOM BUTTON */}
        <div className="flex items-center justify-center gap-3 mt-16">
          <button onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 bg-gray-50 border border-gray-100 text-xs font-medium rounded text-gray-600 cursor-pointer">
            Available Space
          </button>
          <div onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })} className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center cursor-pointer">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookSeat;