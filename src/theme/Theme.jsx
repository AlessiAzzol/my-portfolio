import { createTheme, responsiveFontSizes } from '@mui/material';
import cloudImg from '../assets/img/cloud08.jpg';
import fantasyImg from '../assets/img/fantasy10.jpg';
import flowerImg from '../assets/img/flower04.jpg';
import leafImg from '../assets/img/leaf15.jpg';


const baseTheme = createTheme({
	palette: {
		primary: {
			main: 'rgba(110, 38, 38, 0.17)',
		},
		secondary: {
			main: '#F5CC00',
		},

	},
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
					backgroundColor: theme.custom.btnColor.primary,
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


const cloudTheme = createTheme({
	...baseTheme,
	shadows: [
		...createTheme().shadows.slice(0, 1),
		"2px 0px 5px rgba(0, 0, 0, 0.3)",
		`rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, 
			 rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset,
			 rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset,
			 rgba(255, 255, 255, 0.06) 0px 2px 1px,
			 rgba(255, 255, 255, 0.09) 0px 4px 2px, 
			 rgba(255, 255, 255, 0.09) 0px 8px 4px,
			 rgba(255, 255, 255, 0.09) 0px 16px 8px,
			 rgba(255, 255, 255, 0.09) 0px 32px 16px`,
		...createTheme().shadows.slice(3),
	],
	custom: {
		iconColor: {
			primary: '#394149;',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: '#54708f73;',
			secondary: '#394149;',

		},

		background: `url(${cloudImg})`,

	},

});

const fantasyTheme = createTheme({
	...baseTheme,
	shadows: [
		...createTheme().shadows.slice(0, 1),
		"2px 0px 5px rgba(0, 0, 0, 0.3)",
		`rgba(38, 80, 110, 0.17) 0px -23px 25px 0px inset, 
			 rgba(38, 80, 110, 0.15) 0px -36px 30px 0px inset,
			 rgba(38, 80, 110, 0.1) 0px -79px 40px 0px inset,
			 rgba(38, 80, 110, 0.06) 0px 2px 1px,
			 rgba(38, 80, 110, 0.09) 0px 4px 2px, 
			 rgba(38, 80, 110, 0.09) 0px 8px 4px,
			 rgba(38, 80, 110, 0.09) 0px 16px 8px,
			 rgba(38, 80, 110, 0.09) 0px 32px 16px`,
		...createTheme().shadows.slice(3),
	],
	custom: {
		iconColor: {
			primary: 'rgb( 6, 16, 88, 1)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb( 6, 16, 88, 0.6)',
			secondary: '#F9F9F9',
		},
		background: `url(${fantasyImg})`,
	},

});

const leafTheme = createTheme({
	...baseTheme,
	shadows: [
		...createTheme().shadows.slice(0, 1),
		"2px 0px 5px rgba(0, 0, 0, 0.3)",
		`rgba(38, 110, 97, 0.17) 0px -23px 25px 0px inset, 
			 rgba(38, 110, 97, 0.15) 0px -36px 30px 0px inset,
			 rgba(38, 110, 97, 0.1) 0px -79px 40px 0px inset,
			 rgba(38, 110, 97, 0.06) 0px 2px 1px,
			 rgba(38, 110, 97, 0.09) 0px 4px 2px, 
			 rgba(38, 110, 97, 0.09) 0px 8px 4px,
			 rgba(38, 110, 97, 0.09) 0px 16px 8px,
			 rgba(38, 110, 97, 0.09) 0px 32px 16px`,
		...createTheme().shadows.slice(3),
	],
	custom: {
		iconColor: {
			primary: 'rgb(26, 90, 84)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb( 26, 90, 84, 0.6)',
			secondary: '#F9F9F9',
		},
		background: `url(${leafImg})`,

	},

});

const flowerTheme = createTheme({
	...baseTheme,
	shadows: [
		...createTheme().shadows.slice(0, 1),
		"2px 0px 5px rgba(0, 0, 0, 0.3)",
		`rgba(110, 38, 38, 0.17) 0px -23px 25px 0px inset, 
			 rgba(110, 38, 38, 0.15) 0px -36px 30px 0px inset,
			 rgba(110, 38, 38, 0.1) 0px -79px 40px 0px inset,
			 rgba(110, 38, 38, 0.06) 0px 2px 1px,
			 rgba(110, 38, 38, 0.09) 0px 4px 2px, 
			 rgba(110, 38, 38, 0.09) 0px 8px 4px,
			 rgba(110, 38, 38, 0.09) 0px 16px 8px,
			 rgba(110, 38, 38, 0.09) 0px 32px 16px`,
		...createTheme().shadows.slice(3),
	],
	custom: {
		iconColor: {
			primary: 'rgb( 110, 38, 38, 1)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb( 110, 38, 38, 0.6)',
			secondary: '#F9F9F9',
		},
		background: `url(${flowerImg})`,

	},

});

export const themes = {
	cloud: responsiveFontSizes(cloudTheme),
	color: responsiveFontSizes(fantasyTheme),
	leaf: responsiveFontSizes(leafTheme),
	flowers: responsiveFontSizes(flowerTheme),
};
