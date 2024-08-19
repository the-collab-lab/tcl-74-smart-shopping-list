import './Home.css';
import { SingleList } from '../components';
import { useState } from 'react';
import { createList } from '../api';
import { useNavigate } from 'react-router-dom';

export function Home({ data, setListPath, user }) {
	const navigate = useNavigate();
	const userId = user?.uid;
	const userEmail = user?.email;

	const [listName, setListName] = useState('');

	const handleChange = (event) => {
		setListName(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!listName) {
			alert('Please enter a valid name');
			return;
		}

		const newList = await createList(userId, userEmail, listName);
		if (newList.ref.path) {
			alert('List is sucessfully created');
			setListPath(newList.ref.path);
			navigate('/list');
		} else {
			alert('There was a problem creating your list. Please try again.');
		}
	};

	return (
		<div className="Home">
			<p>
				Hello from the home (<code>/</code>) page!
			</p>
			<ul>
				{data.map((list) => {
					return (
						<SingleList
							key={list.path}
							name={list.name}
							path={list.path}
							setListPath={setListPath}
						/>
					);
				})}
			</ul>
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="list-name">List Name : </label>
					<input
						id="list-name"
						type="text"
						value={listName}
						onChange={handleChange}
					></input>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}
