import { Typography, Card, LinearProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useLanguage } from '../context/LanguageContext.jsx';


function Home() {
	const { data } = useLanguage();

	return (

		<Card sx={{
			margin: 2,
			padding: 3,
			overflow: "auto",
			maxHeight: "75vh",
		}}>
			<Grid container direction="column" spacing={4}>
				<Grid item="true" id="title1">
					<Typography variant="h6">{data.pages.home.section1.title}</Typography>
				</Grid>
				<Grid item="true" id="description1">
					<Typography>{data.pages.home.section1.description}</Typography>
				</Grid>
				<Grid item="true" id="title2">
					<Typography variant="h6">{data.pages.home.section2.title}</Typography>
				</Grid>
				<Grid container size={12} id="skills">
					{data.pages.home.section2.skills?.map((skill, index) => (
						<>
							<Grid item="true" size={{ xs: 12, sm: 12, md: 2 }} id={`title` + index}>
								<Typography id={index}>{skill.title}</Typography>
							</Grid>
							<Grid item="true" size={{ xs: 12, sm: 12, md: 4 }} id={`level` + index} >
								<LinearProgress variant="determinate" value={skill.level} id={index} color="secondary" />
							</Grid>

						</>
					))
					}
				</Grid>
				<Grid item="true" id="title3">
					<Typography variant="h6">{data.pages.home.section3.title}</Typography>
				</Grid>
				<Grid item="true" id="description3">
					<Typography>{data.pages.home.section3.description}</Typography>
				</Grid>

			</Grid>
		</Card >


	);
}

export default Home