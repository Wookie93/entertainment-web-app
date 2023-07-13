import Button from '../../atoms/Button/Button';

const Form = ({ onSubmit, children }: any) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6 mb-10">{children}</div>
      <Button type="submit" text="Login to your account" classname="w-full" />
    </form>
  );
};

export default Form;
