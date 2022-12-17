import React, { useEffect } from 'react';
import '../blocks/Languages.css';
import { useLanguage } from '../context/LanguageProvider';
import { useForm } from '../context/FormProvider';

export default function LanguagePicker() {
  const { changeLanguage, language } = useLanguage();
  const { handleReset } = useForm();

  const handleLanguageClick = (e) => {
    changeLanguage(e);
  };

  useEffect(() => {
    handleReset();
  }, [language]);

  return (
    <ul className="languages">
      <li className="language">
        <button
          onClick={handleLanguageClick}
          type="button"
          className="language__button">
          English
        </button>
      </li>{' '}
      |{' '}
      <li className="language">
        <button
          onClick={handleLanguageClick}
          type="button"
          className="language__button">
          עברית
        </button>
      </li>
    </ul>
  );
}
