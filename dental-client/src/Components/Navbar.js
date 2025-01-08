import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full font-sans">
      {/* Top Info Bar */}
      <div className="bg-gray-50 py-2 px-4 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+01234 567 890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Jl. Patimura II No. 18, Denpasar</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <Clock size={16} />
            <span>Monday - Saturday: 9 am - 11.30 pm</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 flex items-center">
                <svg 
                  className="w-8 h-8 mr-2" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                Dentic
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Page</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact Us</a>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Make an Appointment
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;