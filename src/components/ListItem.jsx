import { useEffect, useState } from 'react';
import { useToggle } from '@uidotdev/usehooks';
import { Toggle } from './Toggle.jsx';
import { notify } from '../utils/notifications';
//import './ListItem.css';
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
	console.log(sortCriteria);
	const formatDateLastPurchased = (dateLastPurchased) => {
		if (dateLastPurchased) {
			const date = dateLastPurchased.toDate();
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			return `${month}/${day}/${year}`;
		}
		return 'n/a';
	};

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

	const urgencyMap = {
		'Due soon': {
			light: 'text-duesoon',
			dark: 'dark:text-duesoondark',
		},
		'Due kind of soon': {
			light: 'text-duekindofsoon',
			dark: 'dark:text-duekindofsoondark',
		},
		'Not due soon': {
			light: 'text-notduesoon',
			dark: 'dark:text-notduesoondark',
		},
		Overdue: {
			light: 'text-overdue',
			dark: 'dark:text-overduedark',
		},
		'No longer active': {
			light: 'text-nolongeractive',
			dark: 'dark:text-nolongeractivedark',
		},
	};

	const mode = localStorage.getItem('theme');

	return (
		<>
			<div className=" w-full relative flex flex-wrap text-left  text-xl justify-between items-center p-[10px] mb-[10px] rounded-lg text-[2.5rem] transition-colors duration-300 min-w-0 ">
				<div>
					<Toggle
						toggle={handleToggle}
						on={purchased}
						name={name}
						isDisabled={isDisabled}
						dateLastPurchased={dateLastPurchased}
					/>
				</div>
				<div className="flex justify-self-end ">{name}</div>

				<div className={`${urgencyMap[sortCriteria.tag][mode]}  p-5 text-xl  `}>
					{sortCriteria.tag}{' '}
				</div>

				<div>
					<IconButton
						aria-label={`Delete ${name}`}
						as="button"
						className="p-1  hover:scale-105 hover:shadow-md hover:shadow-black/20 transition-transform "
						IconComponent={FaTrashAlt}
						onClick={handleDelete}
					/>
				</div>
			</div>
		</>
	);
}
