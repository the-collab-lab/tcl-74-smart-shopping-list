import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	return context;
};

export const ThemeProvider = ({ children }) => {
	const initialTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(initialTheme || 'light');

	useEffect(() => {
		document.documentElement.classList.toggle('dark', initialTheme === 'dark');
	}, [initialTheme]);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
