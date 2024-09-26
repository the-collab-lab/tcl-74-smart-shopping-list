import { NavLink, Outlet } from 'react-router-dom';
import { IconButton } from '../components/IconButton';
import './Layout.css';
import { auth } from '../api/config.js';
import { useAuth, SignInButton, SignOutButton } from '../api/useAuth.jsx';

/**
 * TODO: The links defined in this file don't work!
 *
 * Instead of anchor element, they should use a component
 * from `react-router-dom` to navigate to the routes
 * defined in `App.jsx`.
 */

export function Layout() {
	const { user } = useAuth();
	return (
		<>
			<div className="Layout">
				<header className="Layout-header">
					<h1>Smart shopping list</h1>
					{!!user ? (
						<div>
							<span>Signed in as {auth.currentUser.displayName}</span> (
							<SignOutButton />)
						</div>
					) : (
						<SignInButton />
					)}
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav">
					<div className="Nav-container">
						<NavLink to="/list" className="Nav-link" end>
							<IconButton icon="fa-solid fa-right-to-bracket" label="Login" />
						</NavLink>
						<NavLink to="/" className="Nav-link" end>
							Home
						</NavLink>
						<NavLink to="/list" className="Nav-link" end>
							List
						</NavLink>
						<NavLink to="/manage-list" className="Nav-link" end>
							Manage List
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
}
