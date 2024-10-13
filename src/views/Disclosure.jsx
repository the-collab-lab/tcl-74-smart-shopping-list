// Allows users to expand and collapse content sections.
//key features: toggles visibility of child elements based on open/closed
// Uses a button to trigger the toggle(responds to both mouse and keyboard clicks)
// Displays icon to indicate expand/colapsed (feel free to change icon if u like)
// Manages accessibitity through aria attributes
import { FaShareAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconButton } from '../components/IconButton';
import { Share } from './Share';
import './Disclosure.css';

export function Disclosure({
	id,
	children,
	currentUserId,
	listofNames,
	iconExpanded,
	iconCollapsed,
	currentListPath,
	listpath,
	setListPath,
	setCurrentListPath,
}) {
	const [isOpen, setIsOpen] = useState(listpath === currentListPath);
	const [isCreateListModalOpen, setIsCreateListModalOpen] = useState(false);
	const [isShareModalOpen, setIsShareModalOpen] = useState(false);

	useEffect(() => {
		if (currentListPath !== listpath) {
			setIsOpen(false);
		}
	}, [currentListPath]);

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

	const handleShareClick = (listPath) => {
		setCurrentListPath(listPath);
		setIsShareModalOpen(true);
	};

	return (
		<div
			className="border border-gray-300 rounded-md mb-2 w-[70%] mx-auto"
			id={id}
		>
			<button
				className="flex items-center justify-between cursor-pointer p-2 border-b border-gray-300 w-full relative "
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
					className="flex items-center justify-center cursor-pointer p-2 border border-gray-300 rounded-md transition-transform duration-200 ease-in-out hover:scale-110"
					label="Share"
					//	key={`icon-${list.path}`}
					IconComponent={FaShareAlt}
					onClick={() => handleShareClick(listpath)}
				/>
			</button>
			{isShareModalOpen && (
				<Share
					isModalOpen={isShareModalOpen}
					setIsModalOpen={setIsShareModalOpen}
					listPath={currentListPath}
					currentUserId={currentUserId}
				/>
			)}
			{isOpen && (
				<div id={`${id}-content`} hidden={!isOpen}>
					{children}
				</div>
			)}
		</div>
	);
}
