import { useState } from 'react';
import { shareList } from '../api/firebase';
import { IconButton } from '../components/IconButton';
import { FaEnvelope, FaTimes } from 'react-icons/fa';
import { notify } from '../utils/notifications';
import ModalDialog from '../components/ModalDialog';

export function Share({
	isModalOpen,
	setIsModalOpen,
	listPath,
	currentUserId,
}) {
	const [recipientEmail, setRecipientEmail] = useState('');

	const handleShare = (event) => {
		event.preventDefault();
		shareList(listPath, currentUserId, recipientEmail)
			.then((result) => {
				notify(result, 'success');
				setRecipientEmail('');
				setIsModalOpen(false);
			})
			.catch((error) => {
				notify(error, 'error');
			});
	};

	const extractedListName = listPath.match(/(?<=\/).*$/)[0];

	return (
		<div>
			<ModalDialog
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title={`Would you like to share your list: ${extractedListName}?`}
				titleClassName="text-3xl font-bold"
				className="p-8 rounded-lg shadow-lg bg-white max-w-lg mx-auto"
			>
				<form onSubmit={handleShare} className="mt-4 space-y-4">
					<div className="mb-10">
						<label
							htmlFor="recipientEmail"
							className="block text-2xl font-medium text-gray-800 mb-6"
						>
							{' '}
							Please enter the email to share your list:{' '}
						</label>
						<input
							type="email"
							id="recipientEmail"
							value={recipientEmail}
							onChange={(e) => setRecipientEmail(e.target.value)}
							required
							className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg py-3 px-4"
							placeholder="recipient@gmail.com"
						/>
					</div>

					<div className="flex justify-center items-center">
						<IconButton
							aria-label="Share with an email"
							as="button"
							className="inline-flex justify-center rounded-md bg-[#184E77] px-4 py-[.75rem] text-lg font-medium text-white shadow-sm hover:bg-[#1E6091] transition duration-200 ease-in-out mr-10"
							label="Share"
							IconComponent={FaEnvelope}
							type="submit"
						/>
						<IconButton
							aria-label="Cancel sharing"
							as="button"
							onClick={() => setIsModalOpen(false)}
							className="inline-flex justify-center rounded-md bg-[#184E77] px-4 py-[.75rem] text-lg font-medium text-white shadow-sm ring-1 ring-gray-300 hover:bg-[#1E6091] transition duration-200 ease-in-out" // Increased button padding and font size
							label="Cancel"
							IconComponent={FaTimes}
						/>
					</div>
				</form>
			</ModalDialog>
		</div>
	);
}
