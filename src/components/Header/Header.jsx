import * as React from 'react';
import { Link, useLocation } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Container, Button, Box, useTheme } from '@mui/material';
import resumeData from '../../utils/resumeData.jsx';

function Header() {
	const theme = useTheme();
	return (
		<Box>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Avatar sx={{
							fontFamily: 'Bonbon',
							fontWeight: 'bold',
							fontSize: 'xx-large',
							backgroundColor: 'transparent',
							marginRight: '20px',
						}}>A</Avatar>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{resumeData.header.pages.map((page) => (

								<Button
									key={page.title}
									sx={{
										color: 'white',
										letterSpacing: 1,
										boxShadow: useLocation().pathname === page.href ? 1 : 0,
										borderRadius: 1,
										fontSize: 16,
										backgroundColor: useLocation().pathname === page.href ? theme.btnColor.glass.primary : 'transparent',
									}}>

									<Link to={page.href} style={{ textDecoration: 'none', color: 'inherit' }}
									>{page.title}</Link>
								</Button>
							))}
						</Box>

					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}

export default Header