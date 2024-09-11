import { useEffect, useState } from 'react';
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
	interval,
	dateCreated,
}) {
	const [purchased, setPurchased] = useToggle(false);
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		if (dateLastPurchased) {
			const checkExpiration = () => {
				const expirationDate = new Date(
					dateLastPurchased.toMillis() + 24 * 60 * 60 * 1000,
				);
				const currentDate = new Date();
				if (currentDate > expirationDate) {
					setPurchased(false);
					setIsDisabled(false);
				} else {
					setPurchased(true);
					setIsDisabled(true);
				}
			};
			checkExpiration();
			const refreshInterval = setInterval(checkExpiration, 60000);
			return () => clearInterval(refreshInterval);
		}
	}, [dateLastPurchased]);

	const handleToggle = async () => {
		const isPurchasing = !purchased;
		setPurchased();

		if (isPurchasing) {
			try {
				const previousLastPurchaseDate = dateLastPurchased;

				await updateItem(listPath, {
					itemId,
					totalPurchases: totalPurchases + 1,
					dateLastPurchased: new Date(),
					previousLastPurchaseDate,
					interval,
					dateCreated,
				});
				console.log(`${name} updated successfully`);
				alert(`${name} is purchased successfully`);
				setIsDisabled(true);
			} catch (error) {
				console.error('Error updating item:', error);
				setPurchased(false);
			}
		}
	};

	return (
		<>
			<li className="ListItem">
				<div className="item-name">{name}</div>
				<Toggle
					toggle={handleToggle}
					on={purchased}
					name={name}
					isDisabled={isDisabled}
					dateLastPurchased={dateLastPurchased}
				/>

				{dateLastPurchased ? dateLastPurchased.toDate().toLocaleString() : ''}
			</li>
		</>
	);
}
