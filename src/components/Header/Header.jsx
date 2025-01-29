import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Avatar, Container, Button, Box, useTheme, Toolbar, AppBar, Card } from '@mui/material';
import resumeData from '../../utils/resumeData.jsx';
import ThemeSwitcher from '../../theme/ThemeSwitcher.jsx';

function Header() {
	const theme = useTheme();
	return (
		<Card>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Button
								key='home'
								sx={{
									boxShadow: useLocation().pathname === resumeData.header.home ? 1 : 0,
									borderRadius: 1,
									backgroundColor: useLocation().pathname === resumeData.header.home ? theme.custom.btnColor.primary : 'transparent',
								}}>

								<Link to={resumeData.header.home} style={{ textDecoration: 'none', color: 'inherit' }}>
									<Avatar sx={{
										fontFamily: 'Bonbon',
										fontWeight: 'bold',
										fontSize: 30,
										backgroundColor: 'transparent',

									}}>A</Avatar>
								</Link>
							</Button>

							{resumeData.header.pages.map((page) => (
								<Button
									key={page.title}
									sx={{
										color: 'white',
										letterSpacing: 1,
										boxShadow: useLocation().pathname === page.href ? 1 : 0,
										borderRadius: 1,
										fontSize: 16,
										backgroundColor: useLocation().pathname === page.href ? theme.custom.btnColor.primary : 'transparent',
									}}>

									<Link to={page.href} style={{ textDecoration: 'none', color: 'inherit' }}
									>{page.title}</Link>
								</Button>
							))}
						</Box>
						<ThemeSwitcher />
					</Toolbar>

				</Container>
			</AppBar>
		</Card>
	);
}

export default Header