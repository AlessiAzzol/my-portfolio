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
					backgroundColor: theme.custom.btnColor.primary,
					color: theme.custom.btnColor.secondary,

				}),
			},
		},
		MuiCard: {
			styleOverrides: {
				root: ({ theme }) => ({
					backdropFilter: 'blur(10px)',
					borderRadius: 16,
					boxShadow: theme.shadows[15],
					background: 'rgba(255, 255, 255, 0.25)',

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
			primary: 'rgb( 6, 16, 88, 1)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb( 6, 16, 88, 0.6)',
			secondary: '#F9F9F9',
		},
		background: 'linear-gradient(9deg, rgba(115, 143, 189, 1) 9%, rgba(168, 195, 212, 1) 27%, rgba(219, 214, 223, 1) 53%, rgba(238, 198, 199, 1) 72%, rgba(219, 136, 164, 1) 91%, rgba(204, 142, 177, 1) 98%)',

	},

});

const darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'dark',
	},
	custom: {
		iconColor: {
			primary: 'rgb(163, 192, 189)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb( 163, 192, 189, 0.6)',
			secondary: '#F9F9F9',
		},

		background: 'linear-gradient(9deg, rgba(20,40,80,1) 0%, rgba(39,73,109,1) 61%, rgba(12,123,147,1) 86%, rgba(0,168,204,1) 92%, rgba(21,174,206,1) 95%, rgba(193,218,223,1) 100%)',

	},

});


export const themes = {
	light: responsiveFontSizes(lightTheme),
	dark: responsiveFontSizes(darkTheme),
};
