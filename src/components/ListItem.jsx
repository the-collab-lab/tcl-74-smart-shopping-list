import { useEffect, useState } from 'react';
import { useToggle } from '@uidotdev/usehooks';
import { Toggle } from './Toggle.jsx';
import { notify } from '../utils/notifications';
import './ListItem.css';
import { updateItem, deleteItem } from '../api/firebase.js';
import { FaTrashAlt } from 'react-icons/fa';
import { IconButton } from './IconButton.jsx';

export function ListItem({
	name,
	listPath,
	itemId,
	totalPurchases,
	dateLastPurchased,
	purchaseInterval,
	dateCreated,
	sortCriteria,
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
				await updateItem(listPath, {
					itemId,
					totalPurchases,
					dateLastPurchased,
					purchaseInterval,
					dateCreated,
				});
				console.log(`${name} updated successfully`);
				notify(`${name} has been purchased successfully!`, 'success');
				setIsDisabled(true);
			} catch (error) {
				console.error('Error updating item:', error);
				setPurchased(false);
			}
		}
	};

	const handleDelete = async () => {
		const deleteConfirm = window.confirm(
			`Are you sure you want to delete ${name}?`,
		);

		if (deleteConfirm) {
			try {
				await deleteItem(listPath, itemId);
				notify(`${name} has been deleted successfully!`, 'success');
			} catch (error) {
				console.log(`Error:`, error);
			}
		}
	};

	const urgencyClass = sortCriteria.tag.toLowerCase().replace(/\s/g, '');

	return (
		<>
			<div className="ListItem">
				<Toggle
					toggle={handleToggle}
					on={purchased}
					name={name}
					isDisabled={isDisabled}
					dateLastPurchased={dateLastPurchased}
				/>
				{name}

				<div className={urgencyClass}>{sortCriteria.tag}</div>

				<IconButton
					aria-label={`Delete ${name}`}
					as="button"
					className="p-1"
					IconComponent={FaTrashAlt}
					onClick={handleDelete}
				/>
			</div>
		</>
	);
}
