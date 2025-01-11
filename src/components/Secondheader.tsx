import Image from 'next/image'
import React from 'react'
import { BsCartDash } from "react-icons/bs";

function Secondheader() {
  return (
   <header className='px-10 py-5 bg-gray-100 flex justify-between'>
    <span className='flex items-center gap-1'>
    <Image src="/Comforty-logo.png" alt='' width={40} height={40}></Image>
    <a href='#' className='font-bold text-2xl'>Comforty</a>
    </span>
    <a href="/cart" className='flex items-center gap-3 bg-white px-5 rounded-lg'>
    <BsCartDash />
      Cart
      <span className='rounded-[100%] bg-cyan-700 px-2 justify-center text-white'>2</span>
      </a>
   </header>
  )
}

export default Secondheader
