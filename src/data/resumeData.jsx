import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import CakeIcon from '@mui/icons-material/Cake';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import PublicIcon from '@mui/icons-material/Public';
import PianoIcon from '@mui/icons-material/Piano';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Avatar from '@mui/material/Avatar';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';

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
				{ value: "gb", name: "English" },
				{ value: "it", name: "Italiano" },
				{ value: "de", name: "Deutsch" },
			],
		},
	},
	gb: {
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
					title: "Skills",
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
					items: [
						{ title: "Play Piano", icon: <PianoIcon /> },
						{ title: "Swimming", icon: <PoolIcon /> },
						{ title: "Meditation", icon: <SpaIcon /> },
						{ title: "Crocheting", icon: <SportsVolleyballIcon /> },
						{ title: "Reading", icon: <AutoStoriesIcon /> }
					],

				}

			},
			resume: {
				title: "Experience",
				education: {
					title: "Education and training",
					sectionShort: [
						{
							title: "JAVA developer professional course",
							date: "09/12/2020 – 22/01/2021 Gamma Innovation Academy",
						},
						{
							title: "Web Programming with Python and JavaScript",
							date: "13/04/2020 – 20/11/2020",
						},
						{
							title: "Bachelor's degree in Mathematics and Applications",
							date: "28/11/2018 - Università degli studi Milano Bicocca",
						},
					],
					sectionLong: [
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
					sectionShort: [
						{
							title: "Java Software Developer",
							date: "01/02/2021 - present - Gamma Innovation",
						},
						{
							title: "Systems analyst",
							date: "01/10/2018 – 25/03/2020 Minsait, an Indra company",
						},
					],
					sectionLong: [
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
				projects: [
					{
						title: "Perizie Web",
						subheader: "JAVA",
						shortDescription: "Software che consente la gestione e l'Automatizzazione completa del processo periziale per garantire conformità rispetto alle Polices aziendali.",
						longDescription: "L'applicazione comprende:<br />" +
							"<ul><li>Accessi differenziati per profili/unità organizzative</li>" +
							"<li>Gestione di perizie Retail e Business Corporate</li>" +
							"<li>Colloquio automatizzato e immediato con tutti i principali Provider presenti sul mercato</li>" +
							"<li>Gestione documentale con Versioning dei documenti presenti sul sistema</li>" +
							"<li>Invio tramite MTOM dei documenti di richiesta e perizia</li>" +
							"<li>Gestione anagrafica dei periti interni della Banca, con eventuale processo ad hoc</li>" +
							"<li>Monitoraggio del processo di fatturazione</li>" +
							"<li>Nativamente integrata con gli altri sistemi banca che si interfacciano con il mondo perizie</li></ul>",
						img: "my-portfolio/img/perizieWeb.png",
						reference: "https://www.gammainnovation.it/prodotti/perizie-web/"
					},
					{
						title: "Currency Converter",
						subheader: "JAVA",
						shortDescription: "TODO",
						longDescription: "",
						img: "my-portfolio/img/currencyConverter.png",
						reference: "https://www.google.com"
					},
					{
						title: "Projekt 3",
						subheader: "JAVA",
						shortDescription: "TODO",
						longDescription: "LONG DESCRIPTION",
						img: "my-portfolio/img/todo.jpg",
						reference: "https://www.google.com"
					},
				],
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
					title: "Competenze",
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
					items: [
						{ title: "Pianoforte", icon: <PianoIcon /> },
						{ title: "Piscina", icon: <PoolIcon /> },
						{ title: "Meditazione", icon: <SpaIcon /> },
						{ title: "Uncinetto", icon: <SportsVolleyballIcon /> },
						{ title: "Letture", icon: <AutoStoriesIcon /> }
					],

				}

			},
			resume: {
				title: "Esperienza",
				education: {
					title: "Educazione e formazione",
					sectionShort: [
						{
							title: "Corso professionale JAVA",
							date: "09/12/2020 – 22/01/2021 Gamma Innovation Academy",
						},
						{
							title: "Corso di programmazione web con Python e JavaScript",
							date: "13/04/2020 – 20/11/2020",
						},
						{
							title: "Laurea triennale in Matematica e applicazioni",
							date: "28/11/2018 - Università degli studi Milano Bicocca",
						},
					],
					sectionLong: [
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
					sectionShort: [
						{
							title: "Sviluppatrice Backend - Java",
							date: "01/02/2021 - present - Gamma Innovation",
						},
						{
							title: "Systems analyst",
							date: "01/10/2018 – 25/03/2020 Minsait, an Indra company",
						},
					],
					sectionLong: [
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
				projects: [
					{
						title: "Perizie Web",
						subheader: "JAVA",
						shortDescription: "Software che consente la gestione e l'Automatizzazione completa del processo periziale per garantire conformità rispetto alle Polices aziendali.",
						longDescription: "L'applicazione comprende:<br />" +
							"<ul><li>Accessi differenziati per profili/unità organizzative</li>" +
							"<li>Gestione di perizie Retail e Business Corporate</li>" +
							"<li>Colloquio automatizzato e immediato con tutti i principali Provider presenti sul mercato</li>" +
							"<li>Gestione documentale con Versioning dei documenti presenti sul sistema</li>" +
							"<li>Invio tramite MTOM dei documenti di richiesta e perizia</li>" +
							"<li>Gestione anagrafica dei periti interni della Banca, con eventuale processo ad hoc</li>" +
							"<li>Monitoraggio del processo di fatturazione</li>" +
							"<li>Nativamente integrata con gli altri sistemi banca che si interfacciano con il mondo perizie</li></ul>",
						img: "my-portfolio/img/perizieWeb.png",
						reference: "https://www.gammainnovation.it/prodotti/perizie-web/"
					},
					{
						title: "Currency Converter",
						subheader: "JAVA",
						shortDescription: "TODO",
						longDescription: "",
						img: "my-portfolio/img/currencyConverter.png",
						reference: "https://www.google.com"
					},
					{
						title: "Projekt 3",
						subheader: "JAVA",
						shortDescription: "TODO",
						longDescription: "LONG DESCRIPTION",
						img: "my-portfolio/img/todo.jpg",
						reference: "https://www.google.com"
					},
				],
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
					title: "Kompetenzen",
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
					items: [
						{ title: "Play Piano", icon: <PianoIcon /> },
						{ title: "Swimming", icon: <PoolIcon /> },
						{ title: "Meditation", icon: <SpaIcon /> },
						{ title: "Crocheting", icon: <SportsVolleyballIcon /> },
						{ title: "Reading", icon: <AutoStoriesIcon /> }
					],

				}

			},
			resume: {
				title: "Erfahrung",
				education: {
					title: "Erziehung und Ausbildung",
					sectionShort: [
						{
							title: "Java-Entwickler Profikurs",
							date: "09/12/2020 – 22/01/2021  Gamma Innovation Academy",
						},
						{
							title: "Web Programming with Python and JavaScript",
							date: "13/04/2020 – 20/11/2020",
						},
						{
							title: "Bachelor's degree in Mathematics and Applications",
							date: "28/11/2018 - Università degli studi Milano Bicocca",
						},
					],
					sectionLong: [
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
					sectionShort: [
						{
							title: "Java Softwareentwicklerin",
							date: "01/02/2021 - present - Gamma Innovation",
						},
						{
							title: "Systems analyst",
							date: "01/10/2018 – 25/03/2020 Minsait, an Indra company",
						},
					],
					sectionLong: [
						{
							title: "Java Softwareentwicklerin",
							date: "01/02/2021 - present - Gamma Innovation",
							content: "Ich arbeite an einer Anwendung, die den Immobilienbewertungsprozess für Geschäftskunden automatisiert. Ich habe verschiedene Funktionen entwickelt, darunter angepassten Zugriff für unterschiedliche Benutzerprofile, automatisierte Kommunikation mit Anbietern auf dem Markt und Überwachung des Abrechnungsprozesses. Ich konzentriere mich hauptsächlich auf die Umsetzung von SOAP- und RESTful-Webservices in Java mit dem Spring-Framework."
						},
						{
							title: "Systems analyst",
							date: "01/10/2018 – 25/03/2020 Minsait, an Indra company",
							content: "Ich habe an der Implementierung von Integrationssystemen mit der TIBCO BusinessWorks 6-Plattform gearbeitet. Ich habe Webservices entwickelt und verwaltet, um Kundensysteme zu integrieren, darunter Datenbanken, SAP und TIBCO selbst. Außerdem war ich für die Migration bestehender Anwendungen auf die neuesten Versionen von TIBCO verantwortlich. Jede Entwicklungsphase wurde durch die Erstellung technischer Dokumentationen genau dokumentiert."
						},
					]
				},
			},
			portfolio: {
				title: "Projekte",
				subtitle: "Projekte",
				description: "TODO",
				projects: [
					{
						title: "Perizie Web",
						subheader: "JAVA",
						shortDescription: "Software che consente la gestione e l'Automatizzazione completa del processo periziale per garantire conformità rispetto alle Polices aziendali.",
						longDescription: "L'applicazione comprende:<br />" +
							"<ul><li>Accessi differenziati per profili/unità organizzative</li>" +
							"<li>Gestione di perizie Retail e Business Corporate</li>" +
							"<li>Colloquio automatizzato e immediato con tutti i principali Provider presenti sul mercato</li>" +
							"<li>Gestione documentale con Versioning dei documenti presenti sul sistema</li>" +
							"<li>Invio tramite MTOM dei documenti di richiesta e perizia</li>" +
							"<li>Gestione anagrafica dei periti interni della Banca, con eventuale processo ad hoc</li>" +
							"<li>Monitoraggio del processo di fatturazione</li>" +
							"<li>Nativamente integrata con gli altri sistemi banca che si interfacciano con il mondo perizie</li></ul>",
						img: "my-portfolio/img/perizieWeb.png",
						reference: "https://www.gammainnovation.it/prodotti/perizie-web/"
					},
					{
						title: "Currency Converter",
						subheader: "JAVA",
						shortDescription: "TODO",
						longDescription: "",
						img: "my-portfolio/img/currencyConverter.png",
						reference: "https://www.google.com"
					},
					{
						title: "Projekt 3",
						subheader: "JAVA",
						shortDescription: "TODO",
						longDescription: "LONG DESCRIPTION",
						img: "my-portfolio/img/todo.jpg",
						reference: "https://www.google.com"
					},
				],
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
	},

	background: ""/* `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
	<circle r="8.5" cx="66" cy="388" fill="hsl(195, 75%, 70%)" opacity="0.72" />
	<circle r="4.5" cx="780" cy="99" fill="hsl(65, 75%, 70%)" opacity="0.63" />
	<circle r="9" cx="270" cy="419" fill="hsl(244, 75%, 70%)" opacity="0.50" />
	<circle r="10.5" cx="116" cy="16" fill="hsl(294, 75%, 70%)" opacity="0.28" />
	<circle r="7.5" cx="752" cy="496" fill="hsl(158, 75%, 70%)" opacity="1.00" />
	<circle r="7.5" cx="195" cy="786" fill="hsl(203, 75%, 70%)" opacity="0.45" />
	<circle r="8" cx="552" cy="88" fill="hsl(183, 75%, 70%)" opacity="0.86" />
	<circle r="5.5" cx="155" cy="382" fill="hsl(200, 75%, 70%)" opacity="0.35" />
	<circle r="8.5" cx="103" cy="312" fill="hsl(200, 75%, 70%)" opacity="0.30" />
	<circle r="12" cx="649" cy="571" fill="hsl(167, 75%, 70%)" opacity="0.66" />
	<circle r="10.5" cx="266" cy="467" fill="hsl(244, 75%, 70%)" opacity="0.28" />
	<circle r="9" cx="334" cy="405" fill="hsl(305, 75%, 70%)" opacity="0.82" />
	<circle r="12" cx="439" cy="65" fill="hsl(308, 75%, 70%)" opacity="0.36" />
	<circle r="8" cx="783" cy="205" fill="hsl(158, 75%, 70%)" opacity="0.17" />
	<circle r="14" cx="599" cy="502" fill="hsl(190, 75%, 70%)" opacity="0.50" />
	<circle r="8" cx="221" cy="769" fill="hsl(211, 75%, 70%)" opacity="0.43" />
	<circle r="8.5" cx="539" cy="725" fill="hsl(235, 75%, 70%)" opacity="0.35" />
	<circle r="11" cx="463" cy="90" fill="hsl(286, 75%, 70%)" opacity="0.74" />
	<circle r="6.5" cx="578" cy="739" fill="hsl(199, 75%, 70%)" opacity="0.87" />
	<circle r="10" cx="239" cy="493" fill="hsl(225, 75%, 70%)" opacity="0.62" />
	<circle r="10.5" cx="425" cy="672" fill="hsl(339, 75%, 70%)" opacity="0.74" />
	<circle r="11.5" cx="265" cy="684" fill="hsl(244, 75%, 70%)" opacity="0.14" />
	<circle r="9.5" cx="748" cy="419" fill="hsl(158, 75%, 70%)" opacity="0.52" />
	<circle r="13" cx="97" cy="754" fill="hsl(199, 75%, 70%)" opacity="0.68" />
	<circle r="5" cx="778" cy="534" fill="hsl(158, 75%, 70%)" opacity="0.51" />
	<circle r="5.5" cx="580" cy="49" fill="hsl(156, 75%, 70%)" opacity="0.58" />
	<circle r="15.5" cx="303" cy="442" fill="hsl(281, 75%, 70%)" opacity="0.95" />
	<circle r="8.5" cx="17" cy="111" fill="hsl(193, 75%, 70%)" opacity="0.85" />
	<circle r="13.5" cx="433" cy="431" fill="hsl(339, 75%, 70%)" opacity="0.54" />
	<circle r="4.5" cx="655" cy="24" fill="hsl(104, 75%, 70%)" opacity="0.95" />
	<circle r="7.5" cx="590" cy="146" fill="hsl(157, 75%, 70%)" opacity="0.38" />
	<circle r="6.5" cx="786" cy="331" fill="hsl(158, 75%, 70%)" opacity="0.58" />
	<circle r="11.5" cx="171" cy="115" fill="hsl(259, 75%, 70%)" opacity="0.22" />
	<circle r="18" cx="711" cy="758" fill="hsl(160, 75%, 70%)" opacity="0.93" />
	<circle r="10" cx="166" cy="196" fill="hsl(200, 75%, 70%)" opacity="0.37" />
	<circle r="12.5" cx="255" cy="164" fill="hsl(247, 75%, 70%)" opacity="0.17" />
	<circle r="3.5" cx="533" cy="598" fill="hsl(249, 75%, 70%)" opacity="0.81" />
	<circle r="9.5" cx="84" cy="679" fill="hsl(197, 75%, 70%)" opacity="0.82" />
	<circle r="9" cx="781" cy="655" fill="hsl(158, 75%, 70%)" opacity="0.13" />
	<circle r="7.5" cx="197" cy="164" fill="hsl(224, 75%, 70%)" opacity="0.64" />
	<circle r="9.5" cx="234" cy="359" fill="hsl(217, 75%, 70%)" opacity="0.35" />
	<circle r="7.5" cx="608" cy="18" fill="hsl(133, 75%, 70%)" opacity="0.18" />
	<circle r="11" cx="514" cy="36" fill="hsl(221, 75%, 70%)" opacity="0.16" />
	<circle r="9" cx="650" cy="59" fill="hsl(98, 75%, 70%)" opacity="0.18" />
	<circle r="14" cx="467" cy="321" fill="hsl(315, 75%, 70%)" opacity="0.10" />
	<circle r="9.5" cx="479" cy="572" fill="hsl(304, 75%, 70%)" opacity="0.27" />
	<circle r="11.5" cx="560" cy="651" fill="hsl(222, 75%, 70%)" opacity="0.34" />
	<circle r="13" cx="563" cy="199" fill="hsl(210, 75%, 70%)" opacity="0.33" />
	<circle r="13" cx="424" cy="394" fill="hsl(343, 75%, 70%)" opacity="0.66" />
	<circle r="10.5" cx="254" cy="780" fill="hsl(234, 75%, 70%)" opacity="0.29" />
	<circle r="10.5" cx="512" cy="734" fill="hsl(277, 75%, 70%)" opacity="0.50" />
	<circle r="19.5" cx="450" cy="489" fill="hsl(333, 75%, 70%)" opacity="0.92" />
	<circle r="10" cx="609" cy="185" fill="hsl(172, 75%, 70%)" opacity="0.21" />
	<circle r="14.5" cx="519" cy="344" fill="hsl(263, 75%, 70%)" opacity="0.95" />
	<circle r="7.5" cx="751" cy="371" fill="hsl(158, 75%, 70%)" opacity="0.23" />
	<circle r="8.5" cx="115" cy="214" fill="hsl(201, 75%, 70%)" opacity="0.11" />
	<circle r="12" cx="775" cy="447" fill="hsl(158, 75%, 70%)" opacity="0.76" />
	<circle r="15" cx="289" cy="226" fill="hsl(268, 75%, 70%)" opacity="0.93" />
	<circle r="4.5" cx="16" cy="455" fill="hsl(175, 75%, 70%)" opacity="0.24" />
	<circle r="9" cx="412" cy="457" fill="hsl(344, 75%, 70%)" opacity="0.63" />
	<circle r="15.5" cx="381" cy="171" fill="hsl(338, 75%, 70%)" opacity="0.56" />
	<circle r="17.5" cx="325" cy="594" fill="hsl(293, 75%, 70%)" opacity="0.40" />
	<circle r="7" cx="517" cy="574" fill="hsl(263, 75%, 70%)" opacity="0.59" />
	<circle r="14" cx="336" cy="215" fill="hsl(305, 75%, 70%)" opacity="0.62" />
	<circle r="10.5" cx="91" cy="482" fill="hsl(199, 75%, 70%)" opacity="0.22" />
	<circle r="16" cx="392" cy="778" fill="hsl(343, 75%, 70%)" opacity="0.99" />
	<circle r="7.5" cx="110" cy="351" fill="hsl(200, 75%, 70%)" opacity="0.26" />
	<circle r="4.5" cx="775" cy="147" fill="hsl(97, 75%, 70%)" opacity="0.67" />
	<circle r="9" cx="697" cy="123" fill="hsl(90, 75%, 70%)" opacity="0.48" />
	<circle r="13.5" cx="407" cy="740" fill="hsl(344, 75%, 70%)" opacity="0.44" />
	<circle r="17.5" cx="384" cy="528" fill="hsl(339, 75%, 70%)" opacity="0.62" />
	<circle r="9" cx="465" cy="14" fill="hsl(275, 75%, 70%)" opacity="0.59" />
	<circle r="12" cx="546" cy="410" fill="hsl(235, 75%, 70%)" opacity="0.86" />
	<circle r="8" cx="178" cy="267" fill="hsl(201, 75%, 70%)" opacity="0.16" />
	<circle r="10" cx="118" cy="444" fill="hsl(201, 75%, 70%)" opacity="0.19" />
	<circle r="11.5" cx="406" cy="49" fill="hsl(332, 75%, 70%)" opacity="0.34" />
	<circle r="8" cx="44" cy="130" fill="hsl(213, 75%, 70%)" opacity="0.16" />
	<circle r="7" cx="118" cy="380" fill="hsl(201, 75%, 70%)" opacity="0.45" />
	<circle r="12.5" cx="86" cy="247" fill="hsl(197, 75%, 70%)" opacity="0.92" />
	<circle r="8.5" cx="291" cy="527" fill="hsl(268, 75%, 70%)" opacity="0.27" />
	<circle r="10.5" cx="370" cy="26" fill="hsl(343, 75%, 70%)" opacity="0.32" />
	<circle r="8" cx="67" cy="193" fill="hsl(195, 75%, 70%)" opacity="0.90" />
	<circle r="10.5" cx="674" cy="531" fill="hsl(163, 75%, 70%)" opacity="0.56" />
	<circle r="15.5" cx="605" cy="685" fill="hsl(182, 75%, 70%)" opacity="0.90" />
	<circle r="10" cx="197" cy="631" fill="hsl(203, 75%, 70%)" opacity="0.29" />
	<circle r="12.5" cx="476" cy="134" fill="hsl(280, 75%, 70%)" opacity="0.30" />
	<circle r="5" cx="753" cy="160" fill="hsl(110, 75%, 70%)" opacity="0.44" />
	<circle r="9" cx="194" cy="13" fill="hsl(305, 75%, 70%)" opacity="0.62" />
	<circle r="14.5" cx="347" cy="354" fill="hsl(316, 75%, 70%)" opacity="0.77" />
	<circle r="7" cx="207" cy="189" fill="hsl(207, 75%, 70%)" opacity="0.76" />
	<circle r="13.5" cx="356" cy="59" fill="hsl(338, 75%, 70%)" opacity="0.12" />
	<circle r="13" cx="314" cy="378" fill="hsl(293, 75%, 70%)" opacity="0.61" />
	<circle r="9.5" cx="372" cy="480" fill="hsl(334, 75%, 70%)" opacity="0.88" />
	<circle r="15" cx="336" cy="310" fill="hsl(305, 75%, 70%)" opacity="0.19" />
	<circle r="10" cx="445" cy="136" fill="hsl(316, 75%, 70%)" opacity="0.43" />
	<circle r="11" cx="292" cy="80" fill="hsl(302, 75%, 70%)" opacity="0.50" />
	<circle r="8" cx="170" cy="544" fill="hsl(200, 75%, 70%)" opacity="0.17" />
	<circle r="13" cx="476" cy="697" fill="hsl(304, 75%, 70%)" opacity="0.79" />
	<circle r="7" cx="147" cy="407" fill="hsl(200, 75%, 70%)" opacity="0.34" />
	<circle r="7.5" cx="104" cy="702" fill="hsl(200, 75%, 70%)" opacity="0.22" />
	<circle r="13" cx="224" cy="575" fill="hsl(211, 75%, 70%)" opacity="0.97" />
	<circle r="9" cx="578" cy="336" fill="hsl(199, 75%, 70%)" opacity="0.14" />
	<circle r="7" cx="12" cy="239" fill="hsl(169, 75%, 70%)" opacity="0.64" />
	<circle r="10" cx="139" cy="728" fill="hsl(200, 75%, 70%)" opacity="0.73" />
	<circle r="13.5" cx="292" cy="764" fill="hsl(268, 75%, 70%)" opacity="0.71" />
	<circle r="9" cx="716" cy="371" fill="hsl(159, 75%, 70%)" opacity="0.38" />
	<circle r="3.5" cx="792" cy="160" fill="hsl(111, 75%, 70%)" opacity="0.63" />
	<circle r="9.5" cx="508" cy="548" fill="hsl(277, 75%, 70%)" opacity="0.24" />
	<circle r="4.5" cx="770" cy="123" fill="hsl(77, 75%, 70%)" opacity="0.81" />
	<circle r="8" cx="42" cy="639" fill="hsl(186, 75%, 70%)" opacity="0.28" />
	<circle r="11.5" cx="198" cy="476" fill="hsl(203, 75%, 70%)" opacity="0.63" />
	<circle r="9.5" cx="327" cy="48" fill="hsl(333, 75%, 70%)" opacity="0.95" />
	<circle r="13" cx="561" cy="464" fill="hsl(222, 75%, 70%)" opacity="0.93" />
	<circle r="7.5" cx="784" cy="490" fill="hsl(158, 75%, 70%)" opacity="0.25" />
	<circle r="11.5" cx="226" cy="256" fill="hsl(217, 75%, 70%)" opacity="0.58" />
	<circle r="12.5" cx="668" cy="683" fill="hsl(163, 75%, 70%)" opacity="0.67" />
	<circle r="9" cx="209" cy="220" fill="hsl(207, 75%, 70%)" opacity="0.20" />
	<circle r="10.5" cx="78" cy="142" fill="hsl(231, 75%, 70%)" opacity="0.32" />
	<circle r="8.5" cx="707" cy="561" fill="hsl(160, 75%, 70%)" opacity="0.13" />
	<circle r="9.5" cx="177" cy="748" fill="hsl(201, 75%, 70%)" opacity="0.41" />
	<circle r="8" cx="732" cy="532" fill="hsl(158, 75%, 70%)" opacity="0.13" />
	<circle r="18" cx="341" cy="761" fill="hsl(316, 75%, 70%)" opacity="0.98" />
	<circle r="8" cx="164" cy="588" fill="hsl(200, 75%, 70%)" opacity="0.63" />
	<circle r="10.5" cx="440" cy="352" fill="hsl(333, 75%, 70%)" opacity="0.98" />
	<circle r="13" cx="689" cy="454" fill="hsl(160, 75%, 70%)" opacity="0.53" />
	<circle r="9" cx="697" cy="175" fill="hsl(132, 75%, 70%)" opacity="0.49" />
	<circle r="11.5" cx="704" cy="324" fill="hsl(160, 75%, 70%)" opacity="0.76" />
	<circle r="8" cx="285" cy="497" fill="hsl(256, 75%, 70%)" opacity="0.38" />
	<circle r="12" cx="455" cy="783" fill="hsl(325, 75%, 70%)" opacity="0.51" />
	<circle r="7" cx="601" cy="255" fill="hsl(182, 75%, 70%)" opacity="0.58" />
	<circle r="11" cx="25" cy="67" fill="hsl(196, 75%, 70%)" opacity="0.82" />
	<circle r="17.5" cx="324" cy="110" fill="hsl(309, 75%, 70%)" opacity="0.81" />
	<circle r="12" cx="774" cy="724" fill="hsl(158, 75%, 70%)" opacity="0.77" />
	<circle r="7.5" cx="566" cy="306" fill="hsl(210, 75%, 70%)" opacity="0.95" />
	<circle r="9.5" cx="547" cy="537" fill="hsl(235, 75%, 70%)" opacity="0.55" />
	<circle r="7.5" cx="200" cy="357" fill="hsl(207, 75%, 70%)" opacity="0.32" />
	<circle r="14.5" cx="618" cy="620" fill="hsl(175, 75%, 70%)" opacity="0.85" />
	<circle r="9.5" cx="392" cy="651" fill="hsl(343, 75%, 70%)" opacity="0.71" />
	<circle r="13.5" cx="167" cy="680" fill="hsl(200, 75%, 70%)" opacity="0.59" />
	<circle r="18" cx="378" cy="281" fill="hsl(339, 75%, 70%)" opacity="0.31" />
	<circle r="8" cx="569" cy="710" fill="hsl(210, 75%, 70%)" opacity="0.61" />
	<circle r="9.5" cx="206" cy="135" fill="hsl(250, 75%, 70%)" opacity="0.60" />
	<circle r="16" cx="330" cy="503" fill="hsl(305, 75%, 70%)" opacity="0.96" />
	<circle r="10.5" cx="408" cy="81" fill="hsl(332, 75%, 70%)" opacity="0.84" />
	<circle r="14" cx="241" cy="24" fill="hsl(312, 75%, 70%)" opacity="0.58" />
	<circle r="6" cx="11" cy="314" fill="hsl(169, 75%, 70%)" opacity="0.84" />
	<circle r="13.5" cx="105" cy="67" fill="hsl(277, 75%, 70%)" opacity="0.54" />
	<circle r="8" cx="295" cy="52" fill="hsl(312, 75%, 70%)" opacity="0.32" />
	<circle r="12.5" cx="251" cy="79" fill="hsl(285, 75%, 70%)" opacity="0.93" />
	<circle r="8.5" cx="239" cy="415" fill="hsl(225, 75%, 70%)" opacity="0.33" />
	<circle r="16" cx="323" cy="264" fill="hsl(293, 75%, 70%)" opacity="0.20" />
</svg>`
 */
}

export const smIcons = [
	{ icon: <Avatar sx={{ fontFamily: 'Bonbon', fontWeight: 'bold', fontSize: 'xx-large', }}> A</Avatar > },
	{ icon: <Avatar><CodeIcon /></Avatar> },
	{ icon: <Avatar><SchoolIcon /></Avatar> },
	{ icon: <Avatar><WorkHistoryIcon /></Avatar> },
	{ icon: <Avatar><WorkIcon /></Avatar> },
	{ icon: <Avatar><CategoryIcon /></Avatar> },
];