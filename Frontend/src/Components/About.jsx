import React from 'react'
import bgImage from '../assets/aboutbg.png';
import AboutImg1 from '../assets/aboutImg1.png';
import { TiLocationArrow } from "react-icons/ti";
import { FaRegCompass, FaHeart  } from "react-icons/fa";
import { IoShieldCheckmarkOutline, IoLocationOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import About_Thridsectionbg from '../assets/About_Thridsectionbg.png'
import { IoIosPeople , IoIosArrowRoundForward } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import About4section from "../assets/About4section.png"
import { LiaTelegram } from "react-icons/lia";


const About = () => {

  const thridInfo = [
    {
      logo: IoIosPeople,
      heading: "10K+",
      subHeading: "Happy Travelers",
      details: "Trips made merorable"
    },
    {
      logo: IoLocationOutline,
      heading: "250+",
      subHeading: "Destinations",
      details: "Across the globe",
    },
    {
      logo: MdBusinessCenter,
      heading: "5K+",
      subHeading: "Custom Itineraries",
      details: "Tailored to perfection"
    },
    {
      logo: CiStar,
      heading: "4.8/5",
      subHeading: "Customer Rating",
      details: "Loved by our travelers"
    }
  ]

  const infos = [
    {
      icon: FaRegCompass,
      heading: "Handpicked Experiences",
      details: "Curated destinations and activites chosen with love and local expertise."
    },
    {
      icon: IoShieldCheckmarkOutline,
      heading: "Trusted & Secure",
      details: "Your safety abd comfort are our top priorties, every step of the way."
    },
    {
      icon: RiCustomerService2Fill,
      heading: "24/7 Support",
      details: "We're here for you anytime, anywhere before, during and after you trip."
    },
    {
      icon: FaHeart,
      heading: "Travel with Purpose ",
      details: "We promote sutinable tourism and sport local communities wherever we go."
    },
  ]

  return (
  <div className='bg-[#F2EDE5] flex flex-col justify-center items-center'>

    {/* first Section */}
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
    {/*Second Section  */}
    <div className='bg-white flex flex-col justify-center w-full items-start gap-10 px-30 py-10'>
      <div className='flex justify-center iteam-start gap-10'>
        <img src={AboutImg1} alt='Hiking Image ' className='w-150 rounded-2xl'/>
        <div className='flex flex-col justify-start items-start gap-3 pl-3'>
          <h3 className='text-[#3B82F6] font-semibold'>OUR STORY</h3>
          <h1 className='text-5xl font-semibold'>Turing Wanderlust into Meaniningful journeys</h1>
          <p className='text-lg text-[#6B7280] text-justify pb-3'>YatarVerse was born out of passion for exploration and a desire to make travel seamless, personalized and accessible for everyone. From breathtaking monutaons to serene beaches, from culture trails to thrilling advantures - we bring the world closer to you.</p>
          <p className='text-lg text-[#6B7280] text-justify'>Every itinerary we design is filled with experiences that inspire, connect and create stories you'll cherish for a lifetime.</p>
        </div>
      </div>
      
      <div className='flex justify-centre items-start gap-10 bg-[#3B82F6]/10 w-full  rounded-2xl p-10'>
        {
          infos.map((iteams, index) =>
            <div key={index} className=' text-center flex flex-col gap-3 items-center'>
            
              <div className='w-20 h-20 rounded-full bg-[#3B82F6]/40 flex justify-center items-center'>
                  <iteams.icon size={40} color='#3B82F6' />
              </div>
              <h1 className='text-2xl'>{iteams.heading}</h1>
              <p className='text-lg text-[#6B7280]'>{iteams.details}</p>
            </div>
          )}
          </div>
      </div>
      {/* Thrid Section */}
      <div className='flex flex-row  items-center justify-center gap-30 bg-center bg-no-repeat bg-cover w-full '
        style={{ backgroundImage: `linear-gradient(to right, rgba(17,24,39,0.9), rgba(107,114,128,0.6)), url(${About_Thridsectionbg})` }}>
        
        
        {
          thridInfo.map((items, index) =>
            <div key={index} className='flex flex-col justify-center items-center text-white gap-3 py-10 text-center '
            >
              <items.logo size={50} color='ffffff' />
              <h1 className='text-4xl'>{items.heading}</h1>
              <h3 className='text-xl'>{items.subHeading}</h3>
              <p className='text-lg'>{items.details}</p>
            </div>
          )
          }
      </div>
      {/* Fourth Section */}
      <div className='flex flex-col gap-10 justify-center items-center'>
        <div className='flex items-center justify-center text-start py-10 px-20 gap-10'>
          <div className='flex flex-col items-start justify-center gap-2 w-1/2'>
            <h3 className='text-2xl font-semibold text-[#3B82F6]'>OUR MISSION</h3>
            <h1 className='text-5xl font-bold pb-2'>To Make Every Jouney Extraordinary</h1>
            <p className='text-xl  text-[#6B7280]'>Our mission is simple - to inspire people to more, worry less and live fully. We're committed to providing authentic travel experiences thet leave a positive impact on both travelers and the places we visit.</p>
            <button className='relative z-10 text-[#3B82F6] border-[#3B82F6] border-2 mt-8 test-xl py-2 px-4 rounded hover:text-[#3B82F6]/90 hover:scale-105 transition duration-300'>
        <div className="flex items-center justify-center gap-2">
           Explore Packages
         <TiLocationArrow size={20} />
        </div>
      </button>
          </div>
          <div>
            <img src={About4section} alt="image" className='rounded-xl w-170' />
          </div>
        </div>
        <div className=' bg-[#3B82F6]/10 flex justify-center items-center gap-3 h-40 rounded-2xl mb-2'>
          <div className='bg-[#3B82F6]/40 ml-50 w-20 h-20 rounded-full flex justify-center items-center  '><LiaTelegram size={40} color='3B82F6' /></div>
          <div className='flex flex-col justify-start items-strat gap-2'>
            <h1 className='font-semibold text-xl'>Ready to start your next adventure?</h1>
            <p className='text-[#6B7280]'>Let YartraVerse help you plan the journey of a lifetime.</p>
          </div>
          <button className='relative z-10 ml-30 mr-50 mt-8 test-xl py-2 px-4 rounded bg-[#3B82F6] hover:bg-[#3B82F6]/70 hover:scale-105 transition duration-300'>
          <div className="flex items-center justify-center gap-2">
           Explore Packages
          <IoIosArrowRoundForward size={20} color='ffffff' />
        </div>
      </button>
        </div>
      </div>
  </div>
  


)
}

export default About
