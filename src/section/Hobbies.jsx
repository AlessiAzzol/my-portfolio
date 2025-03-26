import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import CategoryIcon from '@mui/icons-material/Category';
import HorizontalStepper from '../components/timeline/HorizontalStepper.jsx';
import Stack from '@mui/material/Stack';



function Hobbies() {
	const { data } = useLanguage();

	return (
		<Card >
			<Stack direction="row" spacing={2} >
				<CardHeader sx={{ background: 'transparent', }}
					avatar={<Avatar><CategoryIcon /></Avatar>}
					title={data.pages.home.section3.title}
				/>
				<CardContent sx={{ width: '100%', background: 'transparent', }}>
					<HorizontalStepper children={data.pages.home.section3.items} />

				</CardContent>
			</Stack>
		</Card >
	);
}

export default Hobbies