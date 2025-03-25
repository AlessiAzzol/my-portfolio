import { createContext, useState, useContext } from "react";
import resumeData from "../data/resumeData.jsx";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
	const getInitialLanguage = () => localStorage.getItem("language") || "gb";
	const [language, setLanguage] = useState(getInitialLanguage);

	const switchLanguage = (lang) => {
		setLanguage(lang);
		localStorage.setItem("language", lang);
	};

	const data = resumeData[language] || resumeData["gb"];
	const settings = resumeData.settings;

	return (
		<LanguageContext.Provider value={{ language, switchLanguage, data, settings }} key={language}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageProvider;
