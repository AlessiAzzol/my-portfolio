import { Card, CardHeader, CardContent, CardActions, } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import SmsIcon from '@mui/icons-material/Sms';
import ContactPage from '../pages/Contact.jsx';
import Box from '@mui/material/Box';
import AnimatedFab from '../components/animations/AnimatedFab.jsx';
import AnimatedDialog from '../components/animations/AnimatedDialog.jsx';
import profile from '../assets/img/profile.jpg';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Profile(props) {
	const { data } = useLanguage();

	const theme = useTheme();
	const language = localStorage.getItem("language");

	const onButtonClick = () => {
		let fileName = "";
		if (language === "de") {
			fileName = "CV Azzolina - de.pdf";
		} else if (language === "it") {
			fileName = "CV Azzolina - eng.pdf";
		} else {
			fileName = "CV Azzolina - eng.pdf";
		}
		const pdfUrl = "/my-portfolio/" + fileName;
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = fileName;

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};



	const [openDialog, setOpen] = useState(false);


	const handleDialog = () => setOpen(!openDialog);



	const svgRef = useRef(null);
	const [size, setSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (!svgRef.current) return;

		const observer = new ResizeObserver(([entry]) => {
			const { width, height } = entry.contentRect;
			setSize({ width, height });
		});

		observer.observe(svgRef.current);

		return () => observer.disconnect();
	}, []);

	const { width, height } = size;

	const path = width && height ? `
			M 10,0 
			H ${width / 2} 
			Q ${width},0 ${width},${height / 2}  
			V ${height - 80} 
			Q ${width},${height - 70} ${width - 10},${height - 70}
			Q ${width - 75},${height - 75} ${width - 70},${height - 10}
			Q ${width - 70},${height} ${width - 80},${height} 
			H80		
			Q 70,${height} 70,${height - 10}	
			Q 70,${height - 70} 10, ${height - 70}
			H0
			V 0 			
			Z
		` : '';

	return (

		<>
			<Box
				sx={{
					position: 'absolute',
				}}
			>

				<Box
					sx={{
						position: 'absolute',
						top: 10,
						left: 0,
						width: '50vh',
						height: '100%',
						borderRadius: '0% 40% 40% 0% / 0% 50% 50% 0%',
						borderTop: `4px solid ${theme.custom.svgColor.secondary}`,
						borderRight: `4px solid ${theme.custom.svgColor.secondary}`,
						zIndex: 1,
					}}
				/>

				<Box
					component="img"
					src={profile}
					sx={{
						width: '50vh',

						position: 'relative',
						borderRadius: '0% 40% 40% 0% / 0% 50% 50% 0%',
						boxShadow: 15,

					}}
				/>
			</Box>


			<Box
				sx={{
					padding: 0,
					position: 'fixed',
					transform: 'translate(0%, 45%)',
				}}
				ref={svgRef}
			>

				<Box
					component="svg"
					preserveAspectRatio="xMaxYMax meet"
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						zIndex: 0,
						overflow: 'visible',


					}}

					xmlns="http://www.w3.org/2000/svg"
				>
					{path && (
						<path
							d={path}
							fill={theme.custom.btnColor.secondary}
							//opacity="0.4"
							filter="drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2))"
						/>
					)}
				</Box>

				<Box
					component="svg"
					preserveAspectRatio="xMaxYMax meet"
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						zIndex: 0,
						overflow: 'visible',

					}}

					xmlns="http://www.w3.org/2000/svg"
				>
					{path && (
						<>
							<path
								d={path}
								stroke={theme.custom.btnColor.primary}
								strokeWidth={4}
								fill='none'
								transform="translate(-10 10)"
								filter="drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2))"
							/>

						</>
					)}
				</Box>
				<Box
					sx={{
						position: 'relative',
						width: '100%',
						height: '100%',
						zIndex: 1,
					}}
				>
					<CardHeader
						title={data.profile.title} subheader={data.profile.subheader}
					/>
					<CardContent sx={{ padding: 0, fontSize: 7, margin: 0, }}>
						<VerticalTimeline children={data.profile.menu} />
					</CardContent>
					<CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
						<AnimatedFab onClick={handleDialog} sx={{ borderTopLeftRadius: '15%', borderTopRightRadius: '50%', }}>
							<SmsIcon></SmsIcon>
						</AnimatedFab>

						<AnimatedFab onClick={onButtonClick} >
							<FileDownloadIcon />
						</AnimatedFab>

					</CardActions>
				</Box>
			</Box>





			<AnimatedDialog
				open={openDialog}
				onClick={handleDialog}
			>
				<ContactPage />

			</AnimatedDialog>
		</>
	);
};

export default Profile