import React from 'react'
import Image1 from '../../assets/women.jpg'
import Image2 from '../../assets/family.jpg'
import Image3 from '../../assets/discount.jpg'
import Slider from "react-slick"

const ImageList = [
{
    id:1,
    img: Image1,
    title: "Upto 30% off on all Women's Wear",
    description: "Only no bird silence of nodded of of this distant the, above lonely methought spoken chamber flung chamber on in thrilled. The explore i unhappy the sat just. Then the. ",
},
{
    id:2,
    img: Image2,
    title: "Upto 40% off on all Men's Wear",
    description: " With as see that utters let thy explore doubting, see wide a but in master to his tell ominous, you dreaming she door the unhappy plutonian, unseen but expressing if.",
},
{
    id:3,
    img: Image3,
    title: "Upto 70% off on all Products Sale",
    description: " Stepped is uttered back or my ease there for napping craven. With so meant no only will for in tempest. Sitting stately clasp once word but be name no linking,.",
},
]

const Hero = ({handleOrderPopup}) => {
    var settings = {
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoPlaySpeed:4000,
        cssEase: "ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    }
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div>
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {ImageList.map((data) => (
                   <div>
                   <div className='grid grid-cols-1 sm:grid-cols-2'>
                       <div className='relative z-10 flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                           <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                          <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm'>{data.description}</p>
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                            <button onClick={handleOrderPopup} className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                        </div>
                       </div>
                    <div className='order-1 sm:order-2'>
                       <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                           <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-120'/>
                       </div>
                    </div>
                   </div>
                </div>
                ))}
           
            </Slider>
        </div>
    </div>
  )
}

export default Hero