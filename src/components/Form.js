import EmailInput from './EmailInput';
import IDNumberInput from './IDNumberInput';
import FormHeader from './FormHeader';
import GenderButton from './GenderButton';
import DOBInput from './DOBInput';
import FormButtons from './FormButtons';
import FormNameInput from './FormInput';
import '../blocks/Form.css';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageProvider';
import useForm from '../hooks/useForm';
import { useEffect } from 'react';

const Form = () => {
  const {
    values,
    setValues,
    handleReset,
    handleChange,
    handleSubmit,
    errors,
    checkFormValidity,
  } = useForm();

  const { language } = useLanguage();

  useEffect(() => {
    handleReset();
  }, [language]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormHeader headerText={translations[language].form.personalDetails} />
      <div className="form__row">
        <FormNameInput
          type="text"
          name="firstName"
          handleChange={handleChange}
          value={values.firstName}
          errors={{
            firstName: errors.firstName,
            wrongLanguage: errors.wrongLanguage,
          }}
        />
        <FormNameInput
          type="text"
          name="lastName"
          handleChange={handleChange}
          value={values.lastName}
          errors={{
            lastName: errors.lastName,
            wrongLanguage: errors.wrongLanguage,
          }}
        />
      </div>
      <div className="form__row">
        <IDNumberInput
          handleChange={handleChange}
          value={values.idNumber}
          errors={{ idNumber: errors.idNumber }}
        />
        <EmailInput
          handleChange={handleChange}
          value={values.email}
          error={errors.email}
        />
      </div>

      <FormHeader headerText={translations[language].form.gender} />

      <div className="form__selections form__row">
        <GenderButton setValues={setValues} values={values} name="male" />
        <GenderButton setValues={setValues} values={values} name="female" />
      </div>

      <div className="form__row">
        <DOBInput
          handleChange={handleChange}
          value={values.dob}
          error={errors.dob}
        />
      </div>

      <FormButtons
        isFormValid={checkFormValidity()}
        handleReset={handleReset}
      />
    </form>
  );
};

export default Form;
