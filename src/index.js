import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './public/css/index.css'

import { DefaultRoutes } from './routes/default.routes'
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    < RouterProvider router={DefaultRoutes}  />
  </React.StrictMode>
);

reportWebVitals();