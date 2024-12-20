import { createTheme, responsiveFontSizes } from '@mui/material';
import backgroundImage from '../assets/img/003.jpg';

let theme = createTheme({
	palette: {
		primary: {
			main: 'rgba(110, 38, 38, 0.17)',
		},
		secondary: {
			main: '#F5CC00',
		},
	},
	shadows: [
		...createTheme().shadows.slice(0, 1),
		'2px 0px 5px rgba(0, 0, 0, 0.3)',
		'rgba(110, 38, 38, 0.17) 0px -23px 25px 0px inset, rgba(110, 38, 38, 0.15) 0px -36px 30px 0px inset, rgba(110, 38, 38, 0.1) 0px -79px 40px 0px inset, rgba(110, 38, 38, 0.06) 0px 2px 1px, rgba(110, 38, 38, 0.09) 0px 4px 2px, rgba(110, 38, 38, 0.09) 0px 8px 4px, rgba(110, 38, 38, 0.09) 0px 16px 8px, rgba(110, 38, 38, 0.09) 0px 32px 16px',
		...createTheme().shadows.slice(3),
	],

	typography: {
		fontFamily: 'Parkinsans',
	},

	textColor: {
		glass: {
			primary: 'rgb(2, 4, 45)',
			secondary: '#F9F9F9',
		},
	},

	background: {
		glass: {
			primary: `url(${backgroundImage})`,
		}
	},

	components: {
		MuiFab: {
			styleOverrides: {
				root: {
					fontFamily: 'Bonbon',
					fontWeight: 'bold',
					fontSize: 'xx-large',
					width: 50,
					height: 50,
				}
			}
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					borderRadius: 100,
					margin: 10,
				}
			}
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					borderRadius: 50,
				}

			}
		},

		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					margin: 10,
					width: 200,
					height: 400,
					display: 'inline-block',
					alignItems: 'center',
				}
			}
		},
		MuiCardMedia: {
			styleOverrides: {
				root: {
					height: 140,
				}
			}
		},
	}
});

theme = createTheme(theme, {
	components: {
		MuiCssBaseline: {
			styleOverrides: () => ({
				body: {
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundImage: theme.background.glass.primary,
					color: theme.textColor.glass.primary,
				},
			}),
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					backdropFilter: 'saturate(200%) blur(1px)',
					backgroundColor: 'transparent',
					boxShadow: theme.shadows[2],
					backgroundImage: ' repeating-linear-gradient(45deg, transparent, #05101000 100px, #2b374c14 200px)',
				}
			}
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgb( 110, 38, 38, 0.6)',
					boxShadow: theme.shadows[2],
					color: theme.textColor.glass.secondary,
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgb( 110, 38, 38, 0.6)',
					boxShadow: theme.shadows[2],
					color: theme.textColor.glass.secondary,
					borderRadius: 50,
					padding: 10,
				}
			}
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					color: theme.textColor.glass.secondary,
				}
			}
		},

		MuiCard: {
			styleOverrides: {
				root: {
					backdropFilter: 'saturate(200%) blur(1px)',
					backgroundColor: 'transparent',
					boxShadow: theme.shadows[2],
					backgroundImage: ' repeating-linear-gradient(45deg, transparent, #05101000 100px, #2b374c14 200px)',

				}
			}
		},
	}
});


export default responsiveFontSizes(theme);
