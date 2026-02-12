import React from 'react';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 pb-12 pt-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 border-t border-gray-100 pt-12">
            
            {/* Column 1: Co-working Space */}
            <div>
                <h4 className="font-semibold text-sm mb-6 text-gray-900">Co-working Space</h4>
                <ul className="space-y-3">
                    <li><a href="#booking" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Private</a></li>
                    <li><a href="#booking" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Dedicated desk</a></li>
                    <li><a href="#booking" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Meeting room</a></li>
                </ul>
            </div>
            
            {/* Column 2: Our Company */}
            <div>
                <h4 className="font-semibold text-sm mb-6 text-gray-900">Our Company</h4>
                <ul className="space-y-3">
                    <li><a href="#about" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">About Us</a></li>
                    <li><a href="#steps" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Features</a></li>
                    <li><a href="#spaces" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Spaces</a></li>
                </ul>
            </div>
            
            {/* Column 3: Social Media */}
            <div>
                <h4 className="font-semibold text-sm mb-6 text-gray-900">Social Media</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Instagram @shareloc</a></li>
                    <li><a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">X @shareloc__</a></li>
                    <li><a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Tiktok : Share Loc</a></li>
                </ul>
            </div>
            
            {/* Column 4: Omah Resik */}
            <div>
                <h4 className="font-semibold text-sm mb-6 text-gray-900">Omah Resik</h4>
                <ul className="space-y-3">
                    <li className="text-xs text-gray-500">+12 345 678 9</li>
                    <li className="text-xs text-gray-500">Ponorogo, Indonesia</li>
                    <li className="text-xs text-gray-500">09.00 AM - 05.00 PM</li>
                </ul>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;