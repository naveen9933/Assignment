import React from 'react';
import Arrow from "../assets/Arrow-9.png";

// Define menu items
const menuItems = ['Contact', 'Pricing', 'Documentation', 'Join our community'];

// Menu component
function Menu() {
  return (
    <div className='grid place-items-center'>
      {/* Menu container */}
      <div className='w-[350px] h-[561px] bg-gradient-to-b from-[#FEECDF] to-[#D38751] ... rounded-[20px]'>
        {/* List of menu items */}
        <ul className='flex flex-col h-full pt-[56px]'>
          {menuItems.map((item, index) => (
            <li key={index} className='font-medium text-[16px] mb-4 flex justify-between items-center'>
              {/* Menu item text */}
              <span className='py-7 px-[27px]'>{item}</span>
              {/* Arrow icon */}
              <img src={Arrow.src} alt="arrow" className='pr-[14px]' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
