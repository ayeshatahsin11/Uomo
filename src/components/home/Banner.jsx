"use client"
import { bannerData } from '@/app/data/banner.data'
import Link from 'next/link'
import Slider from "react-slick";
import React from 'react'
import "slick-carousel/slick/slick.css";

const Banner = () => {
     let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
   <>
   <section>
     <Slider {...settings}>

        {
    
    bannerData?.map((item)=>(
<Link href={item.url} key={item.id}>
 
 <img
    src={item.image.src}         // ekhane image object er vitorer src er moddhe stored
    className='w-full h-auto'
    alt="banner images"
 />
 

</Link>
    ))
}
     </Slider>



   </section>
   </>
  )
}

export default Banner

