import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';


function Hero() {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center bg-gray-100 px-5 sm:px-10 md:px-24 py-14'>
      <div className='flex flex-col gap-y-5 sm:items-center md:items-start sm:mt-10 md:ml-28'>
        <p className='sm:text-center md:text-start'>WELCOME TO CHAIRY</p>
        <p className='font-bold font-sans text-4xl sm:text-3xl md:text-5xl sm:text-center md:text-start sm:w-full md:w-[500px]'>Best Furniture Collection For Your Interior.</p>
        <div className="flex justify-center lg:justify-end sm:mt-5 lg:mt-0 sm:block md:hidden">
        <Image src={"/Hero.png"} alt='logo' width={400} height={350} className='sm:w-[300px] md:w-[400px]'/>
        </div>
        <Link href={"/allproducts"}><button className='w-36 flex gap-3 items-center duration-300 bg-[#5cccd6] hover:bg-[#32a3ad] px-5 py-2 sm:mt-7 md:mt-5 rounded-lg'>
          Shop Now
          <FaArrowRightLong className='duration-300 hover:translate-x-3' />
          </button>
          </Link>
      </div>
      <div className="flex justify-center lg:justify-end sm:mt-5 lg:mt-0 sm:hidden lg:block">
        <Image src={"/Hero.png"} alt='logo' width={400} height={350} className='sm:w-[300px] md:w-[400px]'/>
        </div>
    </div>
  )
}

export default Hero
