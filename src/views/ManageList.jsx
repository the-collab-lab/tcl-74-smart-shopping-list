import { useState } from 'react';
import { addItem } from '../api/firebase';

export function ManageList() {
	const [itemName, setItemName] = useState('');

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
		</div>
	);
}
