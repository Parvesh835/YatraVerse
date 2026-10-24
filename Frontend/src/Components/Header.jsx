import React, { useState } from 'react'
import logo from '../assets/YatraVerse_Logo.png';
import { NavLink } from 'react-router-dom';
import Responsive from '../assets/navLinksFormobile.png';
import closeIcon from '../assets/close_icon.png';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = ()=> setIsOpen(false)

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
        <NavLink to="/signup"><button className='bg-[#3B82F6] px-5 py-3 rounded-xl font-semibold text-white cursor-pointer max-sm:px-3 max-sm:py-2 '>Get Started</button></NavLink>
        <img className='h-[50px] w-[50px] cursor-pointer sm:hidden' src={Responsive} alt="Responsive Navigation"
        onClick={()=> setIsOpen(true)}/>
      </div>

      {/* overlay */}
      <div onClick={closeSidebar} className={` fixed bg-black/50 z-40 transition-opacity duration-300 sm:hidden ${isOpen ? 'opacity-100 visible': 'opacity-0 invisible'}`} />

      {/* sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-40 bg-[#F2EDE5] z-50 transform transition-transform duration-300 sm:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* close button */}

        <div className='flex justify-center p-5'>
          <img
            onClick={closeSidebar}
            className="text-3xl text-[#6B7280] hover:text-[#3B82F6] cursor-pointer h-[40px] w-[70px]"
            src={closeIcon} alt='Close icon'
          />
        </div>

        {/* nav Links */}
        <ul className='flex flex-col gap-10 p-5 text-base font-semibold'>
          <li className='text-[#6B7280] hover:text-[#3B82F6] hover:border-b'><NavLink to="/">Home</NavLink></li>
          <li className='text-[#6B7280] hover:text-[#3B82F6] hover:border-b'><NavLink to="/packages">Packages</NavLink></li>
          <li className='text-[#6B7280] hover:text-[#3B82F6] hover:border-b'><NavLink to="/destinations">Destinations</NavLink></li>
          <li className='text-[#6B7280] hover:text-[#3B82F6] hover:border-b'><NavLink to="/about">About</NavLink></li>
        </ul>

      </aside>

    </header>
  )
}

export default Header
