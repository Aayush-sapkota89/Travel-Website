import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-sky-500" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Hari Bahadur Tours & Travels</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium">Destinations</a>
            <a href="#packages" className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium">Packages</a>
            <a href="#about" className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 (555) 123-4567</span>
            </div>
            <button className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors duration-200 font-medium">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-sky-500 transition-colors duration-200">Home</a>
              <a href="#destinations" className="text-gray-700 hover:text-sky-500 transition-colors duration-200">Destinations</a>
              <a href="#packages" className="text-gray-700 hover:text-sky-500 transition-colors duration-200">Packages</a>
              <a href="#about" className="text-gray-700 hover:text-sky-500 transition-colors duration-200">About</a>
              <a href="#contact" className="text-gray-700 hover:text-sky-500 transition-colors duration-200">Contact</a>
              <div className="flex items-center text-sm text-gray-600 pt-2">
                <Phone className="h-4 w-4 mr-1" />
                <span>+1 (555) 123-4567</span>
              </div>
              <button className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors duration-200 w-fit">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;