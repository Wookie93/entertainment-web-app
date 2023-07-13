import { useAuth } from '../lib/firebase-auth.tsx';
import MainTemplate from '../components/templates/MainTemplate.tsx';
import { Outlet } from 'react-router-dom';

function App() {
  const { user, handleSignInGoogle, handleSignOut } = useAuth();

  return (
    <MainTemplate>
      <button className="mr-3" onClick={handleSignInGoogle}>
        Sing in
      </button>
      <button onClick={handleSignOut}>Sing Out</button>
      {user ? <p>zalogowany jesteś mordo</p> : null}
      <Outlet />
    </MainTemplate>
  );
}

export default App;
