import style from './Header.module.css'
import React, { useState } from 'react'

function Header() {
	const [language, setLanguage] = useState("EN");

	function handleLanguageChange(e) {
		setLanguage(e.target.value);
	}
	return (
		
		<header className={style.header}>			
			<select value = {language} onChange={handleLanguageChange}>
				<option value="EN">EN</option>
				<option value="DE">DE</option>
				<option value="IT">IT</option>
			</select>
		</header>
	);
} 

export default Header