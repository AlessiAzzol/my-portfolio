
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

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}



function Projects() {
	const { data } = useLanguage();

	const [openDialog, setOpen] = useState(false);
	const handleDialog = () => setOpen(!openDialog);


	return (
		<Card>
			<CardContent sx={{ borderBottomRightRadius: 20, }} >
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
			<CardActions>
				<Box sx={{
					'--bck': (theme) => theme.custom.cardBackground,
					width: '85%',
					height: '100%',
					background: 'var(--bck)',
					borderBottomRightRadius: 20,
					position: 'relative',
					'&::before': {
						content: '""',
						position: 'absolute',
						backgroundColor: 'transparent',
						right: '-60px',
						height: '35px',
						width: '60px',
						borderTopLeftRadius: 30,
						boxShadow: ' -30px 0 0 0 var(--bck)',
					}
				}}>
					<CardHeader sx={{ borderBottomRightRadius: 20, background: 'transparent', }}
						avatar={<Avatar><WorkIcon /></Avatar>}
						title={data.pages.portfolio.subtitle}
					/>
				</Box>
				<AnimatedFab onClick={handleDialog}>
					<AddIcon />
				</AnimatedFab>


				<AnimatedDialog
					open={openDialog}
					onClick={handleDialog}
				>
					<Portfolio />

				</AnimatedDialog>


			</CardActions >

		</Card>


	);
}

export default Projects
