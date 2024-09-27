import { useState } from 'react';
import { auth } from '../api/config';
import { useNavigate, NavLink } from 'react-router-dom';
import '../views/Layout.css';

export function IconButton({ as, icon, label, link }) {
	const navigate = useNavigate();
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		e.preventDefault();
		navigate(link);
		setClicked(true);
	};

	if (as === 'NavLink') {
		return (
			<NavLink to={link} className="Nav-link">
				{icon && <i className={icon}></i>} <br />
				{label && <span>{label}</span>}
			</NavLink>
		);
	} else if (as === 'SignOut') {
		return (
			<NavLink onClick={() => auth.signOut()} to={link} className="Nav-link">
				{icon && <i className={icon}></i>} <br />
				{label && <span>{label}</span>}
			</NavLink>
		);
	} else {
		<button
			onClick={handleClick}
			className={`${clicked ? 'clicked-link' : ''} Nav-link`}
		>
			{icon && <i className={icon}></i>} <br />
			{label && <span>{label}</span>}
		</button>;
	}
}
