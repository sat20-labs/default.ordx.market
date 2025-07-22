import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Initialize with browser language or default to English
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // Get language from localStorage or browser settings
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        setLang(savedLang);
      } else {
        // If no saved language, try to detect from browser
        const browserLang = navigator.language || navigator.userLanguage;
        setLang(browserLang && browserLang.includes('zh') ? 'zh' : 'en');
      }
    }
  }, []);

  // Function to change language
  const changeLang = (newLang) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;