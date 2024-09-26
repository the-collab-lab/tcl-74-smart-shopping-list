import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../views/Layout.css';

export function IconButton({ icon, label, link }) {
	const navigate = useNavigate();
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		// e.preventDefault();
		navigate(link);
		setClicked(true);
	};

	return (
		<button onClick={handleClick} className={clicked ? 'clicked-link' : ''}>
			{icon && <i className={icon}></i>} <br />
			{label && <span>{label}</span>}
		</button>
	);
}
