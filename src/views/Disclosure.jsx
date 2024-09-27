// Allows users to expand and collapse content sections.
//key features: toggles visibility of child elements based on open/closed
// Uses a button to trigger the toggle(responds to both mouse and keyboard clicks)
// Displays icon to indicate expand/colapsed (feel free to change icon if u like)
// Manages accessibitity through aria attributes

import React, { useState } from 'react';

const Disclosure = ({
	id,
	children,
	buttonText,
	iconExpanded,
	iconCollapsed,
}) => {
	const [isOpen, setIsOpen] = useState(false); // initialize the state to track whether the disclosure is open or closed

	//checks current state
	const toggleDisclosure = () => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};

	return (
		<div className="Disclosure" id={id}>
			<button
				className="Disclosure-button"
				id={`${id}-button`}
				onClick={toggleDisclosure}
				aria-controls={`${id}-content`}
				aria-expanded={isOpen}
			>
				{isOpen ? iconExpanded : iconCollapsed}
				<span>{buttonText}</span>
			</button>
			{isOpen && (
				<div
					className="Disclosure-content"
					id={`${id}-content`}
					hidden={!isOpen}
				>
					{children}
				</div>
			)}
		</div>
	);
};

export default Disclosure;
