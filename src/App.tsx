import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import { useStoreActions } from './store/store';

const Modal = lazy(() => import('./components/atoms/Modal/Modal'));

function App() {
  const { getAllMovies } = useStoreActions();
  getAllMovies();

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
