import { useState } from 'react';
import { ListItem } from '../components';
import { useNavigate } from 'react-router-dom';

export function List({ data }) {
	const [searchInput, setSearchInput] = useState('');
	const navigate = useNavigate();

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
					Add additional items on the
					<button
						aria-label="Navigate to Manage List page"
						onClick={() => navigate('/manage-list')}
						className="code-button"
					>
						/Manage List
					</button>
					page
				</p>
			) : (
				<p> To get started, click the &apos;Add item&apos; button below </p>
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
						return <ListItem key={item.id} name={item.name} />;
					})
				) : (
					<li>
						{' '}
						No items found!
						<button onClick={() => navigate('/manage-list')}> Add item </button>
					</li>
				)}
			</ul>
		</>
	);
}
