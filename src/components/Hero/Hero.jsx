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
		<div className="hero-wrapper w-100 justify-content-center">
		<div className='container-fluid mt-2'>
			<h1 className='text-center mt-3'>Discover Stories That Matter</h1>
			<Swiper
				direction={'horizontal'}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper'>
				{[
					{ img: Banner1, title: 'Political Differences', desc: 'Explore the impact of political differences on global societies.' },
					{ img: Banner2, title: 'Climate Diversity', desc: 'Discover how diverse climates shape the lives and cultures of communities.' },
					{ img: Banner3, title: 'Activist Revolutions', desc: 'Understand the roots and consequences of activist revolutions around the world.' },
					{ img: Banner4, title: 'Human Rights Battles', desc: 'Investigate the ongoing battles for human rights and equality.' },
					{ img: Banner5, title: 'Economic Disparities', desc: 'Learn about the economic disparities between different regions and their effects.' },
					{ img: Banner6, title: 'Technological Influence', desc: 'Examine the influence of technology on social and political movements.' },
					{ img: Banner7, title: 'Environmental Issues', desc: 'Delve into environmental issues and the efforts to combat climate change.' },
					{ img: Banner8, title: 'Cultural Renaissance', desc: 'Witness the cultural renaissance spurred by social and political upheavals.' },
				].map((banner, index) => (
					<SwiperSlide key={index}>
						<div className='slide-content'>
							<img src={banner.img} alt='' className='slide-image' style={{ width: '100%' }} />
							<div className='text-content'>
								<h2>{banner.title}</h2>
								<p>{banner.desc}</p>
								<button className='slide-button'>Learn More</button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>

		</div>
	);
};

export default Hero;
