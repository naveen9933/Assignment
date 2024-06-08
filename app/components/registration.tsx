import React from 'react';
import RegistrationForm from './form';

// Registration component displaying a form for users to register
function Registration() {
  return (
    <div className='grid place-items-center pt-[200px]'>
      <div className='w-[313px] h-[513px] border-[1px] border-[#E9E9E9] bg-gradient-to-tl from-[#FFFFFF] to-[#FFD3B4] ... rounded-[20px] shadow-[0_4px_4px_0px_rgba(0, 0, 0, 0.18)] '>
        <div className='pt-[96px]'>
          {/* Title and description */}
          <div className='px-3 font-bold text-[30px]'>Try now</div>
          <div className='px-3 text-[#989898] font-medium text-[16px]'>Get a call from Toingg</div>
          {/* Registration form */}
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default Registration;
