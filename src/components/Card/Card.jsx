import projPic from '../../assets/img/obiettivo.png'
import Button from '@mui/material/Button';
import style from './Card.module.css'

import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';

function myCard(props) {
	return (
		<Card>
			<CardMedia image={props.img} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.title}
				</Typography>
				<Typography variant="body2" >
					{props.text}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">{props.btnTxt}</Button>
			</CardActions>
		</Card>
	);
}


export default myCard