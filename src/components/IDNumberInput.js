import React from 'react';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageProvider';
export default function IDNumberInput({ handleChange, value, errors }) {
  const { language } = useLanguage();
  return (
    <div className="form__group">
      <label className="form__label" htmlFor="idNumber">
        {translations[language].form.idNumber}
      </label>
      <input
        className="form__input"
        type="text"
        name="idNumber"
        id="idNumber"
        placeholder={translations[language].form.idNumber}
        value={value}
        onChange={handleChange}
        maxLength={9}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }}
      />
      <span className="form__error">
        {errors.idNumber.length && errors.idNumber.length}
        {errors.idNumber.format && errors.idNumber.format}
        {errors.idNumber.valid && errors.idNumber.valid}
      </span>
    </div>
  );
}
