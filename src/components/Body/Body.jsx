import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import Card from '../../components/Card/Card.jsx';
import style from './Body.module.css'
import Profile from '../Profile/Profile.jsx';
import img1 from '../../assets/img/obiettivo.png'

function Body() {
	return (
		<div className={style.body}>
			{/* <Header /> */}
			<Card key='1' title='Project 1' text='This is my first project' btnTxt='See more' img={img1} />
			<Card key='2' title='Project 2' text='This is my second project' btnTxt='See less' img={img1} />
			<Profile></Profile>
			<Footer />
		</div>
	);
}

export default Body
