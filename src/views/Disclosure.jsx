import { FaShareAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconButton } from '../components/IconButton';
import { Share } from './Share';

export function Disclosure({
	id,
	children,
	currentUserId,
	listofNames,
	iconExpanded,
	iconCollapsed,
	selectedListPath,
	listpath,
	setListPath,
}) {
	const [isOpen, setIsOpen] = useState(listpath === selectedListPath);
	const [isShareModalOpen, setIsShareModalOpen] = useState(false);

	useEffect(() => {
		if (selectedListPath !== listpath) {
			setIsOpen(false);
		}
	}, [selectedListPath]);

	const toggleDisclosure = (e) => {
		e.preventDefault();
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
			setListPath(listpath);
		}
	};

	const handleKeyDown = (e) => {
		if (
			e.keyCode === 13 || // Keycode for Enter key
			e.keyCode === 32 // Keycode for Spacebar key
		) {
			toggleDisclosure(e);
		}
	};

	const handleShareClick = () => {
		setIsShareModalOpen(true);
	};

	return (
		<div
			className="border border-gray-500 rounded-lg m-2 w-[90%] mx-auto shadow-md hover:shadow-lg"
			id={id}
		>
			<button
				className="flex bg-list-gradient dark:bg-list-gradient-dark items-center gap-4 justify-between cursor-pointer p-2 border-b border-gray-500 w-full relative break-all rounded-lg "
				id={`${id}-button`}
				onClick={toggleDisclosure}
				onKeyDown={handleKeyDown}
				aria-controls={`${id}-content`}
				aria-expanded={isOpen}
			>
				{isOpen ? iconExpanded : iconCollapsed}
				<span className="flex-grow text-center">{listofNames} </span>
				<IconButton
					aria-label="share list"
					as={NavLink}
					className="flex min-w-[87px] items-center justify-center cursor-pointer p-2 border border-gray-300 rounded-md transition-transform duration-200 ease-in-out hover:scale-110"
					label="Share"
					key={`icon-${listpath}`}
					IconComponent={FaShareAlt}
					onClick={() => handleShareClick(listpath)}
				/>
			</button>
			{isShareModalOpen && (
				<Share
					isModalOpen={isShareModalOpen}
					setIsModalOpen={setIsShareModalOpen}
					listPath={selectedListPath}
					currentUserId={currentUserId}
				/>
			)}
			{isOpen && (
				<div
					id={`${id}-content`}
					className={`overflow-hidden ${isOpen ? 'animate-slideDown' : 'animate-slideUp'}`}
				>
					{children}
				</div>
			)}
		</div>
	);
}
