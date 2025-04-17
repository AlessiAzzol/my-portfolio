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
import CustomCard from '../components/card/CustomCard.jsx';

function Education() {
	const { data } = useLanguage();

	const [openDialog, setOpen] = useState(false);

	const handleDialog = () => setOpen(!openDialog);


	return (
		<>
			<CustomCard>
				<CardHeader
					avatar={<Avatar><SchoolIcon /></Avatar>}
					title={data.pages.resume.education.title}
				/>
				<CardContent sx={{ borderBottomRightRadius: 20, }} >
					<VerticalTimeline children={data.pages.resume.education.sectionShort} />
				</CardContent>
				<CardActions>
					<AnimatedFab onClick={handleDialog}>
						<AddIcon />
					</AnimatedFab>
				</CardActions>
			</CustomCard >

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