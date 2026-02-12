import React from 'react';
import { Search } from 'lucide-react';

const SearchGallery = () => {
  return (
    <section id="spaces" className="w-full px-6 md:px-12 py-20 bg-white">
      
      {/* 1. Header Text Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
            Flexible Workspaces to Fit <br />
            <span className="font-medium">Your Needs. Book Now</span>
        </h2>
      </div>

      {/* 2. Search Bar */}
      <div className="bg-white rounded-full p-3 pl-8 mb-20 flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto shadow-xl shadow-gray-100/50 border border-gray-50">
        <div className="flex-1 w-full pr-4 border-b md:border-b-0 md:border-r border-gray-100 py-2 md:py-0">
          <label className="block text-xs font-bold text-gray-900 mb-1 tracking-wide">Find your spot</label>
          <input type="text" placeholder="Search location..." className="w-full bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400 font-medium"/>
        </div>
        <div className="flex-1 w-full px-4 border-b md:border-b-0 md:border-r border-gray-100 py-2 md:py-0">
          <label className="block text-xs font-bold text-gray-900 mb-1 tracking-wide">Type</label>
          <select className="w-full bg-transparent text-sm outline-none text-gray-700 font-medium cursor-pointer appearance-none pr-6">
            <option>Private, Hot Desk, etc...</option>
            <option>Dedicated Desk</option>
            <option>Private Office</option>
          </select>
        </div>
        <div className="flex-1 w-full px-4 py-2 md:py-0">
          <label className="block text-xs font-bold text-gray-900 mb-1 tracking-wide">Price</label>
          <select className="w-full bg-transparent text-sm outline-none text-gray-700 font-medium cursor-pointer appearance-none pr-6">
            <option>Select range budget</option>
            <option>$10 - $50</option>
            <option>$50 - $100</option>
          </select>
        </div>
        <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-lg shadow-orange-500/20">
            <Search className="w-5 h-5" />
            <span>Discover</span>
        </button>
      </div>

      {/* 3. Hivebase Split Layout */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px] rounded-[1rem] overflow-hidden shadow-2xl shadow-gray-100 border border-gray-100 mb-20">
        <div className="w-full md:w-[35%] bg-white p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hivebase</h3>
            <div className="relative w-full h-90 rounded-1rem overflow-hidden mb-auto">
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Small Thumbnail"/>
                 <div className="absolute bottom-3 right-3 bg-gray-900/60 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1.5 rounded-lg">Surabaya, Darmo</div>
            </div>
            <div className="flex justify-between items-center mt-6 pt-2">
                 <div className="text-sm font-semibold text-gray-900">Mon-Sun</div>
                 <div className="text-sm font-bold text-gray-900">08.00 - 22.00</div>
            </div>
        </div>
        <div className="w-full md:w-[65%] relative h-[400px] md:h-auto">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" alt="Main Office View" className="w-full h-full object-cover" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                 <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand-orange text-white px-8 py-3 rounded-lg font-bold text-sm shadow-xl hover:bg-orange-600 transition-colors">Book Now</button>
             </div>
             <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                 <span className="bg-gray-900/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-[10px] md:text-xs font-medium">IDR 950,000/month</span>
                 <span className="bg-gray-900/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-[10px] md:text-xs font-medium">Dedicated Desk</span>
                 <span className="bg-gray-900/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-[10px] md:text-xs font-medium">Monthly Plan</span>
             </div>
        </div>
      </div>

      {/* 4. Staggered Gallery Grid (Waterfall Layout) */}
      <div className="flex flex-col md:flex-row gap-8 items-start w-full">
         
         {/* GROUP 1: LEFT (Positioned Highest) */}
         <div className="flex gap-6 w-full md:w-[30%]">
             {/* Item 1: Corner */}
             <div className="flex-1 flex flex-col gap-3">
                 <div className="relative rounded-[1.5rem] overflow-hidden aspect-square group">
                     <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Corner" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium text-xs backdrop-blur-sm">Monthly</div>
                 </div>
                 <div className="flex justify-between items-end px-1">
                     <span className="font-bold text-gray-900 text-sm">Corner</span>
                     <span className="font-bold text-gray-900 text-xs">IDR 720,000</span>
                 </div>
             </div>

             {/* Item 2: Warm */}
             <div className="flex-1 flex flex-col gap-3">
                 <div className="relative rounded-[1.5rem] overflow-hidden aspect-square group">
                     <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Warm" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium text-xs backdrop-blur-sm">Monthly</div>
                 </div>
                 <div className="flex justify-between items-end px-1">
                     <span className="font-bold text-gray-900 text-sm">Warm</span>
                     <span className="font-bold text-gray-900 text-xs">IDR 730,000</span>
                 </div>
             </div>
         </div>


         {/* GROUP 2: MIDDLE (Kopilot Space - Large Card) */}
         {/* mt-12 pushes it down slightly relative to the left group */}
         <div className="w-full md:w-[35%] bg-white rounded-[2rem] border border-gray-100 p-6 shadow-2xl shadow-gray-100 mt-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Kopilot Space</h3>
            
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Kopilot" />
                <div className="absolute bottom-3 right-3 bg-gray-900/60 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1.5 rounded-lg">Yogyakarta</div>
            </div>

            <div className="flex justify-between items-center px-1">
                 <div className="text-sm font-semibold text-gray-900">Mon-Sun</div>
                 <div className="text-sm font-bold text-gray-900">08.00 - 22.00</div>
            </div>
         </div>


         {/* GROUP 3: RIGHT (Positioned Lowest) */}
         {/* mt-24 pushes it down further, creating the staggered step effect */}
         <div className="flex gap-6 w-full md:w-[35%] mt-24">
             {/* Item 1: White Curve */}
             <div className="flex-1 flex flex-col gap-3">
                 <div className="flex justify-between items-end px-1 mb-1">
                     <span className="font-bold text-gray-900 text-sm">White Curve</span>
                     <span className="font-bold text-gray-900 text-[10px]">IDR 640,000</span>
                 </div>
                 <div className="relative rounded-[1.5rem] overflow-hidden aspect-square group">
                     <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="White Curve" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium text-xs backdrop-blur-sm">Monthly</div>
                 </div>
             </div>

             {/* Item 2: Olive Space */}
             <div className="flex-1 flex flex-col gap-3">
                 <div className="flex justify-between items-end px-1 mb-1">
                     <span className="font-bold text-gray-900 text-sm">Olive Space</span>
                     <span className="font-bold text-gray-900 text-[10px]">IDR 999,000</span>
                 </div>
                 <div className="relative rounded-[1.5rem] overflow-hidden aspect-square group">
                     <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Olive Space" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium text-xs backdrop-blur-sm">Monthly</div>
                 </div>
             </div>
         </div>

      </div>

    </section>
  );
};

export default SearchGallery;