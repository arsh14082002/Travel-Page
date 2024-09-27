import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './infrastructure/Root.jsx';
import Navbar from './components/Navbar.jsx';

const router = createBrowserRouter([{ path: '*', element: <Root /> }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
