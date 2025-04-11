import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/assets/images/logo.png"
                alt="Morning Star Logo"
                className="w-12 h-12 rounded-full object-cover shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-navy-500 text-sm font-bold">The Morning Star International Ministries</span>
                <span className="text-navy-400 text-xs">Guiding Light in Your Spiritual Journey</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Link to="/" className="text-navy-500 hover:text-navy-700 px-2 py-2 rounded-md text-sm font-medium hover:bg-navy-50 transition-colors">Home</Link>
              <Link to="/about" className="text-navy-500 hover:text-navy-700 px-2 py-2 rounded-md text-sm font-medium hover:bg-navy-50 transition-colors">About Us</Link>
              <Link to="/social-media" className="text-navy-500 hover:text-navy-700 px-2 py-2 rounded-md text-sm font-medium hover:bg-navy-50 transition-colors">Social Media</Link>
              <Link to="/testimonials" className="text-navy-500 hover:text-navy-700 px-2 py-2 rounded-md text-sm font-medium hover:bg-navy-50 transition-colors">Testimonials</Link>
              <Link to="/contact" className="text-navy-500 hover:text-navy-700 px-2 py-2 rounded-md text-sm font-medium hover:bg-navy-50 transition-colors">Contact</Link>
            </div>

            <div className="flex items-center space-x-2 ml-4">
              <Link to="/prayer-request" className="bg-navy-500 text-white hover:bg-navy-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Prayer Request</Link>
              <Link to="/donate" className="bg-green-600 text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Donate</Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy-500 hover:text-navy-700 hover:bg-navy-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            <Link to="/" className="block text-navy-500 hover:text-navy-700 hover:bg-navy-50 px-3 py-2 rounded-md text-base font-medium transition-colors">Home</Link>
            <Link to="/about" className="block text-navy-500 hover:text-navy-700 hover:bg-navy-50 px-3 py-2 rounded-md text-base font-medium transition-colors">About Us</Link>
            <Link to="/social-media" className="block text-navy-500 hover:text-navy-700 hover:bg-navy-50 px-3 py-2 rounded-md text-base font-medium transition-colors">Social Media</Link>
            <Link to="/testimonials" className="block text-navy-500 hover:text-navy-700 hover:bg-navy-50 px-3 py-2 rounded-md text-base font-medium transition-colors">Testimonials</Link>
            <Link to="/contact" className="block text-navy-500 hover:text-navy-700 hover:bg-navy-50 px-3 py-2 rounded-md text-base font-medium transition-colors">Contact</Link>
            <div className="h-px bg-gray-200 my-2"></div>
            <Link to="/prayer-request" className="block bg-navy-500 text-white hover:bg-navy-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Prayer Request</Link>
            <Link to="/donate" className="block bg-green-600 text-white hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium transition-colors">Donate</Link>
          </div>
        </div>
      )}
    </nav>
  );
}