import List from '../List/List.jsx';
import Logo from '../Logo/Logo.jsx'
import style from './Sidenav.module.css'
import React, {useState} from 'react'

function Sidenav() {
	const menu = [	{title: "Home", href: "#"},
					{title: "About", href: "#"},
					{title: "Services", href: "#"},
					{title: "Contact", href: "#"}
				];

	const [width, setWidth] = useState("50px");
	
	function handleResize() {
		setWidth((prevWidth) => (prevWidth === "200px" ? "50px" : "200px")); 
	  }


	return (<nav className={style.sidenav}  style={{ width: width }} >
				<div onClick={handleResize}>
					<Logo></Logo>	
				</div>						
				<List list={menu}></List>
				
			</nav>);
};

export default Sidenav