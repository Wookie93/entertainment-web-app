import { Outlet } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <p>Not found</p>
      <Outlet />
    </>
  );
};

export default ErrorPage;
