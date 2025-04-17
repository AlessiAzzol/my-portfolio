import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import CodeIcon from '@mui/icons-material/Code';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IrregularCard from '../components/card/IrregularCard.jsx';


function Skillset() {
	const { data } = useLanguage();

	return (

		<IrregularCard>

			<CardHeader
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
		</IrregularCard >
	);
}

export default Skillset