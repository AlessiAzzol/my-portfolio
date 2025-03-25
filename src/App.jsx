
import { CssBaseline, } from '@mui/material';
import ThemeProviderWrapper from './context/ThemeContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Grid from '@mui/material/Grid2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import Profile from './section/Profile.jsx';
import Language from './section/Language.jsx';
import Contact from './section/Contact.jsx';
import profile from './assets/img/profile.jpg';
import About from './section/About.jsx';
import WorkExperience from './section/WorkExperience.jsx';
import Education from './section/Education.jsx';
import Skillset from './section/Skillset.jsx';
import Hobbies from './section/Hobbies.jsx';
import Mode from './section/Mode.jsx';
import Projects from './section/Projects.jsx';

function App() {

	return (
		<LanguageProvider>
			<ThemeProviderWrapper>

				<CssBaseline />

				<Grid container size={12} spacing={1}
					sx={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",

						backgroundImage: (theme) => theme.custom.background,
						overflow: "auto",
					}}>

					<Grid item="true" size={{ xs: 3, }} ><img src={profile}
						style={{
							width: '50vh',
							height: 'auto',
							position: 'fixed',
							borderRadius: '0% 40% 40% 0% / 0% 50% 50% 0%',
						}} />
						<Profile /></Grid>
					<Grid container size={{ xs: 9 }} spacing={1} sx={{ padding: 1 }} >

						<Grid item="true" size={{ xs: 4, }} >
							<About />
						</Grid>
						<Grid item="true" size={{ xs: 4, }} >
							<Skillset />
						</Grid>
						<Grid item="true" size={{ xs: 4, }} >
							<Projects />
						</Grid>

						<Grid item="true" size={{ xs: 5, }} >
							<Education />
						</Grid>
						<Grid container size={{ xs: 7, }} >
							<Grid item="true" size={{ xs: 9, }} >
								<WorkExperience />
							</Grid>
							<Grid container size={{ xs: 3, }} direction={"column"}>
								<Grid item="true" size={{ xs: 12, }} >
									<Contact></Contact>
								</Grid>
								<Grid item="true" size={{ xs: 12, }} >
									<Language></Language>
								</Grid>
								<Grid item="true" size={{ xs: 12, }} >
									<Mode />
								</Grid>
							</Grid>
							<Grid item="true" size={{ xs: 12, }} >
								<Hobbies />
							</Grid>
						</Grid>


					</Grid>
					{/* 
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
					</Grid> */}
					<Grid item="true" size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, }}>
						<Footer />
					</Grid>
				</Grid>

			</ThemeProviderWrapper >
		</LanguageProvider >
	);
}

export default App
