import { useAuth } from '../api/useAuth.jsx';
import { LandingPage } from '../views/index.js';

export function ProtectedRoute({ children }) {
	const { user } = useAuth();

	if (!user) {
		return <LandingPage />;
	}
	return children;
}
