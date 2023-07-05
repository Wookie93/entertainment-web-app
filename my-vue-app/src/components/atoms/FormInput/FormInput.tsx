interface FormItemProps {
  type: string;
  label: string;
  placeholder?: string;
}

const FormInput = ({ type, label, placeholder }: FormItemProps) => {
  return (
    <div>
      <label className="visually-hidden">{label}</label>
      <input
        type={type}
        placeholder={placeholder ? placeholder : label}
        className="pl-4 pb-5 bg-transparent border-b border-gray-blue caret-bcg-primary focus-visible:outline-none focus-visible:border-white focus-visible:border-b-2"
      />
    </div>
  );
};

export default FormInput;
