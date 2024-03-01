import React from 'react'
import Img1 from "../../assets/BestSellingPhoto/ryan2.jpg"
import Img2 from "../../assets/BestSellingPhoto/ryan.jpg"
import Img3 from "../../assets/BestSellingPhoto/ryan3.jpg"
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id:1,
        img:Img1,
        title: "Women Jacket",
        description: "Floor here sign my had yore. Thy meaninglittle silken kind meant into though form both. One i sat for be. Being and.",
    },
    {
        id:2,
        img:Img2,
        title: "Men Jacket",
        description: "Floor here sign my had yore. Thy meaninglittle silken kind meant into though form both. One i sat for be. Being and.",
    },
    {
        id:3,
        img:Img3,
        title: "Women shirt",
        description: "Floor here sign my had yore. Thy meaninglittle silken kind meant into though form both. One i sat for be. Being and.",
    },
]

const BestSelling = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='container'>
        <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-primary'>Best Selling Products</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Sellers</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis non animi illo laborum inventore eius?</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data)=> (
                        <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                            <div className='h-[100px]'>
                                <img className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' src={data.img} alt="" />
                            </div>
                            <div className='p-4 text-center'>
                              <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                              </div>
                              <h1 className='text-xl font-bold'>{data.title}</h1>
                              <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                              <button onClick={handleOrderPopup} className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BestSelling