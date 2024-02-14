import { Outlet, useNavigation } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';

function App() {
  const navigation = useNavigation();

  console.log(navigation.state);
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
}

export default App;
