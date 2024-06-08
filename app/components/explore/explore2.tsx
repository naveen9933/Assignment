import React from 'react';
import frame from "../../assets/Frame 89.png";

function Explore2() {
  return (
    <div className='grid items-center h-full place-items-center pt-20 text-center'>
      {/* Outer container */}
      <div className='w-[356px] h-[633px] border-[1px] border-[#E9E9E9] bg-[#FFF6E8] rounded-[20px] p-1'>
        {/* Image */}
        <div className='pt-[17px] flex items-center justify-center'>
          <img src={frame.src} alt="frame" className='w-[302px] h-[520px]' />
        </div>
        {/* Text */}
        <div className='text-center justify-center p-[10px]'>
          <div className='text-[24px] font-semibold'>Build your own voice agent</div>
          <div className='text-[#6B6B6B] text-[18px] font-semibold'>in just a few lines of code</div>
        </div>
      </div>
    </div>
  );
}

export default Explore2;
