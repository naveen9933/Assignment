import React from 'react';
import img1 from '../assets/Mask group.png';
import img2 from '../assets/Mask group (2).png';
import img3 from '../assets/Mask group (3).png';
import img4 from '../assets/Mask group (1).png';
import img5 from '../assets/Rectangle 183.png';
import img6 from '../assets/Rectangle 341.png';

// Links component
function Links() {
  return (
    <div className=' text-[18px] text-[#797979] mt-[180px] grid justify-center text-center'>
      {/* Integration text */}
      <div className='w-[361px] h-[58px]'>Automate your agent with 5000+ integrations like</div>
      {/* Integration images */}
      <div className='flex justify-center items-center pt-10'>
        <img src={img1.src} alt="img1" className='mr-4' />
        <img src={img2.src} alt="img2" className='mr-4' />
        <img src={img3.src} alt="img3" className='mr-4' />
        <img src={img4.src} alt="img4" className='mr-4' />
        <img src={img5.src} alt="img5" className='mr-4' />
      </div>
      {/* Video section */}
      <div className='relative pt-10'>
        <img className="w-full" src={img6.src} alt="video" />
        {/* Video title */}
        <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Video
        </h1>
      </div>
    </div>
  );
}

export default Links;
