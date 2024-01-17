import React from 'react';
import logo from '../assets/gc.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-blue-600 text-white text-xl p-4">
      <div className="container flex justify-center items-center h-full">
        <div className="flex">
          <Image src={logo} alt="Logo" height={32} width={32} />
        </div>
      </div>
    </header>
  );
};

export default Header;
