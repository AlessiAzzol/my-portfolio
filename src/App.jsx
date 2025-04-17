
import { CssBaseline, } from '@mui/material';
import ThemeProviderWrapper from './context/ThemeContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Grid from '@mui/material/Grid2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import Profile from './section/Profile.jsx';
import Language from './section/Language.jsx';
import Education from './section/Education.jsx';
import Skillset from './section/Skillset.jsx';
import Hobbies from './section/Hobbies.jsx';
import Mode from './section/Mode.jsx';
import Projects from './section/Projects.jsx';
import WorkExperience from './section/WorkExperience.jsx';
import About from './section/About.jsx';
import Box from '@mui/material/Box';
import data from './data/resumeData.jsx';
import { useMediaQuery, useTheme } from '@mui/material';
import Home_sm from './section/Home_sm.jsx';
import CustomCard from './components/card/CustomCard.jsx';

const HorizonBackground = () => (
	<Box
		dangerouslySetInnerHTML={{ __html: data.background }}
		style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			zIndex: -1,
			pointerEvents: 'none',
		}}
	/>

);


function App() {
	const theme = useTheme();
	const big = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<LanguageProvider>
			<ThemeProviderWrapper>

				<CssBaseline />

				<HorizonBackground />
				{big && (
					<Grid container size={12} spacing={1}
						sx={{
							height: "100vh",
							display: "flex",
							justifyContent: "center",
							backgroundColor: (theme) => theme.custom.backgroundColor,
							//backgroundImage: HorizonBackground,
							//backgroundRepeat: 'no-repeat',
							//backgroundOpacity: 0.1,
							backgroundPosition: 'center',
							backgroundSize: 'contain',
							overflow: "auto",
						}}>
						<Grid container direction='column' size={{ sm: 6, md: 4, lg: 3, }} >
							<Grid size={{ xs: 12, }}>
								<Profile />
							</Grid>
							{/* 	<Grid size={{ xs: 12, }}>
							<Footer />
						</Grid> */}


						</Grid>

						<Grid container size={{ sm: 6, md: 8, lg: 9 }} spacing={1} sx={{ padding: 1, paddingRight: 4 }} >

							<Grid size={{ sm: 12, md: 4, }} >
								<About />
							</Grid>
							<Grid size={{ sm: 12, md: 4, }} >
								<Skillset />
							</Grid>
							<Grid size={{ sm: 12, md: 4, }} >
								<Projects />
							</Grid>

							<Grid size={{ sm: 12, md: 5, }} >
								<Education />

							</Grid>
							<Grid container size={{ sm: 12, md: 7, }} >
								<Grid size={{ md: 10, }} >
									<WorkExperience />
								</Grid>
								<Grid container size={{ md: 2, }} direction={"column"}>

									<Grid size={{ xs: 12, }} >
										<Language></Language>
									</Grid>
									<Grid size={{ xs: 12, }} >
										<Mode />
									</Grid>

								</Grid>
								<Grid size={{ xs: 12, }} >
									<Hobbies />
								</Grid>
							</Grid>

						</Grid>
						{/* 
					<Grid size={{ xs: 12, sm: 6, md: 9, lg: 9, xl: 7, }}>
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

					</Grid>
				)}

				{!big && (
					<Grid container size={12} direction={"row"} spacing={10}>
						<Grid size={{ xs: 6, }} >
							<Language></Language>
						</Grid>
						<Grid size={{ xs: 6, }} >
							<Mode />
						</Grid>
						<Grid size={{ xs: 12, }} >
							<Home_sm />
						</Grid>

					</Grid>
				)}
			</ThemeProviderWrapper >
		</LanguageProvider >
	);
}

export default App
