import React from 'react';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageProvider';
export default function EmailInput({ handleChange, value, error }) {
  const { language } = useLanguage();
  return (
    <div className="form__group">
      <label className="form__label" htmlFor="email">
        {translations[language].form.email}
      </label>
      <input
        className="form__input"
        type="email"
        name="email"
        id="email"
        placeholder="name@mail.com"
        value={value}
        onChange={handleChange}
      />
      <span className="form__error">{error && error}</span>
    </div>
  );
}
