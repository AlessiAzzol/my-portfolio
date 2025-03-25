import { Card } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import FlagIcon from 'react-world-flags';
import resumeData from '../data/resumeData.jsx';


function Language() {
	const { language, switchLanguage } = useLanguage();
	const languages = resumeData.settings.languages.options;
	const currentIndex = languages.findIndex(lang => lang.value === language);
	const nextIndex = (currentIndex + 1) % languages.length;

	return (
		<Card sx={{ filter: 'saturate(50%)', padding: 1, cursor: 'pointer' }}
			onClick={() => {
				switchLanguage(resumeData.settings.languages.options[nextIndex].value);
			}}>
			<FlagIcon code={language} sx={{ borderRadius: 50 }} />
		</ Card >

	);
}

export default Language