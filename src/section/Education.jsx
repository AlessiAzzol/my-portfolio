import { Card, CardHeader, CardContent, CardActions, } from '@mui/material';
import VerticalTimeline from '../components/timeline/VerticalTimeline.jsx';
import SchoolIcon from '@mui/icons-material/School';
import Avatar from '@mui/material/Avatar';
import { useLanguage } from '../context/LanguageContext.jsx';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import AnimatedFab from '../components/animations/AnimatedFab.jsx';
import Studies from '../pages/Studies.jsx';
import { useState } from 'react';
import AnimatedDialog from '../components/animations/AnimatedDialog.jsx';

function Education() {
	const { data } = useLanguage();

	const [openDialog, setOpen] = useState(false);

	const handleDialog = () => setOpen(!openDialog);


	return (
		<>
			<Card sx={{ height: '100%', }}>
				<CardHeader
					avatar={<Avatar><SchoolIcon /></Avatar>}
					title={data.pages.resume.education.title}
				/>
				<CardContent sx={{ borderBottomRightRadius: 20, }} >
					<VerticalTimeline children={data.pages.resume.education.sectionShort} />
				</CardContent>
				<CardActions>
					<Box sx={{
						'--bck': (theme) => theme.custom.cardBackground,
						width: '85%',
						height: '100%',
						background: 'var(--bck)',
						borderBottomRightRadius: 20,
						borderBottomLeftRadius: 16,
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
					<AnimatedFab onClick={handleDialog} >
						<AddIcon />
					</AnimatedFab>
				</CardActions>
			</Card >

			<AnimatedDialog
				open={openDialog}
				onClick={handleDialog}
			>
				<Studies />

			</AnimatedDialog>

		</>
	);
}

export default Education