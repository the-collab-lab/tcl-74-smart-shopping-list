// Allows users to expand and collapse content sections.
//key features: toggles visibility of child elements based on open/closed
// Uses a button to trigger the toggle(responds to both mouse and keyboard clicks)
// Displays icon to indicate expand/colapsed (feel free to change icon if u like)
// Manages accessibitity through aria attributes

import { useEffect, useState } from 'react';
import './Disclosure.css';

export function Disclosure({
	id,
	children,
	listofNames,
	iconExpanded,
	iconCollapsed,
	currentListPath,
	listpath,
	setListPath,
}) {
	const [isOpen, setIsOpen] = useState(listpath === currentListPath);

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

	return (
		<div
			className="border border-gray-300 rounded-md mb-2 w-[70%] mx-auto"
			id={id}
		>
			<button
				className="flex items-center justify-between cursor-pointer p-2 border-b border-gray-300 w-full relative"
				id={`${id}-button`}
				onClick={toggleDisclosure}
				onKeyDown={handleKeyDown}
				aria-controls={`${id}-content`}
				aria-expanded={isOpen}
			>
				{isOpen ? iconExpanded : iconCollapsed}
				<span className="flex-grow text-center">{listofNames}</span>
			</button>
			{isOpen && (
				<div id={`${id}-content`} hidden={!isOpen}>
					{children}
				</div>
			)}
		</div>
	);
}
