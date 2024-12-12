import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import Card from '../../components/Card/Card.jsx';
import TextArea from '../../components/TextArea/TextArea.jsx';
import style from './Body.module.css'
import Profile from '../Profile/Profile.jsx';

function Body() {
	return (
		<div className={style.body}>	
			<Header />
			<Card title='Project 1' text='This is my first project' btnTxt='See more'/>
			<Card title='Project 2' text='This is my second project' btnTxt='See less' />	
			<TextArea/>		
			<Profile></Profile>
			<Footer />
		</div>
	);
}

export default Body
