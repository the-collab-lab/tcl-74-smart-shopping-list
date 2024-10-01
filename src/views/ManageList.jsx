import { useState, useMemo } from 'react';
import { addItem, shareList } from '../api/firebase';
import { FaPlusSquare } from 'react-icons/fa';
import { IconButton } from '../components/IconButton';
import { FaEnvelope } from 'react-icons/fa6';

export function ManageList({ listPath, user, data, lists }) {
	const currentUserId = user?.uid;
	const [itemName, setItemName] = useState('');
	const [daysUntilNextPurchase, setDaysUntilNextPurchase] = useState(7);
	const [message, setMessage] = useState('');
	const [recipientEmail, setRecipientEmail] = useState('');

	const messages = {
		added: 'Your item was successfully added!',
		failed:
			"Your item wasn't added! There was an error saving the item. Please try again.",
		empty: 'Please enter an item to add to your list.',
		duplicate: 'Item already exists!',
	};

	const extractedListName = listPath.match(/(?<=\/).*$/)[0];

	const normalizeString = (str) =>
		str.toLowerCase().replace(/[^a-z0-9-]+/g, '');

	const normalizedData = useMemo(
		() => data.map((item) => normalizeString(item.name)),
		[data],
	);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const normalizedItemName = normalizeString(itemName.trim());

		if (!normalizedItemName) {
			setMessage('empty');
			return;
		}

		const itemMatch = normalizedData.includes(normalizedItemName);

		if (itemMatch) {
			setMessage('duplicate');
			return;
		}

		try {
			await addItem(listPath, {
				itemName: normalizedItemName,
				daysUntilNextPurchase,
			});
			setMessage('added');
			setItemName('');
			setDaysUntilNextPurchase(7);
		} catch (error) {
			console.error('Error adding item:', error);
			setMessage('failed');
		}
	};

	const handleShare = (event) => {
		event.preventDefault();
		shareList(listPath, currentUserId, recipientEmail)
			.then((result) => {
				alert(result);
				setRecipientEmail('');
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<div>
			<h1>Manage Your Shopping List for {extractedListName}</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="itemName">Item Name:</label>
				<input
					type="text"
					id="itemName"
					value={itemName}
					onChange={(e) => setItemName(e.target.value)}
					// required
				/>
				<IconButton
					aria-label="Add item to your list"
					as="button"
					className="add-icon"
					label="Add"
					IconComponent={FaPlusSquare}
				/>
				<fieldset>
					<legend>How soon will you need to buy this item again?</legend>
					<label>
						<input
							type="radio"
							value={7}
							checked={daysUntilNextPurchase === 7}
							onChange={() => setDaysUntilNextPurchase(7)}
						/>
						Soon (7 days)
					</label>{' '}
					<br />
					<label>
						<input
							type="radio"
							value={14}
							checked={daysUntilNextPurchase === 14}
							onChange={() => setDaysUntilNextPurchase(14)}
						/>
						Kind of soon (14 days)
					</label>{' '}
					<br />
					<label>
						<input
							type="radio"
							value={30}
							checked={daysUntilNextPurchase === 30}
							onChange={() => setDaysUntilNextPurchase(30)}
						/>
						Not soon (30 days)
					</label>
				</fieldset>
				<br />
			</form>
			<br></br>
			{message && (
				<p aria-live="assertive" role="alert">
					{messages[message] || ''}
				</p>
			)}

			<div>
				<form onSubmit={handleShare}>
					<label htmlFor="recipientEmail"> Recipient Email: </label>
					<input
						type="email"
						id="recipientEmail"
						value={recipientEmail}
						onChange={(e) => setRecipientEmail(e.target.value)}
						required
					/>
					<IconButton
						aria-label="Share with an email"
						as="button"
						className="share-email"
						label="Share"
						IconComponent={FaEnvelope}
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
}
