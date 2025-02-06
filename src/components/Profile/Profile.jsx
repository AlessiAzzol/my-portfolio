import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Avatar } from '@mui/material';
import CustomTimeline from '../Timeline/CustomTimeline.jsx';
import { useLanguage } from "./../../context/LanguageContext.jsx";

function Profile(props) {
	const { data } = useLanguage();
	const language = localStorage.getItem("language");

	const onButtonClick = () => {
		let fileName = "";
		if (language === "de") {
			fileName = "CV Azzolina - de.pdf";
		} else if (language === "it") {
			fileName = "CV Azzolina - eng.pdf";
		} else {
			fileName = "CV Azzolina - eng.pdf";
		}
		const pdfUrl = "/my-portfolio/" + fileName;
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = fileName;

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<Card>
			<CardHeader title={data.profile.title} subheader={data.profile.subheader} />
			<CardMedia image={props.img} sx={{ clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)", height: "200px", marginTop: "-25px" }} />
			<Avatar sx={{ marginTop: "-25px", marginLeft: "10px", fontFamily: 'Bonbon', fontWeight: 'bold', fontSize: 'xx-large', }}>A</Avatar>
			<CardContent sx={{ padding: "0" }}>
				<CustomTimeline children={data.profile.menu} />
			</CardContent>
			<CardActions>
				<Button size="small" onClick={onButtonClick}>{data.profile.textBtn} {data.profile.iconBtn}</Button>
			</CardActions>
		</Card>
	);
};

export default Profile