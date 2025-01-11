import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCartDash } from "react-icons/bs";

interface Iproducts {
  id: number;
  title: string;
  price: string;
  old_price?: string;
  img_url: string;
  selling?: string;
}

const products: Iproducts[] = [
  {
    id: 1,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-1.png",
    selling: "New",
  },
  {
    id: 2,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-2.png",
    selling: "Sales",
    old_price: "$30",
  },
  {
    id: 3,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-3.png",
  },
  {
    id: 4,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-4.png",
  },
  {
    id: 5,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/Category-2.png",
    selling: "New",
  },
  {
    id: 6,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/ourproduct-6.png",
    selling: "Sales",
    old_price: "$30",
  },
  {
    id: 7,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/ourproduct-7.png",
  },
  {
    id: 8,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-1.png",
  },
  {
    id: 9,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/Category-1.png",
    selling: "New",
  },
  {
    id: 10,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-2.png",
    selling: "Sales",
    old_price: "$30",
  },
  {
    id: 11,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-3.png",
  },
  {
    id: 12,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/Category-3.png",
  },
];

interface Instaproducts {
  id: number;
  img_url: string;
}

const instaproducts : Instaproducts[] =[
  {
    id:1,
    img_url:"/Category-2.png",
  },
  {
    id:2,
    img_url:"/Category-1.png",
  },
  {
    id:3,
    img_url:"/featured-product-2.png",
  },
  {
    id:4,
    img_url:"/featured-product-1.png",
  },
  {
    id:5,
    img_url:"/featured-product-3.png",
  },
  {
    id:6,
    img_url:"/Category-3.png",
  },
]



const cart = <BsCartDash />;

function Products() {
  return (
    <div className="mt-32 mb-40">
      <h1 className="font-medium text-center ml-0 md:text-start md:ml-40 text-3xl mb-10 mt-10">
        All Products
      </h1>
      <div className="flex flex-wrap justify-center gap-5 ml-10">
        {products.map((data) => {
          return (
            
            <div key={data.id} className="relative overflow-hidden">
              <Link href={`/ourproducts/${data.id}`}>
                {data.selling &&
                  (data.id === 1 ||  data.id === 2 ||  data.id === 5 ||  data.id === 6 ||  data.id === 9 ||  data.id === 10) && (
                    <span  className={`absolute top-3 left-4 px-3 py-1 text-xs text-white ${    data.selling === "Sales"      ? "bg-orange-500"      : "bg-green-500"  }`}>  {data.selling}</span>
                  )}

                <Image src={data.img_url} alt="img" width={250} height={250} className="transition-transform duration-300 hover:scale-110"
                ></Image>
                </Link>
            
              <div className="flex items-center">
                <span className="mt-5">
                  <p className="font-sans hover:text-cyan-500">{data.title}</p>
                  <span className="flex gap-2">
                    <p className="font-bold">{data.price}</p>
                    <p className="font-medium text-gray-400 line-through">
                      {data.old_price}
                    </p>
                  </span>
                </span>
               <Link href={`/ourproducts/${data.id}`} className=" bg-gray-300 hover:bg-cyan-500 hover:text-white p-2 ml-16 rounded-lg mt-5">               
                  {cart}
                  </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-40">
        <h1 className="text-2xl md:text-4xl font-medium">Or Subscribe To The Newsletter</h1>
        <span className="flex gap-5 justify-center mt-10">
        <input type="text" placeholder="Email Address..." className="border-b-gray-500 border-b-[3px] w-[35%] pl-2" />
        <button className="font-medium text-sm border-b-gray-500 border-b-[3px]">SUBMIT</button>
        </span>
        <h1 className="text-2xl md:text-4xl font-medium mt-14">Follow Products And Discounts On Instagram</h1>
        <div className="flex flex-wrap justify-center gap-5 mt-16" >
          {
            instaproducts.map((data) => {
              return(
                <div key={data.id}>
                  <Image src={data.img_url} alt="img" width={150} height={150}/>
                </div>
              )
            })
          }
        </div>
        
      </div>
    </div>
  );
}

export default Products;
