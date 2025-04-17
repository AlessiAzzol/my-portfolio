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
import CustomCard from '../components/card/CustomCard.jsx';

function WorkExperience() {
	const { data } = useLanguage();


	const [openDialog, setOpen] = useState(false);

	const handleDialog = () => setOpen(!openDialog);

	return (
		<>
			<CustomCard >
				<CardHeader
					avatar={<Avatar><WorkHistoryIcon /></Avatar>}
					title={data.pages.resume.experience.title}
				/>
				<CardContent sx={{ borderBottomRightRadius: 20, }} >
					<VerticalTimeline children={data.pages.resume.experience.sectionShort} />
				</CardContent>
				<CardActions>
					<AnimatedFab onClick={handleDialog}>
						<AddIcon />
					</AnimatedFab>
				</CardActions >
			</CustomCard >

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