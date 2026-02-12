import React from 'react';
import { MoveRight } from 'lucide-react';

const Steps = () => {
  return (
    <section id="steps" className="w-full px-4 sm:px-8 py-10 sm:py-16 bg-white">
      
      {/* 1. Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
        <div>
           <div className="flex items-center gap-2 mb-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">How it works</span>
              <div className="bg-brand-orange text-white p-1 rounded-full">
                 <MoveRight className="w-3 h-3" />
              </div>
           </div>
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-md">
             Working Has Never <br /> Been This Easy
           </h2>
        </div>
        
        <div className="max-w-xs">
           <p className="text-gray-500 text-sm mb-6 leading-relaxed">
             Enjoy easy booking and flexibility. Our workspaces are perfect—great for freelancers or teams.
           </p>
           <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:border-black transition-colors">
             Read More
           </button>
        </div>
      </div>

      {/* 2. The Three Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        
        {/* Step 01 */}
        <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 relative h-[280px] sm:h-[320px] group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
           <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold text-gray-400">Step</span>
              <span className="text-xs font-semibold text-gray-400">01</span>
           </div>
           <h3 className="text-lg sm:text-xl font-medium mb-2">Find Your Spot</h3>
           <p className="text-xs text-gray-500 mb-8 max-w-[200px]">
              Browse spaces, location, time and have Desk, Office, Meeting...
           </p>
           {/* Image placed absolutely at bottom right */}
           <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-24 h-20 sm:w-32 sm:h-24 shadow-lg rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=300" 
                alt="Office desk" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Step 02 */}
        <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 relative h-[280px] sm:h-[320px] group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
           <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold text-gray-400">Step</span>
              <span className="text-xs font-semibold text-gray-400">02</span>
           </div>
           <h3 className="text-lg sm:text-xl font-medium mb-2">Book Instantly Online</h3>
           <p className="text-xs text-gray-500 mb-8 max-w-[200px]">
              12 rooms all rented, select a plan, a workspace you need easily.
           </p>
           <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-36 h-24 sm:w-48 sm:h-32 shadow-lg rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" 
                alt="Typing on laptop" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Step 03 */}
        <div className="bg-[#1A2B45] text-white rounded-2xl p-5 sm:p-6 relative h-[280px] sm:h-[320px] overflow-hidden sm:col-span-2 md:col-span-1">
           <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold text-gray-400">Step</span>
              <span className="text-xs font-semibold text-gray-400">03</span>
           </div>
           <h3 className="text-xl font-medium mb-2">Check In & Get To Work</h3>
           
           <div className="absolute bottom-0 right-0 w-full h-40">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500" 
                alt="Team working" 
                className="w-full h-full object-cover opacity-80"
              />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Steps;