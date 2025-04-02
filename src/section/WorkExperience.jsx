import { Card, CardHeader, CardContent, CardActions, } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Avatar from '@mui/material/Avatar';
import { useLanguage } from '../context/LanguageContext.jsx';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import AnimatedFab from '../components/animations/AnimatedFab.jsx';
import AnimatedDialog from '../components/animations/AnimatedDialog.jsx';
import { useState } from 'react';
import Jobs from '../pages/Jobs.jsx';

function WorkExperience() {
	const { data } = useLanguage();


	const [openDialog, setOpen] = useState(false);

	const handleDialog = () => setOpen(!openDialog);

	return (
		<>
			<Card >
				<CardHeader
					avatar={<Avatar><WorkHistoryIcon /></Avatar>}
					title={data.pages.resume.experience.title}
				/>
				<CardContent sx={{ borderBottomRightRadius: 20, }} >
					<VerticalTimeline children={data.pages.resume.experience.sectionShort} />
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
						},

					}}></Box>
					<AnimatedFab onClick={handleDialog}>
						<AddIcon />
					</AnimatedFab>


				</CardActions >
			</Card >
			<AnimatedDialog
				open={openDialog}
				onClick={handleDialog}
			>
				<Jobs />

			</AnimatedDialog>
		</>

	);
}

export default WorkExperience