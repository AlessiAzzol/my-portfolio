import { Card, } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import ModeSwitcher from '../components/switcher/ModeSwitcher.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { WidthFull } from '@mui/icons-material';



function Mode() {
	const { data } = useLanguage();

	const { themeName, switchTheme } = useTheme();

	const handleThemeChange = () => {
		switchTheme(themeName === "dark" ? "light" : "dark");

	};

	return (
		<Card sx={{
			padding: 3,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
		}} onClick={handleThemeChange}>
			{themeName === "light" ? <LightModeIcon sx={{ fontSize: '60px' }} /> : <DarkModeIcon sx={{ fontSize: '60px' }} />}

		</Card >
	);
}

export default Mode