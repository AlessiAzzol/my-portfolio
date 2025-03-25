import { Typography, Card, CardContent, CardHeader, Avatar } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';


function About() {
	const { data } = useLanguage();

	return (
		<Card sx={{ height: '100%', boxShadow: 'none', background: 'transparent', backdropFilter: 'none' }} >
			<CardHeader
				avatar={<Avatar sx={{ fontFamily: 'Bonbon', fontWeight: 'bold', fontSize: 'xx-large', }}>A</Avatar>}
				title={data.pages.home.section1.title}
			/>
			<CardContent>
				<Typography >{data.pages.home.section1.description}</Typography>
			</CardContent>

		</Card >
	);
}

export default About