export const onlyHebrewAndEnglishLetters = (e) => {
  const regex = /^[a-zA-Z\u0590-\u05FF]+$/;
  if (!regex.test(e.key)) {
    e.preventDefault();
  }
};

export const onlyHebrewLetters = (e) => {
  const regex = /^[\u0590-\u05FF]+$/;
  if (!regex.test(e.key)) {
    e.preventDefault();
  }
};

export const onlyEnglishLetters = (e) => {
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(e.key)) {
    e.preventDefault();
  }
};
