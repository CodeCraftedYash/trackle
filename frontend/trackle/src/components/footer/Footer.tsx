import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer:React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white w-full py-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        <p className="text-sm">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
