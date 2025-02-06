import { Outlet } from "react-router-dom";
import Header from "./../Header/Header.jsx";
import { useLanguage } from "./../../context/LanguageContext.jsx";

function Layout() {
	const { data } = useLanguage();

	if (!data) return <p>Loading...</p>;

	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
