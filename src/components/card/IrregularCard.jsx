import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';

function IrregularCard({ children }) {
	const theme = useTheme();


	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
			}}

		>

			<Box
				component="svg"
				viewBox="0 0 200 200"
				preserveAspectRatio="none"
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
					M100,50
     				C140,50 150,90 140,120
     				C130,150 90,160 60,140
     				C30,120 40,80 60,60
    				C80,40 90,50 100,
					50Z"
					fill="none"
					stroke={theme.custom.svgColor.secondary}
					strokeWidth="2"
					transform="scale(2) translate(-50, -45)"
				/>

				<path
					d="M98,48
      C138,48 148,88 138,118
      C128,148 88,158 58,138
      C28,118 38,78 58,58
      C78,38 88,48 98,48Z"
					fill="none"
					stroke={theme.custom.svgColor.secondary}
					strokeWidth="1"
					transform="scale(2) translate(-50, -45)"
				/>
			</Box>

			<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '100%',
					zIndex: 1,
				}}
			>
				{children}
			</Box>
		</Box >
	);
}

export default IrregularCard;
