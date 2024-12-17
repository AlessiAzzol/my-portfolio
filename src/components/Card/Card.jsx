import projPic from '../../assets/img/obiettivo.png'
import Button from '../Button/Button'
import style from './Card.module.css'

function Card(props) {
	return (
		<div className={`${style.card} glass`}>
			<img className={style.cardImg} src={projPic}></img>
			<h2 className={style.cardTitle} >{props.title}</h2>
			<p className={style.cardText} >{props.text}</p>			
			<Button text={props.btnTxt} ></Button>
		</div>
		
	);
}


export default Card