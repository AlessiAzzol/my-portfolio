import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import Grid from "@mui/material/Grid2";

function Layout() {
	const { data } = useLanguage();

	if (!data) return <p>Loading...</p>;

	return (
		<Grid item="true">
			<Header />
			<main>
				<Outlet />
			</main>
		</Grid>
	);
}

export default Layout;
