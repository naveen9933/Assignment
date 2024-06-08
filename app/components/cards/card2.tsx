import React from 'react';
import pri from "../../assets/Private.png";

const Card2: React.FC = () => {
  return (
    <div className="relative w-full h-[750px]">
      {/* Top horizontal line */}
      <div className="absolute top-[91px] left-0 w-full h-1 bg-gradient-to-r from-[#FFFFFF] via-[#F49C5D] to-[#FFFFFF]"></div>
      
      {/* Bottom horizontal line */}
      <div className="absolute bottom-[91px] left-0 w-full h-1 bg-gradient-to-r from-[#FFFFFF] via-[#F49C5D] to-[#FFFFFF]"></div>
      
      {/* Left vertical line */}
      <div className="absolute top-0 left-[70px] h-full w-1 bg-gradient-to-r from-[#FFFFFF] via-[#F49C5D] to-[#FFFFFF]"></div>
      
      {/* Right vertical line */}
      <div className="absolute top-0 right-[70px] h-full w-1 bg-gradient-to-r from-[#FFFFFF] via-[#F49C5D] to-[#FFFFFF]"></div>

      {/* Image */}
      <div className="absolute top-[126px] left-[50%] transform translate-x-[-50%]">
        <img src={pri.src} alt="" className="w-32 h-32 mb-4" />
      </div>

      {/* Title */}
      <div className="absolute top-[270px] left-[50%] transform translate-x-[-50%] text-center">
        <div className="w-[238px] h-[29px] text-[24px] font-semibold mb-2">Smart Interruption Management</div>
      </div>

      {/* Description */}
      <div className="absolute top-[314px] left-[50%] transform translate-x-[-50%] text-center">
        <div className="pt-[60px] text-[18px] w-[294px] h-[88px] mb-4">Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations</div>
      </div>

      {/* Button */}
      <div className="absolute top-[550px] left-[50%] transform translate-x-[-50%] text-center">
        <button className="bg-[#FF9345] text-white px-4 py-2 rounded-[5px] w-[172px] h-[40px] text-[16px]">Try now</button>
      </div>
    </div>
  );
};

export default Card2;
