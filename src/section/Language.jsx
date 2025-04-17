import { Card } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useState } from 'react';
import resumeData from '../data/resumeData.jsx';
import Grid from '@mui/material/Grid2';
import AnimatedFab from '../components/animations/AnimatedFab.jsx';



function Language() {
	const { language, switchLanguage } = useLanguage();
	const [isHovered, setHover] = useState(false);


	return (
		<Card
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			sx={{
				//position: 'absolute',
				zIndex: 2,
				padding: 2,
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
				cursor: 'pointer',
				borderRadius: 15,
				boxShadow: 15
			}}>
			<Grid container direction={"column"}>
				<AnimatedFab
					sx={{
						backgroundImage: `url(https://flagcdn.com/w320/${language.toLowerCase()}.png)`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						borderRadius: '50%',
						filter: 'saturate(50%)',
						marginTop: 2,
						marginBottom: 2,
					}}>
				</AnimatedFab>
				{isHovered && resumeData.settings.languages.options?.filter(lang => lang.value !== language).map((lang, index) => (
					<AnimatedFab
						id={index}
						onClick={() => {
							switchLanguage(lang.value);
						}}
						sx={{
							backgroundImage: `url(https://flagcdn.com/w320/${lang.value.toLowerCase()}.png)`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							borderRadius: '50%',
							filter: 'saturate(50%)',
							marginTop: 2,
							marginBottom: 2,

						}}>
					</AnimatedFab>
				))}
			</Grid>
		</ Card >


	);
}

export default Language