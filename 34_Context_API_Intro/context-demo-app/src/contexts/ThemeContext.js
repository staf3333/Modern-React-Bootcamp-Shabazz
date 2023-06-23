import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    return (
        <ThemeContext.Provider value={{ isDarkMode: isDarkMode, tastesLikeChicken: true }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
