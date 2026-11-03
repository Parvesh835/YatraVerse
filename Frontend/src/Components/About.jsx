import React from 'react'
import bgImage from '../assets/aboutbg.jpg';

const About = () => {
  return (
    <div className='bg-[#F2EDE5]  flex justify-center items-center text-3xl font-bold'
    >
      <div className='w-100 h-100 flex justify-center items-center text-white text-3xl '
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "100% 100%" }}>
        <h1>About Us</h1>
        <h3>Crafting journeys that stay with you forever.</h3>
        <p>At YatraVerse, we believe travel is more than just visiting places. It's about discovering new perspectives, creating unforgettable memories and connecting with the world in meaningful ways.</p>
        <button>Explore Packages</button>
      </div>
    </div>
  )
}

export default About
