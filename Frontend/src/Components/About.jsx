import React from 'react'
import bgImage from '../assets/aboutbg.png';
import AboutImg1 from '../assets/aboutImg1.png';
import { TiLocationArrow } from "react-icons/ti";

const About = () => {
  return (
  <div className='bg-[#F2EDE5] flex flex-col justify-center items-center'>

    <div
    className='relative h-120 w-full flex flex-col pt-15 pl-15 justify-center items-start text-white gap-4 bg-cover bg-center'
    style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071E3D]/90 via-[#0B3D70]/65 to-transparent"></div>

      {/* Hero Content */}
      <h1 className='relative z-10 text-5xl font-bold'>
        About YatraVerse
      </h1>

      <h3 className='relative z-10 text-2xl'>
        Crafting journeys that stay with you forever.
      </h3>

      <p className='relative z-10 w-90'>
        At YatraVerse, we believe travel is more than just visiting places.
        It's about discovering new perspectives, creating unforgettable
        memories and connecting with the world in meaningful ways.
      </p>

      <button className='relative z-10 bg-[#3B82F6] text-white py-2 px-4 rounded hover:bg-[#3B82F6]/90 hover:scale-105 transition duration-300'>
        <div className="flex items-center justify-center gap-2">
           Explore Packages
         <TiLocationArrow size={20} />
        </div>
      </button>

    </div>
    <div className='bg-white flex flex-col justify-center w-full items-start gap-10 px-30 py-10'>
      <div className='flex justify-center iteam-start gap-10'>
        <img src={AboutImg1} alt='Hiking Image ' className='w-150 rounded-2xl'/>
        <div className='flex flex-col justify-start items-start gap-3 pl-3'>
          <h3 className='text-[#3B82F6] font-semibold'>OUR STORY</h3>
          <h1 className='text-5xl font-semibold'>Turing Wqnderlust into Meaniningful journeys</h1>
          <p className='text-lg text-[#6B7280] text-justify pb-3'>YatarVerse was born out of passion for exploration and a desire to make travel seamless, personalized and accessible for everyone. From breathtaking monutaons to serene beaches, from culture trails to thrilling advantures - we bring the world closer to you.</p>
          <p className='text-lg text-[#6B7280] text-justify'>Every itinerary we design is filled with experiences that inspire, connect and create stories you'll cherish for a lifetime.</p>
        </div>
      </div>
      
      <div></div>
    </div>
</div>

)
}

export default About
