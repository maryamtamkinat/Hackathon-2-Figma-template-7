import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function page() {
  return (
    <div className="flex flex-wrap justify-center gap-20 pt-20 pb-20 lg:pb-52 mx-auto">
              {/* Left side */}
              <div className="w-full lg:max-w-[700px] pb-5">
                <h1 className="font-medium mb-5 text-2xl ml-2 lg:ml-0">Bag</h1>
                <div className="flex gap-5 lg:gap-20 border-b-[1px] pb-10">
                  <div className="flex gap-5">
                    <img src="featured-product-3.png" alt="" className="w-[150px] md:w-[120px] lg:w-[170px]"
                    />
                    <div>
                      <h3 className="font-medium">Library Stool Chair</h3>
                      <p className="mt-7 text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                      <span className="flex gap-5 lg:gap-10 mt-2 text-xs lg:text-sm text-gray-500">
                        <p>Size L</p>
                        <p>Quantity 1</p>
                      </span>
                      <span className="flex gap-5 mt-12">
                        <FaRegHeart className="cursor-pointer"/>
                        <RiDeleteBin6Line className="cursor-pointer"/>
                      </span>
                    </div>
                  </div>
                  <span className="ml-20 lg:ml-52 font-medium text-sm lg:text-base text-right">MRP: $99</span>
                </div>
                <div className="flex gap-5 lg:gap-20 border-b-[1px] pb-10 pt-10">
                  <div className="flex gap-5">
                    <img src="Category-1.png" alt="" className="w-[150px] md:w-[120px] lg:w-[170px]"
                    />
                    <div>
                      <h3 className="font-medium">Library Stool Chair</h3>
                      <p className="mt-7 text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                      <span className="flex gap-5 lg:gap-10 mt-2 text-xs lg:text-sm text-gray-500">
                        <p>Size L</p>
                        <p>Quantity 1</p>
                      </span>
                      <span className="flex gap-5 mt-12">
                        <FaRegHeart  className="cursor-pointer"/>
                        <RiDeleteBin6Line  className="cursor-pointer"/>
                      </span>
                    </div>
                  </div>
                  <span className="ml-20 lg:ml-52 font-medium text-sm lg:text-base text-right">MRP: $99</span>
                </div>
              </div>
              {/* Right side */}
              <div className="max-w-[450px] flex flex-col gap-y-3">
              <h1 className="font-medium mb-5 text-2xl">Summary</h1>
              <span className="flex justify-between">
                <p>Subtotal</p>
                <p>$198.00</p>
              </span>
              <span className="flex justify-between gap-10">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </span>
              <span className="flex justify-between">
                <p>Total</p>
                <p>$198.00</p>
              </span>
              <span className="text-center text-white text-sm font-medium bg-[#32a3ad] hover:bg-[#2b959e] px-7 py-5 rounded-full">
              Member Checkout
              </span>
              </div>
            </div>

  );
}

export default page;
