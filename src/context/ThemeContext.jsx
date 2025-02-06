import React, { createContext, useContext, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themes } from "../theme/Theme.jsx";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProviderWrapper = ({ children }) => {
	const [themeName, setThemeName] = useState("flowers");

	const switchTheme = (newTheme) => setThemeName(newTheme);

	return (
		<ThemeContext.Provider value={{ themeName, switchTheme }}>
			<ThemeProvider theme={themes[themeName]}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeProviderWrapper;