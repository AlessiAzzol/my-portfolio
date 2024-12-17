import List from '../List/List.jsx';
import Logo from '../Logo/Logo.jsx';
import style from './Sidenav.module.css';
import React, { useState } from 'react';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';

function Sidenav() {
	const menu = [
		{ title: "Home", href: "#", tooltip:  "Home", icon: <CottageRoundedIcon /> },
		{ title: "About", href: "#", tooltip:  "About", icon: <InfoRoundedIcon /> },
		{ title: "Services", href: "#", tooltip:  "Services", icon: <EuroRoundedIcon /> },
		{ title: "Contact", href: "#", tooltip:  "Contact", icon: <DraftsRoundedIcon /> }
	];

	const [width, setWidth] = useState("200px");

	function handleResize() {
		setWidth((prevWidth) => (prevWidth === "200px" ? "100px" : "200px"));
	}

	const [language, setLanguage] = useState("EN");

	function handleLanguageChange(e) {
		setLanguage(e.target.value);
	}

	return (<nav className={`${style.sidebar} glass`} style={{ width: width }} >
		<div  className={style.barItem} onClick={handleResize}>
			<Logo></Logo>
		</div>
		<div className={style.menu} >
			<List list={menu}></List>
		</div>
		<div  className={style.barItem}>
			<select className="circle" value={language} onChange={handleLanguageChange}>
				<option value="EN">EN</option>
				<option value="DE">DE</option>
				<option value="IT">IT</option>
			</select>
		</div>
	</nav>);
};

export default Sidenav