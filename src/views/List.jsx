import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data, listPath }) {
	const [searchInput, setSearchInput] = useState('');

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const clearSearchInput = () => {
		setSearchInput('');
	};

	const filterList = data.filter((item) => {
		return searchInput
			? item.name.toLowerCase().includes(searchInput.toLowerCase())
			: item;
	});

	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
			</p>
			<div className="listSearch">
				<label htmlFor="search">Search Items</label>
				<br />
				<input
					type="text"
					id="search"
					value={searchInput}
					onChange={handleInputChange}
					placeholder="Type to search..."
				/>
				{searchInput && (
					<button onClick={clearSearchInput} aria-label="clear search">
						X
					</button>
				)}
			</div>
			<ul>
				{filterList.length ? (
					filterList.map((item) => {
						return (
							<ListItem
								key={item.id}
								name={item.name}
								itemId={item.id}
								listPath={listPath}
								totalPurchases={item.totalPurchases}
								dateLastPurchased={item.dateLastPurchased}
							/>
						);
					})
				) : (
					<li> No items found!</li>
				)}
			</ul>
		</>
	);
}
