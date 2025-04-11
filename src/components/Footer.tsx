import React from 'react';
import { Instagram, Youtube, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Morning Star International Ministries</h3>
            <p className="text-gray-300">Bringing light to the world through faith and service.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/social-media" className="text-gray-300 hover:text-white">Social Media</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a href="tel:+918903365792" className="text-white hover:text-gray-300 flex items-center">
                <Phone size={24} className="mr-2" />
                +91 8903365792
              </a>
              <a href="mailto:themorningstarministry@gmail.com" className="text-white hover:text-gray-300 flex items-center">
                <Mail size={24} className="mr-2" />
                themorningstarministry@gmail.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/themorningstarministry?igsh=bnZ2cWpkcWZ5dmMy" className="text-white hover:text-gray-300" title="Main Ministry Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://www.instagram.com/god_of_many_breasts?igsh=MXRhdDdtZWMybmdtOA==" className="text-white hover:text-gray-300" title="Secondary Ministry Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://youtube.com/@themorningstarministry?si=4tXUNfcdRemXFknS" className="text-white hover:text-gray-300" title="YouTube Channel">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} The Morning Star International Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}