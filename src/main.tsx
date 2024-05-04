import { lazy, Suspense, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AuthProvider } from './lib/firebase-auth.tsx';
import ErrorPage from './routes/404.tsx';
import App from './App.tsx';
import HomePage, { loader as homeLoader } from './routes/Home.tsx';
import ListPage, { loader as listLoader } from './routes/List.tsx';

import ProtectedRoute from './helpers/ProtectedRoute.tsx';
import FavouritePage from './routes/Favourite.tsx';

const LoginPage = lazy(() => import('./routes/Login.tsx'));
const RegisterPage = lazy(() => import('./routes/Register.tsx'));
const SearchResultPage = lazy(() => import('./routes/SearchResult.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: homeLoader,
          },
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
            element: (
              <Suspense fallback={<div></div>}>
                <SearchResultPage />
              </Suspense>
            ),
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
    element: (
      <Suspense fallback={<></>}>
        <LoginPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<></>}>
        <RegisterPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
