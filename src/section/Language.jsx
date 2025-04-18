import { Box, } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useState } from 'react';
import useTheme from '@mui/material/styles/useTheme';
import resumeData from '../data/resumeData.jsx';
import Grid from '@mui/material/Grid2';
import * as React from 'react'
import { animated, useSpring, useSprings } from '@react-spring/web';
import { forwardRef } from 'react';
import Fab from '@mui/material/Fab';
import { useGesture } from '@use-gesture/react';

function Language() {
	const { language, switchLanguage } = useLanguage();
	const theme = useTheme();

	const backgroundTimeoutRef = React.useRef();
	const avatarTimeoutRef = React.useRef();

	const AnimatedFab = animated(forwardRef((props, ref) => {
		return <Fab ref={ref} {...props} />;
	}));

	const [springs, api] = useSpring(() => ({
		height: 80,

	}))

	const [avatarSprings, avatarApi] = useSprings(
		resumeData.settings.languages.options.length,
		i => ({
			opacity: 0,
		}),
		[]
	)

	const bindGestures = useGesture(
		{
			onHover: ({ hovering }) => {
				if (hovering) {
					if (backgroundTimeoutRef.current) {
						clearTimeout(backgroundTimeoutRef.current)
					}
					if (avatarTimeoutRef.current) {
						clearTimeout(avatarTimeoutRef.current)
					}


					api.start({

						height: 250,
					})

					avatarApi.start({
						opacity: 1,
					})
				} else {
					backgroundTimeoutRef.current = setTimeout(() => {
						api.start({
							opacity: 0,
							height: 80,
						})
						avatarApi.start({
							opacity: 0,
						})
					}, 1000)

					avatarTimeoutRef.current = setTimeout(() => {
						avatarApi.start(i => ({
							y: avatarRefInitialPositions.current[i],
							onRest: () => {
								isVisible.current = false
							},
						}))
					}, 2000)
				}

			},
		},
	)

	const { onPointerEnter, onPointerLeave, ...restGestures } = bindGestures()


	return (
		<Box sx={{
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}}>
			<animated.div
				{...bindGestures()}
				style={{
					position: 'absolute',
					zIndex: 2,
					display: 'flex',
					flexDirection: 'column',
					backdropFilter: 'blur(8px)',
					alignItems: 'center',
					...springs,
				}}
			>

				<Box
					component="svg"
					preserveAspectRatio="none"
					viewBox="0 0 100 100"
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						zIndex: 0,
						overflow: 'visible',
					}}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="					
					M0 95
					C-13 55 -4 27 13 12
					C30 -2 74 -9 88 6
					C102 21 120 95 89 100
					C74 100 14 120 0 95
					C-13 55 -4 27 13 12
    				"
						fill="none"
						stroke={theme.custom.btnColor.primary}
						strokeWidth={4}
						filter="drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2))"
					/>
				</Box>
				<Box
					component="svg"
					preserveAspectRatio="none"
					viewBox="0 0 100 100"
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						zIndex: 0,
						overflow: 'visible',
					}}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="		 
					M100 95
					C113 85 104 57 87 42
					C70 28 26 21 12 36
					C-2 51 -4 95 11 108
					C26 121 86 108 100 95
					C113 85 104 57 87 42
					"
						fill="none"
						stroke={theme.custom.btnColor.primary}
						strokeWidth={2}
						transform="scale(1.2) translate(-10, -30)"
						filter="drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2))"
					/>
				</Box>

				<Grid container direction={"column"} sx={{ padding: 2, paddingTop: 0, paddingBottom: 0 }}>
					<AnimatedFab

						id={language.toLowerCase()}
						sx={{
							backgroundImage: `url(https://flagcdn.com/w320/${language.toLowerCase()}.png)`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							borderRadius: '50%',
							filter: 'saturate(50%)',
							marginTop: 2,
							marginBottom: 2,
						}}>
					</AnimatedFab>
					{resumeData.settings.languages.options.filter(lang => lang.value !== language).map((lang, index) => (

						<AnimatedFab
							key={index}
							id={index}
							style={avatarSprings[index]}
							onClick={() => {
								switchLanguage(lang.value);
							}}
							sx={{
								backgroundImage: `url(https://flagcdn.com/w320/${lang.value.toLowerCase()}.png)`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: '50%',
								filter: 'saturate(50%)',
								marginTop: 2,
								marginBottom: 2,

							}}>
						</AnimatedFab>
					))}

				</Grid>
			</animated.div >
		</Box>

	);
}

export default Language