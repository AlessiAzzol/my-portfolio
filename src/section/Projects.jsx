
import { Card, } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}



function Projects() {
	const { data } = useLanguage();

	function imgUrl() {
		const id = rand(1, 200);
		return `https://picsum.photos/id/${id}/1920/1080`;
	}
	return (

		<Card>

			<Swiper
				modules={[Autoplay,]}
				loop={true}
				slidesPerView={1}
				autoplay={{ delay: 5000 }}
			>

				{data.pages.portfolio.projects.map((project, index) => (
					<SwiperSlide key={index}>
						<img className="img" src={imgUrl()} alt="" style={{ width: '100%' }} />
					</SwiperSlide>
				))
				}
			</Swiper >

		</Card>


	);
}

export default Projects
