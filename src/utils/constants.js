export const initialValues = {
  firstName: '',
  lastName: '',
  idNumber: '',
  email: '',
  gender: '',
  dob: '',
};

export const initialErrors = {
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
