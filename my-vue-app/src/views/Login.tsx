import Button from '../components/atoms/Button/Button';
import Container from '../components/atoms/Containter/Container';
import FormInput from '../components/atoms/FormInput/FormInput';

const LoginPage = () => {
  return (
    <Container title="Login">
      <form>
        <div className="flex flex-col gap-6 mb-6">
          <FormInput type="text" label="Email address" />
          <FormInput type="text" label="Password" />
        </div>
        <Button type="submit" text="Login to your account" />
      </form>
      <div className="flex gap-2 mt-6">
        <p className="font-light">Don’t have an account?</p>
        <a href="#" className="font-light text-bcg-primary">
          Sign Up
        </a>
      </div>
    </Container>
  );
};

export default LoginPage;
