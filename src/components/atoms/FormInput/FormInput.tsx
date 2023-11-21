import { FormItemProps } from '../../../../interfaces/FormProps';

const FormInput = ({
  type,
  label,
  placeholder,
  id,
  onchange,
  err,
  value,
}: FormItemProps) => {
  return (
    <div>
      <label className="visually-hidden">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder ? placeholder : label}
        onChange={onchange}
        value={value}
        className={`w-full pl-4 pb-3 bg-transparent border-b border-gray-blue caret-bcg-primary 
        focus-visible:outline-none focus-visible:border-white focus-visible:border-b-2
        file:bg-transparent file:border-2 file:border-bcg-primary file:rounded-md file:py-2 file:px-4 file:text-bcg-primary  file:mr-3
        ${type === 'file' ? 'pl-0 border-none' : ''} `}
      />
      {err && <p className="mt-2 text-xs text-error">{err}</p>}
    </div>
  );
};

export default FormInput;
