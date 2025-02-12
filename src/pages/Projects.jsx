
import { Typography, Card } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';

function Portfolio() {
	const { data } = useLanguage();
	return (

		<Card sx={{
			padding: 3,
			flexGrow: 1,
			overflow: "auto",
			maxHeight: "82vh",
		}}>
			<Typography variant="h3">{data.pages.portfolio.title}</Typography>
			<Typography variant="h5">{data.pages.portfolio.subtitle}</Typography>
			<Typography >{data.pages.portfolio.description}</Typography>
		</Card>



	);
}

export default Portfolio
