import { Card, CardHeader, CardContent, CardActions, Fab } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Avatar from '@mui/material/Avatar';
import { useLanguage } from '../context/LanguageContext.jsx';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

function WorkExperience() {
	const { data } = useLanguage();
	return (
		<Card >
			<CardHeader
				avatar={<Avatar><WorkHistoryIcon /></Avatar>}
				title={data.pages.resume.experience.title}
			/>
			<CardContent sx={{ borderBottomRightRadius: 20, }} >
				<VerticalTimeline children={data.pages.resume.experience.section} />
			</CardContent>
			<CardActions>
				<Box sx={{
					'--bck': (theme) => theme.custom.cardBackground,
					width: '85%',
					height: '100%',
					background: 'var(--bck)',
					borderBottomRightRadius: 20,
					position: 'relative',
					'&::before': {
						content: '""',
						position: 'absolute',
						backgroundColor: 'transparent',
						right: '-60px',
						height: '35px',
						width: '60px',
						borderTopLeftRadius: 30,
						boxShadow: ' -30px 0 0 0 var(--bck)',
					}
				}}></Box>
				<Fab sx={{ zIndex: 1, }}>
					<AddIcon />
				</Fab>


			</CardActions >
		</Card >

	);
}

export default WorkExperience