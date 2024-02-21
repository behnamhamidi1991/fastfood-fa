import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import ShoppingCart from './pages/Cart/Cart';
import Production from './pages/Production/Production';
import SingleProduction from './pages/Production/SingleProduction/SingleProduction';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/cart',
        element: <ShoppingCart />,
      },
      {
        path: '/production/:id',
        element: <SingleProduction />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
