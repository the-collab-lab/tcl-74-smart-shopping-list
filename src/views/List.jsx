import { useState } from 'react';
import { ListItem } from '../components';
import { comparePurchaseUrgency } from '../utils/dates.js';

export function List({ data, listPath }) {
	const [searchInput, setSearchInput] = useState('');

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const clearSearchInput = () => {
		setSearchInput('');
	};

	const sortedByUrgency = comparePurchaseUrgency(data);

	const filterList = sortedByUrgency.filter((item) => {
		return searchInput
			? item.name.toLowerCase().includes(searchInput.toLowerCase())
			: item;
	});

	return (
		<>
			<div className="mx-auto">
				<label htmlFor="search">Search Items </label>
				<br />
				<input
					type="text"
					id="search"
					value={searchInput}
					onChange={handleInputChange}
					placeholder="Type to search..."
					className="border text-black border-gray-300 rounded-lg p-2 w-1/2 focus:ring focus:ring-blue-300 focus:outline-none transition duration-150 ease-in-out hover:shadow-md"
				/>
				{searchInput && (
					<button onClick={clearSearchInput} aria-label="clear search">
						X
					</button>
				)}
			</div>
			{filterList.length ? (
				<div className="w-[100%]">
					{filterList.map((item) => (
						<ListItem
							key={item.id}
							name={item.name}
							itemId={item.id}
							listPath={listPath}
							totalPurchases={item.totalPurchases}
							dateLastPurchased={item.dateLastPurchased}
							purchaseInterval={item.purchaseInterval}
							dateCreated={item.dateCreated}
							sortCriteria={item.sortCriteria}
						/>
					))}
				</div>
			) : (
				<p>No items to display</p>
			)}
		</>
	);
}
