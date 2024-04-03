import { Outlet } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import { useStoreActions } from './store/store';

function App() {
  const { getAllMovies } = useStoreActions();
  getAllMovies();

  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
}

export default App;
