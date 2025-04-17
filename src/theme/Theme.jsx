import { createTheme, responsiveFontSizes } from '@mui/material';


const baseTheme = createTheme({
	palette: {
		primary: {
			main: 'rgba(26, 15, 78, 0.17)',
		},
		secondary: {
			main: '#F5CC00',
		},
	},
	typography: {
		fontFamily: 'Parkinsans',
		fontSize: 11,
		h6: {
			fontWeight: "bold",
		},

	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.custom.btnColor.primary,
					boxShadow: theme.shadows[2],
					color: theme.custom.btnColor.secondary,
					borderRadius: 50,
					padding: 10,
				}),
			},
		},
		MuiFab: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.custom.btnColor.tertiary,
					borderTopRightRadius: '15%',
					background: `linear-gradient(45deg,${theme.custom.btnColor.secondary} 0%,  ${theme.custom.btnColor.primary} 50%,  ${theme.custom.btnColor.tertiary} 100%)`,
				}),
			},
		},
		MuiCard: {
			styleOverrides: {
				root: ({ theme }) => ({
					//backdropFilter: 'blur(10px)',
					boxShadow: 'none',
					background: 'transparent',
				}),
			}
		},
		MuiCardHeader: {
			styleOverrides: {
				title: ({ theme }) => ({
					fontSize: '1.5rem',
					fontWeight: 'bold',
					color: theme.custom.iconColor.secondary,
					fontFamily: 'Indie Flower',
					fontStyle: 'normal',
				}),
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: ({ theme }) => ({
					paddingBottom: 0,

				}),
			}
		},
		MuiCardActions: {
			styleOverrides: {
				root: ({ theme }) => ({
					background: 'transparent',
					padding: 0,
					margin: 0,
					height: 70,
					overflow: 'visible',
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'flex-end'

				}),
			}
		},
		MuiTimelineDot: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.custom.iconColor.primary,
				}),
			}
		},
		MuiTimelineConnector: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.custom.iconColor.primary,
				}),
			}
		},
		MuiStepConnector: {
			styleOverrides: {
				root: ({ theme }) => ({
					"& .MuiStepConnector-line": {
						borderColor: theme.custom.iconColor.primary,
						borderWidth: 2,
					},

				}),
			}
		},
		MuiAvatar: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundImage: `linear-gradient(to right,${theme.custom.iconColor.primary},  ${theme.custom.iconColor.secondary})`,
				}),
			}
		},


	},
});


const lightTheme = createTheme({
	...baseTheme,
	custom: {
		iconColor: {
			primary: 'rgb(252, 113, 22)',
			secondary: 'rgb(116, 12, 2)',

		},
		btnColor: {
			primary: '#037387',
			secondary: '#0DD2C8',
			tertiary: 'rgb(255, 255, 255)',
		},
		svgColor: {
			primary: '#FC7116',
			secondary: '#FDB000',
		},

		cardBackground: 'rgba(255, 255, 255, 1)',
		backgroundColor: 'rgba(3, 115, 135, 0.1)',
		highlight: 'rgba(255, 255, 0, 0.5)',
	},

});

const darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'dark',
	},
	custom: {
		iconColor: {
			primary: 'rgb(201, 202, 245)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb(201, 202, 245)',
			secondary: 'rgb(112, 113, 227)',
		},
		svgColor: {
			primary: 'rgba(255, 255, 0, 1)',
			secondary: 'rgba(255, 255, 0, 1)',
		},

		cardBackground: 'rgb(8, 34, 233)',
		backgroundColor: 'rgb(0, 28, 75)',
		highlight: 'rgba(255, 255, 0, 1)',

	},

});


export const themes = {
	light: responsiveFontSizes(lightTheme),
	dark: responsiveFontSizes(darkTheme),
};
