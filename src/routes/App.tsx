import MainTemplate from '../components/templates/MainTemplate.tsx';
import { useEffect, useState } from 'react';
import { db, storage } from '../lib/firebase-db.tsx';
import { Outlet } from 'react-router-dom';
import LoadingSpinner from '../components/atoms/LoadingSpinner/LoadingSpinner.tsx';

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (db && storage) setTimeout(() => setState(true), 500);
  });
  return (
    <>
      {!state ? (
        <LoadingSpinner />
      ) : (
        <MainTemplate>
          <Outlet />
        </MainTemplate>
      )}
    </>
  );
}

export default App;
