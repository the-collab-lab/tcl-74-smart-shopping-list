import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { ListItem } from '../components';
import { comparePurchaseUrgency } from '../utils/dates.js';

export function List({ data, listPath }) {
	const [searchInput, setSearchInput] = useState('');

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const clearSearchInput = () => {
		setSearchInput('');
	};

	const sortedByUrgency = comparePurchaseUrgency(data);

	const filterList = sortedByUrgency.filter((item) => {
		return searchInput
			? item.name.toLowerCase().includes(searchInput.toLowerCase())
			: item;
	});

	return (
		<>
			<div className="mx-auto max-w-lg ">
				<label
					htmlFor="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>
					Search dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
				</label>
				<div className="relative flex items-center  border-gray-300  px-2 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none dark:border-gray-600 mt-6 dark:placeholder-gray-400 dark:text-white has-[input:focus-visible]:outline has-[input:focus-visible]:outline-blue-300">
					<FaSearch className="  w-5 h-5 mt-[3px] text-gray-500" />
					<input
						className=" border border-none bg-transparent grow focus:outline-0 p-2 "
						id="default-search"
						onChange={handleInputChange}
						type="text"
						placeholder="Search Items"
						value={searchInput}
					/>
					{searchInput && (
						<button onClick={clearSearchInput} aria-label="clear search">
							x
						</button>
					)}
				</div>
			</div>
			{filterList.length ? (
				<div className="w-[100%]">
					{filterList.map((item) => (
						<ListItem
							key={item.id}
							name={item.name}
							itemId={item.id}
							listPath={listPath}
							totalPurchases={item.totalPurchases}
							dateLastPurchased={item.dateLastPurchased}
							purchaseInterval={item.purchaseInterval}
							dateCreated={item.dateCreated}
							sortCriteria={item.sortCriteria}
						/>
					))}
				</div>
			) : (
				<p className="flex items-center justify-center m-10">
					No items to display
				</p>
			)}
		</>
	);
}
