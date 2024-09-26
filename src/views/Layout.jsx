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
							<span>Signed in as {auth.currentUser.displayName}</span>
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
						<NavLink to="/" className="Nav-link" end>
							<IconButton icon="fa-solid fa-list" label="View Lists" />
						</NavLink>
						<NavLink to="/manage-list" className="Nav-link" end>
							<IconButton icon="fa-solid fa-cart-plus" label="Add Item" />
						</NavLink>
						<NavLink to="/" className="Nav-link" end>
							<SignOutButton />
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
}
