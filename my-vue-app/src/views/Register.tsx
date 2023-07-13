import { ChangeEvent, FormEvent, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../lib/firebase';
import { useAuth } from '../lib/firebase-auth';

// Components
import Container from '../components/atoms/Containter/Container';
import WrapWithLogo from '../components/atoms/WrapWithLogo/WrapWithLogo';
import FormInput from '../components/atoms/FormInput/FormInput';
import Form from '../components/organism/Form/Form';

const RegisterPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const { user } = useAuth();

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImage(e.target.files[0]);
  };

  const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) return;

    try {
      const imageRef = ref(storage, `profileImages/${user?.uid}/${image.name}`);
      await uploadBytes(imageRef, image);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(image);

  return (
    <WrapWithLogo>
      <Container title="Sign up">
        <Form onSubmit={handleCreateUser}>
          <label htmlFor="file" />
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleSelectImage}
          />
          <FormInput type="text" label="Email address" />
          <FormInput type="text" label="Password" />
          <FormInput type="text" label="Repeat password" />
        </Form>

        <div className="flex justify-center gap-2 mt-6">
          <p className="font-light">Already have an account?</p>
          <NavLink to="/login" className="font-light text-bcg-primary">
            Login
          </NavLink>
        </div>
      </Container>
      <Outlet />
    </WrapWithLogo>
  );
};

export default RegisterPage;
