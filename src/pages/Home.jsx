import { Typography, Card } from '@mui/material';
import resumeData from '../utils/resumeData.jsx';
import Grid from '@mui/material/Grid2';

function Home() {
	return (
		<Card sx={{ padding: 3 }}>
			<Grid container direction="column" spacing={8}>
				{resumeData.pages.home.section.map((section) => (
					<Grid container key={section.title} spacing={2}>
						<Grid item="true" >
							<Typography variant="h6">{section.title}</Typography>
						</Grid>
						<Grid item="true">
							<Typography>{section.description}</Typography>
						</Grid>
					</Grid>
				))
				}
			</Grid>
		</Card>

	);
}

export default Home