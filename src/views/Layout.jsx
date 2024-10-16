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

import { useTheme } from '../context/ThemeContext';

export function Layout() {
	const { user } = useAuth();
	const { theme, setTheme } = useTheme();

	//Toggle dark/light mode
	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
	};

	return (
		<>
			<div className="flex flex-col min-h-screen bg-bgPrimary dark:bg-bgPrimaryDark ">
				<header className="bg-bgPrimary dark:bg-bgPrimaryDark pb-4 pt-[max(env(safe-area-inset-top),1rem)] text-center">
					<div className="flex flex-col items-center justify-center">
						<img
							src={logo}
							alt="CollabShop Logo, a collaboration platform for grocery shopping."
							className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto mb-6 max-w-full rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300 ease-in-out"
						/>
						{!!user && (
							<span className="text-txtPrimary dark:text-txtPrimaryDark">
								Signed in as {auth.currentUser.displayName}
							</span>
						)}
					</div>

					{/* Theme toggle button */}
					<button
						onClick={toggleTheme}
						className="bg-transparent rounded absolute top-[max(2vw,20px)] right-[max(2vw,20px)]"
					>
						{theme === 'dark' ? (
							<FaSun
								className="text-yellow-500 h-10 w-10"
								aria-label="Switch to light mode"
							/>
						) : (
							<FaMoon
								className="text-blue-500 h-10 w-10"
								aria-label="Switch to dark mode"
							/>
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
									className="aria-[current=page]:font-bold aria-[current=page]:underline"
									IconComponent={FaList}
									label="View Lists"
									to="/"
								/>
								<IconButton
									aria-label="Add Item"
									as={NavLink}
									className="aria-[current=page]:font-bold aria-[current=page]:underline"
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
									className="aria-[current=page]:font-bold aria-[current=page]:underline"
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
