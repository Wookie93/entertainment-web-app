import { Outlet } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import { useStoreActions, useUserModal } from './store/store';
import Modal from './components/atoms/Modal/Modal';

function App() {
  const { getAllMovies } = useStoreActions();
  const modalState = useUserModal();
  getAllMovies();

  return (
    <>
      <MainTemplate>
        <Outlet />
      </MainTemplate>
      {modalState ? <Modal content="zaloguj się mordeczko" /> : null}
    </>
  );
}

export default App;
