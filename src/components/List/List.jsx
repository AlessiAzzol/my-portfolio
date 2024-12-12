
function List(props){
	const list = props.list;

	const listItems = list.map( item => <li><a href={item.href}>{item.title}</a></li>);

	return(<ul>{listItems}</ul>);

}

export default List