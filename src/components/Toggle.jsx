import './Toggle.css';

export function Toggle({ on, toggle, name }) {
	const handleToggle = () => {
		const newCheckedState = window.confirm(
			'Would you like to confirm the purchase?',
		);
		if (newCheckedState) {
			toggle();
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
					className="Toggle-checkbox"
				/>
				<span className="Toggle-text">{on ? 'Purchased' : 'Unpurchased'}</span>
			</label>
		</div>
	);
}
