import React from 'react';
import voice from "../../assets/Voice.png";

const Capabilities3: React.FC = () => {
  return (
    <div className='grid items-center place-items-center h-full pt-20 text-center mt-20px mb-[100px]'>
      {/* Container */}
      <div className='w-[336px] h-[446px]  justify-center items-center shadow-custom rounded-[10px] flex flex-col border-[#999999] border-2'>
        {/* Image */}
        <div className='flex justify-center items-center mb-7'>
          <img src={voice.src} alt="" />
        </div>
        {/* Title */}
        <div className="text-[24px] font-semibold mt-4 mb-7">Fine tuning</div>
        {/* Description */}
        <div className="text-[18px] mt-1 w-[230px] h-[110px] mb-[5px]">Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination.</div>
      </div>
    </div>
  );
}

export default Capabilities3;
