import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true"; 
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode"); 
        } else {
            document.documentElement.classList.remove("dark-mode");
        }
        localStorage.setItem("darkMode", isDarkMode); // Hafızada tutuyor
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};


export const useDarkMode = () => {
    return useContext(DarkModeContext);
};
