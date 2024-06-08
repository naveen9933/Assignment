import React from 'react';
import linkedinIcon from "../assets/LinkedIn 2.svg";
import instagramIcon from "../assets/Instagram.svg";
import twitterIcon from "../assets/X.svg";
import discordIcon from "../assets/image 11.svg";
import discord from "../assets/Mask group.svg";

const Footer: React.FC = () => {
  return (
    <footer className='mt-[100px]'>
      {/* Footer container */}
      <div className='relative w-full h-[812px] bg-gradient-to-b from-[#FFD6B8] via-[#FFD6B8] to-[#e8e3e0] flex flex-col items-center text-center pt-[50px]'>
        {/* Logo */}
        <span className='w-[197px] h-[61px] text-[50px] flex justify-center items-center font-medium'>
          TOINGG
        </span>
        {/* Tagline */}
        <span className='text-white pt-3 w-[324px] h-[58px] text-[24px] font-medium'>
          We are here to grow your business
        </span>
        {/* Footer links */}
        <ul className='pt-[80px] font-[400] text-[18px] space-y-2'>
          <li>Terms and conditions</li>
          <li>Privacy policy</li>
          <li>Help center</li>
          <li>API docs</li>
          <li>Careers</li>
        </ul>

        {/* Social media icons */}
        <div className='flex space-x-4 pt-[100px]'>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon.src} alt="LinkedIn" className="mt-[3px] w-[39px] h-[37px]" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon.src} alt="Instagram" className="mt-[7px] w-[53px] h-[36px]" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon.src} alt="Twitter" className="mt-[13px] w-[24px] h-[24px]" />
          </a>
          <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discordIcon.src} alt="Discord" className="w-[45px] h-[50px]" />
          </a>
        </div>

        {/* Copyright text */}
        <div className='absolute bottom-4 left-[70px] text-black text-left'>
          <span className='block text-[16px] font-medium'>Copyright © 2024 Toingg</span>
          <span className='block text-[16px] font-medium'>Inc. All rights reserved.</span>
          <span className='mt-[19px] flex items-center'>
            {/* Discord community */}
            Join our community <img src={discord.src} alt="Discord" className="ml-2" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
