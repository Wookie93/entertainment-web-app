import MainTemplate from '../components/templates/MainTemplate.tsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
}

export default App;
