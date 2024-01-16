import React from 'react';
import logo from '../assets/gc.svg';
import Image from 'next/image';
const Header = () => {
  return (
<header className="bg-blue-600 text-white text-xl p-4">
    <div className="container  flex ">
        <div className='flex mx-auto '>
        <Image src={logo} alt="Logo" className="h-8" /> {/* Adjust the size with h-x class */}
        <h1 className="">GCP Arcade Helper</h1> 
        </div>
    </div>
</header>



  );
};

export default Header;
