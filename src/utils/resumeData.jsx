import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import CakeIcon from '@mui/icons-material/Cake';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import PublicIcon from '@mui/icons-material/Public';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default {
	settings: {
		themes: [
			{ name: "warm", value: "warm" },
			{ name: "cold", value: "cold" },
			{ name: "flowers", value: "flowers" },
		],
	},
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
	},
	header: {
		home: "/my-portfolio",
		pages: [
			{ title: "Resume", href: "/my-portfolio/resume" },
			{ title: "Portfolio", href: "/my-portfolio/portfolio" },
			{ title: "Contact", href: "/my-portfolio/contact" },
		],
	},
	pages: {
		home: {
			section: [
				{
					title: "About me",
					description: "I am a software developer with a passion for frontend development. I am a creative and innovative problem solver with a strong interest in web technologies. I am always looking for new challenges and opportunities to learn and grow. TODO",
				},
				{
					title: "Services",
					description: "TODO",
				},
			]
		},
		resume: {
			title: "Resume",
			description: "I have a Bachelor's degree in Computer Science and a Master's degree in Software Engineering. I have also completed several online courses on web development and frontend technologies.",
			education: {
				title: "Education and training",
				section: [
					{
						title: "JAVA developer professional course",
						date: "09/12/2020 – 22/01/2021",
						content: "In this course I acquired skills for developing stack-based applications and methodologies to work within a software team developer operating in corporate contexts (banking, insurance and other industries). \nI deepened my knowledge of various data structures such as Array, Linked List, Binary Tree, Hashmap, Hashset."
					},
					{
						title: "Web Programming with Python and JavaScript",
						date: "13/04/2020 – 20/11/2020 Gamma Innovation Academy",
						content: "I learned how to build web pages using HTML and CSS, how to use Git and GitHub to keep track of changes to the code and collaborate with others. I gained a basic understanding of the Python language, how to manipulate its data types and build functions. I learned the use of Python's Django framework to create dynamic applications and I developed my web-design skills by working on several projects during the course. I used Django Models to communicate with databases using Python classes and objects."
					},
					{
						title: "Bachelor's degree in Mathematics and Applications",
						date: "28/11/2018 - Università degli studi Milano Bicocca",
						content: "I gained a solid preparation in the Mathematics disciplines: analysis, algebra, geometry, probability calculation, physics. \nIn my thesis I studied a class of functions, 'splines', that are used in applications requiring data interpolation and smoothing. I built a mathematical model using Matlab to reproduce a desired shape starting from a set of points."
					},
				]
			},
			experience: {
				title: "Work experience",
				section: [
					{
						title: "Java Software Developer",
						date: "01/02/2021 - present - Gamma Innovation",
						content: "I work on an application that automates the real estate appraisal process used by business banking customers. I have developed various functionalities including customised access according to different user profiles, automated communication with providers on the market, billing process monitoring. \nI mainly focus on the realisation of both SOAP and RESTful web services in Java using the Spring framework."
					},
					{
						title: "Systems analyst",
						date: "01/10/2018 – 25/03/2020 Minsait, an Indra company",
						content: "I have worked on the implementation of integration systems using the TIBCO BusinessWorks 6 platform. I developed and managed web services to integrate customer systems, including databases, SAP and TIBCO itself. In addition, I was responsible for migrating existing applications to the latest versions of TIBCO. Each development phase was detailed through the drafting of technical documentation."
					},
				]
			},
			skills: {
				title: "Skills",
				section: [
					{ title: "HTML", level: 90 },
					{ title: "CSS", level: 80 },
					{ title: "JavaScript", level: 85 },
					{ title: "React", level: 90 },
					{ title: "Angular", level: 80 },
					{ title: "Vue", level: 75 },
					{ title: "Java", level: 85 },
					{ title: "C++", level: 80 },
					{ title: "Python", level: 75 },
				]
			},
		},
		portfolio: {
			title: "Portfolio",
			subtitle: "Projects",
			description: "TODO",
		},
		contact: {
			title: "Contact",
			subtitle: "email",
			description: "TODO",
		},
	},

}