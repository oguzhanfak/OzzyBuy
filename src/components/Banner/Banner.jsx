import React from 'react'
import bannerImg from "../../assets/banner.jpg"
import { CiLock } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          <div data-aos="zoom-in">
    <img src={bannerImg} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'/>
           </div>
           <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fed-up" className='text-3xl sm:text-4xl font-bold'>Summer Sale upto 40% Off</h1>
            <p data-aos="fed-up" className='text-sm text-gray-500 tracking-wide leading-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe natus velit molestias blanditiis consectetur impedit sequi hic, modi error quaerat harum quis eius!
            </p>
            <div  className='flex flex-col gap-4'>
              <div data-aos="fed-up" className='flex items-center gap-4'>
                <CiLock className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
              <p>Quality Products</p>
              </div>
              <div data-aos="fed-up" className='flex items-center gap-4'>
                <FaTruckFast className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400"/>
              <p>Fast Delivery</p>
              </div>
              <div data-aos="fed-up" className='flex items-center gap-4'>
                <MdOutlinePayments className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
              <p>Easy Payment Method</p>
              </div>
              <div data-aos="fed-up" className='flex items-center gap-4'>
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"/>
              <p>Get Offers</p>
              </div>
            </div>
           </div>
         </div>
        </div>
    </div>
  )
}

export default Banner