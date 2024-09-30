import { Outlet, NavLink } from 'react-router-dom';
import { IconButton } from '../components/IconButton';
import './Layout.css';
import { auth } from '../api/config.js';
import { useAuth, SignInButton, SignOutButton } from '../api/useAuth.jsx';
import { FaList, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa6';
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
					<h1>CollabShop</h1>
					{!!user ? (
						<div>
							<span>Signed in as {auth.currentUser.displayName}</span>
						</div>
					) : (
						<IconButton
							aria-label="Sign In"
							as={SignInButton}
							// className="Nav-link"
							IconComponent={FaSignInAlt}
							label="Sign In"
						/>
					)}
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav">
					<div className="Nav-container">
						<IconButton
							aria-label="View Lists"
							as={NavLink}
							className="Nav-link"
							IconComponent={FaList}
							label="View Lists"
							to="/"
						/>
						<IconButton
							aria-label="Add Item"
							as={NavLink}
							className="Nav-link"
							IconComponent={FaCartPlus}
							label="Add Item"
							to="/manage-list"
						/>
						<IconButton
							aria-label="Sign Out"
							as={SignOutButton}
							className="Nav-link"
							IconComponent={FaSignOutAlt}
							label="Sign Out"
						/>
					</div>
				</nav>
			</div>
		</>
	);
}
