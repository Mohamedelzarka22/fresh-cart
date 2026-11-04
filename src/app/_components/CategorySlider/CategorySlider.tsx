
 "use client"

import { Category } from '@/types/category.t'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/navigation";
import Image from 'next/image'

const CategorySlider = ({ categories }: { categories: Category[] }) => {
  return (
    <div className='w-full'>
         <Swiper
           spaceBetween={0}
           slidesPerView={4}
           modules={[Navigation]}
           navigation={true}
   
         >
          {categories.map(function(category:Category ,idx:number){
            return <SwiperSlide key={idx}>
            <Image width={500} height={500}  src={category.image} className='w-full h-[200] object-cover' alt="" />
            <p className='text-lg mt-2 my-6'>{category.name}</p>
   
           </SwiperSlide>
          })}
           
       
         </Swiper>
   
   
       </div>
  )
}

export default CategorySlider