import mainbg from "../assets/home2.png";
import { FaRegCompass } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import mountain from "../assets/Mountain.png";
import temple from "../assets/temple.png";
import lake from "../assets/lake.png";
import dharamsala from "../assets/dharamsala.png";
import kasol from "../assets/kasol.png";
import rishikesh from "../assets/rishikesh.png";
import { CiHeart } from "react-icons/ci";
import sumAndMountain from "../assets/Mountains_and_sun.png";
import montainsAndForest from '../assets/montains_and_forest.png';


const Home = () => {


  const popular_Escape = [
    {
      img: dharamsala,
      localtion: "Dharamsala",
      detail: "3 Nights • 4 Days",
      rating: "4.8 (980)",
      prices: "₹ 8,999",
      start: "Starting from"
    },
    {
      img: kasol,
      localtion: "Kasol",
      detail: "2 Nights • 3 Days",
      rating: "4.7 (1.2k)",
      prices: "₹ 6,499",
      start: "Starting from"
    },
    {
      img: rishikesh,
      localtion: "Rishikesh",
      detail: "2 Nights • 3 Days",
      rating: "4.6 (1.1k)",
      prices: "₹ 5,999",
      start: "Starting from"
    }
  ]

  const escape_Data = [
    {
      img: mountain,
      title: "Montain Adventures",
      detail: "High altitudes endless views and unforgettable thrills."
    },
    {
      img: temple,
      title: "Spiritual Jounrey",
      detail: "Sacred places, timeless traditions and inner peace."
    },
    {
      img: lake,
      title: "Weekend Getaways",
      detail: "Short trips, big memories close to nature."
    }
  ]



  return (
  <div className="bg-[#F2EDE5]">
    <div
      className="relative h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${mainbg})` , backgroundSize: "100% 100%" }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#06233d]/95 via-[#06233d]/60 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 px-16 py-10 text-white flex flex-col gap-1 justify-center  w-200">
    
    <p className="bg-[#8FA3B4]/50  px-3 py-1.5 rounded-3xl text-white flex gap-3 justify-start items-center w-60 mb-5  "><FaRegCompass size={20} color="#3B82F6" /> Find your kind of escape</p>
    
    <h1 className="text-6xl font-bold font-fontFamily">
      Escape the Hectic Life.
    </h1>

    <p className="mt-4 text-3xl font-fontFamily">
      Your next journey starts here.
    </p>
    
        <p className="mt-4 text-xl w-130 font-fontFamily">
          Weakend adventures, mountains escapes or soulful getways - discover destinatioms that refresh your mind, body and soul.  
       </p>

          <div className="flex gap-5  items-center">
              <button className="mt-6 rounded-lg bg-[#3B82F6] w-50 px-6 py-3 cursor-pointer font-mono">Explore Packages</button>
              <button className=" mt-6 flex gap-2 justify-center items-center underline cursor-pointer font-mono">Discover Destinations       <FaArrowRight /></button>
         </div>
        </div>
      </div>

      <div className="py-20 px-20 bg-[#F2EDE5] flex flex-col max-md:justify-center max-md:items-center justify-center items-start  gap-2">
        <h1 className="text-[#153c65] text-3xl font-bold ">Find Your Escape</h1>
        <p className="text-[#6B7280] text-sm  ">Journary for every kind of soul.</p>

        <div className="flex justify-between max-md:flex-col max-md:justify-center max-md:items-center items-center gap-10 ">
          {
            escape_Data.map((items, index) =>
              <div className=" w-100 h-70 flex flex-col-reverse justify-start  py-3 items-start text-[#F2EDE5] gap-3 text-start rounded-2xl hover:scale-105 transition-all bg-center bg-cover bg-no-repeat  " key={index}
              style={{ backgroundImage: `url(${items.img})` , backgroundSize: "100% 100%" }}>
                <p className="w-60 px-3">{items.detail}</p>
                <h1 className="font-bold text-2xl px-3">{items.title}</h1>
              </div>
            )
          }
        </div>

      </div>

      <div className="pb-20 px-20 bg-[rgb(242,237,229)] flex flex-col justify-center items-start max-md:justify-center max-md:items-center  gap-2">
        <h1 className="text-[#153c65] text-3xl font-bold">Popular Escape</h1>
        <p className="text-[#6B7280] text-sm ">Handpicked jounerys loved by travellers like you.</p>

        <div className="flex justify-between max-md:flex-col items-center gap-10 ">
          {
            popular_Escape.map((items, index) =>
              <div className="hover:scale-105 transition-all">
                {/* bg image */}
                <div className="flex flex-row h-60 w-100 bg-center bg-cover bg-no-repeat justify-between items-start px-3 py-3 rounded-t-2xl border-b-1 border-[#6B7280]"
                style={{ backgroundImage: `url(${items.img})`  }}
                >
                  <h1 className="text-[#F2EDE5] bg-gray-100/50 px-3 py-1 rounded-full">{items.localtion}</h1>
                  <CiHeart size={25} color="#111111" className="cursor-pointer hover:scale-130 transition-all " />
                </div>

                {/* price and deatils */}
                <div className="flex text-[#6B7280] justify-between items-center w-100 h-20 bg-white rounded-b-2xl px-3 py-1">
                  {/* location */}
                  <div className="flex w-60 flex-col justify-start items-start gap-3 ">
                    <h1 className="text-[#153c65] text-1xl font-bold">{items.localtion}</h1>
                    <div className="flex  justify-evenly gap-10 items-start">
                      <p className="text-black">{items.detail}</p>
                      <p>{items.rating}</p>

                    </div>
                  </div>
                  {/* price */}
                  <div className="flex flex-col gap-2 justify-between border-l-1 border-[#6B7280] px-2 items-start ">
                    <p className="text-black  text-lg">{items.start}</p>
                    <p className="text-[#153c65]">{items.prices}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>

      </div>

      <div className="flex px-20 pb-20 items-center justify-center bg-right"      >
        <div className="h-25 bg-gradient-to-r from-[#153c65]/95 via-[#525E6B] to-[#AoB4CO] rounded-3xl w-full flex  justify-start items-center px-5 gap-5 bg-right "        >
          <div>
            <img src={sumAndMountain} className="h-25" />
          </div>
          <div className="flex flex-col justify-center  items-start gap-2">
          <h1 className="text-xl text-white font-fontFamily">Your next story is waiting.</h1>
            <p className="text-sm text-white font-fontFamily">Let the mountains, river and temples call you away.</p>
          </div>
          <div>
            <button className=" rounded-xl bg-[#3B82F6] px-3 py-1.5 ml-100 text-white cursor-pointer hover:scale-101">Plan your escape</button>
          </div>
          <div>
            <img src={montainsAndForest} alt="" className="h-40 mr-0 my-0 pr-0 py-0" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home
