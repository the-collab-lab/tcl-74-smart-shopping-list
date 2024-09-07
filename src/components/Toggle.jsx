import { useState } from 'react';
import './Toggle.css';

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
		<div className="Toggle">
			<label className="Toggle-label" htmlFor={name}>
				<input
					type="checkbox"
					id={name}
					checked={on}
					onChange={handleToggle}
					onClick={handleClick}
					className="Toggle-checkbox"
					disabled={isDisabled}
					aria-label={`Toggle purchase status for ${name}`}
				/>

				<span className="Toggle-text">{on ? 'Purchased' : 'Unpurchased'}</span>
			</label>
			{message && <p className="Toggle-message">{message}</p>}
		</div>
	);
}
