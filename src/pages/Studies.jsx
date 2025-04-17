import { Card, CardHeader, CardContent } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import SchoolIcon from '@mui/icons-material/School';
import Avatar from '@mui/material/Avatar';
import { useLanguage } from '../context/LanguageContext.jsx';

function Studies() {
	const { data } = useLanguage();
	return (
		<Card>
			<CardHeader
				avatar={<Avatar><SchoolIcon /></Avatar>}
				title={data.pages.resume.education.title}
			/>
			<CardContent>
				<VerticalTimeline children={data.pages.resume.education.sectionLong} />
			</CardContent>
		</Card >

	);
}

export default Studies