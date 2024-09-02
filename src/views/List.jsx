import { useState } from 'react';
import { ListItem } from '../components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function List({ data }) {
	const [searchInput, setSearchInput] = useState('');
	const [welcomeMessage, setWelcomeMessage] = useState('');
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const clearSearchInput = () => {
		setSearchInput('');
	};

	useEffect(() => {
		if (data.length === 0) {
			setWelcomeMessage(
				"To get started, simply click the 'add items' button below ",
			);
		} else {
			setWelcomeMessage("Add extra items on the 'Manage List' page. ");
		}
	}, []);

	const filterList = data.filter((item) => {
		return searchInput
			? item.name.toLowerCase().includes(searchInput.toLowerCase())
			: item;
	});

	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
				<br />
				<br />
				{welcomeMessage}
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
