import Image from 'next/image';
import React from 'react'

interface Categories {
    id: number;
    title: string;
   products:string,
    img_url: string;
  }

  let categories:Categories [] = [
    {
      id: 1,
      title: "Wing Chair",
      img_url: "/Category-1.png",
      products:"3,584 Products",
    },
    {
        id: 2,
        title: "Wooden Chair",
        img_url: "/Category-2.png",
        products:"157 Products",
    },
    {
        id: 3,
        title: "Desk Chair",
        img_url: "/Category-3.png",
        products:"154 Products",
    },
  ]

function Ourcategories() {
  return (
    <div className='mt-20 mb-10'>
      <h1 className='font-medium text-2xl mb-7 ml-36 mt-10'>Top Categories</h1>
          <div className='flex flex-wrap gap-14 justify-center'>
            {
                categories.map((category) =>{
                    return(
                        <div key={category.id}  className='relative overflow-hidden rounded-lg'>
                            <span className='flex flex-col gap-y-2 absolute top-[220px] w-full bg-gradient-to-b from-gray-500/70 to-black/80 z-10 text-white p-5 rounded-b-lg '>      
                <p className='font-sans text-xl'>{category.title}</p>
                <p className='font-bold text-xs'>{category.products}</p>
              </span>      
              <Image src={category.img_url} alt='' width={300} height={300} className='inset-0 z-0 transition-transform duration-300 hover:scale-110 rounded-lg'/>
                     </div>   
                    
                    )
                })
            }  
            </div>           
          
    </div>
  )
}

export default Ourcategories
