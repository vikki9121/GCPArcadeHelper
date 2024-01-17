import React from 'react';
import logo from '../assets/gc.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white text-xl p-4">
      <div className="container flex justify-center items-center h-full"> {/* Use justify-center and items-center to center both horizontally and vertically */}
        <div className="flex">
          <Image src={logo} alt="Logo" className="h-8" /> {/* Adjust the size with h-x class */}
        </div>
      </div>
    </header>
  );
};

export default Header;
