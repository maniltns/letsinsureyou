import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-400" />
              <div className="ml-2">
                <span className="text-xl font-bold text-blue-400">Lets</span>
                <span className="text-xl font-bold text-white">InsureYou</span>
              </div>
            </div>
            <p className="mt-4 text-gray-400">
              Your trusted partner in finding the perfect insurance coverage for all your needs.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Insurance</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Business Insurance</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Personal Insurance</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Auto Insurance</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Life & Health</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#about" className="text-base text-gray-300 hover:text-white">About</a></li>
              <li><a href="#partners" className="text-base text-gray-300 hover:text-white">Our Partners</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-300">123 Insurance Street</li>
              <li className="text-base text-gray-300">Insurance City, IC 12345</li>
              <li className="text-base text-gray-300">contact@letsinsureyou.com</li>
              <li className="text-base text-gray-300">(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} LetsInsureYou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;