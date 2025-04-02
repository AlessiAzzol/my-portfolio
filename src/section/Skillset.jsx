import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import CodeIcon from '@mui/icons-material/Code';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function Skillset() {
	const { data } = useLanguage();

	return (
		<Card sx={{ height: '100%', }}>

			<CardHeader sx={{ background: 'transparent' }}
				avatar={<Avatar><CodeIcon /></Avatar>}
				title={data.pages.home.section2.title}
			/>
			<CardContent sx={{ background: 'transparent', }}>
				<Stack direction="row" spacing={1} useFlexGap sx={{ display: "flex", flexWrap: "wrap", }}>
					{data.pages.home.section2.skills?.map((skill, index) => (
						<Chip key={index} label={skill.title} />
					))}
				</Stack>
			</CardContent>
		</Card >
	);
}

export default Skillset