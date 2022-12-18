import React from 'react';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageProvider';

export default function FormNameInput({
  handleChange,
  value,
  errors,
  type,
  name,
}) {
  const { language } = useLanguage();
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={name}>
        {translations[language].form[name]}
      </label>
      <input
        className="form__input"
        type={type}
        name={name}
        id={name}
        placeholder={translations[language].form[name]}
        value={value}
        onChange={handleChange}
      />
      <span className="form__error">
        {errors[name] && errors[name]}
        {errors.wrongLanguage[name] && errors.wrongLanguage[name]}
      </span>
    </div>
  );
}
