import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './routes/App.tsx';
import './assets/styles/index.css';
import ListPage from './views/List.tsx';
import FavouritePage from './views/Favourite.tsx';
import LoginPage from './views/Login.tsx';
import HomePage from './views/Home.tsx';
import { AuthProvider } from './lib/firebase-auth.tsx';
import RegisterPage from './views/Register.tsx';
import ProtectedRoute from './helpers/ProtectedRoute.tsx';
import ErrorPage from './views/404.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="movies" element={<ListPage type="movies" />} />
        <Route path="tv-series" element={<ListPage type="tv-series" />} />
        <Route path="favourites" element={<ProtectedRoute />}>
          <Route index element={<FavouritePage />} />
        </Route>
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
