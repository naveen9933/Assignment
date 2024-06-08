import React from 'react';

function Explore1() {
  return (
    <div className='grid items-center place-items-center h-full pt-20 text-center'>
      {/* Outer container */}
      <div className='w-[356px] h-[633px] border-[1px] border-[#E9E9E9] bg-[#FFF6E8] rounded-[20px] p-1'>
        {/* Video player */}
        <div className='aspect-w-16 aspect-h-9 pt-3 pl-[33px] pb-0'>
          <iframe 
            className='h-[258px] w-[290px] rounded-[20px]'
            src="https://www.youtube.com/embed/_La3wQlntgw?controls=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
        {/* Explore text */}
        <div className='w-fill h-[58px] flex justify-center text-center pt-1'>
          <span className='text-[24px] font-[500] w-[199px] h-[58px]'>Explore TOINGG in <span className='text-[#FC6B01]'>GPT</span> Store</span>
        </div>
        {/* List of features */}
        <div className='text-[16px] pt-4 pl-6 pb-3'>
          <ul className="list-disc w-full text-left">
            <li>Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
            <li>Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
            <li>Data Export: Conveniently export call logs to CSV.</li>
            <li>Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
          </ul>
        </div>
        {/* Explore button */}
        <div className='flex justify-center pb-3'>
          <button className='rounded-[5px] bg-gradient-to-r from-[#FC9850] to-[#AD4C06] ... w-[106px] h-[44px]'>Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Explore1;
