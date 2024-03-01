import React from 'react'
import Img1 from "../../components/photos/istockphoto-1328747403-612x612.jpg"
import Img2 from "../../components/photos/istockphoto-916278404-612x612.jpg"
import Img3 from "../../components/photos/istockphoto-1446098147-612x612.jpg"
import Img4 from "../../components/photos/istockphoto-888019382-612x612.jpg"
import Img5 from "../../components/photos/istockphoto-1154649405-612x612.jpg"
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Goggles",
        rating:4.8,
        author:"blue",
        aosDelay:"200",
    },
    {
        id:2,
        img:Img2,
        title:"Women Ethnic",
        rating:4.3,
        author:"white",
        aosDelay:"0",
    },
    {
        id:3,
        img:Img3,
        title:"Women western",
        rating:4.9,
        author:"black",
        aosDelay:"600",
    },
    {
        id:4,
        img:Img4,
        title:"Printed T-Shirt",
        rating:4.4,
        author:"pink",
        aosDelay:"800",
    },
    {
        id:5,
        img:Img5,
        title:"Fashion T-Shirt",
        rating:4.1,
        author:"Yellow",
        aosDelay:"400",
    },
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Today's Deals</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis non animi illo laborum inventore eius?</p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                 {
                    ProductsData.map((data)=> (
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3 '>
                            <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))
                 }
                </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>Review</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products