import React from 'react';

// Intro component
function Intro() {
  return (
    <div className=' pt-[47px] grid place-items-center'>
      {/* Title */}
      <div className='w-[447px] h-[112px] font-medium text-[50px] text-center text-[#6F6E6E]'>
        Build AI Calling Agent that can do
      </div>
      {/* Subtitle */}
      <div className='w-[234px] h-[58px] font-bold text-[48px] mt-[15px]'>
        Sales Call
      </div>
      {/* Free voice agent box */}
      <div className='pt-[75px]'>
        <div className='grid rounded-[10px] w-[360px] h-[68px] bg-gradient-to-r from-[#FFA96B] to-[#995B2E] ...'>
          <span className='text-white text-[18px] text-center font-semibold'>Build your own voice agent</span>
          <span className='text-[16px] text-center font-medium'>‘It’s free!’</span>
        </div>
      </div>
      {/* Hear it in action box */}
      <div className='pt-[22px]'>
        <div className='grid place-items-center w-[251px] h-[51px] border-solid border-2 border-[#787878] rounded-[10px]'>
          <span className='text-center text-[18px] font-semibold'>Hear it in action</span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
