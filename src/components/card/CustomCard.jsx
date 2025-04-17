import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import React, { useRef, useState, useEffect } from 'react';

function CustomCard({ children }) {
	const theme = useTheme();

	const svgRef = useRef(null);
	const [size, setSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		function updateSize() {
			if (svgRef.current) {
				const { width, height } = svgRef.current.getBoundingClientRect();
				setSize({ width, height });
			}
		}
		updateSize();

		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	const { width, height } = size;

	const path = width && height ? `
		M 10,0 
		H ${width - 10} 
		Q ${width},0 ${width},10 
		V ${height - 80} 
		Q ${width},${height - 70} ${width - 10},${height - 70}
		Q ${width - 70},${height - 70} ${width - 70},${height - 10}
		Q ${width - 70},${height} ${width - 80},${height} 
		H 10
		Q 0,${height} 0,${height - 10}
		V 10 
		Q 0,0 10,0 
		Z
	` : '';

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
			}}
			ref={svgRef}
		>
			<Box
				component="svg"
				preserveAspectRatio="xMaxYMax meet"
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					zIndex: 0,
					overflow: 'visible',

				}}

				xmlns="http://www.w3.org/2000/svg"
			>
				{path && (
					<path
						d={path}
						fill={theme.custom.cardBackground}
						filter="drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2))"
					/>
				)}
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
		</Box>
	);
}

export default CustomCard;
