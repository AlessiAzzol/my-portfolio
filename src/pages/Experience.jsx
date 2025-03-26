import { Typography, Card } from '@mui/material';
import Grid from '@mui/material/Grid2';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import Avatar from '@mui/material/Avatar';
import { useLanguage } from '../context/LanguageContext.jsx';

function Resume() {
	const { data } = useLanguage();
	return (
		<Card sx={{
			margin: 2,
			padding: 3,
			overflow: "auto",
			maxHeight: "75vh",
		}}>
			<Grid container direction="row" sx={{ justifyContent: "space-between", }}>
				<Grid size={{ xs: 12, sm: 12, md: 6 }}>
					<Grid container alignItems="center" gap={1}>
						<Avatar><WorkHistoryIcon /></Avatar>
						<Typography variant="h6">{data.pages.resume.experience.title}</Typography>
					</Grid>

					<VerticalTimeline children={data.pages.resume.experience.section} />
				</Grid>
				<Grid size={{ xs: 12, sm: 12, md: 6 }}>
					<Grid container alignItems="center" gap={1}>
						<Avatar><SchoolIcon /></Avatar>
						<Typography variant="h6">{data.pages.resume.education.title}</Typography>
					</Grid>
					<VerticalTimeline children={data.pages.resume.education.section} />
				</Grid>
			</Grid>
		</Card >

	);
}

export default Resume