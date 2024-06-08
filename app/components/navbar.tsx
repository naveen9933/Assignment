// components/Navbar.tsx
"use client";

import React from 'react';
import toogle from "../assets/toogle.png";
import { useMenu } from './menuContext';

// Navbar component displaying the navigation bar
const Navbar: React.FC = () => {
  // Accessing menu context to check if menu is open and toggle it
  const { isOpen, toggleMenu } = useMenu();

  return (
    <div className="pt-[43px] pb-[43px] w-full h-[66px] bg-white top-[66px] left-0 flex items-center justify-between px-4 z-50">
      {/* Toingg logo */}
      <div className="text-lg font-bold">Toingg</div>

      {/* Button to toggle menu */}
      <button className="w-[59px] h-[42px]" onClick={toggleMenu}>
        <img src={toogle.src} alt="Toggle menu" className='w-[59px] h-[45px]'/>
      </button>
    </div>
  );
};

export default Navbar;
