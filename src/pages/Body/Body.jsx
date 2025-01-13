
import style from './Body.module.css';
import img1 from '../../assets/img/obiettivo.png';
import { Box, Typography } from '@mui/material';

function Body() {
	return (
		<div >
			<Box>
				<Typography variant="h1" gutterBottom>
					Alessia Azzolina
				</Typography>
				<Typography variant="h2" gutterBottom>
					Software Developer
				</Typography>

			</Box>


		</div>
	);
}

export default Body
