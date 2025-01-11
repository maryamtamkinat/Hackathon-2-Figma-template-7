import React from 'react'
import { FaFacebook , FaTwitter , FaPinterest , FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress , SiMastercard } from "react-icons/si";

function Footer() {
  return (
    <footer>
    <div className='flex flex-wrap gap-10 justify-center py-20 border-gray-400 border-t-[1px] border-b-[1px] sm:flex-col md:flex-row sm:items-center md:items-startsm:space-y-8 md:space-y-0 md:items-start px-5'>
      <ul className='flex flex-col gap-y-2 text-center md:text-left'>
        <span className='flex items-center gap-2 pb-2 justify-center md:justify-start'>
        <img src="/Comforty-logo.png" alt="" className='w-8'/>
        <h1 className='font-bold text-2xl'>Comforty</h1>
        </span>
        <li className='w-full md:w-[300px] text-gray-500 font-sans text-[15px]'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
        Cras egestas purus </li>
        <li className='flex justify-center md:justify-start text-2xl gap-7 mt-3'>
        <FaFacebook className='text-gray-600 duration-300 hover:text-[#40b2bd] hover:border border-cyan-700 rounded-full cursor-pointer' />
        <FaTwitter className='text-gray-600 duration-300 hover:text-[#40b2bd] hover:border border-cyan-700 rounded-full cursor-pointer' />
        <CiInstagram className='text-gray-600 duration-300 hover:text-[#40b2bd] hover:border border-cyan-700 rounded-full cursor-pointer'/>
        <FaPinterest className='text-gray-600 duration-300 hover:text-[#40b2bd] hover:border border-cyan-700 rounded-full cursor-pointer' />
        <FaYoutube className='text-gray-600 duration-300 hover:text-[#40b2bd] hover:border border-cyan-700 rounded-full cursor-pointer'/>
        </li>
      </ul>

      <ul className='flex flex-col gap-y-2 text-center md:text-left'>
        <h3 className='font-medium text-sm text-gray-500 pb-2'>CATEGORY</h3>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Sofa</li>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Armchair</li>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Wing Chair</li>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Desk Chair</li>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>wooden Chair</li>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Park Bench</li>
      </ul>

      <ul className='flex flex-col gap-y-2 text-center md:text-left'>
        <h3 className='font-medium text-sm text-gray-500 pb-2'>SUPPORT</h3>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Help & Support</li>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Tearms & Conditions</li>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Privacy Policy</li>
        <li className='hover:text-[#32a3ad] hover:underline underline-offset-4'>Help</li>
      </ul>

      <ul className='flex flex-col gap-y-2'>
        <h3 className='font-medium text-sm text-gray-500 pb-2'>NEWSLETTER</h3>
        <li className='flex gap-2'><input type="text" placeholder='Your email' className='border border-gray-400 p-2 rounded-sm w-[70%]' />
        <button className='px-5 rounded-md duration-300 bg-[#40b2bd] hover:bg-[#32a3ad]'>Subscribe</button>
        </li>
        <li className='w-[400px] text-gray-500 font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</li>
      </ul>
    </div>
    <div className='flex justify-between items-center px-20 pb-5 pt-3 sm:flex-col md:flex-row'>
        <p className='text-gray-500 sm:text-center md:text-start'>@ 2021 - Blogy - Designed & Develop by <span className='text-black'>Zakirsoft</span></p>
        <div className='flex gap-5 items-center'>
        <SiMastercard className='text-gray-400 text-4xl'/>
        <span className='font-bold italic text-gray-400 text-2xl'>PayPal</span>
        <SiAmericanexpress className='text-gray-400 text-4xl'/>
        <RiVisaLine className='text-gray-400 text-5xl '/>
        </div>
    </div>
    </footer>
  )
}

export default Footer
