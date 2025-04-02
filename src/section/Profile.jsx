import { Card, CardHeader, CardContent, CardActions, } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import ContactPage from '../pages/Contact.jsx';
import React from 'react';
import Box from '@mui/material/Box';
import AnimatedFab from '../components/animations/AnimatedFab.jsx';
import AnimatedDialog from '../components/animations/AnimatedDialog.jsx';
import { useState } from 'react';

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

	return (

		<>
			<Card sx={{
				padding: 0,
				position: 'fixed',
				width: '50vh',
				borderRadius: '0% 50% 0% 0% / 100% 50% 50% 0%;',
				transform: 'translate(0%, 50%)',
			}}>
				<CardHeader
					sx={{
						background: `linear-gradient(to top, ${theme.custom.cardBackground}, rgba(255, 255, 255, 0.2))`,
					}}
					title={data.profile.title} subheader={data.profile.subheader} />
				{/* <Avatar sx={{ marginTop: "-25px", marginLeft: "10px", fontFamily: 'Bonbon', fontWeight: 'bold', fontSize: 'xx-large', }}>A</Avatar> */}
				<CardContent sx={{ padding: 0, fontSize: 7, margin: 0, borderBottomRightRadius: 16, borderBottomLeftRadius: 16, }}>
					<VerticalTimeline children={data.profile.menu} />
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 8px', }}>
					<AnimatedFab onClick={handleDialog}>
						<SmsIcon></SmsIcon>
					</AnimatedFab>
					<Box sx={{
						'--bck': (theme) => theme.custom.cardBackground,
						width: '60%',
						height: '100%',
						background: 'var(--bck)',
						borderBottomRightRadius: 20,
						borderBottomLeftRadius: 20,
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
						},
						'&::after': {
							content: '""',
							position: 'absolute',
							backgroundColor: 'transparent',
							left: '-60px',
							height: '35px',
							width: '60px',
							borderTopRightRadius: 30,
							boxShadow: ' 30px 0 0 0 var(--bck)',
						}
					}}></Box>

					<AnimatedFab onClick={onButtonClick}>
						{data.profile.iconBtn}
					</AnimatedFab>

				</CardActions>
			</Card>

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