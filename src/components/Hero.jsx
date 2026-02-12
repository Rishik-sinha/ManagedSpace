import React from 'react';
import { MoveRight, ArrowRight } from 'lucide-react';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section id="hero" className="w-full px-6 md:px-12 pt-8 pb-12 bg-white">
      
      {/* 1. Header Text Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 relative z-20">
        <div className="mt-4">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-2 tracking-tight">
            Book Your Ideal Workspace
          </h2>
          <p className="text-3xl md:text-4xl text-gray-400 font-medium tracking-tight">
            Anytime, Anywhere
          </p>
        </div>
        
        <h1 className="text-[13vw] md:text-[8rem] leading-[0.85] font-medium tracking-tighter text-right text-gray-900 mt-4 md:mt-0">
          Coworking<br />Space
        </h1>
      </div>

      {/* 2. The Visual Layer (Container for Cards + Background) */}
      <div className="relative w-full mt-[-40px] md:mt-[-80px]"> 
        
        {/* A. The Floating Cards (Sits ON TOP of the image) */}
        <div className="relative z-20 px-0 md:px-8 max-w-4xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-[70%]">
                 
                 {/* Card 1: Colabora Space */}
                 <div className="bg-white p-4 shadow-xl border border-gray-100">
                     <div className="mb-4 px-2">
                         <h3 className="font-bold text-xl text-gray-900">Colabora Space</h3>
                     </div>
                     <div className="relative h-[220px] rounded-2xl overflow-hidden mb-4">
                         <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Blue office" />
                         <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-lg">
                             City Center, Jakarta
                         </div>
                     </div>
                     <div className="flex justify-between items-center text-sm font-semibold text-gray-900 px-2 pb-2">
                         <span>Mon-Sun</span>
                         <span>08.00 - 22.00</span>
                     </div>
                 </div>

                 {/* Card 2: WorkNest */}
                <div className="bg-white p-4  shadow-xl border border-gray-100">
                     <div className="mb-4 px-2">
                         <h3 className="font-bold text-xl text-gray-900">Colabora Space</h3>
                     </div>
                     <div className="relative h-[220px] rounded-2xl overflow-hidden mb-4">
                         <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Blue office" />
                         <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-lg">
                             City Center, Jakarta
                         </div>
                     </div>
                     <div className="flex justify-between items-center text-sm font-semibold text-gray-900 px-2 pb-2">
                         <span>Mon-Sun</span>
                         <span>08.00 - 22.00</span>
                     </div>
                 </div>

             </div>
        </div>

        {/* B. The Controls/Buttons (Right side, aligns with top of image) */}
        <div className="absolute top-[320px] md:top-[120px] right-0 z-30 flex items-center gap-4 pr-8 md:pr-12">
            <button onClick={() => scrollTo('steps')} className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                <ArrowRight className="w-5 h-5 text-brand-orange" />
            </button>
            <button onClick={() => scrollTo('steps')} className="bg-white text-brand-orange px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors">
                How it Works
            </button>
            <button onClick={() => scrollTo('booking')} className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-colors">
                Book Now
            </button>
        </div>

        {/* C. The Big Blue Background Image (Sits BEHIND cards) */}
        <div className="absolute top-[200px] left-0 right-0 h-[500px] md:h-[400px] rounded-[1rem] overflow-hidden z-0">
             <img 
                 src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop" 
                 alt="Blue chair texture" 
                 className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/10"></div> {/* Slight overlay for text readability */}
             
             {/* Bottom White Links */}
             <div className="absolute bottom-10 w-full px-12 flex justify-between text-white text-sm md:text-base font-medium">
                  <div onClick={() => scrollTo('spaces')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                      <span className="underline decoration-1 underline-offset-4">Curated Working Space</span> <MoveRight className="w-4 h-4" />
                  </div>
                  <div onClick={() => scrollTo('booking')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                      <span className="underline decoration-1 underline-offset-4">Affordable Price</span> <MoveRight className="w-4 h-4" />
                  </div>
                  <div onClick={() => scrollTo('about')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                      <span className="underline decoration-1 underline-offset-4">Prioritize Comfortable</span> <MoveRight className="w-4 h-4" />
                  </div>
             </div>
        </div>

      </div>

      {/* Spacer to push content down because of absolute positioning */}
      <div className="h-[550px] md:h-[300px]"></div>

    </section>
  );
};

export default Hero;