
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
import Layout from './components/Layout/Layout.jsx';

import profile from './assets/img/profile.jpg';

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
				<Grid style={{ width: '60%' }}>

					<Router>

						<Routes>
							<Route path="/" element={<Layout />}>
								<Route path="/my-portfolio" index element={<Resume />} />
								<Route path="/my-portfolio/portfolio" element={<Body />} />
							</Route>
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
