import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Home from './Pages/Home'
import { BrowserRouter  } from 'react-router-dom';
import {AppRoutes} from './Routes/AppRoutes';
import { AuthProvider } from './Context/Authcontext';
import RegistroProveedores from './Pages/RegistroProveedores'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
    <BrowserRouter>
    <AppRoutes />
    {/* <Home /> */}
    {/* <RegistroProveedores /> */}
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
