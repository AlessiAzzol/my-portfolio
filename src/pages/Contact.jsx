
import { Typography, Card } from '@mui/material';
import resumeData from '../utils/resumeData.jsx';

function Contact() {
	return (
		<Card sx={{ padding: 3 }}>
			<Typography variant="h3">{resumeData.pages.contact.title}</Typography>
			<Typography variant="h5">{resumeData.pages.contact.subtitle}</Typography>
			<Typography >{resumeData.pages.contact.description}</Typography>
		</Card>



	);
}

export default Contact
