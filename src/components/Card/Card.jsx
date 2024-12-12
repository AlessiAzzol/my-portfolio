import projPic from '../../assets/img/obiettivo.png'
import Button from '../Button/Button'
import styles from './Card.module.css'

function Card(props) {
	return (
		<div className={styles.card}>
			<img className={styles.cardImg} src={projPic}></img>
			<h2 className={styles.cardTitle} >{props.title}</h2>
			<p className={styles.cardText} >{props.text}</p>			
			<Button text={props.btnTxt} ></Button>
		</div>
		
	);
}


export default Card