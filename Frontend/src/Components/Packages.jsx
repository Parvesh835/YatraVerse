import React from 'react'
import bgimage from '../assets/kasol.png'
const Packages = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-start px-40 bg-center bg-cover bg-no-repeat w-full py-40 rounded-b-2xl'
          style={{ backgroundImage: `url(${bgimage})`}}
       >
           <h1 className='text-6xl font-bold mb-4 text-[#F2EDE5] font-fontFamily'>Our Travel Packages</h1>
            <p className='text-4xl  text-[#F2EDE5] w-170  font-fontFamily'>
              Discover our carefully curated travel packages designed to provide unforgettable experiences around the globe.
            </p>
      </div>
      <div className='w-full flex justify-start items-start px-10 py-10 gap-5 '>
        <div className='bg-gray-200 text-[#3B82F6] hover:text-[#3B82F6]/80 hover:bg-gray-200/30 border-2 flex items-center justify-center rounded-3xl px-4 py-2' >Spritual</div>
        <div className='bg-gray-200 text-[#3B82F6] hover:text-[#3B82F6]/80 hover:bg-gray-200/30 border-2 flex items-center justify-center rounded-3xl px-4 py-2' >Adventurous</div>
        <div className='bg-gray-200 text-[#3B82F6] hover:text-[#3B82F6]/80 hover:bg-gray-200/30 border-2 flex items-center justify-center rounded-3xl px-4 py-2' >Cultural</div>
        <div className='bg-gray-200 text-[#3B82F6] hover:text-[#3B82F6]/80 hover:bg-gray-200/30 border-2 flex items-center justify-center rounded-3xl px-4 py-2' >Luxury</div>
        
      </div>
    </div>
  )
}

export default Packages
