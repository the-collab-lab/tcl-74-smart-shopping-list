import { Outlet, NavLink } from 'react-router-dom';
import {
	FaList,
	FaSignInAlt,
	FaSignOutAlt,
	FaInfoCircle,
	FaCartPlus,
} from 'react-icons/fa';
import { IconButton } from '../components/IconButton';
import { useAuth, SignOutButton, SignInButton } from '../api/useAuth.jsx';
import { auth } from '../api/config.js';
import './Layout.css';

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
					{!!user && (
						<div>
							<h1>CollabShop</h1>
							<span>Signed in as {auth.currentUser.displayName}</span>
						</div>
					)}
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav">
					<div className="Nav-container">
						{user ? (
							<>
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
							</>
						) : (
							<>
								<IconButton
									as={NavLink}
									className="Nav-link"
									IconComponent={FaInfoCircle}
									label="Developers"
									to="/developers"
								/>
								<IconButton
									aria-label="Sign In"
									as={SignInButton}
									IconComponent={FaSignInAlt}
									label="Sign In"
								/>
							</>
						)}
					</div>
				</nav>
			</div>
		</>
	);
}
