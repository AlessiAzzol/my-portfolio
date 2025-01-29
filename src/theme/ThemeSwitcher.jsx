import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material";

import resumeData from '../utils/resumeData.jsx';
import * as React from 'react';
import { useTheme } from "./ThemeContext.jsx";

function ThemeSwitcher() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const { themeName, switchTheme } = useTheme();

	return (

		< Box>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu}>
					<Avatar sx={{
						fontFamily: 'Bonbon',
						fontWeight: 'bold',
						fontSize: 30,
						backgroundColor: 'transparent',
					}}>T</Avatar>
				</IconButton>
			</Tooltip>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{resumeData.settings.themes.map((theme) => (
					<MenuItem key={theme.value} >
						<Typography onClick={() => {
							switchTheme(theme.value);
							handleCloseUserMenu();
						}}>{theme.name}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box >
	);
}

export default ThemeSwitcher;