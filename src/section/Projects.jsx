
import { Card, CardContent, } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { CardActions, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CardHeader, Avatar } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import AnimatedFab from '../components/animations/AnimatedFab.jsx';
import { useState } from 'react';
import AnimatedDialog from '../components/animations/AnimatedDialog.jsx';
import Portfolio from '../pages/Portfolio.jsx';
import CustomCard from '../components/card/CustomCard.jsx';




function Projects() {
	const { data } = useLanguage();

	const [openDialog, setOpen] = useState(false);
	const handleDialog = () => setOpen(!openDialog);


	return (
		<CustomCard>
			<CardContent >
				<Swiper
					modules={[Autoplay,]}
					loop={true}
					slidesPerView={1}
					autoplay={{ delay: 5000 }}
				>

					{data.pages.portfolio.projects.map((project, index) => (
						<SwiperSlide key={index}>
							<Box
								component="img"
								src={project.img} alt="" style={{
									width: '100%',

								}} />
						</SwiperSlide>
					))
					}
				</Swiper >

			</CardContent>
			<CardActions sx={{ justifyContent: 'space-between', }}>
				<CardHeader
					avatar={<Avatar><WorkIcon /></Avatar>}
					title={data.pages.portfolio.subtitle}
				/>

				<AnimatedFab onClick={handleDialog}>
					<AddIcon />
				</AnimatedFab>
			</CardActions >

			<AnimatedDialog
				open={openDialog}
				onClick={handleDialog}
			>
				<Portfolio />

			</AnimatedDialog>




		</CustomCard>


	);
}

export default Projects
