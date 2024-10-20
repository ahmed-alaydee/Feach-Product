import React from 'react';
import ReactDOM from 'react-dom/client';
import routes from './components/router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}>

    </RouterProvider>
  </React.StrictMode>
);
