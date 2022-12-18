import React from 'react';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageProvider';
export default function GenderButton({ setValues, values, name }) {
  const { language } = useLanguage();
  return (
    <div
      className={`form__selection ${
        values.gender === name ? 'form__selection_active' : null
      }`}
      onClick={() => setValues({ ...values, gender: name })}
      name="gender">
      <input
        type="radio"
        className="form__radio-button"
        id={name}
        checked={values.gender === name}
        onChange={() => setValues({ ...values, gender: name })}
      />
      <label className="form__checkbox-label" htmlFor={name}>
        {translations[language].form[name]}
      </label>
    </div>
  );
}
