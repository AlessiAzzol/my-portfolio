import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import CakeIcon from '@mui/icons-material/Cake';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import PublicIcon from '@mui/icons-material/Public';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default {
	profile: {
		title: "ALESSIA AZZOLINA",
		subheader: "Software Developer",
		menu: [
			{ title: "Address", icon: <CottageRoundedIcon fontSize="small" />, content: "Filderbahnstr. 57B, 70567, Stuttgart, Germany" },
			{ title: "Email", icon: <DraftsRoundedIcon fontSize="small" />, content: "azzolina.alessia@gmail.com" },
			/* { title: "Phone", icon: <PhoneEnabledIcon fontSize="small" />, content: "(+39) 3281839923" }, */
			{ title: "Date of birth", icon: <CakeIcon fontSize="small" />, content: "28/11/1992" },
			{ title: "Nationality", icon: <PublicIcon fontSize="small" />, content: "Italian" },
		],
		textBtn: "download CV ",
		iconBtn: <FileDownloadIcon sx={{ marginLeft: "10px" }} fontSize="small" />,
	}

}