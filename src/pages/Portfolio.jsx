
import { Typography, Card } from '@mui/material';
import resumeData from '../utils/resumeData.jsx';

function Portfolio() {
	return (

		<Card sx={{ padding: 3 }}>
			<Typography variant="h3">{resumeData.pages.portfolio.title}</Typography>
			<Typography variant="h5">{resumeData.pages.portfolio.subtitle}</Typography>
			<Typography >{resumeData.pages.portfolio.description}</Typography>
		</Card>



	);
}

export default Portfolio
