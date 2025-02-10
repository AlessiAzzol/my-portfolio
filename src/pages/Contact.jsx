
import { Typography, Card, TextField, Box } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';

function Contact() {
	const { data } = useLanguage();
	return (
		<Card sx={{ padding: 3 }}>
			<Typography variant="h3">{data.pages.contact.title}</Typography>
			<Box component="form" autoComplete="off" noValidate>
				<TextField
					sx={{ width: '50vh' }}
					id="outlined-multiline"
					variant="outlined"
					label={data.pages.contact.name}
					rows={50}
					margin="normal"
				/>
				<TextField
					sx={{ width: '50vh' }}
					id="outlined-multiline"
					variant="outlined"
					label={data.pages.contact.email}
					rows={50}
					margin="normal"
				/>
				<TextField
					id="outlined-multiline"
					variant="outlined"
					label={data.pages.contact.defaultValue}
					multiline
					fullWidth
					rows={15}
					margin="normal"
				/>
			</Box>
		</Card>



	);
}

export default Contact
