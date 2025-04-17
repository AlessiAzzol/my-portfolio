
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import profile from '../assets/img/profile.jpg';
import Fab from '@mui/material/Fab';
import { smIcons } from '../data/resumeData.jsx';

function Home_sm() {
	const { data } = useLanguage();

	const theme = useTheme();
	const language = localStorage.getItem("language");


	return (
		<Box
			sx={{
				position: 'relative',
				/* width: '100vw',
				height: '100vh', */
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',

			}}
		>
			<Box sx={{
				width: '45vh',
				height: '45vh',
				//	clipPath: 'circle(50%)',
				overflow: 'hidden',
				filter: 'drop-shadow(10px 10px 10px  rgba(0, 0, 0, 0.3))',
				//border: `5px solid ${theme.custom.btnColor.primary}`,
				objectFit: 'cover',
				left: '-10%',

			}}>
				<Box
					component="img"
					src={profile}
					alt="profile"
					sx={{
						width: '40vh',
						height: '40vh',
						clipPath: 'circle(50%)',
						overflow: 'hidden',
						boxShadow: 10,
						//border: `5px solid ${theme.custom.btnColor.primary}`,
						position: 'absolute',
						objectFit: 'cover',
						left: '-10%',

					}}
				>
				</Box>
			</Box>

			<Box
				sx={{
					margin: 0,
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					height: '50vh',
					justifyContent: 'center',
				}}
			>
				{smIcons.map((item, i) => (
					<Box
						key={i}
						sx={{
							left: `${Math.cos((i * Math.PI) / 5) * 10}vh`,
							//top: `${Math.cos(i / 4 * Math.PI) * -5}vh`,
							padding: '6px 0',
							margin: 0,
							transform: `translateX(-200%)`,
							position: 'relative',
						}}
					>

						<Fab>{item.icon}</Fab>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Home_sm