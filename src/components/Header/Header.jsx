import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Avatar, Container, Button, Box, useTheme, Toolbar, AppBar, Card } from '@mui/material';
import SettingsSwitcher from './../switcher/SettingSwitcher.jsx';
import { useLanguage } from "./../../context/LanguageContext.jsx";

function Header() {

	const { data } = useLanguage();
	const theme = useTheme();
	const location = useLocation();

	return (
		<Card sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
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

				{data.header.pages.map((page) => (
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
				))}

			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					padding: 1,
				}}
			>
				<SettingsSwitcher />
			</Box>
		</Card >
	);
}

export default Header