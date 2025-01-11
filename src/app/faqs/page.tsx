import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Page() {
  return (
    <div className="flex flex-col mt-28 mb-40">
       <div className="text-center">
      <h1 className="font-bold text-4xl mb-5">Questions Looks Here</h1>
      <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
    </div>
      <div className='llg:grid grid-cols-2 gap-10 flex flex-wrap justify-center mt-24 mx-auto w-[90%]'>
        <div className='w-full md:w-[45%] lg:w-[550px] flex flex-col gap-y-5 bg-gray-100 px-6 py-7 rounded-lg shadow-md transition-transform hover:scale-105'>
            <span className='flex justify-between items-center'>
                <h3 className='font-medium'>What types of chairs do you offer?</h3>
                <FaPlus />
            </span>
            <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>

        <div className='w-full md:w-[45%] lg:w-[550px] flex flex-col gap-y-5 bg-gray-100 px-6 py-7 rounded-lg shadow-md transition-transform hover:scale-105'>
            <span className='flex justify-between items-center'>
                <h3 className='font-medium'>How can we get in touch with you?</h3>
                <FaPlus />
            </span>
            <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
       
        <div className='w-full md:w-[45%] lg:w-[550px] flex flex-col gap-y-5 bg-gray-100 px-6 py-7 rounded-lg shadow-md transition-transform hover:scale-105'>
            <span className='flex justify-between items-center'>
                <h3 className='font-medium'>Do your chairs come with a warranty?</h3>
                <FaPlus />
            </span>
            <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>

        <div className='w-full md:w-[45%] lg:w-[550px] flex flex-col gap-y-5 bg-gray-100 px-6 py-7 rounded-lg shadow-md transition-transform hover:scale-105'>
            <span className='flex justify-between items-center'>
                <h3 className='font-medium'>What will be delivered? And When?</h3>
                <FaPlus />
            </span>
            <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
   
        <div className='w-full md:w-[45%] lg:w-[550px] flex flex-col gap-y-5 bg-gray-100 px-6 py-7 rounded-lg shadow-md transition-transform hover:scale-105'>
            <span className='flex justify-between items-center'>
                <h3 className='font-medium'>Can I try a chair before purchasing?</h3>
                <FaPlus />
            </span>
            <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>

        <div className='w-full md:w-[45%] lg:w-[550px] flex flex-col gap-y-5 bg-gray-100 px-6 py-7 rounded-lg shadow-md transition-transform hover:scale-105'>
            <span className='flex justify-between items-center'>
                <h3 className='font-medium'>How do I clean and maintain my Comforty chair?</h3>
                <FaPlus />
            </span>
            <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        </div>
      </div>
  )
}

export default Page
