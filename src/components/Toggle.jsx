import { useState } from 'react';

export function Toggle({ on, toggle, name, isDisabled }) {
	const [message, setMessage] = useState('');

	const handleToggle = () => {
		const newCheckedState = window.confirm(
			'Would you like to confirm the purchase?',
		);
		if (newCheckedState) {
			toggle();
			setMessage('');
		}
	};

	const handleClick = () => {
		if (isDisabled) {
			setMessage(
				`Checkbox is disabled for ${name}. Purchase action is blocked.`,
			);
			return;
		}
	};
	return (
		<div className="flex items-center mr-2">
			<input
				type="checkbox"
				id={name}
				checked={on}
				onChange={handleToggle}
				onClick={handleClick}
				className="mr-2 cursor-pointer"
				disabled={isDisabled}
				aria-label={`Toggle purchase status for ${name}`}
			/>

			{message && <p className="ml-2">{message}</p>}
		</div>
	);
}
