import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	return context;
};

export const ThemeProvider = ({ children }) => {
	const initialTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(initialTheme || 'light');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

//To do : Move Theme toggle logic from Layout jsx to here
