import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#d7c8b6] py-8 text-[#4f3825]">
      <div className="flex flex-col md:flex-row items-center md:justify-between md:gap-8 max-w-6xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Image src="/logo.png" alt="ISS Club Logo" width={100} height={100} />
          <h2 className="text-3xl font-bold">ISS Club</h2>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Title</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Sublink</a></li>
              <li><a href="#" className="hover:underline">Sublink</a></li>
              <li><a href="#" className="hover:underline">Sublink</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Title</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Sublink</a></li>
              <li><a href="#" className="hover:underline">Sublink</a></li>
              <li><a href="#" className="hover:underline">Sublink</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Title</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Sublink</a></li>
              <li><a href="#" className="hover:underline">Sublink</a></li>
              <li><a href="#" className="hover:underline">Sublink</a></li>
              <li><a href="#" className="hover:underline">Sublink</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="mt-8 border-t border-[#4f3825] pt-4 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        {/* Social Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:underline font-semibold">Instagram</a>
          <a href="#" className="hover:underline font-semibold">Youtube</a>
          <span>X</span>
          <a href="#" className="hover:underline font-semibold">Tiktok</a>
        </div>
        {/* Privacy and Terms Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:underline font-semibold">Privacy & Policy</a>
          <a href="#" className="hover:underline font-semibold">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
