import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="px-4 sm:px-8 py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header Section */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 sm:mb-16 gap-6">
          
          {/* Left Side: Title & Buttons */}
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-8">
              We are ShareLoc
            </h2>
            <div className="flex items-center gap-4">
              <button onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-gray-50 text-gray-600 text-sm font-medium rounded hover:bg-gray-100 transition-colors inline-block">
                How it Works
              </button>
              <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-brand-orange text-white text-sm font-medium rounded hover:bg-orange-600 transition-colors">
                Book Now
              </button>
            </div>
          </div>
          
          {/* Right Side: Badge & Subheading */}
          <div className="text-left lg:text-right mt-8 lg:mt-0">
            <div className="flex items-center gap-3 lg:justify-end mb-4">
              <span className="px-4 py-2 bg-gray-50 border border-gray-100 text-xs font-medium rounded text-gray-600">
                Available Space
              </span>
              <div onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })} className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center cursor-pointer">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-gray-500">
              Flexible Workspaces to Fit<br />
              <span className="text-gray-900">Your Needs. Book Now</span>
            </h2>
          </div>
        </div>
        
        {/* 2. Gallery Grid with Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Image 1 (Gray Frame) */}
          <div className="bg-gray-100 p-2 rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop" 
              className="w-full h-64 object-cover rounded-xl" 
              alt="Gallery 1" 
            />
          </div>
          
          {/* Image 2 (Blue Frame + Opacity) */}
          <div className="bg-blue-900 p-2 rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop" 
              className="w-full h-64 object-cover rounded-xl opacity-90" 
              alt="Gallery 2" 
            />
          </div>
          
          {/* Image 3 (Gray Frame) */}
          <div className="bg-gray-100 p-2 rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop" 
              className="w-full h-64 object-cover rounded-xl" 
              alt="Gallery 3" 
            />
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default About;