
import theme from './theme/Theme.jsx';
import { ThemeProvider, CssBaseline, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Sidenav from './components/Profile/Profile.jsx';
import Layout from './components/Layout/Layout.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Body from './pages/Body/Body.jsx';
import Resume from './pages/Resume/Resume.jsx';

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
								<Route path="/my-portfolio/contact" element={<Contact />} />
							</Route>
						</Routes>
					</Router>
					<Footer />
				</Grid>
			</Grid>
		</ThemeProvider >
	);
}

export default App
