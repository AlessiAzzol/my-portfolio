import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import CakeIcon from '@mui/icons-material/Cake';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import PublicIcon from '@mui/icons-material/Public';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default {
	settings: {
		themes: {
			label: "Theme",
			options: [
				{ name: "light", value: "light" },
				{ name: "dark", value: "dark" },
			],
		},
		languages: {
			label: "Language",
			options: [
				{ value: "en", name: "English" },
				{ value: "it", name: "Italiano" },
				{ value: "de", name: "Deutsch" },
			],
		},
	},
	en: {
		profile: {
			title: "ALESSIA AZZOLINA",
			subheader: "Software Developer",
			menu: [
				{ title: "Address", icon: <CottageRoundedIcon fontSize="small" />, content: "Filderbahnstr. 57B, 70567, Stuttgart, Germany", fontSize: "0.9em" },
				{ title: "Email", icon: <DraftsRoundedIcon fontSize="small" />, content: "azzolina.alessia@gmail.com", fontSize: "0.9em" },
				/* { title: "Phone", icon: <PhoneEnabledIcon fontSize="small" />, content: "(+39) 3281839923" }, */
				{ title: "Date of birth", icon: <CakeIcon fontSize="small" />, content: "28/11/1992", fontSize: "0.9em" },
				{ title: "Nationality", icon: <PublicIcon fontSize="small" />, content: "Italian", fontSize: "0.9em" },
			],
			textBtn: "download CV ",
			iconBtn: <FileDownloadIcon sx={{ marginLeft: "10px" }} fontSize="small" />,
		},
		header: {
			home: "/my-portfolio",
			pages: [
				{ title: "Experience", href: "/my-portfolio/resume" },
				{ title: "Projects", href: "/my-portfolio/portfolio" },
				{ title: "Contact", href: "/my-portfolio/contact" },
			],
		},
		pages: {
			home: {
				section1:
				{
					title: "About me",
					description: "I am a creative thinker who enjoys exploring innovative solutions from different perspectives. With a strong background in backend development, I bring strong analytical skills and the ability to approach challenges both independently and collaboratively.",
				},
				section2: {
					title: "Services",
					description: "",
					skills: [
						{ title: "JAVA", level: 100 },
						{ title: "Spring Boot", level: 90 },
						{ title: "Web Services", level: 90 },
						{ title: "Postman", level: 90 },
						{ title: "Relational Database", level: 75 },
						{ title: "HTML, CSS", level: 60 },
						{ title: "Python, Django", level: 40 },
						{ title: "Angular JS", level: 30 },
						{ title: "React", level: 30 },
					],
				},
				section3: {
					title: "Hobbies",
					description: "TODO",
				}

			},
			resume: {
				title: "Experience",
				education: {
					title: "Education and training",
					section: [
						{
							title: "JAVA developer professional course",
							date: "09/12/2020 – 22/01/2021 Gamma Innovation Academy",
							content: "In this course I acquired skills for developing stack-based applications and methodologies to work within a software team developer operating in corporate contexts (banking, insurance and other industries). \nI deepened my knowledge of various data structures such as Array, Linked List, Binary Tree, Hashmap, Hashset."
						},
						{
							title: "Web Programming with Python and JavaScript",
							date: "13/04/2020 – 20/11/2020",
							content: "I learned how to build web pages using HTML and CSS, how to use Git and GitHub to keep track of changes to the code and collaborate with others. I gained a basic understanding of the Python language, how to manipulate its data types and build functions. I learned the use of Python's Django framework to create dynamic applications and I developed my web-design skills by working on several projects during the course. I used Django Models to communicate with databases using Python classes and objects."
						},
						{
							title: "Bachelor's degree in Mathematics and Applications",
							date: "28/11/2018 - Università degli studi Milano Bicocca",
							content: "I gained a solid preparation in the Mathematics disciplines: analysis, algebra, geometry, probability calculation, physics. \nIn my thesis I studied a class of functions, “spline”, that are used in applications requiring data interpolation and smoothing. I built a mathematical model using Matlab to reproduce a desired shape starting from a set of points."
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
			},
			portfolio: {
				title: "Portfolio",
				subtitle: "Projects",
				description: "TODO",
			},
			contact: {
				title: "Contact",
				name: "Name",
				surname: "Surname",
				email: "email",
				defaultValue: "Send me a message",
				success: "Message sent successfully.",
				helperText: "Please enter a valid e-mail address",
				error: "Error sending message.",
			},
		},
	},
	it: {
		profile: {
			title: "ALESSIA AZZOLINA",
			subheader: "Sviluppatrice Software",
			menu: [
				{ title: "Indirizzo", icon: <CottageRoundedIcon fontSize="small" />, content: "Filderbahnstr. 57B, 70567, Stuttgart, Germany" },
				{ title: "Email", icon: <DraftsRoundedIcon fontSize="small" />, content: "azzolina.alessia@gmail.com" },
				/* { title: "Phone", icon: <PhoneEnabledIcon fontSize="small" />, content: "(+39) 3281839923" }, */
				{ title: "Data di nascita", icon: <CakeIcon fontSize="small" />, content: "28/11/1992" },
				{ title: "Nazionalità", icon: <PublicIcon fontSize="small" />, content: "Italiana" },
			],
			textBtn: "Curriculum",
			iconBtn: <FileDownloadIcon sx={{ marginLeft: "10px" }} fontSize="small" />,
		},
		header: {
			home: "/my-portfolio",
			pages: [
				{ title: "Esperienza", href: "/my-portfolio/resume" },
				{ title: "Progetti", href: "/my-portfolio/portfolio" },
				{ title: "Contatti", href: "/my-portfolio/contact" },
			],
		},
		pages: {
			home: {
				section1: {
					title: "Su di me",
					description: "Sono una persona creativa che ama esplorare soluzioni innovative da diverse prospettive. Con un solido background nello sviluppo backend, possiedo forti capacità analitiche e l'abilità di affrontare le sfide sia in modo indipendente che collaborativo.",
				},
				section2: {
					title: "Servizi",
					description: "",
					skills: [
						{ title: "JAVA", level: 100 },
						{ title: "Spring Boot", level: 90 },
						{ title: "Web Services", level: 90 },
						{ title: "Postman", level: 90 },
						{ title: "Relational Database", level: 75 },
						{ title: "HTML, CSS", level: 60 },
						{ title: "Python, Django", level: 40 },
						{ title: "Angular JS", level: 30 },
						{ title: "React", level: 30 },
					],
				},
				section3: {
					title: "Tempo libero",
					description: "TODO",
				}

			},
			resume: {
				title: "Esperienza",
				education: {
					title: "Educazione e formazione",
					section: [
						{
							title: "Corso professionale JAVA",
							date: "09/12/2020 – 22/01/2021 Gamma Innovation Academy",
							content: "In questo corso ho acquisito le conoscenze necessarie per lavorare all'interno di un team di sviluppatori software che operano in contesti aziendali. Ho approfondito la conoscenza di varie strutture dati come Array, Linked List, Binary Tree, Hashmap, Hashset.",
						},
						{
							title: "Corso di programmazione web con Python e JavaScript",
							date: "13/04/2020 – 20/11/2020",
							content: "Ho imparato a sviluppare pagine web usando HTML e CSS, utilizzare Git e GitHub per tenere traccia delle modifiche al codice e collaborare con altri sviluppatori e colleghi. Ho acquisito una conoscenza di base del linguaggio Python, e del framework Django per creare applicazioni dinamiche.Ho lavorato a diversi progetti durante il corso utilizzando Django Models per comunicare con i database."
						},
						{
							title: "Laurea triennale in Matematica e applicazioni",
							date: "28/11/2018 - Università degli studi Milano Bicocca",
							content: "Ho acquisito una solida preparazione nelle discipline matematiche: analisi, algebra, geometria, calcolo delle probabilità, fisica. \Nella mia tesi ho studiato la classe di funzioni “spline”, utilizzate come strumento di grafica computerizzata per la rappresentazione di forme e oggetti non geometrici. Ho costruito un modello matematico utilizzando Matlab per riprodurre una forma desiderata a partire da un insieme di punti."
						},
					]
				},
				experience: {
					title: "Esperienza lavorativa",
					section: [
						{
							title: "Sviluppatrice Backend - Java",
							date: "01/02/2021 - present - Gamma Innovation",
							content: "Lavoro a un'applicazione che automatizza il processo di valutazione immobiliare utilizzato dai clienti bancari. Ho sviluppato diverse funzionalità, tra cui l'accesso personalizzato in base a diversi profili utente, la comunicazione automatizzata con i fornitori sul mercato, il monitoraggio del processo di fatturazione. \Mi occupo principalmente della realizzazione di servizi web SOAP e RESTful in Java utilizzando il framework Spring."
						},
						{
							title: "Systems analyst",
							date: "01/10/2018 – 25/03/2020 Minsait, an Indra company",
							content: "Ho lavorato all'implementazione di sistemi di integrazione utilizzando la piattaforma TIBCO BusinessWorks 6. Ho sviluppato e gestito servizi web per integrare i sistemi dei clienti tra cui database, SAP e TIBCO stesso. Inoltre, sono stata responsabile della migrazione delle applicazioni esistenti alle ultime versioni di TIBCO. Ogni fase di sviluppo è stata dettagliata attraverso la stesura di documentazione tecnica."
						},
					]
				},

			},
			portfolio: {
				title: "Progetti",
				subtitle: "Progetti",
				description: "TODO",
			},
			contact: {
				title: "Contatti",
				name: "Nome",
				surname: "Cognome",
				email: "email",
				defaultValue: "Scrivi un messaggio",
				success: "Messaggio inviato correttamente.",
				helperText: "Inserisci un indirizzo email valido",
				error: "Si è verificato un errore nell'invio del messaggio.",
			},
		},
	},
	de: {
		profile: {
			title: "ALESSIA AZZOLINA",
			subheader: "Softwareentwicklerin",
			menu: [
				{ title: "Adresse", icon: <CottageRoundedIcon fontSize="small" />, content: "Filderbahnstr. 57B, 70567, Stuttgart, Germany" },
				{ title: "Email", icon: <DraftsRoundedIcon fontSize="small" />, content: "azzolina.alessia@gmail.com" },
				/* { title: "Phone", icon: <PhoneEnabledIcon fontSize="small" />, content: "(+39) 3281839923" }, */
				{ title: "Geburtsdatum", icon: <CakeIcon fontSize="small" />, content: "28/11/1992" },
				{ title: "Nationalität", icon: <PublicIcon fontSize="small" />, content: "Italienisch" },
			],
			textBtn: "Lebenslauf",
			iconBtn: <FileDownloadIcon sx={{ marginLeft: "10px" }} fontSize="small" />,
		},
		header: {
			home: "/my-portfolio",
			pages: [
				{ title: "Erfahrung", href: "/my-portfolio/resume" },
				{ title: "Projekte", href: "/my-portfolio/portfolio" },
				{ title: "Kontakt", href: "/my-portfolio/contact" },
			],
		},
		pages: {
			home: {
				section1:
				{
					title: "Über mich",
					description: "Ich bin eine kreative Person, die gerne innovative Lösungen aus verschiedenen Perspektiven erforscht. Mit einem starken Hintergrund in der Backend-Entwicklung, bringe ich ausgeprägte analytische Fähigkeiten sowie die Fähigkeit mit und gehe Herausforderungen sowohl eigenständig als auch im Team an.",
				},
				section2: {
					title: "Leistungen",
					description: "",
					skills: [
						{ title: "JAVA", level: 100 },
						{ title: "Spring Boot", level: 90 },
						{ title: "Web Services", level: 90 },
						{ title: "Postman", level: 90 },
						{ title: "Relational Database", level: 75 },
						{ title: "HTML, CSS", level: 60 },
						{ title: "Python, Django", level: 40 },
						{ title: "Angular JS", level: 30 },
						{ title: "React", level: 30 },
					],
				},
				section3: {
					title: "Hobbys",
					description: "TODO",
				}

			},
			resume: {
				title: "Erfahrung",
				education: {
					title: "Erziehung und Ausbildung",
					section: [
						{
							title: "Java-Entwickler Profikurs",
							date: "09/12/2020 – 22/01/2021  Gamma Innovation Academy",
							content: "In diesem Kurs habe ich Fähigkeiten zur Entwicklung von Stack-basierten Anwendungen und Methoden zur Arbeit in einem Softwareentwicklungsteam, das in Unternehmenskontexten (Banken, Versicherungen und anderen Branchen) tätig ist, erworben. \nIch habe mein Wissen über verschiedene Datenstrukturen wie Array, Linked List, Binärbaum, Hashmap und Hashset vertieft."
						},
						{
							title: "Web Programming with Python and JavaScript",
							date: "13/04/2020 – 20/11/2020",
							content: "Ich habe gelernt, wie man Webseiten mit HTML und CSS erstellt, wie man Git und GitHub verwendet, um Änderungen am Code nachzuverfolgen und mit anderen zusammenzuarbeiten. Ich habe ein grundlegendes Verständnis der Programmiersprache Python erworben, wie man ihre Datentypen manipuliert und Funktionen erstellt. Ich habe den Einsatz des Django Frameworks von Python zur Erstellung dynamischer Anwendungen gelernt und meine Webdesign-Fähigkeiten durch die Arbeit an mehreren Projekten während des Kurses weiterentwickelt. Ich habe Django Modelle verwendet, um über Python Klassen und Objekte mit Datenbanken zu kommunizieren."
						},
						{
							title: "Bachelor's degree in Mathematics and Applications",
							date: "28/11/2018 - Università degli studi Milano Bicocca",
							content: "Ich habe eine fundierte Vorbereitung in den mathematischen Disziplinen Analysis, Algebra, Geometrie, Wahrscheinlichkeitsrechnung und Physik erhalten. \nIn meiner Abschlussarbeit habe ich eine Klasse von Funktionen, sogenannte 'Splines', untersucht, die in Anwendungen verwendet werden, die Dateninterpolation und glättung erfordern. Ich habe ein mathematisches Modell mit Matlab erstellt, um eine gewünschte Form aus einem Satz von Punkten zu reproduzieren."
						},
					]
				},
				experience: {
					title: "Berufserfahrung",
					section: [
						{
							title: "Java Softwareentwicklerin",
							date: "01/02/2021 - present - Gamma Innovation",
							content: "Ich arbeite an einer Anwendung, die den Immobilienbewertungsprozess für Geschäftskunden automatisiert. Ich habe verschiedene Funktionen entwickelt, darunter angepassten Zugriff je nach Benutzerprofil, automatisierte Kommunikation mit Anbietern auf dem Markt sowie die Überwachung des Abrechnungsprozesses. Mein Schwerpunkt liegt hauptsächlich auf der Umsetzung von SOAP und RESTful-Webservices in Java unter Verwendung des Spring Frameworks."
						},
						{
							title: "Systems analyst",
							date: "01/10/2018 – 25/03/2020 Minsait, an Indra company",
							content: "Ich arbeitete an der Implementierung von Integrationssystemen mit der TIBCO BusinessWorks 6- Plattform. Ich entwickelte Webservices zur Integration von Kundensystemen, einschließlich Datenbanken, SAP und TIBCO selbst. Darüber hinaus war ich für die Migration bestehender Anwendungen auf die neuesten Versionen von TIBCO verantwortlich. Jede Entwicklungsphase wurde durch die Erstellung technischer Dokumentation detailliert beschrieben."
						},
					]
				},
			},
			portfolio: {
				title: "Projekte",
				subtitle: "Projekte",
				description: "TODO",
			},
			contact: {
				title: "Kontakt",
				name: "Vorname",
				surname: "Nachname",
				email: "email",
				defaultValue: "Eine Nachricht senden",
				success: "Nachricht korrekt gesendet.",
				helperText: "Bitte geben Sie eine gültige E-Mail ein",
				error: "Ein Fehler ist aufgetreten, die Nachricht wurde nicht gesendet.",
			},
		},
	}

}