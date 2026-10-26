import mainbg from "../assets/home2.png";
import { FaRegCompass } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="relative h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${mainbg})` , backgroundSize: "100% 100%" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#06233d]/95 via-[#06233d]/60 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 px-16 py-10 text-white flex flex-col gap-1 justify-center  w-200">
    
    <p className="bg-[#8FA3B4]/50  px-3 py-1.5 rounded-3xl text-white flex gap-3 justify-start items-center w-60 mb-5 "><FaRegCompass size={20} color="#3B82F6" /> Find your kind of escape</p>
    
    <h1 className="text-6xl font-bold">
      Escape the Hectic Life.
    </h1>

    <p className="mt-4 text-3xl">
      Your next journey starts here.
    </p>
    
    <p className="mt-4 text-xl w-130">
      Weakend adventures, mountains escapes or soulful getways - discover destinatioms that refresh your mind, body and soul.  
    </p>

    <div className="flex gap-5  items-center">
          <button className="mt-6 rounded-lg bg-[#3B82F6] w-50 px-6 py-3 cursor-pointer">Explore Packages</button>
          <button className=" mt-6 flex gap-2 justify-center items-center underline cursor-pointer">Discover Destinations <FaArrowRight /></button>
    </div>
  </div>
</div>
  )
}

export default Home
