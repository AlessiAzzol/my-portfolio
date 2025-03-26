import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Avatar } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from '@mui/material';
import { Fab } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import { Dialog, DialogActions, Slide } from '@mui/material';
import ContactPage from '../pages/Contact.jsx';
import React from 'react';

function Profile(props) {
	const { data } = useLanguage();
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


	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	return (

		<>
			<Card sx={{
				padding: 0,
				position: 'fixed',
				width: '50vh',
				borderRadius: '0% 50% 0% 0% / 100% 50% 50% 0%;',
				transform: 'translate(0%, 50%)',
			}}>
				<CardHeader title={data.profile.title} subheader={data.profile.subheader} />
				{/* <Avatar sx={{ marginTop: "-25px", marginLeft: "10px", fontFamily: 'Bonbon', fontWeight: 'bold', fontSize: 'xx-large', }}>A</Avatar> */}
				<CardContent sx={{ padding: 0, fontSize: 7, margin: 0 }}>
					<VerticalTimeline children={data.profile.menu} />
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Fab aria-label={data.profile.textBtn} onClick={handleClickOpen}>
						<SmsIcon></SmsIcon>
					</Fab>

					<Fab aria-label={data.profile.textBtn} onClick={onButtonClick}>
						{data.profile.iconBtn}
					</Fab>

				</CardActions>
			</Card>

			<Dialog
				open={open}
				slots={{ transition: Transition }}
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<ContactPage />
				<DialogActions>
					<Button onClick={handleClose}>Back</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Profile