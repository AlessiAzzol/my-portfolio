
import { Typography, Card, TextField, Box } from '@mui/material';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Button } from '@mui/material';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import Grid from '@mui/material/Grid2';


function Contact() {
	const { data } = useLanguage();

	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		message: "",
	});

	const [emailError, setEmailError] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleEmailChange = (e) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		setEmailError(e.target.value && !emailPattern.test(e.target.value));
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name + " " + formData.surname,
					to_name: "Alessia",
					reply_to: formData.email,
					message: formData.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					alert(data.pages.contact.success);
					setFormData({ name: "", surname: "", email: "", message: "" });
				},
				(error) => {
					alert(data.pages.contact.success);
					console.error(error);
				}
			);
	};

	return (
		<Card sx={{
			padding: 3,
			flexGrow: 1,
			overflow: "auto",
			maxHeight: "82vh",
		}}>
			<Typography variant="h6">{data.pages.contact.title}</Typography>
			<Box component="form" autoComplete="off" noValidate onSubmit={handleSubmit}>
				<Grid container spacing={3} direction="row">
					<Grid item="true" size={4} >
						<TextField required
							fullWidth
							variant="outlined"
							label={data.pages.contact.name}
							rows={50}
							margin="normal"
							name="name"
							value={formData.name}
							onChange={handleChange}
						/>

						<TextField required
							fullWidth
							variant="outlined"
							label={data.pages.contact.surname}
							rows={50}
							margin="normal"
							name="surname"
							value={formData.surname}
							onChange={handleChange}
						/>

						<TextField required
							fullWidth
							id="outlined-multiline"
							variant="outlined"
							label={data.pages.contact.email}
							rows={50}
							margin="normal"
							name="email"
							value={formData.email}
							onChange={handleEmailChange}
							helperText={emailError ? data.pages.contact.helperText : ""}

						/>
					</Grid>
					<Grid item="true" size={8} >
						<TextField required
							id="outlined-multiline"
							variant="outlined"
							label={data.pages.contact.defaultValue}
							multiline
							fullWidth
							rows={9}
							margin="normal"
							name="message"
							value={formData.message}
							onChange={handleChange}
						/>
						<Grid item="true" sx={{ display: "flex", justifyContent: "flex-end", }}>
							<Button type="submit" variant="contained"
								disabled={emailError || !formData.email || !formData.name || !formData.surname || !formData.message}>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Box >
		</Card >



	);
}

export default Contact
