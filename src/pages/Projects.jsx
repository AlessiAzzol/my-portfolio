
import { Typography, Card } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';

function Portfolio() {
	const { data } = useLanguage();
	return (

		<Card sx={{
			margin: 2,
			padding: 3,
			overflow: "auto",
			maxHeight: "75vh",
		}}>
			<Typography variant="h3">{data.pages.portfolio.title}</Typography>
			<Typography variant="h5">{data.pages.portfolio.subtitle}</Typography>
			<Typography >{data.pages.portfolio.description}</Typography>
		</Card>



	);
}

export default Portfolio
