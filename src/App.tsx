import { Outlet } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import { useStoreActions } from './store/store';
import Modal from './components/atoms/Modal/Modal';

function App() {
  const { getAllMovies } = useStoreActions();
  getAllMovies();

  return (
    <>
      <MainTemplate>
        <Outlet />
      </MainTemplate>
      <Modal content="Before adding favourites, please log in" />
    </>
  );
}

export default App;
