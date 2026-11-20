import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => (prev === 'english' ? 'japanese' : 'english'));
  }, []);

  // t('Hello', 'こんにちは') picks the string for the current language.
  const t = useCallback((en, jp) => (language === 'english' ? en : jp), [language]);

  const value = useMemo(
    () => ({ language, changeLanguage: setLanguage, toggleLanguage, t }),
    [language, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
