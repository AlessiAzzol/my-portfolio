import Sidenav from './components/Sidenav/Sidenav.jsx';
import Body from './components/Body/Body.jsx';
import React, { useState } from 'react';
import theme from './theme/Theme.jsx';
import { ThemeProvider, CssBaseline, Box, Stack } from '@mui/material';


function App() {

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Stack direction="row" spacing={2}
				sx={{
					justifyContent: "space-around",
					alignItems: "center",
					width: "100%",
				}}>
				<Box component={Sidenav}>

				</Box>
				<Box component={Body} />
			</Stack>
		</ThemeProvider>
		/*
		<div className="container">
			<div className="left">
				<Sidenav/>
			</div>
			<div className="right">				
				<Body />
			</div>
		</div>*/
	);
}

export default App
