import { useState } from 'react';
import { useLanguage } from '../context/LanguageProvider';
import { checkAgeAtleastEighteen } from '../utils/ageChecker';
import { validateEmail } from '../utils/emailValidator';
import { isValidIsraeliID } from '../utils/isValidIsraeliID';
import {
  onlyEnglishLetters,
  onlyHebrewLetters,
} from '../utils/languageAcceptor';
import { translations } from '../utils/translations';
import { initialErrors, initialValues } from '../utils/constants';

const useForm = () => {
  const { language } = useLanguage();

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const handleReset = () => {
    setValues(initialValues);
    setErrors(initialErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    handleErrors(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      translations[language].successMessage(values.firstName, values.lastName)
    );
    handleReset();
  };

  const handleNameError = (e) => {
    const { name, value } = e.target;

    if (
      (language === 'english' && !onlyEnglishLetters(value)) ||
      (language === 'hebrew' && !onlyHebrewLetters(value))
    ) {
      if (value !== '') {
        setErrors((prevState) => ({
          ...prevState,
          wrongLanguage: {
            ...prevState.wrongLanguage,
            [name]: `${translations[language].errors.wrongLanguage}`,
          },
          [name]: '',
        }));
      }
    }
    // check if value is at least 2 letters
    else if (value.length < 2) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: `${translations[language].errors[name]}`,
        wrongLanguage: {
          ...prevState.wrongLanguage,
          [name]: '',
        },
      }));
    } else {
      setErrors({
        ...errors,
        [name]: '',
        wrongLanguage: {
          ...errors.wrongLanguage,
          [name]: '',
        },
      });
    }
  };

  const handleIDError = (e) => {
    const { value } = e.target;

    //check if the id is valid
    if (!isValidIsraeliID(value)) {
      setErrors((prevState) => ({
        ...prevState,
        idNumber: {
          ...prevState.idNumber,
          valid: `${translations[language].errors.idNumber.valid}`,
        },
      }));
    } else {
      setErrors({ ...errors, idNumber: { ...errors.idNumber, valid: '' } });
    }
  };

  const handleEmailError = (e) => {
    //check if the email is valid
    const { value } = e.target;
    if (!validateEmail(value)) {
      setErrors((prevState) => ({
        ...prevState,
        email: `${translations[language].errors.email}`,
      }));
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const handleDOBError = (e) => {
    const { value } = e.target;

    //check if the age is at least 18
    if (!checkAgeAtleastEighteen(value)) {
      setErrors((prevState) => ({
        ...prevState,
        dob: `${translations[language].errors.dob}`,
      }));
    } else {
      setErrors({ ...errors, dob: '' });
    }
  };

  const handleErrors = (e) => {
    const { name } = e.target;

    const validators = {
      firstName: handleNameError,
      lastName: handleNameError,
      idNumber: handleIDError,
      email: handleEmailError,
      dob: handleDOBError,
    };

    validators[name]?.(e);
  };

  const checkFormValidity = () => {
    return (
      Object.values(values).every((value) => value !== '') &&
      JSON.stringify(errors) === JSON.stringify(initialErrors)
    );
  };

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    checkFormValidity,
  };
};

export default useForm;
