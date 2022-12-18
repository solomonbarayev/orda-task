import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageProvider';
import { checkAgeAtleastEighteen } from '../utils/ageChecker';
import { validateEmail } from '../utils/emailValidator';
import { isValidIsraeliID } from '../utils/isValidIsraeliID';
import {
  onlyEnglishLetters,
  onlyHebrewLetters,
} from '../utils/languageAcceptor';
import { translations } from '../utils/translations';

const useForm = () => {
  const { language } = useLanguage();
  const initialValues = {
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    gender: '',
    dob: '',
  };

  const initialErrors = {
    firstName: '',
    lastName: '',
    idNumber: {
      length: '',
      format: '',
      valid: '',
    },
    email: '',
    dob: '',
    gender: '',
    wrongLanguage: {
      lastName: '',
      firstName: '',
    },
  };

  const [values, setValues] = useState(initialValues);
  const [isFormValid, setIsFormValid] = useState(false);

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
    if (language === 'english') {
      alert(
        `Hi ${values.firstName} ${values.lastName}, the form was sent successfully!`
      );
    } else {
      alert(`שלום ${values.firstName} ${values.lastName}, הטופס נשלח בהצלחה!`);
    }
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
        setIsFormValid(false);
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
      setIsFormValid(false);
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
      setIsFormValid(false);
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
      setIsFormValid(false);
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
      setIsFormValid(false);
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

  //useEffect to check if the form is valid
  useEffect(() => {
    if (
      Object.values(values).every((value) => value !== '') &&
      JSON.stringify(errors) === JSON.stringify(initialErrors)
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [errors, values]);

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isFormValid,
  };
};

export default useForm;
