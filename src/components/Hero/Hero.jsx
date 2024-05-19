import React from 'react';
import './Hero.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import Banner1 from '../../img/banner1.jpg';
import Banner2 from '../../img/banner2.jpg';
import Banner3 from '../../img/banner3.jpg';
import Banner4 from '../../img/banner4.jpg';
import Banner5 from '../../img/banner5.jpg';
import Banner6 from '../../img/banner6.jpg';
import Banner7 from '../../img/banner7.jpg';
import Banner8 from '../../img/banner8.jpg';

const Hero = () => {
	return (
		<div className='container hero-container my-4'>
			<Swiper
				direction={'horizontal'}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper'>
				{[
					Banner1,
					Banner2,
					Banner3,
					Banner4,
					Banner5,
					Banner6,
					Banner7,
					Banner8,
				].map((banner, index) => (
					<SwiperSlide key={index}>
						<div className='slide-content'>
              <img src={banner} alt='' className='slide-image' style={{width: '100%', height: '100%'}} />
							<div className='text-content'>
								<h2>Slide {index + 1} Title</h2>
								<p>
									This is a description for slide {index + 1}. Add some
									interesting content here.
								</p>
								<button className='slide-button'>Learn More</button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
