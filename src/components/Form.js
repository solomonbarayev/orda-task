import '../blocks/Form.css';
import { useState, useEffect } from 'react';
import { isValidIsraeliID } from '../utils/isValidIsraeliID';
import {
  onlyHebrewLetters,
  onlyEnglishLetters,
} from '../utils/onlyHebrewAndEnglish';
import { validateEmail } from '../utils/emailValidator';
import { checkAgeAtleastEighteen } from '../utils/ageChecker';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageProvider';

const Form = () => {
  const initialValues = {
    firstname: '',
    lastname: '',
    idnumber: '',
    email: '',
    gender: '',
    dob: '',
  };

  const { language } = useLanguage();

  const [values, setValues] = useState(initialValues);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (language === 'english') {
      alert(
        `Hi ${values.firstname} ${values.lastname}, the form was sent successfully!`
      );
    } else {
      alert(`שלום ${values.firstname} ${values.lastname}, הטופס נשלח בהצלחה!`);
    }
    handleReset();
  };

  const handleValidation = () => {
    const { firstname, lastname, idnumber, email, gender, dob } = values;

    // firstname and lastname
    if (firstname.length < 2 || lastname.length < 2) {
      setIsFormValid(false);
      return;
    }
    // teudat zehut
    if (idnumber.length !== 9 && !isValidIsraeliID(idnumber)) {
      setIsFormValid(false);
      return;
    }
    // email
    if (!validateEmail(email)) {
      setIsFormValid(false);
      return;
    }
    // gender
    if (!gender === '') {
      setIsFormValid(false);
      return;
    }

    // at least 18 years old
    if (!checkAgeAtleastEighteen(dob)) {
      setIsFormValid(false);
      return;
    }

    // if all tests passed - form is valid
    setIsFormValid(true);
  };

  const handleReset = () => {
    setValues(initialValues);
  };

  // run validation on every change
  useEffect(() => {
    handleValidation();
  }, [values]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__header">
        {translations[language].form.personalDetails}
      </h2>
      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="firstname">
            {translations[language].form.firstName}
          </label>
          <input
            className="form__input"
            type="text"
            name="firstname"
            id="firstname"
            placeholder={translations[language].form.firstName}
            value={values.firstname}
            onChange={handleChange}
            onKeyPress={
              language === 'english' ? onlyEnglishLetters : onlyHebrewLetters
            }
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="lastname">
            {translations[language].form.lastName}
          </label>
          <input
            className="form__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder={translations[language].form.lastName}
            value={values.lastname}
            onChange={handleChange}
            onKeyPress={
              language === 'english' ? onlyEnglishLetters : onlyHebrewLetters
            }
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="idnumber">
            {translations[language].form.idNumber}
          </label>
          <input
            className="form__input"
            type="text"
            name="idnumber"
            id="idnumber"
            placeholder={translations[language].form.idNumber}
            value={values.idnumber}
            onChange={handleChange}
            maxLength={9}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
            }}
          />
        </div>
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
            value={values.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <h2 className="form__header">{translations[language].form.gender}</h2>

      <div className="form__selections form__row">
        <div
          className={`form__selection ${
            values.gender === 'male' ? 'form__selection_active' : null
          }`}
          onClick={() => setValues({ ...values, gender: 'male' })}>
          <input
            type="radio"
            className="form__radio-button"
            id="male"
            checked={values.gender === 'male'}
            onChange={() => setValues({ ...values, gender: 'male' })}
          />
          <label className="form__checkbox-label" htmlFor="male">
            {translations[language].form.male}
          </label>
        </div>
        <div
          className={`form__selection ${
            values.gender === 'female' ? 'form__selection_active' : null
          }`}
          onClick={() => setValues({ ...values, gender: 'female' })}>
          <input
            type="radio"
            className="form__radio-button"
            id="female"
            checked={values.gender === 'female'}
            onChange={() => setValues({ ...values, gender: 'female' })}
          />
          <label className="form__checkbox-label" htmlFor="female">
            {translations[language].form.female}
          </label>
        </div>
      </div>

      <div className="form__row">
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
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
            value={values.dob}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form__buttons">
        <button
          className={`form__button ${
            isFormValid === false ? 'form__button_inactive' : null
          }`}
          type="submit"
          disabled={!isFormValid}>
          {translations[language].form.submit}
        </button>
        <button className="form__button" type="reset" onClick={handleReset}>
          {translations[language].form.reset}
        </button>
      </div>
    </form>
  );
};

export default Form;
