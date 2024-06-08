import React from 'react';
import security from "../assets/Security Shield.png";
import analyze from '../assets/Group 4.svg';
import call from '../assets/Group 1.svg';
import scale from '../assets/Group 3.svg';
import filter from '../assets/Group 2.svg';

// Trust component displaying trust and safety information
function Trust() {
  return (
    <div className='h-[750px] flex flex-col justify-center items-center'>
      {/* Security Shield image */}
      <div className="flex justify-center items-center mb-8">
        <img src={security.src} alt="Security Shield" />
      </div>
      {/* Trust and safety information */}
      <div className="text-center mb-4 text-[24px] font-medium">
        The highest standards of trust and safety.
      </div>
      <div className="text-center mb-8 w-[316px] text-[18px]">
        We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues to benefit consumers, businesses, and society as a whole.
      </div>
      {/* 2x2 Matrix displaying trust features */}
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img src={call.src} alt="Call Monitoring" className="w-[90px] h-[90px] mb-2" />
          <div className='text-[16px] font-medium'>Call Monitoring</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={filter.src} alt="Prompt Injection" className="w-[60px] h-[60px] mb-2" />
          <div className='text-[16px] font-medium'>Prompt Injection</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={scale.src} alt="Rate Limits" className="w-[60px] h-[60px] mb-2" />
          <div className='text-[16px] font-medium'>Rate Limits</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={analyze.src} alt="Internal Hard Audits" className="w-[60px] h-[60px] mb-2" />
          <div className='text-[16px] font-medium'>Internal Hard Audits</div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
