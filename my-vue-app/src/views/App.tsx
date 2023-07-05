import { Routes, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate.tsx';
import HomePage from './Home';
import ListPage from './List';
import FavouritePage from './Favourite';
import LoginPage from './Login.tsx';

function App() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<ListPage />} />
        <Route path="/tv-series" element={<ListPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
