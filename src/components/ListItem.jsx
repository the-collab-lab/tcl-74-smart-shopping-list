import { useToggle } from '@uidotdev/usehooks';
import { Toggle } from './Toggle.jsx';
import './ListItem.css';
import { updateItem } from '../api/firebase.js';

export function ListItem({
	name,
	listPath,
	itemId,
	totalPurchases,
	dateLastPurchased,
}) {
	// console.log("listitem", listPath)
	const [purchased, unpurchased] = useToggle(false);

	const handleToggle = async () => {
		const isPurchasing = !purchased;
		unpurchased();
		if (isPurchasing) {
			// console.log("OK")
			try {
				await updateItem(listPath, {
					itemId,
					totalPurchases: totalPurchases + 1,
					dateLastPurchased: new Date(),
				});
				console.log(`${name} updated successfully`);
				alert(`${name} is purchased successfully`);
			} catch (error) {
				console.error('Error updating item:', error);
			}
		}
	};

	return (
		<li className="ListItem">
			<div className="item-name">{name}</div>
			<Toggle toggle={handleToggle} on={purchased} name={name} />
		</li>
	);
}
