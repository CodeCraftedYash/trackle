import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { LiaLinkedinIn } from 'react-icons/lia';

const Footer:React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white w-full py-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        <p className="text-sm" style={{ fontSize:"var(--font-size-base)"}}>&copy; {new Date().getFullYear()} YashMishra. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-2 sm:mt-0" >
          <a href="https://www.linkedin.com/in/yash-mishra1000/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" style={{ fontSize:"var(--font-size-base)"}}>
            <LiaLinkedinIn size={20} />
          </a>
          <a href="https://x.com/CodeCraftedYash" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400" style={{ fontSize:"var(--font-size-base)"}}>
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/yash_coding/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400" style={{ fontSize:"var(--font-size-base)"}}>
            <FaInstagram size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
