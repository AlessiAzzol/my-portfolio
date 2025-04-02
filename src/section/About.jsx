import { Typography, Card, CardContent, CardHeader, Avatar } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';


function About() {
	const { data } = useLanguage();

	return (
		<Card sx={{ height: '100%', }}>
			<CardHeader sx={{ background: 'transparent', }}
				avatar={<Avatar sx={{ fontFamily: 'Bonbon', fontWeight: 'bold', fontSize: 'xx-large', }}>A</Avatar>}
				title={data.pages.home.section1.title}
			/>
			<CardContent sx={{ background: 'transparent' }}>
				<Typography >{data.pages.home.section1.description}</Typography>
			</CardContent>

		</Card >
	);
}

export default About