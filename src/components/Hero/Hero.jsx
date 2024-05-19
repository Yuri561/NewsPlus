import React from 'react';
import './Hero.css';
// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import Banner1 from '../../img/banner1.jpg'

const Hero = () => {
  return (
    <div className=" container hero-container my-4">
      <swiper-container
        direction={'horizontal'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <swiper-slide>
          <img src={Banner1} alt="" 
          style={{width: '30rem'}}/>
        </swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        
      </swiper-container>
    </div>
  );
}

export default Hero;
