
"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "./MainSlider.css"




const MainSlider = () => {


  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={true}

      >
        <SwiperSlide>

          <div className="test relative h-[500px]">
            <div className='absolute inset-0 bg-green-600/50'>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="test relative h-125">
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-green-600/50'>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="test relative h-125">
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-green-600/50'>
            </div>
          </div>

        </SwiperSlide>


      </Swiper>


    </div>
  )
}

export default MainSlider