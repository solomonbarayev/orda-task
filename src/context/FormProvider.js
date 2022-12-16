import { createContext, useState, useEffect, useContext } from 'react';
import { useLanguage } from './LanguageProvider';
import { isValidIsraeliID } from '../utils/isValidIsraeliID';
import { validateEmail } from '../utils/emailValidator';
import { checkAgeAtleastEighteen } from '../utils/ageChecker';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const { language } = useLanguage();

  const initialValues = {
    firstname: '',
    lastname: '',
    idnumber: '',
    email: '',
    gender: '',
    dob: '',
  };

  const [values, setValues] = useState(initialValues);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleReset = () => {
    setValues(initialValues);
  };

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

  // run validation on every change
  useEffect(() => {
    handleValidation();
  }, [values]);

  return (
    <FormContext.Provider
      value={{
        initialValues,
        values,
        setValues,
        isFormValid,
        setIsFormValid,
        handleReset,
        handleChange,
        handleSubmit,
      }}>
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => useContext(FormContext);

export { FormProvider, useForm };
