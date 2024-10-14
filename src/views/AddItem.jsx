import { ToastContainer } from 'react-toastify';
import { useState, useMemo } from 'react';
import { addItem } from '../api/firebase';
import { FaPlusSquare } from 'react-icons/fa';
import { IconButton } from '../components/IconButton';
import { notify } from '../utils/notifications';

export function AddItem({ listPath, data }) {
	const [itemName, setItemName] = useState('');
	const [daysUntilNextPurchase, setDaysUntilNextPurchase] = useState(7);

	const messages = {
		added: 'Your item was successfully added!',
		failed:
			"Your item wasn't added! There was an error saving the item. Please try again.",
		empty: 'Please enter an item to add to your list.',
		duplicate: 'Item already exists!',
	};

	const extractedListName = listPath.match(/(?<=\/).*$/)[0];

	const normalizeString = (str) =>
		str.toLowerCase().replace(/[^a-z0-9-]+/g, '');

	const normalizedData = useMemo(
		() => data.map((item) => normalizeString(item.name)),
		[data],
	);
	const handleSubmit = async (event) => {
		event.preventDefault();

		const normalizedItemName = normalizeString(itemName.trim());

		if (!normalizedItemName) {
			notify(messages['empty'], 'warning');
			return;
		}

		const itemMatch = normalizedData.includes(normalizedItemName);

		if (itemMatch) {
			notify(messages['duplicate'], 'warning');
			return;
		}

		try {
			await addItem(listPath, {
				itemName: normalizedItemName,
				daysUntilNextPurchase,
			});
			setItemName('');
			setDaysUntilNextPurchase(7);
			notify(messages['added'], 'success');
		} catch (error) {
			console.error('Error adding item:', error);
			notify(messages['failed'], 'error');
		}
	};

	return (
		<div className="container p-6 rounded-lg shadow-md">
			<ToastContainer />
			<h1 className="text-4xl text-txtPrimary dark:text-txtPrimaryDark font-semibold my-6 text-center">
				Manage Your Shopping List for{' '}
				<span className="text-txtSecondary font-bold">{extractedListName}</span>
			</h1>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="flex flex-col mb-4 items-center">
					<label
						htmlFor="itemName"
						className="text-3xl text-txtPrimary dark:text-txtPrimaryDark font-semibold p-5"
					>
						Please enter an item name
					</label>
					<input
						type="text"
						id="itemName"
						value={itemName}
						onChange={(e) => setItemName(e.target.value)}
						placeholder="Add an item name"
						className="border text-black border-gray-300 rounded-lg p-2 w-3/4 focus:ring focus:ring-blue-300 focus:outline-none transition duration-150 ease-in-out hover:shadow-md"
					/>
				</div>
				<fieldset className="border border-gray-200 p-8 m-6 rounded-lg shadow-md">
					<legend className="text-3xl text-txtPrimary dark:text-txtPrimaryDark mb-4 font-semibold">
						How soon will you need to buy this item again?
					</legend>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center items-center">
						<div className="border border-gray-300 p-2 bg-radio-gradient w-[20rem] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
							<label className="flex items-center justify-center cursor-pointer w-full mb-4 mt-4">
								<input
									type="radio"
									value={7}
									checked={daysUntilNextPurchase === 7}
									onChange={() => setDaysUntilNextPurchase(7)}
									className="mr-4 text-txtPrimary"
								/>
								<span className="text-2xl font-medium text-white ">
									Soon (7 days)
								</span>
							</label>
						</div>

						<div className="border border-gray-300 p-2 bg-radio-gradient w-[20rem] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
							<label className="flex items-center justify-center cursor-pointer max-w-sm mb-4 mt-4">
								<input
									type="radio"
									value={14}
									checked={daysUntilNextPurchase === 14}
									onChange={() => setDaysUntilNextPurchase(14)}
									className="mr-6"
								/>
								<span className="text-2xl font-medium text-white ">
									Kind of soon (14 days)
								</span>
							</label>
						</div>

						<div className="border border-gray-300 p-2 bg-radio-gradient w-[20rem]  rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
							<label className="flex items-center justify-center cursor-pointer max-w-md mb-4 mt-4">
								<input
									type="radio"
									value={30}
									checked={daysUntilNextPurchase === 30}
									onChange={() => setDaysUntilNextPurchase(30)}
									className="mr-3"
								/>
								<span className="text-2xl font-medium text-white ">
									Not soon (30 days)
								</span>
							</label>
						</div>
					</div>
				</fieldset>
				<div className="flex justify-center">
					<IconButton
						aria-label="Add item to your list"
						as="button"
						label="Add an item"
						IconComponent={FaPlusSquare}
						className="mt-1 block w-1/8 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg py-3 px-4"
					/>
				</div>
			</form>
			<br></br>
		</div>
	);
}
