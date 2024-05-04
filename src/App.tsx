import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';

const Modal = lazy(() => import('./components/atoms/Modal/Modal'));

function App() {
  return (
    <>
      <MainTemplate>
        <Outlet />
      </MainTemplate>
      <Suspense fallback={<></>}>
        <Modal content="Before adding favourites, please log in" />
      </Suspense>
    </>
  );
}

export default App;
