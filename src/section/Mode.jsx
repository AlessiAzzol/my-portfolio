import { Card, } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AnimatedFab from '../components/animations/AnimatedFab.jsx';



function Mode() {
	const { data } = useLanguage();

	const { themeName, switchTheme } = useTheme();

	const handleThemeChange = () => {
		switchTheme(themeName === "dark" ? "light" : "dark");

	};

	return (
		<Card sx={{
			padding: 2,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
		}} onClick={handleThemeChange}>
			<AnimatedFab >
				{themeName === "light" ? <LightModeIcon sx={{ fontSize: '30px' }} /> : <DarkModeIcon sx={{ fontSize: '30px' }} />}
			</AnimatedFab>



		</Card >
	);
}

export default Mode