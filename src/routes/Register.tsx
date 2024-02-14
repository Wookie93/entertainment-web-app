import { NavLink } from 'react-router-dom';

// COMPONENTS
import Container from '../components/atoms/Containter/Container';
import WrapWithLogo from '../components/atoms/WrapWithLogo/WrapWithLogo';

import Form from '../components/organism/Form/Form';

const RegisterPage = () => {
  return (
    <WrapWithLogo>
      <Container title="Sign up">
        <Form buttonText="Create an account" type="register" />
        <div className="flex justify-center gap-2 mt-6">
          <p className="font-light">Already have an account?</p>
          <NavLink to="/login" className="font-light text-bcg-primary">
            Login
          </NavLink>
        </div>
      </Container>
    </WrapWithLogo>
  );
};

export default RegisterPage;
