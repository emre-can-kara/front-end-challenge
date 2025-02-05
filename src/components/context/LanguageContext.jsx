import { createContext, useState, useContext } from "react";
import { data } from "../../language";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "tr" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, text: data[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
