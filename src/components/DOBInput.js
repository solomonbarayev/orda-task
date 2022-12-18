import React from 'react';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageProvider';
export default function DOBInput({ handleChange, value, error }) {
  const { language } = useLanguage();
  return (
    <div className="form__group">
      <label className="form__label" htmlFor="dob">
        {translations[language].form.dob}
      </label>
      <input
        className="form__input"
        type="text"
        name="dob"
        id="dob"
        placeholder={translations[language].form.dob}
        onFocus={(e) => {
          e.target.type = 'date';
          e.target.max = new Date().toISOString().split('T')[0];
        }}
        onBlur={(e) => (e.target.type = 'text')}
        value={value}
        onChange={handleChange}
      />
      <span className="form__error">{error}</span>
    </div>
  );
}
