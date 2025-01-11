import React from 'react'
import { MdLocationPin , MdAccessTimeFilled} from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10">
    <div className="text-center">
      <h1 className="font-bold text-3xl mb-5 mt-10">Get In Touch With Us</h1>
      <p className="text-gray-400 text-sm sm:w-[350px] md:w-[500px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>
    </div>
  
    <div className="flex flex-col lg:flex-row justify-evenly items-start w-[90%] lg:w-[70%] gap-10 mt-28">
      {/* Left Section */}
      <section className="flex flex-col gap-5 w-full lg:w-[30%]">
        <div>
          <span className="flex gap-5 items-center">
            <MdLocationPin className="text-xl" />
            <h1 className="font-medium text-xl">Address</h1>
          </span>
          <p className="text-sm ml-8 mt-3">
            236 5th SE Avenue, New <br />
            York NY10000, United States
          </p>
        </div>
        <div>
          <span className="flex gap-5 items-center">
            <FaPhoneAlt />
            <h1 className="font-medium text-xl">Phone</h1>
          </span>
          <p className="text-sm ml-8 mt-3">
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
        <div>
          <span className="flex gap-5 items-center">
            <MdAccessTimeFilled className="text-xl" />
            <h1 className="font-medium text-xl">Working Time</h1>
          </span>
          <p className="text-sm ml-8 mt-3">
            Monday-Friday: 9:00 <br />- 22:00 <br />
            Saturday-Sunday: 9:00 <br />- 21:00
          </p>
        </div>
      </section>
  
      {/* Right Section */}
      <section className="contact-form w-full lg:max-w-[40%]">
        <form>
          <label className="font-medium text-lg">Your name</label>
          <input type="text" placeholder="Abc" className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md mt-2" required
          />
          <label className="font-medium text-lg">Email address</label>
          <input type="email" placeholder="Abc@def.com" className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md mt-2" required
          />
          <label className="font-medium text-lg">Subject</label>
          <input type="text" placeholder="This is optional" className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md mt-2"
          />
          <label className="font-medium text-lg">Message</label>
          <textarea placeholder="Hi! I’d like to ask about" className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md mt-2" rows={3} required ></textarea>
          <button className="px-10 bg-[#32a3ad] text-white text-sm tracking-wide py-2 rounded-md duration-300 hover:bg-[#2b959e]">Submit</button>
        </form>
      </section>
    </div>

    <div className='flex flex-wrap justify-center gap-10 mt-28 bg-gray-100 py-24 px-12'>
        <div className='flex gap-2 items-center'>
            <img src="trophy.png" alt="" className='w-[60px] h-[50px]'/>
        <span>
            <h1 className='font-medium'>High Quality</h1>
            <p className='text-gray-500'>crafted from top materials</p>
        </span>
        </div>
        <div className='flex gap-2 items-center sm:mr-10 md:mr-0'>
            <img src="guarantee.png" alt="" className='w-[60px] h-[60px]'/>
        <span>
            <h1 className='font-medium'>Warranty Protection</h1>
            <p className='text-gray-500'>Over 2 years</p>
        </span>
        </div>

       <div className='flex gap-2 items-center sm:mr-12 md:mr-0'>
            <img src="customer-support.png" alt="" className='w-[65px] h-[60px]'/>
        <span>
            <h1 className='font-medium'>24 / 7 Support</h1>
            <p className='text-gray-500'>Dedicated support</p>
        </span>
        </div>
    </div>
  </div>
  
  )
}

export default Page
