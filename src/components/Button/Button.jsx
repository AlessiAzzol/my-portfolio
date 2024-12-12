import styles from './Button.module.css'

function Button(props) {
	
	const handleClick = (e) => {
		e.target.textContent = "DONE";
	};

	return(<button onClick={ (e) => handleClick(e)} className={styles.button}>{props.text}</button>);
}
export default Button