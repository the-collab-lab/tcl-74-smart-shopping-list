import { FaPlusSquare } from 'react-icons/fa';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa6';
import { useState } from 'react';
import { Disclosure } from './Disclosure';
import { List } from './List';
import { IconButton } from '../components/IconButton';
import { CreateList } from './CreateList';
import { ToastContainer } from 'react-toastify';

export function Home({ data, lists, selectedListPath, setListPath, user }) {
	const userId = user?.uid;

	const [isCreateListModalOpen, setIsCreateListModalOpen] = useState(false);

	const handleCreateListClick = () => {
		setIsCreateListModalOpen(true);
	};

	return (
		<div className="Home flex flex-col space-y-2 p-4">
			<ToastContainer />
			{isCreateListModalOpen && (
				<CreateList
					isCreateListModalOpen={isCreateListModalOpen}
					setIsCreateListModalOpen={setIsCreateListModalOpen}
					user={user}
					setListPath={setListPath}
				/>
			)}
			<div className="flex justify-center items-center">
				<IconButton
					aria-label="Create a list"
					as="button"
					label="Create a List"
					IconComponent={FaPlusSquare}
					onClick={handleCreateListClick}
				/>
			</div>
			{lists.length === 0 ? (
				<p>No lists available. Create a new list below.</p>
			) : (
				<ul>
					{lists.map((list) => (
						<div
							key={list.path}
							className="flex items-start justify-between py-2"
						>
							<div className="flex-grow">
								<Disclosure
									key={`disclosure-${list.path}`}
									listofNames={list.name}
									iconExpanded={<FaAngleDown />}
									iconCollapsed={<FaAngleRight />}
									listpath={list.path}
									selectedListPath={selectedListPath}
									setListPath={setListPath}
									currentUserId={userId}
								>
									<List data={data} listPath={list.path} />
								</Disclosure>
							</div>
						</div>
					))}
				</ul>
			)}
		</div>
	);
}
