import { Typography, Card, CardHeader, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import Avatar from '@mui/material/Avatar';
import { useLanguage } from '../context/LanguageContext.jsx';

function Jobs() {
	const { data } = useLanguage();
	return (
		<Card >
			<CardHeader
				avatar={<Avatar><WorkHistoryIcon /></Avatar>}
				title={data.pages.resume.experience.title}
			/>
			<CardContent>
				<VerticalTimeline children={data.pages.resume.experience.sectionLong} />
			</CardContent>
		</Card >
	);
}

export default Jobs