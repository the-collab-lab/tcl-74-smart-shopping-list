import { useState } from 'react';
import { addItem } from '../api/firebase';

export function ManageList() {
	const [itemName, setItemName] = useState('');
	const [daysUntilNextPurchase, setDaysUntilNextPurchase] = useState(7);

	return (
		<div>
			<h1>Manage Your Shopping List</h1>
			<label htmlFor="itemName">Item Name:</label>
			<input
				type="text"
				id="itemName"
				value={itemName}
				onChange={(e) => setItemName(e.target.value)}
				required
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
				</label>
				<label>
					<input
						type="radio"
						value={14}
						checked={daysUntilNextPurchase === 14}
						onChange={() => setDaysUntilNextPurchase(14)}
					/>
					Kind of soon (14 days)
				</label>
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
		</div>
	);
}
