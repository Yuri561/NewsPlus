import React from 'react';
import './GetStarted.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import Banner1 from '../../img/banner1.jpg';
import Banner2 from '../../img/banner2.jpg';
import Banner3 from '../../img/banner3.jpg';
import Banner4 from '../../img/banner4.jpg';
import Banner5 from '../../img/banner5.jpg';
import Banner6 from '../../img/banner6.jpg';
import Banner7 from '../../img/banner7.jpg';
import Banner8 from '../../img/banner8.jpg';
import Banner9 from '../../img/banner9.jpg';
import Banner10 from '../../img/banner10.jpg';
import Banner11 from '../../img/banner11.jpg';
import Banner12 from '../../img/banner12.jpg';
import Banner13 from '../../img/banner13.jpg';
import Banner14 from '../../img/banner14.jpg';
import Banner15 from '../../img/banner15.jpg';
import Banner16 from '../../img/banner16.jpg';
import Banner17 from '../../img/banner17.jpg';
import Banner18 from '../../img/banner18.jpg';
import Banner19 from '../../img/banner19.jpg';
import Banner20 from '../../img/banner161.jpg';
import Banner21 from '../../img/banner21.jpg';
import Banner22 from '../../img/banner22.jpg';
import Banner23 from '../../img/banner23.jpg';
import Banner24 from '../../img/banner24.jpg';
import Banner25 from '../../img/banner25.jpg';
import Banner26 from '../../img/banner26.jpg';
import Banner27 from '../../img/banner27.jpg';
import Banner28 from '../../img/banner28.jpg';
import Banner29 from '../../img/banner29.jpg';
import Banner30 from '../../img/banner30.jpg';
import Banner31 from '../../img/banner31.jpeg';
import Banner32 from '../../img/banner32.jpg';
import Banner33 from '../../img/banner33.jpg';
import Banner34 from '../../img/banner34.jpg';
import Banner35 from '../../img/banner35.jpg';
import Banner36 from '../../img/banner36.jpg';

const banners1 = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, Banner10, Banner20, Banner21, Banner22, Banner23, Banner24, Banner25, Banner26, Banner31, Banner32, Banner33, Banner36];
const banners2 = [Banner11, Banner12, Banner13, Banner14, Banner15, Banner16, Banner17, Banner18, Banner19, Banner20, Banner26, Banner27, Banner28, Banner29, Banner30, Banner34, Banner35];

const GetStarted = () => {
  return (
    <section className="g-wrapper w-100">
      <div className="paddings innerWidth g-container container-fluid">
        <div className="flexColCenter inner-container">
          <span className="primaryText text-light">Share your side of the World</span>
          <button className="flexCenter button animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <a href="mailto:hazelirvin@gmail.com" className='text'>Get Started</a>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            pagination={{ clickable: true }}
            centeredSlides={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            className="mySwiper"
          >
            {banners1.map((banner, index) => (
              <SwiperSlide key={index}>
                <img src={banner} alt={`Slide ${index + 1}`} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {banners2.map((banner, index) => (
              <SwiperSlide key={index}>
                <img src={banner} alt={`Slide ${index + 1}`} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
