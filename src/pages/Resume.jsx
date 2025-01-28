import { Typography, Card } from '@mui/material';
import resumeData from '../utils/resumeData.jsx';
import Grid from '@mui/material/Grid2';
import CustomTimeline from '../components/Timeline/CustomTimeline.jsx';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

function Resume() {
	return (
		<Card sx={{ padding: 3 }}>
			<Grid container direction="row" sx={{ justifyContent: "space-between", }}>
				<Grid item="true" size={6}>
					<Grid container alignItems="center" gap={1}>
						<Avatar><WorkHistoryIcon /></Avatar>
						<Typography variant="h6">{resumeData.pages.resume.experience.title}</Typography>
					</Grid>

					<CustomTimeline children={resumeData.pages.resume.experience.section} />
				</Grid>
				<Grid item="true" size={6}>
					<Grid container alignItems="center" gap={1}>
						<Avatar><SchoolIcon /></Avatar>
						<Typography variant="h6">{resumeData.pages.resume.education.title}</Typography>
					</Grid>
					<CustomTimeline children={resumeData.pages.resume.education.section} />
				</Grid>
			</Grid>
		</Card>
	);
}

export default Resume