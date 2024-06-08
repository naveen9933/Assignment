import React from 'react';

// Messagebar component displaying a message at the top of the screen
const Messagebar = () => {
  return (
    <div className='py-2 px-4 top-0 left-0 w-full h-[66px] bg-message-gradient'>
      <div className='absolute top-[37px] left-[112px] text-[16px] md:flex md:items-center md:justify-center'>
        Join our community. <b>Learn more</b>
      </div>
    </div>
  );
};

export default Messagebar;
