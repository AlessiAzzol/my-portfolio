import Box from '@mui/material/Box';

function Footer() {
	return (
		<Box sx={{ textAlign: 'right' }} >
			<p>&copy; {new Date().getFullYear()} - Alessia Azzolina</p>
		</ Box>
	);
}

export default Footer