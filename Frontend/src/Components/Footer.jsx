import React from 'react'
import { CiMail, CiStar  } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import logo from '../assets/YatraVerse_Logo.png'
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import sumAndMountain from "../assets/Mountains_and_sun.png";






const Footer = () => {

  const destination = ["Himachal Pardesh", "Uttarakhand", "Kashmir", "Ladakh", "Northeast India", "More Destinations"];

  const experiences = ["Adventure Tours", "Cultural Tours", "Family Tours", "Honeymoon Packages", "Weekend Getaways", "Pilgrimage Tours",];
  
  const company = ["About Us", "Our Story", "Careers", "Blogs", "Media & press", "Contact Us"]

  const support =["Help Center", "FAQs", "Booking Guide", "Terms & Conditions", "Privacy Policy", "Refund Policy"]

  return (
    <div
      className=' relative flex flex-col justify-center items-center gap-10   bg-[#06233d]/90 pt-5' 
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

      {/* horizontal line */}
      
      <hr className='h-2 w-350 text-[#8FA3B4]'/>
      
      {/* Second Section */}
      <div className='flex justify-between items-center gap-30 pb-5'>

        {/* second section's First section */}
        <div className='flex flex-col justify-between items-center gap-3 w-60 '>

          {/* logo */}
          <div className='flex justify-between items-center gap-3'>
            <img src={logo} alt="YatraVerse"  className='h-20'/>
          </div>

          <p className='text-center text-white'>Explore the world with us. Discover breathtaking destinations, unforgettable experiences and memories that last a lifetime.</p>

          <div className='flex justify-between items-center gap-5'>

            <IoLogoInstagram size={35} color='ffffff' className='cursor-pointer rounded-full border-1 border-white p-1'/>
            <FaXTwitter size={35} color='ffffff' className='cursor-pointer rounded-full border-1 border-white p-1'/>
            <FaYoutube size={35} color='FFffff' className='cursor-pointer rounded-full border-1 border-white p-1'/>
            <FaFacebookF size={35} color='ffffff' className='cursor-pointer rounded-full border-1 border-white p-1'/>

          </div>

        </div>

        {/* second section's Secound section */}
        
        <div className='flex flex-col justify-center items-start gap-3 text-white font-mono'>

          <h1 className='font-bold text-lg'>Destinatins</h1>
          <ul className='flex flex-col justify-center items-start gap-3 '>

            {destination.map((items, index) =>
              <li className='list-inside list-disc hover:text-[#817d7d] cursor-pointer' key={index}>{items}</li>
            )}

          </ul>

        </div>

        {/* second section's Thrid section */}
        <div className='flex flex-col justify-center items-start gap-3 text-white font-mono'>

          <h1 className='font-bold text-lg'>Experiences</h1>
          <ul className='flex flex-col justify-center items-start gap-3 '>

            {experiences.map((items, index) =>
              <li className='list-inside list-disc hover:text-[#817d7d] cursor-pointer' key={index}>{items}</li>
            )}

          </ul>

        </div>

        {/* second section's fourth section */}
        <div className='flex flex-col justify-center items-start gap-3 text-white font-mono'>

          <h1 className='font-bold text-lg'>Company</h1>
          <ul className='flex flex-col justify-center items-start gap-3 '>

            {company.map((items, index) =>
              <li className='list-inside list-disc hover:text-[#817d7d] cursor-pointer' key={index}>{items}</li>
            )}

          </ul>

        </div>

        {/* second section's fifth section */}
        <div className='flex flex-col justify-center items-start gap-3 text-white font-mono'>

          <h1 className='font-bold text-lg'>Support</h1>
          <ul className='flex flex-col justify-center items-start gap-3 '>

            {support.map((items, index) =>
              <li className='list-inside list-disc hover:text-[#817d7d] cursor-pointer' key={index}>{items}</li>
            )}

          </ul>

        </div>

      </div>

      {/* horizontal line */}
      <hr className='h-2 w-350 text-[#8FA3B4]'/>

      {/* Third Section */}
      <div className='flex justify-between items-center gap-85'>

        <div className='flex flex-rows gap-2 justify-between items-center '>
          <MdSecurity size={25} color='ffffff' />
          <p className='text-lg text-white'>100% Secure Booking</p>
        </div>

        <div className='flex flex-rows gap-2 justify-between items-center '>
          <RiCustomerService2Fill size={25} color='ffffff' />
          <p className='text-lg text-white'>24/7 Customer support</p>
        </div>

        <div className='flex flex-rows gap-2 justify-between items-center '>
          <CiStar size={25} color='ffffff' />
          <p className='text-lg text-white'>Best Price Guarantee</p>
        </div>
        
      </div>

      <hr className='h-2 w-350 text-[#8FA3B4]' />
      
      {/* Fourth Section */}
      <div className='flex justify-between gap-140 items-center text-white pb-5'>

        <p>© 2026 YatraVerse. All rights reserved.</p>

        <div className='flex justify-between items-center gap-1'>
          <img src={sumAndMountain} alt="" className='w-35' />
          <p className='font-fontFamily text-3xl text-[#8FA3B4]'>Journey Beyond The Ordinary.</p>
        </div>

      </div>

    </div>
  )
}

export default Footer
