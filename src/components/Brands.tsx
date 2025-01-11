import Image from 'next/image'
import React from 'react'

function Product() {
  return (
    <div className='flex flex-wrap justify-center items-center gap-20 mt-5'>
      <Image src={"/product-1.png"} alt='logo' width={80} height={100}/>
      <Image src={"/product-2.png"} alt='logo' width={80} height={100}/>
      <Image src={"/product-3.png"} alt='logo' width={80} height={100}/>
      <Image src={"/product-4.png"} alt='logo' width={80} height={100}/>
      <Image src={"/product-5.png"} alt='logo' width={80} height={100}/>
      <Image src={"/product-6.png"} alt='logo' width={80} height={100}/>
      <Image src={"/product-7.png"} alt='logo' width={80} height={100}/>
    </div>
  )
}

export default Product
