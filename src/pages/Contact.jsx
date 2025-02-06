
import { Typography, Card } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';

function Contact() {
	const { data } = useLanguage();
	return (
		<Card sx={{ padding: 3 }}>
			<Typography variant="h3">{data.pages.contact.title}</Typography>
			<Typography variant="h5">{data.pages.contact.subtitle}</Typography>
			<Typography >{data.pages.contact.description}</Typography>
		</Card>



	);
}

export default Contact
