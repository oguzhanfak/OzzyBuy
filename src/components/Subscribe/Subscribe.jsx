import React from 'react'
import banner from "../../assets/bannerPater.jpg"

const bannerImg = {
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    weight:"100%",
}

const Subscribe = () => {
  return (
    < div data-aos="zoom-in" className='bg-gray-100 dark:bg-gray-800 text-white' style={bannerImg}>
     <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Want to get restock alerts?</h1>
            <input type="text" data-aos="fade-up" placeholder='Enter your email'
            className='w-full p-3' />
        </div>
     </div>
    </div>
  )
}

export default Subscribe