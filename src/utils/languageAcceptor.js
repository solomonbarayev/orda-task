export const onlyHebrewLetters = (value) => {
  const regex = /^[\u0590-\u05FF ,.'-]+$/i;

  if (!regex.test(value)) {
    return false;
  }
  return true;
};

export const onlyEnglishLetters = (value) => {
  const regex = /^[a-zA-Z ,.'-]+$/i;

  if (!regex.test(value)) {
    return false;
  }
  return true;
};

export const checkThatNotBackspace = (e) => {
  if (
    e.nativeEvent.inputType === 'deleteContentBackward' ||
    e.nativeEvent.inputType === 'deleteContentForward'
  ) {
    return true;
  }
  return false;
};
