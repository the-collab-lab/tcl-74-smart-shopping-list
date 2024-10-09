import { useState } from 'react';
import { createList } from '../api/firebase';
import { IconButton } from '../components/IconButton';
import { FaPlusSquare, FaTimes } from 'react-icons/fa';
import { notify } from '../utils/notifications';
import ModalDialog from '../components/ModalDialog';

export function CreateList({
	isCreateListModalOpen,
	setIsCreateListModalOpen,
	user,
	setListPath,
}) {
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
				notify('List is sucessfully created', 'success');
				setListPath(newListPath);
				setIsCreateListModalOpen(false);
			} catch {
				notify('There was an error adding your list', 'error');
			}
		} else {
			notify('Please enter a valid name', 'warning');
		}
		setListName('');
	};

	return (
		<ModalDialog
			isOpen={isCreateListModalOpen}
			onClose={() => setIsCreateListModalOpen(false)}
			title={`Please enter a List Name`}
			titleClassName="text-3xl font-bold"
			className="p-8 rounded-lg shadow-lg bg-white max-w-lg mx-auto"
		>
			<form onSubmit={handleSubmit}>
				<input
					id="list-name"
					type="text"
					value={listName}
					onChange={handleChange}
					className="m-6 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg py-3 px-4"
					placeholder="Add a list"
				></input>

				<div className="flex justify-center items-center ">
					<IconButton
						aria-label="Add a list"
						as="button"
						className="inline-flex justify-center rounded-md bg-btnPrimary px-4 py-[.75rem] text-lg font-medium text-white shadow-sm hover:bg-btnPrimary transition duration-200 ease-in-out mr-10"
						label="Add"
						IconComponent={FaPlusSquare}
						type="submit"
					/>
					<IconButton
						aria-label="Cancel adding"
						as="button"
						onClick={() => setIsCreateListModalOpen(false)}
						className="inline-flex justify-center rounded-md bg-btnPrimary px-4 py-[.75rem] text-lg font-medium text-white shadow-sm ring-1 ring-gray-300 hover:bg-btnPrimary transition duration-200 ease-in-out" // Increased button padding and font size
						label="Cancel"
						IconComponent={FaTimes}
					/>
				</div>
			</form>
		</ModalDialog>
	);
}
