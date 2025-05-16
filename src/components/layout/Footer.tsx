import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-700  text-white mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <GraduationCap size={24} />
            <span className="text-lg font-semibold">English</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-sm">
              Made with <Heart size={16} className="mx-1 text-accent" /> para mis amichas
            </p>
            <p className="text-xs mt-1 text-gray-300">© {new Date().getFullYear()} EnglishPro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;