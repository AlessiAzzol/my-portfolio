import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import * as React from "react";
import { useTheme } from "./../../context/ThemeContext.jsx";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function ModeSwitcher() {

	const { themeName, switchTheme } = useTheme();

	const handleThemeChange = (event) => {
		const newTheme = event.target.checked ? "light" : "dark";
		switchTheme(newTheme);
	};

	return (
		<FormGroup>
			<FormControlLabel
				control={<Switch sx={{ m: 1 }}
					checked={themeName === "light"}
					icon={<DarkModeIcon />}
					checkedIcon={<LightModeIcon />}
					onChange={handleThemeChange}
				/>}
			/>
		</FormGroup>
	);
}

export default ModeSwitcher;
