import style from './List.module.css';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

function List(props) {
	const list = props.list;

	const listItems = list.map((item, i) =>
		props.titleVisible ?
			<li key={i} className={props.styleParent.lg}>
				<span>{item.icon} {item.title}</span>
			</li>
			:
			<li key={i} className={props.styleParent.sm}>
				<Tooltip title={item.title} arrow placement="right"
					classes={{
						tooltip: style.tooltip,
						arrow: style.arrow
					}}
					slots={{
						transition: Fade,
					}}
					slotProps={{
						transition: { timeout: 600 },
					}}>
					<span>{item.icon}</span>
				</Tooltip>
			</li>);

	return (<ul>{listItems}</ul>);
}

export default List