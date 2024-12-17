import style from './List.module.css';


function List(props) {
	const list = props.list;

	const listItems = list.map((item, i) => <li key={i}><a href={item.href}><span>{item.icon} {item.title}</span><span className={style.tooltip}>{item.tooltip}</span></a></li>);

	return(<ul>{listItems}</ul>);
}

export default List