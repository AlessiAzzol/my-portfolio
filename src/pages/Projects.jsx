
import { Typography, Card, } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useLanguage } from '../context/LanguageContext.jsx';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from '@mui/material/styles/styled';
import Collapse from '@mui/material/Collapse';
import CardActions from '@mui/material/CardActions';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(() => ({
	marginLeft: 'auto',
	variants: [
		{
			props: ({ expand }) => !expand,
			style: {
				transform: 'rotate(0deg)',
			},
		},
		{
			props: ({ expand }) => !!expand,
			style: {
				transform: 'rotate(180deg)',
			},
		},
	],
}));

function Portfolio() {
	const { data } = useLanguage();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = (index) => {
		setExpanded((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};
	return (

		<Card sx={{ height: '100%', }}>

			<ArrowBackIosIcon fontSize='large' className="swiper-button-prev" />

			<Swiper
				modules={[Navigation]}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				slidesPerView={2}
				loop={true}
				grabCursor={true}
			>

				{data.pages.portfolio.projects.map((project, index) => (
					<SwiperSlide key={index}>
						<Card key={`projectBox` + index} sx={{

							margin: 3,
							backgroundColor: 'rgba(255, 255, 255, 0.6)',
							backgroundImage: 'none',
						}}>
							<CardHeader key={`header` + index}
								title={project.title}
								subheader={project.subheader}
							/>
							<CardMedia key={`media` + index}
								component="img"

								image={project.img}
							/>
							{/* <CardContent key={`shortBody` + index}>
								<Typography variant="body2" sx={{ color: 'text.secondary' }}>
									{project.shortDescription}
								</Typography>
							</CardContent> */}
							<CardActions disableSpacing>
								<IconButton key={`gitButton` + index} aria-label="github" href={project.reference}
									target="_blank">
									<GitHubIcon />
								</IconButton>
								{project.longDescription && (
									<ExpandMore
										expand={expanded[index]}
										onClick={() => handleExpandClick(index)}
										aria-expanded={expanded[index] || false}
										aria-label="show more"
									>
										<ExpandMoreIcon />
									</ExpandMore>
								)}
							</CardActions>
							<Collapse in={expanded[index] || false} timeout="auto" unmountOnExit>
								<CardContent key={`longBody` + index}>
									<Typography variant="body2" sx={{ color: 'text.secondary' }}>
										<p dangerouslySetInnerHTML={{ __html: project.longDescription }} />
									</Typography>
								</CardContent>
							</Collapse>
						</Card>
					</SwiperSlide>
				))
				}
			</Swiper >


			<ArrowForwardIosIcon fontSize='large' className="swiper-button-next" />

		</Card>


	);
}

export default Portfolio
