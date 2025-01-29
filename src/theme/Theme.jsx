import { createTheme, responsiveFontSizes } from '@mui/material';
import warmImage from '../assets/img/057.jpg';
import coldImage from '../assets/img/061.jpg';
import flowersImage from '../assets/img/003.jpg';


const baseTheme = createTheme({
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
		fontSize: 12,
		h6: {
			fontWeight: "bold",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: 'rgb( 110, 38, 38, 0.6)',
					boxShadow: theme.shadows[2],
					color: theme.custom.btnColor.secondary,
					borderRadius: 50,
					padding: 10,
				}),
			},
		},
		MuiCard: {
			styleOverrides: {
				root: ({ theme }) => ({
					backdropFilter: 'saturate(200%) blur(10px)',
					backgroundColor: 'transparent',
					boxShadow: theme.shadows[2],
					backgroundImage: ' repeating-linear-gradient(50deg, transparent, #05101000 100px, #2b374c14 250px)',

				}),
			}
		},
		MuiAppBar: {
			styleOverrides: {
				root: ({ theme }) => ({
					backdropFilter: 'saturate(200%) blur(5px)',
					backgroundColor: 'transparent',
					boxShadow: theme.shadows[2],
					borderRadius: 10,
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
		MuiAvatar: {
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

	}
});


const warmTheme = createTheme({
	...baseTheme,
	custom: {
		iconColor: {
			primary: 'blue',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'red',
			secondary: '#F9F9F9',

		},

		background: `url(${warmImage})`,

	},

});

const coldTheme = createTheme({
	...baseTheme,
	custom: {
		iconColor: {
			primary: 'rgb( 110, 38, 38, 1)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb( 110, 38, 38, 0.6)',
			secondary: '#F9F9F9',
		},
		background: `url(${coldImage})`,

	},
});

const flowers = createTheme({
	...baseTheme,
	custom: {
		iconColor: {
			primary: 'rgb( 110, 38, 38, 1)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb( 110, 38, 38, 0.6)',
			secondary: '#F9F9F9',
		},
		background: `url(${flowersImage})`,

	},

});

export const themes = {
	warm: responsiveFontSizes(warmTheme),
	cold: responsiveFontSizes(coldTheme),
	flowers: responsiveFontSizes(flowers),
};
