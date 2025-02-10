
import { Typography, Card, TextField, Box } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Button } from '@mui/material';
import { useState } from 'react';
import emailjs from "@emailjs/browser";


function Contact() {
	const { data } = useLanguage();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name,
					to_name: "Alessia",
					reply_to: formData.email,
					message: formData.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(response) => {
					alert("Email inviata con successo!");
					setFormData({ name: "", email: "", message: "" });
				},
				(error) => {
					alert("Errore durante l'invio dell'email.");
					console.error(error);
				}
			);
	};

	return (
		<Card sx={{ padding: 3 }}>
			<Typography variant="h3">{data.pages.contact.title}</Typography>
			<Box component="form" autoComplete="off" noValidate onSubmit={handleSubmit}>
				<TextField
					sx={{ width: '50vh' }}
					id="outlined-multiline"
					variant="outlined"
					label={data.pages.contact.name}
					rows={50}
					margin="normal"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				<TextField
					sx={{ width: '50vh' }}
					id="outlined-multiline"
					variant="outlined"
					label={data.pages.contact.email}
					rows={50}
					margin="normal"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<TextField
					id="outlined-multiline"
					variant="outlined"
					label={data.pages.contact.defaultValue}
					multiline
					fullWidth
					rows={15}
					margin="normal"
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>
				<Button type="submit" variant="contained" sx={{ mt: 2 }}>
					Submit
				</Button>
			</Box>
		</Card>



	);
}

export default Contact
