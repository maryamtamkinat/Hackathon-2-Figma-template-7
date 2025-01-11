import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { LiaEnvelope } from "react-icons/lia";
import { PiPlantThin } from "react-icons/pi";

function page() {
  return (
    <div className='flex justify-center'>
      <div className='sm:w-full lg:w-[80%] mt-20 mb-40'>
      <div className="flex flex-col lg:flex-row gap-5 sm:ml-10">
      <div className="bg-[#007580] p-10 lg:w-1/2 sm:w-[90%]">
        <h1 className="text-white font-bold text-2xl mb-5">About Us - Comforty</h1>
        <p className="mb-10 text-white">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style
          <br />
          with functionality.
        </p>
        <button className="bg-[#4DA1A9] duration-300 hover:bg-[#3797a0] text-white px-5 py-3">View collection</button>
      </div>

      <div className="overflow-hidden lg:w-1/2">
        <img src="aboutus-comforty.png" alt="About Us - Comforty" className="lg:w-full sm:w-[90%] h-auto transition-transform duration-300 hover:scale-110" />
      </div>
        </div>

        <h1 className='font-bold text-3xl mt-32 text-center'>What makes our Brand Different</h1>
        <div className='flex flex-wrap justify-center gap-5 mt-10'>
              <div className='bg-gray-100 px-10 py-5 rounded transition-transform hover:scale-105'>
              <TbTruckDelivery className='text-cyan-700 mb-2 text-xl'/>
              <p className='text-cyan-700 mb-5 text-lg'>Next day as standard</p>
              <p className='text-cyan-700 text-sm'>Order before 3pm and get <br /> your order the next day as <br /> standard</p>
              </div>
        
              <div className='bg-gray-100 px-10 py-5 rounded transition-transform hover:scale-105'>
              <FaRegCheckCircle  className='text-cyan-700 mb-2 text-xl'/>
              <p className='text-cyan-700 mb-5 text-lg'>Made by true artisans</p>
              <p className='text-cyan-700 text-sm'>Handmade crafted goods <br /> made with real passion and <br /> craftmanship</p>
              </div>
        
              <div className='bg-gray-100 px-10 py-5 rounded transition-transform hover:scale-105'>
              <LiaEnvelope  className='text-cyan-700 mb-2 text-xl' />
              <p className='text-cyan-700 mb-5 text-lg'>Unbeatable prices</p>
              <p className='text-cyan-700 text-sm'>For our materials and <br /> quality you won’t find <br /> better prices anywhere</p>
              </div>
        
              <div className='bg-gray-100 px-10 py-5 rounded transition-transform hover:scale-105'>
              <PiPlantThin  className='text-cyan-700 mb-2 text-xl'/>
              <p className='text-cyan-700 mb-5 text-lg'>Recycled packaging</p>
              <p className='text-cyan-700 text-sm'>We use 100% recycled to <br /> ensure our footprint is more <br /> manageable</p>
              </div>
              </div>

              <h1 className='font-bold text-2xl mt-20'>Our Popular Products </h1>
              <div className='flex flex-wrap gap-5 justify-center mt-10'>
        <div className='flex flex-col gap-y-2'>
          <div className='overflow-hidden'>
            <img src="aboutproduct1.png" alt="" className='w-[500px] transition-transform duration-300 hover:scale-110'/>
            </div>
            <p>The Poplar suede sofa</p>
            <p>$99.00</p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='overflow-hidden'>
            <img src="aboutproduct2.png" alt="" className='w-[240px] transition-transform duration-300 hover:scale-110'/>
            </div>
            <p>The Dandy chair</p>
            <p>$99.00</p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='overflow-hidden'>
            <img src="aboutproduct3.png" alt="" className='w-[240px] transition-transform duration-300 hover:scale-110'/>
            </div>
            <p>The Dandy chair</p>
            <p>$99.00</p>
        </div>
      
      </div>

      </div>
    </div>
  )
}

export default page
