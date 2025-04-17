import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
	return (

		<Box sx={{ textAlign: 'left', marginRight: 2, padding: 1 }} >
			<Typography>&copy; {new Date().getFullYear()} - Alessia Azzolina</Typography>

		</ Box>

	);
}

export default Footer