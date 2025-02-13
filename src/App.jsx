
import { CssBaseline, } from '@mui/material';
import ThemeProviderWrapper from './context/ThemeContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Grid from '@mui/material/Grid2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Profile from './components/Profile/Profile.jsx';
import Layout from './components/Layout/Layout.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Projects.jsx';
import Resume from './pages/Experience.jsx';
import Home from './pages/Home.jsx';
import profile from './assets/img/profile.jpg';

function App() {

	return (
		<LanguageProvider>
			<ThemeProviderWrapper>

				<CssBaseline />
				<Grid container size={12}
					sx={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						backgroundImage: (theme) => theme.custom.background,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						padding: 0,
						overflow: "auto",
					}}>
					<Grid item="true" size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3, }} sx={{ display: { xs: 'none', sm: 'block' } }} >
						<Profile img={profile} />
					</Grid>

					<Grid item="true" size={{ xs: 12, sm: 6, md: 9, lg: 9, xl: 7, }}>
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
					<Grid item="true" size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, }}>
						<Footer />
					</Grid>

				</Grid>

			</ThemeProviderWrapper >
		</LanguageProvider >
	);
}

export default App
