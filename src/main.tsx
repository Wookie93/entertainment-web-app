import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './assets/styles/index.css';

import { AuthProvider } from './lib/firebase-auth.tsx';
import ErrorPage from './routes/404.tsx';
import App from './App.tsx';
import LoginPage from './routes/Login.tsx';
import RegisterPage from './routes/Register.tsx';
import HomePage, { loader as homeLoader } from './routes/Home.tsx';
import ListPage, { loader as listLoader } from './routes/List.tsx';
import SearchResultPage from './routes/SearchResult.tsx';
import ProtectedRoute from './helpers/ProtectedRoute.tsx';
import FavouritePage from './routes/Favourite.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage />, loader: homeLoader },
          {
            path: 'movies',
            element: <ListPage />,
            loader: listLoader,
          },
          {
            path: 'tv-series',
            element: <ListPage />,
            loader: listLoader,
          },
          {
            path: 'search-result',
            element: <SearchResultPage />,
          },
          {
            path: 'favourites',
            element: <ProtectedRoute />,
            children: [{ index: true, element: <FavouritePage /> }],
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
