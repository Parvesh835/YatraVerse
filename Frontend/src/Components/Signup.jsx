import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import image from '../assets/signup.png'
const Signup = () => {
  return (
    <div
      style={{ "--signup-bg": `url(${image})` }}
      className="flex items-center justify-center p-5  bg-[#F3F4F6] max-md:bg-[image:var(--signup-bg)] bg-no-repeat bg-cover bg-center">
      <div className="  flex items-center justify-center rounded-2xl    ">
        {/* image */}
        <div className="flex items-center justify-center  rounded-xl h-[550px] max-md:hidden">
          <img className="w-full h-full object-contain rounded-l-2xl" src={image} alt="signup" />
        </div>
        {/* form */}
        <div className=" bg-[#8FA3B4] max-md:bg-[#8FA3B4]/50  flex flex-col gap-4 w-96 p-8 justify-center items-center rounded-r-2xl border-0 max-md:rounded-2xl h-[550px]">
          <div className=" bg-[#F2EDE5] flex gap-5 w-60 px-4 py-2 rounded-xl border-[#6B7280] border-1">
            <p><FaRegUser size={20} color="#6B7280" /></p>
            <input className="border-none focus:outline-none" type='text' placeholder="Name" id="name" name="name" />
          </div>
          <div className=" bg-[#F2EDE5] flex gap-5 w-60 px-4 py-2 rounded-xl border-[#6B7280] border-1">
            <p><MdEmail size={20} color="#6B7280" /></p>
            <input className="border-none focus:outline-none"  type='text' placeholder="Email" id="email" name="email" />
          </div>
          <div className=" bg-[#F2EDE5] flex gap-5 w-60 px-4 py-2 rounded-xl border-[#6B7280] border-1">
            <p><MdOutlinePassword size={20} color="#6B7280" /></p>
            <input className="border-none focus:outline-none" type='text' placeholder="Password" id="password" name="password" />
          </div>
          <div className=" bg-[#F2EDE5] flex gap-5 w-60 px-4 py-2 rounded-xl border-[#6B7280] border-1">
            <p><MdOutlinePassword size={20} color="#6B7280"  /></p>
            <input className="border-none focus:outline-none" type='text' placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" />
          </div>
          <div className="flex w-60 px-4 py-2 items-center justify-center rounded-xl border-[#6B7280]">
            <button className="bg-[#3B82F6] text-white px-4 py-2 rounded-xl">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
