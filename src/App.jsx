import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import ShoppingCart from './pages/Cart/Cart';
import SingleProduction from './pages/Production/SingleProduction/SingleProduction';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import BlogPage from './pages/Blog/BlogPage';
import BlogSinglePost from './pages/Blog/BlogSinglePost/BlogSinglePost';

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
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/blog/:id',
        element: <BlogSinglePost />,
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
