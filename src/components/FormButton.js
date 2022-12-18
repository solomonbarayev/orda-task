import React from 'react';
export default function FormButton({
  handleReset,
  type,
  className,
  buttonText,
  isDisabled,
}) {
  return (
    <button
      className={className}
      type={type}
      onClick={handleReset}
      disabled={isDisabled}>
      {buttonText}
    </button>
  );
}
