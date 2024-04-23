import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../lib/firebase-auth';

import Button from '../../atoms/Button/Button';
import FormInput from '../../atoms/FormInput/FormInput';

import { myFormProps } from '../../../../interfaces/FormProps';

// helper functions
import { formValidation } from '../../../hooks/useFormValidation';

const Form = ({ buttonText, type }: myFormProps) => {
  const initialState = {
    email: '',
    password: '',
    repeatPassword: '',
    general: '',
  };

  const [image, setImage] = useState<File | null>(null);
  const [userData, setUserData] = useState(initialState);
  const [errMsg, setErrorMessage] = useState(initialState);

  /// HOOKS
  const { isEmailVerified, handleSignInEmail, handleSignUp } = useAuth();
  const navigate = useNavigate();

  /// FUNCTION TO GET VALUE FROM INPUTS
  const getValue = (e: Event) => {
    const target = e.target as HTMLInputElement;

    if (type === 'login' && target.id === 'password')
      setUserData({
        ...userData,
        [target.id]: target.value,
        repeatPassword: target.value,
      });
    else setUserData({ ...userData, [target.id]: target.value });
  };

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImage(e.target.files[0]);
  };

  const redirectIfEmailVerify = () => {
    if (isEmailVerified) navigate('/');
  };

  const onSubmitAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const state = formValidation({
      userData,
      setErrorMessage,
    });

    if (state) {
      formActions();
      clearValues();
    }
  };

  const formActions = () => {
    type === 'login'
      ? handleSignInEmail(userData.email, userData.password, setErrorMessage)
      : handleSignUp(userData.email, userData.password, image, setErrorMessage);
  };

  const clearValues = () => {
    setUserData(initialState);
  };

  useEffect(redirectIfEmailVerify, [isEmailVerified]);

  return (
    <form onSubmit={onSubmitAction}>
      {errMsg.general && (
        <p className="mb-2 text-xs text-error">{errMsg.general}</p>
      )}
      <div className="flex flex-col gap-6 mb-10">
        {type === 'register' ? (
          <FormInput
            type="file"
            label="file"
            id="file"
            onchange={handleSelectImage}
          />
        ) : null}
        <FormInput
          type="text"
          label="Email address"
          id="email"
          err={errMsg.email}
          onchange={getValue}
          value={userData.email}
        />
        <FormInput
          type="text"
          label="Password"
          id="password"
          err={errMsg.password}
          onchange={getValue}
          value={userData.password}
        />
        {type === 'register' ? (
          <FormInput
            type="text"
            label="Repeat password"
            id="repeatPassword"
            err={errMsg.repeatPassword}
            onchange={getValue}
            value={userData.repeatPassword}
          />
        ) : null}
      </div>
      <Button type="submit" text={buttonText} classname="w-full" />
    </form>
  );
};

export default Form;
