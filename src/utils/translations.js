const english = {
  title: 'Orda Task',
  form: {
    personalDetails: 'Personal Details',
    firstName: 'First Name',
    lastName: 'Last Name',
    idNumber: 'ID Number',
    email: 'Email',
    submit: 'Submit',
    reset: 'Reset',
    gender: 'Gender',
    dob: 'Date of Birth',
    male: 'Male',
    female: 'Female',
  },
  errors: {
    firstName: 'At least 2 characters',
    lastName: 'At least 2 characters',
    idNumber: {
      length: 'Must be 9 digits',
      format: 'Must be a numberic value',
      valid: 'Must be a valid TZ number',
    },
    email: 'Must be a valid email',
    dob: 'Must be at least 18 years old',
    gender: 'Must choose a gender',
    wrongLanguage: 'Only English characters',
  },
};

const hebrew = {
  title: 'משימת אורדע',
  form: {
    personalDetails: 'פרטים אישיים',
    firstName: 'שם פרטי',
    lastName: 'שם משפחה',
    idNumber: 'תעודת זהות',
    email: 'דואר אלקטרוני',
    submit: 'סיום',
    reset: 'איפוס טופס',
    gender: 'מין',
    dob: 'תאריך לידה',
    male: 'זכר',
    female: 'נקבה',
  },
  errors: {
    firstName: 'לפחות 2 אותיות',
    lastName: 'לפחות 2 אותיות',
    idNumber: {
      length: 'חייב להיות 9 ספרות',
      format: 'חייב להיות מספרים בלבד',
      valid: 'חייב להיות מספר תקין',
    },
    email: 'חייב להיות דואר אלקטרוני תקין',
    dob: 'חייב להיות לפחות 18 שנים',
    gender: 'חייב לבחור מין',
    wrongLanguage: 'אותיות עברית בלבד',
  },
};

export const translations = {
  english,
  hebrew,
};
