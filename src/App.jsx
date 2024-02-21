import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import Cart from './pages/Cart/Cart';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
