import { useEffect, useState } from 'react';
import { ListItem } from '../components';
import { NavLink } from 'react-router-dom';
import { comparePurchaseUrgency } from '../utils/dates.js';

export function List({ data, listPath }) {
	const [searchInput, setSearchInput] = useState('');
	const [message, setMessage] = useState('');

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
		setMessage('');
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

	useEffect(() => {
		if (message !== '') {
			setInterval(() => {
				setMessage('');
			}, 5000);
		}
	}, [message]);

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
			{filterList.length ? (
				<table>
					<thead>
						<tr>
							<th scope="col">Product</th>
							<th scope="col">Buy Now</th>
							<th scope="col">Last Purchase Date</th>
							<th scope="col">Urgency</th>
						</tr>
					</thead>
					<tbody>
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
               	setMessage={setMessage}
								sortCriteria={item.sortCriteria}
							/>
						))}
					</tbody>
				</table>
			) : (
				<p>No items to display</p>
			)}	
				<br />
				<span>{message}</span>

		</>
	);
}
