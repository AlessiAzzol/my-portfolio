import { Typography, Card, LinearProgress, Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useLanguage } from '../context/LanguageContext.jsx';
import Profile from '../components/Profile/Profile.jsx';
import profile from '../assets/img/profile.jpg';

function Home() {
	const { data } = useLanguage();

	return (
		<>
			<Box component="span" sx={{ display: { xs: 'block', sm: 'none', } }}><Profile img={profile} /></Box>
			<Card sx={{
				margin: 2,
				padding: 3,
				overflow: "auto",
				maxHeight: "75vh",
			}}>
				<Grid container direction="column" spacing={4}>
					<Grid item="true">
						<Typography variant="h6">{data.pages.home.section1.title}</Typography>

					</Grid>
					<Grid item="true">
						<Typography>{data.pages.home.section1.description}</Typography>

					</Grid>
					<Grid item="true">
						<Typography variant="h6">{data.pages.home.section2.title}</Typography>

					</Grid>
					<Grid container size={12} direction="row">
						{data.pages.home.section2.skills?.map((skill, index) => (
							<Grid container
								key={`skillBox` + index}
								sx={{
									justifyContent: "center",
									alignItems: "center",
								}}
								size={{ xs: 12, sm: 12, md: 6 }}
								direction="row">
								<Grid item="true" size={{ xs: 12, sm: 12, md: 5 }} key={`skill` + index}>
									<Typography key={`skillTitle` + index}>{skill.title}</Typography>
								</Grid>
								<Grid item="true" size={{ xs: 12, sm: 12, md: 7 }} key={`levelG` + index} >
									<LinearProgress variant="determinate" value={skill.level} key={`level` + index} color="secondary" />
								</Grid>
							</Grid>
						))
						}
					</Grid>

					<Grid item="true">
						<Typography variant="h6">{data.pages.home.section3.title}</Typography>
					</Grid>
					<Grid item="true">
						<Typography>{data.pages.home.section3.description}</Typography>
					</Grid>

				</Grid>
			</Card >

		</>
	);
}

export default Home