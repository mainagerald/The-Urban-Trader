import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routing/Routes';
// import { router } from './Routing/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// debug 
// console.log('searchinggggg')
// console.log(searchCompanies("tsla"));
// console.log("done!")

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
