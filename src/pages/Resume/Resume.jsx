import { Box, Typography, Card } from '@mui/material';
import { Outlet } from "react-router-dom";

function Resume() {
	return (
		<Card sx={{ width: '100%', height: '70vh', margin: 0, marginTop: 3, padding: 0 }}>
			<Typography variant="h1">RESUME</Typography>

		</Card>
	);
}

export default Resume