import { ToastContainer } from 'react-toastify';
import { FaPlusSquare, FaShareAlt } from 'react-icons/fa';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { notify } from '../utils/notifications';
import { createList } from '../api';
import { Disclosure } from './Disclosure';
import { List } from './List';
import { IconButton } from '../components/IconButton';
import './Home.css';
import { Share } from './Share';

export function Home({ data, lists, listPath, setListPath, user }) {
	const userId = user?.uid;
	const userEmail = user?.email;

	const [listName, setListName] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentListPath, setCurrentListPath] = useState('');

	const handleChange = (event) => {
		setListName(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (listName) {
			try {
				const newListPath = await createList(userId, userEmail, listName);
				notify('List is sucessfully created', 'success');
				setListPath(newListPath);
			} catch {
				notify('There was an error adding your list', 'error');
			}
		} else {
			notify('Please enter a valid name', 'warning');
		}
		setListName('');
	};

	const handleShareClick = (listPath) => {
		setCurrentListPath(listPath);
		setIsModalOpen(true);
	};

	return (
		<div className="Home">
			<div>
				<ToastContainer />
				<form onSubmit={handleSubmit}>
					<label htmlFor="list-name">Create a List </label>
					<input
						id="list-name"
						type="text"
						value={listName}
						onChange={handleChange}
						placeholder="Add a list"
					></input>
					<IconButton
						aria-label="Add a list"
						as="button"
						className="add-icon"
						label="Add"
						IconComponent={FaPlusSquare}
					/>
				</form>
			</div>

			{lists.length === 0 ? (
				<p>No lists available. Create a new list below.</p>
			) : (
				<ul>
					{lists.map((list) => (
						<div key={list.path} className="list-container">
							<Disclosure
								key={`disclosure-${list.path}`}
								listofNames={list.name}
								iconExpanded={<FaAngleDown />}
								iconCollapsed={<FaAngleRight />}
								listpath={list.path}
								currentListPath={listPath}
								setListPath={setListPath}
							>
								<List data={data} listPath={list.path} />
							</Disclosure>
							<IconButton
								aria-label="share list"
								as={NavLink}
								className="share-icon"
								label="Share"
								key={`icon-${list.path}`}
								IconComponent={FaShareAlt}
								onClick={() => handleShareClick(list.path)}
							/>
						</div>
					))}
				</ul>
			)}
			{isModalOpen && (
				<Share
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					listPath={currentListPath}
					currentUserId={userId}
				/>
			)}
		</div>
	);
}
