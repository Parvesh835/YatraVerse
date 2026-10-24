import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import image from '../assets/signup.png'
import axios from "axios"
import { Link } from 'react-router-dom';
import or_small from "../assets/or.png";
import or_big from "../assets/or1.png";
  
const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8888/auth/signup",
        name,
        email,
        password,
        ConfirmPassword
      )
    } catch (error) {
      console.log(errpr);
      console.log("Something went wrong during submmiting data")
    }
  }

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
        <div className=" bg-[#8FA3B4] max-md:bg-[#8FA3B4]/50  rounded-r-2xl border-0 max-md:rounded-2xl h-[550px]">
          
          <div className='flex flex-col pt-10 pl-5 pb-5 gap-2'>
            <h1 className=' flex  font-semibold text-[#F2EDE5] justify-baseline text-3xl '>Create your account</h1>
            <p className='text-[#F2EDE5]'>Enter your details to continue.</p>
          </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-96 p-5 justify-center items-center' >
          <div className=" bg-[#F2EDE5] flex gap-5 w-60 px-4 py-2 rounded-xl border-[#6B7280] border-1">
            <p><FaRegUser size={20} color="#6B7280" /></p>
            <input
              className="border-none focus:outline-none"
              type='text'
              placeholder="Name"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className=" bg-[#F2EDE5] flex gap-5 w-60 px-4 py-2 rounded-xl border-[#6B7280] border-1">
            <p><MdEmail size={20} color="#6B7280" /></p>
            <input
              className="border-none focus:outline-none"
              type='email'
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className=" bg-[#F2EDE5] flex gap-5 w-60 px-4 py-2 rounded-xl border-[#6B7280] border-1">
            <p><MdOutlinePassword size={20} color="#6B7280" /></p>
            <input
              className="border-none focus:outline-none"
              type='password'
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className=" bg-[#F2EDE5] flex gap-5 w-60 px-4 py-2 rounded-xl border-[#6B7280] border-1">
            <p><MdOutlinePassword size={20} color="#6B7280"  /></p>
            <input
              className="border-none focus:outline-none"
              type='password'
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              value={ConfirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex w-60 px-4 py-2 items-center justify-center rounded-xl border-[#6B7280]">
            <button className="bg-[#3B82F6] text-white w-60 px-4 py-2 rounded-xl">Sign Up</button>
          </div>
          <div>
            <img src={or_small} alt="or" />
          </div>
          <div>
            <p className='text-[#F2EDE5] text-sm'>Already have an account? <Link to="/login" className='text-[#3B82F6]  cursor-pointer'>login</Link></p>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
