import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Packages from './Components/Packages';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: "/", element: <Home/> },
        { path: "/about", element: <About /> },
        {path: '/signup', element: <Signup/>},
        {path: '/login', element: <Login/>},
        {path: '/packages', element: <Packages/>},
      ]
    },
    {
      path: "/admin",
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
