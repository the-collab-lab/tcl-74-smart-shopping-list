import { useToggle } from '@uidotdev/usehooks';
import { Toggle } from './Toggle.jsx';
import './ListItem.css';

export function ListItem({ name }) {
	const [purchased, unpurchased] = useToggle(false);

	return (
		<li className="ListItem">
			<div className="item-name">{name}</div>
			<Toggle toggle={unpurchased} on={purchased} name={name} />
		</li>
	);
}
