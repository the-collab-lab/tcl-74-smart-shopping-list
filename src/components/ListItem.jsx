import { useEffect } from 'react';
import { useToggle } from '@uidotdev/usehooks';
import { Toggle } from './Toggle.jsx';
import './ListItem.css';
import { updateItem } from '../api/firebase.js';
// import { getFutureDate} from '../utils/dates.js'

export function ListItem({
	name,
	listPath,
	itemId,
	totalPurchases,
	dateLastPurchased,
}) {
	const [purchased, setPurchased] = useToggle(false);

	useEffect(() => {
		if (dateLastPurchased) {
			const checkExpiration = () => {
				const expirationDate = new Date(
					dateLastPurchased.toMillis() + 24 * 60 * 60 * 1000,
				);
				const currentDate = new Date();
				if (currentDate > expirationDate) {
					setPurchased(false);
				} else {
					setPurchased(true);
				}
			};
			checkExpiration();
			const refreshInterval = setInterval(checkExpiration, 1000);
			return () => clearInterval(refreshInterval);
		}
	}, [dateLastPurchased]);

	const handleToggle = async () => {
		const isPurchasing = !purchased;
		setPurchased();
		if (isPurchasing) {
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
		<div>
			<li className="ListItem">
				<div className="item-name">{name}</div>
				<Toggle toggle={handleToggle} on={purchased} name={name} />
				<div>
					{dateLastPurchased ? dateLastPurchased.toDate().toLocaleString() : ''}
				</div>
			</li>
		</div>
	);
}
