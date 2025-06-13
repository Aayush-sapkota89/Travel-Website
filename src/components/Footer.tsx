import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-sky-400" />
              <span className="ml-2 text-2xl font-bold">Hari Bahadur Tours & Travels</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable travel experiences for over 15 years. 
              We're passionate about helping you discover the world's most beautiful destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Travel Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Travel Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Group Travel</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Payment Options</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-sky-400 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Travel Street</p>
                  <p>Adventure City, AC 12345</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-sky-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-sky-400 mr-3" />
                <span className="text-gray-300">info@haribahadurtours.com</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-sky-600 rounded-lg">
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm text-sky-100">
                Need help? Our travel experts are available around the clock to assist you.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Hari Bahadur Tours & Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;