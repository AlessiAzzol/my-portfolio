
import React, { useState } from 'react';
import theme from './theme/Theme.jsx';
import { ThemeProvider, CssBaseline, Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Sidenav from './components/Profile/Profile.jsx';
import Body from './pages/Body/Body.jsx';
import Resume from './pages/Resume/Resume.jsx';

import profile from './assets/img/profile.jpg';
import { WidthFull } from '@mui/icons-material';

function App() {

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container
				style={{
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Grid >
					<Sidenav img={profile} />
				</Grid>
				<Grid style={{ backgroundColor: 'red', width: '60%' }}>
					<Header />
					<Router>
						<Routes>
							<Route path="/my-portfolio" index element={<Body />} />
							<Route path="/my-portfolio" element={<Resume />} />
						</Routes>
					</Router>
					<Footer />
				</Grid>

			</Grid>
		</ThemeProvider >
		/*
		<div className="container">
			<div className="left">
				<Sidenav/>
			</div>
			<div className="right">				
				<Body />
			</div>
		</div>*/


		/*<Stack direction="row" spacing={2}
				sx={{
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
				}}>
				<Box component={Sidenav} />
				<Box component={Body} />
			</Stack>*/
	);
}

export default App
