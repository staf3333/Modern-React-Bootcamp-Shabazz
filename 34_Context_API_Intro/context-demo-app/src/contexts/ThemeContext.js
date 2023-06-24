import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
