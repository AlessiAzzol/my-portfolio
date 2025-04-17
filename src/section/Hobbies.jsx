import { Card, CardHeader, CardContent, Avatar, Box } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import CategoryIcon from '@mui/icons-material/Category';
import HorizontalStepper from '../components/timeline/HorizontalStepper.jsx';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';



function Hobbies() {
	const { data } = useLanguage();
	const theme = useTheme();

	return (
		<Card sx={{ position: 'relative', paddingLeft: 2, overflow: 'hidden' }}>
			<Box
				component="svg"
				viewBox="0 0 200 200"
				preserveAspectRatio="none"
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: 0,
				}}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="
      				M40,40 
      				Q50,30 100,45 
					T200,40 
					L200,80 
					Q150,90 100,75 
					T40,80 
					Z"
					fill={theme.custom.highlight}
				/>
				<path
					d="
					M50,100 
					Q50,90 100,105 
					T200,100 
					L200,140 
					Q150,150 100,135 
					T50,140 
					Z"
					fill={theme.custom.highlight}
				/>
			</Box>
			<Stack direction="row" spacing={2} >
				<CardHeader sx={{ background: 'transparent', padding: 0 }}
					avatar={<Avatar><CategoryIcon /></Avatar>}
					title={data.pages.home.section3.title}
				/>
				<CardContent sx={{ width: '100%', background: 'transparent', padding: 1 }}>
					<HorizontalStepper children={data.pages.home.section3.items} />

				</CardContent>
			</Stack>
		</Card >
	);
}

export default Hobbies