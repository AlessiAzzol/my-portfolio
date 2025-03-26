import { Card } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import React from 'react';
import { Dialog, DialogActions, Button, Slide } from '@mui/material';
import ContactPage from '../pages/Contact.jsx';

function Contact() {
	const { data } = useLanguage();

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
				height: '100%',
				padding: 3,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
			}} onClick={handleClickOpen}>
				<PhoneEnabledIcon sx={{ fontSize: '60px' }} />

			</Card >


		</>
	);
}

export default Contact