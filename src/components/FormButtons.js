import FormButton from './FormButton';
import React from 'react';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageProvider';

export default function FormButtons({ isFormValid, handleReset }) {
  const { language } = useLanguage();
  return (
    <div className="form__buttons">
      <FormButton
        type="submit"
        className={`form__button ${
          isFormValid === false ? 'form__button_inactive' : null
        }`}
        buttonText={translations[language].form.submit}
        isDisabled={!isFormValid}
      />
      <FormButton
        handleReset={handleReset}
        type="reset"
        className="form__button"
        buttonText={translations[language].form.reset}
        isDisabled={false}
      />
    </div>
  );
}
