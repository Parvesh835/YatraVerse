import React from 'react'
import logo from '../assets/YatraVerse_Logo.png';
import { NavLink } from 'react-router-dom';
import Responsive from '../assets/navLinksFormobile.png';

const Header = () => {
  return (
    <header className=' bg-[#F2EDE5] h-[90px] max-sm:h-[70px] flex items-center justify-between px-10 max-sm:px-5 max-md:px-3 max-md:gap-2'>

      {/* logo */}
      <div>
        <img src={logo} alt="logo" className='h-[90px] max-sm:h-[60px] ' />
      </div>

      {/* nav Links  */}
      <div className='flex gap-10 items-center justify-center text-base font-semibold max-sm:hidden max-md:text-xs'>
        <ul className='flex gap-5 text-base font-semibold`'>
          <li className=' text-[#6B7280] hover:text-[#3B82F6] hover:border-b'><NavLink to="/">Home</NavLink></li>
          <li className=' text-[#6B7280] hover:text-[#3B82F6] hover:border-b'><NavLink to="/packages">Packages</NavLink></li>
          <li className=' text-[#6B7280] hover:text-[#3B82F6] hover:border-b'><NavLink to="/destinations">Destinations</NavLink></li>
          <li className=' text-[#6B7280] hover:text-[#3B82F6] hover:border-b'><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      {/* signup/Login button */}
      <div className='flex gap-3 text-center items-center justify-center text-base '>
        <p className='max-sm:hidden'>Signup</p>
        <button className='bg-[#3B82F6] px-5 py-3 rounded-xl font-semibold text-white cursor-pointer max-sm:px-3 max-sm:py-2 '>Get Started</button>
        <img className='h-[50px] w-[50px] cursor-pointer sm:hidden' src={Responsive} alt="Responsive Navigation" />
      </div>
    </header>
  )
}

export default Header
