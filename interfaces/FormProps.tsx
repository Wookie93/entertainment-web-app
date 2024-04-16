export type userData = {
  email: string;
  password: string;
  repeatPassword: string;
  general: string;
};

export interface myFormProps {
  buttonText: string;
  type: 'register' | 'login';
  fields: { field: string; label: string }[];
}

export interface formValidationForm {
  userData: userData;
  setErrorMessage: (data: userData) => React.SetStateAction<any>;
}

export interface FormItemProps {
  type: string;
  label: string;
  placeholder?: string;
  id?: string;
  err?: string;
  onchange?: (event: any) => void;
  value?: string;
}
