import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      
      <h1 className=" flex text-lg font-bold" >PANDA-AI</h1>
      
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @Sasi_Kumar31 | All right reserved.
      </p>
      
      <div className='flex gap-2.5'>
        {/* Added alt text and optional hover effects */}
        <img 
          className='cursor-pointer hover:opacity-80 transition-opacity' 
          src={assets.facebook_icon} 
          alt="Facebook" 
          width={35} 
          height={35}
        />
      <a href="https://www.instagram.com/sasi._.kumar0/"> <img 
          className='cursor-pointer hover:opacity-80 transition-opacity' 
          src={assets.instagram_icon} 
          alt="Instagram" 
          width={35} 
          height={35}
          
        /></a>
        <img 
          className='cursor-pointer hover:opacity-80 transition-opacity' 
          src={assets.twitter_icon} 
          alt="Twitter" 
          width={35} 
          height={35}
        />
      </div>
    </div>
  );
};

export default Footer;