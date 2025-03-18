import React, { createContext, useState, useContext } from 'react';

// Create a context for the language
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('english');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'english' ? 'japanese' : 'english');
      };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Create a custom hook to use the LanguageContext
export const useLanguage = () => {
    return useContext(LanguageContext);
};