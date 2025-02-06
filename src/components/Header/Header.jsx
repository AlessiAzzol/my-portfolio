import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Avatar, Container, Button, Box, useTheme, Toolbar, AppBar, Card } from '@mui/material';
import SettingsSwitcher from './../switcher/SettingSwitcher.jsx';
import { useLanguage } from "./../../context/LanguageContext.jsx";

function Header() {

	const { data } = useLanguage();
	const theme = useTheme();
	console.log(data);

	if (!data.header) return <p>Loading...</p>;

	return (
		<Card sx={{ marginBottom: 2, }}>
			<AppBar position="static" sx={{ paddingLeft: 0, }}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Button
								key='home'
								sx={{
									boxShadow: useLocation().pathname === data.header.home ? 1 : 0,
									borderRadius: 1,
									backgroundColor: useLocation().pathname === data.header.home ? theme.custom.btnColor.primary : 'transparent',
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
										boxShadow: useLocation().pathname === page.href ? 1 : 0,
										margin: 1,
										borderRadius: 1,
										fontSize: 14,
										backgroundColor: useLocation().pathname === page.href ? theme.custom.btnColor.primary : 'transparent',
									}}>

									<Link to={page.href} style={{ textDecoration: 'none', color: 'inherit' }}
									>{page.title}</Link>
								</Button>
							))}
						</Box>
						<SettingsSwitcher />
					</Toolbar>

				</Container>
			</AppBar>
		</Card>
	);
}

export default Header