import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Avatar, Button, Box, useTheme, Card } from '@mui/material';
import SettingsSwitcher from './../switcher/SettingSwitcher.jsx';
import { useLanguage } from "../../context/LanguageContext.jsx";
import ModeSwitcher from '../switcher/ModeSwitcher.jsx';
import { useMediaQuery } from '@mui/material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

function Header() {

	const { data } = useLanguage();
	const theme = useTheme();
	const location = useLocation();

	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [anchorEl, setAnchorElUser] = React.useState(null);
	const menuOpen = Boolean(anchorEl);

	const handleMenuOpen = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorElUser(null);
	};

	return (
		<Card sx={{ margin: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
			<Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', padding: 0 }}>
				<Button
					key='home'
					sx={{
						boxShadow: location.pathname === data.header.home ? 1 : 0,
						borderRadius: 1,
						backgroundColor: location.pathname === data.header.home ? theme.custom.btnColor.primary : 'transparent',
					}}>

					<Link to={data.header.home} style={{ textDecoration: 'none', color: 'inherit' }}>
						<Avatar sx={{
							fontFamily: 'Bonbon',
							fontWeight: 'bold',
							fontSize: 30,
							backgroundColor: 'transparent',

						}}>A</Avatar>
					</Link>
				</Button>

				{isMobile ? (
					<>
						<IconButton
							sx={{ margin: 2 }}
							aria-label="menu"
							onClick={handleMenuOpen}
						>
							{menuOpen ? (
								<RemoveCircleRoundedIcon fontSize="large"
									sx={{ color: theme.custom.btnColor.primary }}>
								</RemoveCircleRoundedIcon>
							) : (
								<AddCircleRoundedIcon fontSize="large"
									sx={{ color: theme.custom.btnColor.primary }}>
								</AddCircleRoundedIcon>
							)}

						</IconButton>
						<Menu
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleMenuClose}
						>
							{data.header.pages.map((page) => (
								<MenuItem key={page.title} onClick={handleMenuClose}>
									<Link to={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>
										{page.title}
									</Link>
								</MenuItem>
							))}
						</Menu>
					</>
				) : (

					data.header.pages.map((page) => (
						<Button
							key={page.title}
							sx={{
								color: 'white',
								letterSpacing: 1,
								boxShadow: location.pathname === page.href ? 1 : 0,
								margin: 1,
								borderRadius: 1,
								fontSize: 14,
								backgroundColor: location.pathname === page.href ? theme.custom.btnColor.primary : 'transparent',
							}}>

							<Link to={page.href} style={{ textDecoration: 'none', color: 'inherit' }}
							>{page.title}</Link>
						</Button>
					))

				)}

			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					padding: 1,
				}}>
				<SettingsSwitcher />

			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					padding: 1,
				}}>
				<ModeSwitcher />
			</Box>
		</Card >
	);
}

export default Header