
import theme from './theme/Theme.jsx';
import { ThemeProvider, CssBaseline, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Sidenav from './components/Profile/Profile.jsx';
import Layout from './components/Layout/Layout.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Home from './pages/Home.jsx';
import profile from './assets/img/profile.jpg';

function App() {

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container rowSpacing={1} columnSpacing={1} sx={{ height: "100vh" }}>
				<Grid item="true" size={3}>
					<Sidenav img={profile} />
				</Grid>
				<Grid item="true" size={9}>

					<Router>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route path="/my-portfolio" index element={<Home />} />
								<Route path="/my-portfolio/resume" element={<Resume />} />
								<Route path="/my-portfolio/portfolio" element={<Portfolio />} />
								<Route path="/my-portfolio/contact" element={<Contact />} />
							</Route>
						</Routes>
					</Router>
				</Grid>
				<Grid item="true" size={12}>
					<Footer />
				</Grid>

			</Grid>
		</ThemeProvider >
	);
}

export default App
