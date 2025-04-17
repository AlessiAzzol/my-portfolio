import { createTheme, responsiveFontSizes } from '@mui/material';
import bck from '../assets/img/hhhorizon.svg';


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
					//backgroundColor: theme.custom.btnColor.primary,
					color: theme.custom.btnColor.tertiary,
					//background: `radial-gradient(circle, ${theme.custom.btnColor.secondary} 0%,  ${theme.custom.btnColor.primary} 80%)`,
					background: `linear-gradient(45deg,${theme.custom.btnColor.secondary} 0%,  ${theme.custom.btnColor.primary} 50%,  ${theme.custom.btnColor.tertiary} 100%)`,
				}),
			},
		},
		MuiCard: {
			styleOverrides: {
				root: ({ theme }) => ({
					backdropFilter: 'blur(10px)',

					boxShadow: 'none',
					//boxShadow: theme.shadows[15],
					borderRadius: 16,
					background: 'transparent',
				}),
			}
		},
		MuiCardHeader: {
			styleOverrides: {
				root: ({ theme }) => ({
					/* 	background: `${theme.custom.cardBackground}`,
						paddingBottom: 0,
						borderTopLeftRadius: 16,
						borderTopRightRadius: 16, */

				}),
				title: ({ theme }) => ({
					fontSize: '1.2rem',
					fontWeight: 'bold',
					color: theme.custom.iconColor.secondary,
				}),
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: ({ theme }) => ({
					//background: theme.custom.cardBackground,
					paddingBottom: 0,
					//background: `radial-gradient(circle, ${theme.custom.cardBackground2} 0%,  ${theme.custom.cardBackground} 50%)`,

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
					backgroundColor: theme.custom.iconColor.primary,
				}),
			}
		},


	},
});


const lightTheme = createTheme({
	...baseTheme,
	custom: {
		iconColor: {
			primary: 'rgb(57, 2, 85)',
			secondary: 'rgb(49, 8, 11)',

		},
		btnColor: {
			primary: 'rgba(255, 187, 0, 1)',
			secondary: 'rgb(161, 16, 16)',
			tertiary: 'rgb(255, 255, 255)',
		},

		cardBackground: ' rgba(255, 255, 255, 1)',
		backgroundColor: 'rgba(57, 2, 85, 0.1)',
		//backgroundImage: HorizonBackground,
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

		cardBackground: 'rgb(3, 29, 43)',
		cardBackground2: 'transparent',
		//backgroundColor: '  rgba(2, 58, 85,1)',

	},

});


export const themes = {
	light: responsiveFontSizes(lightTheme),
	dark: responsiveFontSizes(darkTheme),
};
