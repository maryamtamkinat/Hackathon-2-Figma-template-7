"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image';
import { BsCartDash } from "react-icons/bs";

interface Iproducts {
  id: number;
  title: string;
  price: string;
  old_price?: string;
  img_url: string;
  selling?:string,
}

interface Featuredproducts{
  id:number,
  title:string,
  price:string,
  img_url:string,
}

let products: Iproducts[] = [
  {
    id: 1,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/featured-product-1.png",
    selling:"New",
  },
  {
    id: 2,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/featured-product-2.png",
    selling:"Sales",
    old_price:"$30",
  },
  {
    id: 3,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/featured-product-3.png",
  },
  {
    id: 4,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/featured-product-4.png",
  },
  {
    id: 5,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/Category-1.png",
    selling:"New",
  },
  {
    id: 6,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/ourproduct-6.png",
    selling:"Sales",
    old_price:"$30",
  },
  {
    id: 7,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/ourproduct-7.png",
  },
  {
    id: 8,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/featured-product-1.png",
  },
  {
    id: 9,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/Category-1.png",
    selling:"New",
  },
  {
    id: 10,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/featured-product-2.png",
    selling:"Sales",
    old_price:"$30",
  },
  {
    id: 11,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/featured-product-3.png",
  },
  {
    id: 12,
    title: "Library Stool Chair",
    price: "$20.00 USD",
    img_url: "/Category-3.png",
  },
];

let featuredproducts:Featuredproducts[] = [
  {
    id:1,
    title:"Library Stool Chair",
    price:"$99",
    img_url:"/ourproduct-7.png"
  },
  {
    id:2,
    title:"Library Stool Chair",
    price:"$99",
    img_url:"/featured-product-1.png"
  },
  {
    id:3,
    title:"Library Stool Chair",
    price:"$99",
    img_url:"/Category-3.png"
  },
  {
    id:4,
    title:"Library Stool Chair",
    price:"$99",
    img_url:"/featured-product-3.png"
  },
  
  {
    id:5,
    title:"Library Stool Chair",
    price:"$99",
    img_url:"/Category-1.png"
  },
]


let cart = <BsCartDash />;

function page() {
  const params = useParams();
  const id = params.id
  const item = products.find((item) => item.id === Number(id))
  if(!item){
    return <div>
      <h1 className='p-40 flex justify-center items-center'>Not found</h1>
    </div>
  }
    return (
      <div className="mt-20 mb-40">
        <div className="flex flex-wrap justify-center gap-14 mb-20">
          <div><Image src={item.img_url} alt={item.title} width={450} height={450} /></div>
          <div className="flex flex-col gap-y-5">
            <h1 className="font-medium text-5xl w-[300px]">{item.title}</h1>
            <button className="bg-[#32a3ad] px-2 py-1 text-white rounded-full mb-5 mt-2 w-[100px]">{item.price}</button>
            <p className="border-t-[2px] pt-5 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nullam tincidunt erat enim. Lorem ipsum dolor <br /> sit amet, consectetur adipiscing</p>
            <button className="bg-[#32a3ad] hover:bg-[#2b959e] px-5 py-2 text-white flex items-center gap-1 rounded-md w-[150px]"><span className="text-white">{cart}</span> Add To Cart</button>
          </div>
        </div>
        <div>
          <h1 className="text-center ml-0 md:text-start md:ml-32 font-bold text-2xl">Featured Products</h1>
          <div className="flex flex-wrap justify-center gap-7 mt-10">
            {
              featuredproducts.map((item) => {
                return (
                  <div key={item.id}>
                    <Image src={item.img_url} alt={item.title} width={200} height={200} />
                    <span className="flex justify-between items-center mt-2">
                      <p>{item.title}</p>
                      <p className="font-bold">{item.price}</p>
                    </span>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }


export default page
