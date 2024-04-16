import { NavLink } from 'react-router-dom';
import { useAuth } from '../lib/firebase-auth';

// COMPONENTS
import Button from '../components/atoms/Button/Button';
import Container from '../components/atoms/Containter/Container';
import WrapWithLogo from '../components/atoms/WrapWithLogo/WrapWithLogo';
import Form from '../components/organism/Form/Form';

const LoginPage = () => {
  const { handleSignInGoogle } = useAuth();

  return (
    <WrapWithLogo>
      <Container title="Login">
        <Form
          buttonText="Login to your account"
          type="login"
          fields={[
            { field: 'email', label: 'Email address' },
            { field: 'password', label: 'Password' },
            { field: 'repeatPassword', label: 'Repeat password' },
          ]}
        />

        <Button
          type="submit"
          classname="w-full mt-4"
          text="Sign with Google"
          onClick={handleSignInGoogle}
          issecondary
        />
        <div className="flex justify-center gap-2 mt-6">
          <p className="font-light">Don’t have an account?</p>
          <NavLink to="/register" className="font-light text-bcg-primary">
            Sign Up
          </NavLink>
        </div>
      </Container>
    </WrapWithLogo>
  );
};

export default LoginPage;
