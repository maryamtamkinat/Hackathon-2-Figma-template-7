import React from 'react'

function Newstyles() {
  return (
    <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-center mt-20 gap-8 md:w-[70%] md:ml-20 md:mt-28 lg:ml-40">
      {/* Left Section */}
      <div className="flex-1 flex justify-center items-center relative md:w-[30%]">
        <span className="absolute transform -rotate-90 md:-left-36 lg:-left-60 top-1/2 -translate-y-1/2 font-normal md:text-sm lg:text-2xl hidden md:flex">
          EXPLORE NEW AND POPULAR STYLES
        </span>
        <img
          src="/featured-product-3.png"
          alt="Featured Product"
          className="w-full h-auto max-w-[450px] md:max-h-[450px] object-cover"
        />
      </div>
  
      {/* Right Section */}
      <div className="flex-1 grid grid-cols-2 gap-2 md:w-[30%]">
        <img src="featured-product-4.png" alt="Product 4" className="w-full h-auto  max-w-[230px] md:max-h-[220px] object-cover rounded-lg"
        />
        <img src="featured-product-1.png" alt="Product 1" className="w-full h-auto max-w-[230px] md:max-h-[220px] object-cover rounded-lg"
        />
        <img src="ourproduct-6.png" alt="Product 6" className="w-full h-auto max-w-[230px] md:max-h-[220px] object-cover rounded-lg"
        />
        <img src="ourproduct-7.png" alt="Product 7" className="w-full h-auto max-w-[230px] md:max-h-[220px] object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
  
  
  
  
  )
}

export default Newstyles
