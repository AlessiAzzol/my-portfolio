import { Box, Tooltip, IconButton, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { useLanguage } from "./../../context/LanguageContext.jsx";
import resumeData from '../../data/resumeData.jsx';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';

function SettingsSwitcher() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const { language, switchLanguage } = useLanguage();

	return (
		<Box>
			<Tooltip title="Settings">
				<IconButton onClick={handleOpenUserMenu}>
					<TranslateRoundedIcon />
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
