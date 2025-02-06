import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material";
import * as React from "react";
import { useTheme } from "./../../context/ThemeContext.jsx";
import { useLanguage } from "./../../context/LanguageContext.jsx";
import resumeData from '../../data/resumeData.jsx';
import SettingsIcon from '@mui/icons-material/Settings';

function SettingsSwitcher() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const { themeName, switchTheme } = useTheme();


	const { language, switchLanguage } = useLanguage();


	return (
		<Box>
			<Tooltip title="Settings">
				<IconButton onClick={handleOpenUserMenu}>
					<SettingsIcon fontSize="large" />
				</IconButton>
			</Tooltip>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				keepMounted
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}>
				<Typography variant="subtitle1" sx={{ px: 2, fontWeight: "bold", mt: 1 }}>
					{resumeData.settings.themes.label}
				</Typography>
				{resumeData.settings.themes.options.map((theme) => (
					<MenuItem
						key={theme.value}
						onClick={() => {
							switchTheme(theme.value);
							handleCloseUserMenu();
						}}
					>
						{theme.name}
					</MenuItem>
				))}

				<Typography variant="subtitle1" sx={{ px: 2, fontWeight: "bold", mt: 1 }}>
					{resumeData.settings.languages.label}
				</Typography>
				{resumeData.settings.languages.options.map((lang) => (
					<MenuItem
						key={lang.value}
						onClick={() => {
							switchLanguage(lang.value);
							handleCloseUserMenu();
						}}>
						{lang.name}
					</MenuItem>
				))}
			</Menu>
		</Box >
	);
}

export default SettingsSwitcher;
