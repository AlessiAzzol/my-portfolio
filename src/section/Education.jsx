import { Card, CardHeader, CardContent, CardActions, Fab } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import SchoolIcon from '@mui/icons-material/School';
import Avatar from '@mui/material/Avatar';
import { useLanguage } from '../context/LanguageContext.jsx';
import AddIcon from '@mui/icons-material/Add';

function Education() {
	const { data } = useLanguage();
	return (
		<Card sx={{ height: '100%', }}>
			<CardHeader
				avatar={<Avatar><SchoolIcon /></Avatar>}
				title={data.pages.resume.education.title}
			/>
			<CardContent>
				<VerticalTimeline children={data.pages.resume.education.section} />
			</CardContent>
			<CardActions sx={{ float: 'right', display: 'flex', alignItems: 'flex-end' }}>
				<Fab >
					<AddIcon />
				</Fab>
			</CardActions>
		</Card >
	);
}

export default Education