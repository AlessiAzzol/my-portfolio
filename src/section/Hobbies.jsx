import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import CategoryIcon from '@mui/icons-material/Category';
import HorizontalStepper from '../components/timeline/HorizontalStepper.jsx';
import Stack from '@mui/material/Stack';



function Hobbies() {
	const { data } = useLanguage();

	return (
		<Card sx={{ height: '100%', boxShadow: 'none', background: 'transparent', backdropFilter: 'none' }} >
			<Stack direction="row" spacing={2} >
				<CardHeader
					avatar={<Avatar><CategoryIcon /></Avatar>}
					title={data.pages.home.section3.title}
				/>
				<CardContent sx={{ width: '100%' }}>
					<HorizontalStepper children={data.pages.home.section3.items} />

				</CardContent>
			</Stack>
		</Card >
	);
}

export default Hobbies