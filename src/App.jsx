import Sidenav from './components/Sidenav/Sidenav.jsx';
import Body from './components/Body/Body.jsx';

function App() {
	return (
		<div className="container">
			<div className="left">
				<Sidenav />
			</div>
			<div className="right">
				<Body />
			</div>
		</div>
	);
}

export default App
