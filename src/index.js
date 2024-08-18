import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

import App from './pages/Sobre'
import Frei from './pages/menu/index.jsx'
import Exercicio7 from './pages/e7/index.jsx';

import Exercicio4 from './pages/e4/e4.jsx';
import Exercicio3 from './pages/e3/e3.jsx';
import Exercicio2 from './pages/e2/e2.jsx';
import Exercicio1 from './pages/e1/e1.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
            <Routes>
                <Route path='/e7' element={<Exercicio7 />} />
                <Route path='/e4' element={<Exercicio4 />} />
                <Route path='/e3' element={<Exercicio3 />} />
                <Route path='/e2' element={<Exercicio2 />} />  
                <Route path='/e1' element={<Exercicio1/>} />
                <Route path='/' element={<Frei />} />
                <Route path='/Sobre' element={<App />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);


