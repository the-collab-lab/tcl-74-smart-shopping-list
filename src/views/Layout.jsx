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
import logo from '../assets/logo.png';
//import './Layout.css';

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
			<div className="flex flex-col min-h-screen">
				<header className="bg-[var(--color-bg)] pb-4 pt-[max(env(safe-area-inset-top),1rem)] text-center">
					{!!user && (
						<div className="flex flex-col items-center justify-center">
							<img
								src={logo}
								alt="CollabShop Logo, a collaboration platform for grocery shopping."
								className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto mb-4"
							/>
							<span className="text-txtPrimary">
								Signed in as {auth.currentUser.displayName}
							</span>
						</div>
					)}
				</header>
				<main className="p-0 pb-[6.26rem] w-[min(72ch,100%)] mx-auto">
					<Outlet />
				</main>
				<nav className="bg-[var(--color-bg)] border-t border-[var(--color-border)] bottom-0 flex flex-row pb-[max(env(safe-area-inset-bottom),1rem)] pt-4 justify-center fixed w-full">
					<div className="flex flex-row justify-evenly w-[min(72ch,100%)]">
						{user ? (
							<>
								<IconButton
									aria-label="View Lists"
									as={NavLink}
									IconComponent={FaList}
									label="View Lists"
									to="/"
								/>
								<IconButton
									aria-label="Add Item"
									as={NavLink}
									IconComponent={FaCartPlus}
									//className
									label="Add Item"
									to="/manage-list"
								/>
								<IconButton
									aria-label="Sign Out"
									as={SignOutButton}
									IconComponent={FaSignOutAlt}
									label="Sign Out"
								/>
							</>
						) : (
							<>
								<IconButton
									as={NavLink}
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
