import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('hebrew');

  const changeLanguage = (e) => {
    if (e.target.innerText === 'English') {
      setLanguage('english');
    } else {
      setLanguage('hebrew');
    }
  };

  useEffect(() => {
    if (language === 'english') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
