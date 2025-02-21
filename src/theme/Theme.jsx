import { createTheme, responsiveFontSizes } from '@mui/material';
import lightImg from '../assets/img/L01.jpg';
import darkImg from '../assets/img/D01.jpg';


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
					backgroundColor: 'transparent',     //'transparent',  //'rgba(255, 255, 255, 0.5)',
					boxShadow: theme.shadows[2],
					backgroundImage: 'repeating-linear-gradient(50deg, transparent -500px, #2b374c14 150px)',

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
		MuiSwitch: {
			styleOverrides: {
				root: ({ theme }) => ({
					width: 45,
					height: 25,
					padding: 0,
					'& .MuiSwitch-switchBase': {
						padding: 0,
						margin: 2,
						transitionDuration: '300ms',
						'&.Mui-checked': {
							color: theme.custom.iconColor.primary,
						},
					},

					'& .MuiSwitch-track': {
						borderRadius: 15,
						opacity: 1,
						transition: theme.transitions.create(['background-color'], {
							duration: 500,
						}),
						...theme.applyStyles('dark', {
							backgroundColor: theme.custom.iconColor.primary,
							opacity: 0.3,
						}),
					},

				}),
			}
		},

	},
});


const lightTheme = createTheme({
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
		background: `url(${lightImg})`,
	},

});

const darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'dark',
	},
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
			primary: 'rgb(163, 192, 189)',
			secondary: '#F9F9F9',
		},
		btnColor: {
			primary: 'rgb( 163, 192, 189, 0.6)',
			secondary: '#F9F9F9',
		},
		background: `url(${darkImg})`,

	},

});


export const themes = {
	light: responsiveFontSizes(lightTheme),
	dark: responsiveFontSizes(darkTheme),
};
