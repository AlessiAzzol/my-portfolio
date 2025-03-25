import { Card, CardHeader, CardContent, CardActions, Fab } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Avatar from '@mui/material/Avatar';
import { useLanguage } from '../context/LanguageContext.jsx';
import AddIcon from '@mui/icons-material/Add';

function WorkExperience() {
	const { data } = useLanguage();
	return (
		<Card sx={{ height: '100%', }}>
			<CardHeader
				avatar={<Avatar><WorkHistoryIcon /></Avatar>}
				title={data.pages.resume.experience.title}
			/>
			<CardContent>
				<VerticalTimeline children={data.pages.resume.experience.section} />
			</CardContent>
			<CardActions sx={{ float: 'right', display: 'flex', alignItems: 'flex-end' }}>
				<Fab >
					<AddIcon />
				</Fab>
			</CardActions>
		</Card >

	);
}

export default WorkExperience