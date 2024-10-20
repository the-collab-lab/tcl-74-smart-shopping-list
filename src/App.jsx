import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Home, Layout, AddItem, Team } from './views';
import { Loading } from './components/Loading';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth, useShoppingListData, useShoppingLists } from './api';
import { useStateWithStorage } from './utils';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
	/**
	 * This custom hook takes the path of a shopping list
	 * in our database and syncs it with localStorage for later use.
	 * Check ./utils/hooks.js for its implementation.
	 *
	 * We'll later use `setListPath` when we allow a user
	 * to create and switch between lists.
	 */
	const [listPath, setListPath] = useStateWithStorage(
		'tcl-shopping-list-path',
		null,
	);

	/**
	 * This custom hook holds info about the current signed in user.
	 * Check ./api/useAuth.jsx for its implementation.
	 */
	const { user } = useAuth();
	const userId = user?.uid;
	const userEmail = user?.email;

	/**
	 * This custom hook takes a user ID and email and fetches
	 * the shopping lists that the user has access to.
	 * Check ./api/firestore.js for its implementation.
	 */
	const lists = useShoppingLists(userId, userEmail);
	/**
	 * This custom hook takes our token and fetches the data for our list.
	 * Check ./api/firestore.js for its implementation.
	 */
	const data = useShoppingListData(listPath);

	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route
							index
							element={
								<ProtectedRoute>
									<Home
										data={data}
										lists={lists}
										selectedListPath={listPath}
										setListPath={setListPath}
										user={user}
									/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="add-item"
							element={
								<ProtectedRoute>
									<AddItem listPath={listPath} user={user} data={data} />
								</ProtectedRoute>
							}
						/>
						<Route
							path="developers"
							element={
								<Suspense fallback={<Loading />}>
									<Team />
								</Suspense>
							}
						/>
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
