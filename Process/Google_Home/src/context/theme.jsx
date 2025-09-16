import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Load saved theme from localStorage or default to dark
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            const dark = savedTheme === 'dark';
            setIsDarkMode(dark);
            if (dark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;