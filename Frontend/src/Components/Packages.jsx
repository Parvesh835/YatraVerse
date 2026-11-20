import React from 'react'
import bgimage from '../assets/kasol.png'


const Packages = () => {
  const packagess = [
    {
      place: "Dharamsala",
      time: "2 Days and 3 Nights",
      date: "From 21-02-2027 t0 23-02-2027",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhanTjMlaSnWOQp1r1p601yqOn2l3vYDenG13PEEPNrxev7Cdl4c3Qaw&s=10"
    },
    {
      place: "karei Lake",
      time: "2 Days and 1 Nights",
      date: "From 19-01-2027 t0 21-01-2027",
      img: "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_images/68c9c9e87d931.webp"
    },
    {
      place: "Kugti",
      time: "3 Days and 2 Nights",
      date: "From 12-02-2027 t0 15-02-2027",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wXa_eNfLRunG0rioktXPnEl4knbHMtEI1nwyDqqkHw&s=10"
    },
    {
      place: "Manali",
      time: "2 Days and 1 Nights",
      date: "From 19-01-2027 t0 21-01-2027",
      img: "https://hirehimachalcab.com/blogs/wp-content/uploads/2026/06/places-to-visit-in-manali-1024x683.png"
    },
    {
      place: "Dharamsala",
      time: "2 Days and 3 Nights",
      date: "From 21-02-2027 t0 23-02-2027",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhanTjMlaSnWOQp1r1p601yqOn2l3vYDenG13PEEPNrxev7Cdl4c3Qaw&s=10"

    },
    {
      place: "karei Lake",
      time: "2 Days and 1 Nights",
      date: "From 19-01-2027 t0 21-01-2027",
      img: "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_images/68c9c9e87d931.webp"

    },
    {
      place: "Kugti",
      time: "3 Days and 2 Nights",
      date: "From 12-02-2027 t0 15-02-2027",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wXa_eNfLRunG0rioktXPnEl4knbHMtEI1nwyDqqkHw&s=10"

    },
    {
      place: "Manali",
      time: "2 Days and 1 Nights",
      date: "From 19-01-2027 t0 21-01-2027",
      img: "https://hirehimachalcab.com/blogs/wp-content/uploads/2026/06/places-to-visit-in-manali-1024x683.png"

    },
    {
      place: "Dharamsala",
      time: "2 Days and 3 Nights",
      date: "From 21-02-2027 t0 23-02-2027",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhanTjMlaSnWOQp1r1p601yqOn2l3vYDenG13PEEPNrxev7Cdl4c3Qaw&s=10"

    },
    {
      place: "karei Lake",
      time: "2 Days and 1 Nights",
      date: "From 19-01-2027 t0 21-01-2027",
      img: "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_images/68c9c9e87d931.webp"

    },
    {
      place: "Kugti",
      time: "3 Days and 2 Nights",
      date: "From 12-02-2027 t0 15-02-2027",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wXa_eNfLRunG0rioktXPnEl4knbHMtEI1nwyDqqkHw&s=10"

    },
    {
      place: "Manali",
      time: "2 Days and 1 Nights",
      date: "From 19-01-2027 t0 21-01-2027",
      img: "https://hirehimachalcab.com/blogs/wp-content/uploads/2026/06/places-to-visit-in-manali-1024x683.png"

    },
    {
      place: "Dharamsala",
      time: "2 Days and 3 Nights",
      date: "From 21-02-2027 t0 23-02-2027",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhanTjMlaSnWOQp1r1p601yqOn2l3vYDenG13PEEPNrxev7Cdl4c3Qaw&s=10"

    },
    {
      place: "karei Lake",
      time: "2 Days and 1 Nights",
      date: "From 19-01-2027 t0 21-01-2027",
      img: "https://himalayanhikers.in/root-admin-laravel-panel/uploads/trek_images/68c9c9e87d931.webp"

    },
    {
      place: "Kugti",
      time: "3 Days and 2 Nights",
      date: "From 12-02-2027 t0 15-02-2027",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wXa_eNfLRunG0rioktXPnEl4knbHMtEI1nwyDqqkHw&s=10"
    },
    {
      place: "Manali",
      time: "2 Days and 1 Nights",
      date: "From 19-01-2027 t0 21-01-2027",
      img: "https://hirehimachalcab.com/blogs/wp-content/uploads/2026/06/places-to-visit-in-manali-1024x683.png"

    }
  ]
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
      <div className='grid grid-cols-4 gap-10 px-10 py-10'>
        {
          packagess.map((iteams, index) =>
            <div key={index} className='w-80 rounded-2xl bg-gray-100 flex flex-col items-start justify-center hover:scale-105 transition-all  '>
              <img src={iteams.img} className='w-full h-70 rounded-t-2xl' />
              <div className='flex  items-center justify-center py-4'>
                <div className='flex flex-col items-start justify-center'>
                  <h1 className='text-xl font-bold  px-2'>{iteams.place}</h1>
                  <p className=' text-gray-500 px-2'>{iteams.time}</p>
                </div>
                <button className='bg-[#3B82F6] text-white px-4 py-2 rounded-2xl ml-10 hover:bg-[#3B82F6]/80 transition-all cursor-pointer'>Book Now</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Packages
