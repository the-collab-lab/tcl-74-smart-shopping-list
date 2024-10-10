import { Outlet, NavLink } from 'react-router-dom';
import {
	FaList,
	FaSignInAlt,
	FaSignOutAlt,
	FaInfoCircle,
	FaCartPlus,
	FaMoon,
	FaSun,
} from 'react-icons/fa';
import { IconButton } from '../components/IconButton';
import { useAuth, SignOutButton, SignInButton } from '../api/useAuth.jsx';
import { auth } from '../api/config.js';
import logo from '../assets/logo.png';
import { useEffect } from 'react';
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

	//Toggle dark/light mode
	const toggleTheme = () => {
		const currentTheme = localStorage.getItem('theme') || 'light';
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

		//Toggle the dark class on the html element
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
		localStorage.setItem('theme', newTheme);
	};

	// Set the theme on initial load
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'light';
		document.documentElement.classList.toggle('dark', savedTheme === 'dark');
	}, []);
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<header className="bg-bgPrimary dark:bg-bgPrimaryDark pb-2 pt-[max(env(safe-area-inset-top),1rem)] text-center">
					{!!user && (
						<div>
							<img src={logo} alt="Logo" className="mx-auto" />
							<span className="text-txtPrimary dark:text-txtPrimaryDark">
								Signed in as {auth.currentUser.displayName}
							</span>
						</div>
					)}

					{/* Theme toggle button */}
					<button
						onClick={toggleTheme}
						className="mt-2 p-2 bg-gray-200 dark:bg-gray-800 rounded"
						aria-label="Toggle Dark Mode"
					>
						{document.documentElement.classList.contains('dark') ? (
							<FaSun className="text-yellow-500" />
						) : (
							<FaMoon className="text-blue-500" />
						)}
					</button>
				</header>
				<main className="bg-bgPrimary dark:bg-bgPrimaryDark text-txtPrimary dark:text-txtPrimaryDark p-0 pb-[6.26rem] w-[min(72ch,100%)] mx-auto">
					<Outlet />
				</main>
				<nav className="bg-bgSecondary dark:bg-bgSecondayDark border-t border-[var(--color-border)] bottom-0 flex flex-row pb-[max(env(safe-area-inset-bottom),1rem)] pt-4 justify-center fixed w-full">
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
									label="Add Item"
									to="/add-item"
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
