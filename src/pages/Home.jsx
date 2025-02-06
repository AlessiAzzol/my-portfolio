import { Typography, Card } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useLanguage } from '../context/LanguageContext.jsx';


function Home() {
	const { data } = useLanguage();

	if (!data.pages) return <p>Loading...</p>;

	return (
		<Card sx={{ padding: 3 }}>
			<Grid container direction="column" spacing={8}>
				{data.pages.home.section.map((section) => (
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