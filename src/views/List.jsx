import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	const [searchInput, setSearchInput] = useState('');

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const clearSearchInput = () => {
		setSearchInput('');
	};

	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
			</p>
			<div className="listSearch">
				<label htmlFor="search"> Search Items</label>
				<br />
				<input
					type="text"
					id="search"
					value={searchInput}
					onChange={handleInputChange}
					placeholder="Type to search..."
				/>
				{searchInput && <button onClick={clearSearchInput}>X</button>}
			</div>
			<ul>
				{data.length !== 0 ? (
					data
						.filter((item) => {
							return searchInput
								? item.name.toLowerCase().includes(searchInput.toLowerCase())
								: item;
						})
						.map((item) => {
							return <ListItem key={item.id} name={item.name} />;
						})
				) : (
					<li> No items available!</li>
				)}
			</ul>
		</>
	);
}
