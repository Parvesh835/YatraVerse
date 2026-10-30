import React from 'react'
import bgImage from '../assets/footerBg.png';
import { CiMail } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import logo from '../assets/YatraVerse_Logo.png'
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa";





const Footer = () => {
  return (
    <div
      className=' relative flex flex-col justify-center items-center gap-10   bg-[#06233d]/90'
     >
    
  
      {/* first section */}
      
      <div className='flex justify-between items-center my-5 gap-40 '>

        <div className='flex justify-between items-center gap-5'>

        {/* email logo */}
        <div className='rounded-full bg-[#06233d]/80 p-3'>
          <CiMail size={25} color="#ffffff"/>
        </div>

        {/* some text */}
        <div className='flex flex-col justify-start text-start items-start gap-2 text-white'>
          <h1 className='text-2xl'>Saty Updated with YartraVerse</h1>
          <p className='text-xl'>Subscribe to get exclusive travel deals, tips and inspiration straight to your inbox.</p>
          </div>
        </div>

        <div className='flex flex-row w-90 mr-10'>

          <form className='flex flex-row'>
            {/* inputBox */}
            <input type="email" name='email' id="email" placeholder='Enter your email address' className='border-l-1 border-t-1 border-b-1 border-[#8FA3B4] rounded-l-2xl px-5 text-white ' />

            {/* submit button */}
            <button className='flex flex-row justify-center items-center gap-2 px-3 py-1.5 bg-[#3B82F6] rounded-r-2xl w-30 text-white text-xl h-13  '> Submit <PiTelegramLogo color='ffffff' /></button>

          </form>
        </div>


      </div>

      <hr className='h-2 w-350 text-[#8FA3B4]'/>
      
      {/* Second Section */}
      <div className='flex justify-between items-center gap-10'>

        <div className='flex flex-col justify-between items-center gap-3 w-60 '>

          {/* logo */}
          <div className='flex justify-between items-center gap-3'>
            <img src={logo} alt="YatraVerse"  className='h-20'/>
          </div>

          <p className='text-center text-white'>Explore the world with us. Discover breathtaking destinations, unforgettable experiences and memories that last a lifetime.</p>

          <div className='flex justify-between items-center gap-3'>

            <IoLogoInstagram size={25} color='ffffff' />
            <FaXTwitter size={25} color='ffffff'  />
            <FaYoutube size={25} color='FFffff'  />
            <FaFacebookF size={25} color='ffffff' />

          </div>

        </div>

        <div>

        </div>

        <div></div>

        <div></div>

        <div></div>

      </div>


      <div></div>

    </div>
  )
}

export default Footer
