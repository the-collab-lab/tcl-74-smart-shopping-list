import { useState } from 'react';
import { ListItem } from '../components';
import { NavLink } from 'react-router-dom';
import { comparePurchaseUrgency } from '../api/firebase';

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
			{data.length ? (
				<p>
					Add additional items on the{' '}
					<NavLink to="/manage-list" className="code-button">
						Manage List
					</NavLink>{' '}
					page
				</p>
			) : (
				<p> To get started, click &apos;Add item&apos; below </p>
			)}
			<div className="listSearch">
				<label htmlFor="search">Search Items</label> <br />
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
								purchaseInterval={item.purchaseInterval}
								dateCreated={item.dateCreated}
							/>
						);
					})
				) : (
					<li>
						{' '}
						No items found! <NavLink to="/manage-list"> Add item</NavLink>
					</li>
				)}
			</ul>
		</>
	);
}
