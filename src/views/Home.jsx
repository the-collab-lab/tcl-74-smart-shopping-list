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
		if (listName) {
			try {
				// throw new Error ("Error")
				const newListPath = await createList(userId, userEmail, listName);
				alert('List is sucessfully created');
				setListPath(newListPath);
				navigate('/list');
			} catch {
				alert('There was an error adding your list to db');
			}
		} else {
			alert('Please enter a valid name');
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
