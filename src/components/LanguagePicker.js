import React from 'react';
import '../blocks/Languages.css';
import { useLanguage } from '../context/LanguageProvider';

export default function LanguagePicker() {
  const { changeLanguage } = useLanguage();

  const handleLanguageClick = (e) => {
    changeLanguage(e);
  };

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
