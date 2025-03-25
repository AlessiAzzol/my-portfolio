import { Card } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function Contact() {
	const { data } = useLanguage();
	return (

		<Card sx={{
			height: '100%',
			padding: 3,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
		}} >
			<PhoneEnabledIcon sx={{ fontSize: '60px' }} />

		</Card >

	);
}

export default Contact