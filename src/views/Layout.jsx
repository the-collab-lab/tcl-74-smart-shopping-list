import { Outlet, NavLink } from 'react-router-dom';
import {
	FaList,
	FaSignInAlt,
	FaSignOutAlt,
	FaInfoCircle,
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
					<h1>Smart shopping list</h1>
					{user && auth.currentUser ? (
						<div>
							<span>Signed in as {auth.currentUser.displayName}</span>
						</div>
					) : (
						<span>Not signed in</span>
					)}
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav">
					<div className="Nav-container">
						{user && auth.currentUser ? (
							<>
								<IconButton
									as={NavLink}
									className="Nav-link"
									icon="fa-solid fa-list"
									label="View Lists"
									to="/" //Home Page
								/>
								<IconButton
									as={NavLink}
									className="Nav-link"
									icon="fa-solid fa-cart-plus"
									label="Add Item"
									to="manage-list" // Relative path to manage-list
								/>
								<IconButton
									as={SignOutButton}
									className="Nav-link"
									icon="fa-solid fa-right-from-bracket"
									label="Sign Out"
								/>
							</>
						) : (
							<>
								<IconButton
									as={NavLink}
									className="Nav-link"
									IconComponent={FaInfoCircle}
									label="Meet The Team"
									to="/meet-the-team"
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
