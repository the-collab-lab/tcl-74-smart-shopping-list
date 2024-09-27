import './Home.css';
import { useState } from 'react';
import { createList } from '../api';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa6';
import { Disclosure } from './Disclosure';
import { List } from './List';

export function Home({ data, lists, listPath, setListPath, user }) {
	const userId = user?.uid;
	const userEmail = user?.email;

	const [listName, setListName] = useState('');

	const handleChange = (event) => {
		setListName(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (listName) {
			try {
				const newListPath = await createList(userId, userEmail, listName);
				alert('List is sucessfully created');
				setListPath(newListPath);
			} catch {
				alert('There was an error adding your list to db');
			}
		} else {
			alert('Please enter a valid name');
		}
	};

	return (
		<div className="Home">
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="list-name">Create a List </label>
					<input
						id="list-name"
						type="text"
						value={listName}
						onChange={handleChange}
						placeholder="Add a list"
					></input>
					<button>Add</button>
				</form>
			</div>

			{lists.length === 0 ? (
				<p>No lists available. Create a new list below.</p>
			) : (
				<ul>
					{lists.map((list) => (
						<Disclosure
							key={list.path}
							listofNames={list.name}
							iconExpanded={<FaAngleDown />}
							iconCollapsed={<FaAngleRight />}
							listpath={list.path}
							currentListPath={listPath}
							setListPath={setListPath}
						>
							<List data={data} listPath={list.path} />
						</Disclosure>
					))}
				</ul>
			)}
		</div>
	);
}
