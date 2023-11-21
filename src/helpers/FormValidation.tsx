import { formValidationForm } from 'interfaces/FormProps';

export const formValidation = ({
  userData,
  setErrorMessage,
}: formValidationForm) => {
  const newValidationState: boolean[] = [];
  const newErrorsMessage = {
    email: '',
    password: '',
    repeatPassword: '',
    general: '',
  };
  const validEmailRegex =
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  const validPasswordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+,-./:;<=>?@[\\\]^_`{|}~]).+$/;

  for (let input in userData) {
    let value = userData[input as keyof typeof userData];

    switch (input) {
      case 'email':
        if (!validEmailRegex.test(value)) {
          newValidationState.push(false);
          newErrorsMessage.email = 'Email is incorrect';
        } else {
          newValidationState.push(true);
        }
        break;

      case 'password':
        if (!value) {
          newValidationState.push(false);
          newErrorsMessage.password = 'Missing password';
        } else if (value.length < 6) {
          newValidationState.push(false);
          newErrorsMessage.password =
            'Password must be at least 6 characters length and contains one uppercase letter, one number, and one special character';
        } else if (value.length >= 6 && !validPasswordRegex.test(value)) {
          newValidationState.push(false);
          newErrorsMessage.password =
            'Password must contains at least one uppercase letter, one number, and one special character';
        }
        break;

      case 'repeatPassword':
        if (!value) {
          newValidationState.push(false);
          newErrorsMessage.repeatPassword = 'Please confirm your password';
        } else if (value !== userData.password) {
          newValidationState.push(false);
          newErrorsMessage.repeatPassword =
            'Passwords are not the same. Please check it again';
        } else {
          newValidationState.push(true);
        }
        break;
      case 'general':
        newValidationState.push(true);
        break;

      default:
        newValidationState.push(true);
    }
  }

  setErrorMessage(newErrorsMessage);
  return newValidationState.includes(false) ? false : true;
};
