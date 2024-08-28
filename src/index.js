import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

import App from './pages/Sobre'
import Frei from './pages/menu/index.jsx'
import Exercicio12 from './pages/e12/index.jsx';
import Exercicio11 from './pages/e11/index.jsx';
import Exercicio10 from './pages/e10/index.jsx';
import Exercicio9 from './pages/e9/index.jsx';
import Exercicio8 from './pages/e8/index.jsx';
import Exercicio7 from './pages/e7/index.jsx'
import Exercicio6 from './pages/e6/index.jsx';
import Exercicio5 from './pages/e5/index.jsx';
import Exercicio4 from './pages/e4/e4.jsx';
import Exercicio3 from './pages/e3/e3.jsx';
import Exercicio2 from './pages/e2/e2.jsx';
import Exercicio1 from './pages/e1/e1.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
            <Routes>
                <Route path='/e12' element={<Exercicio12 />} />
                <Route path='/e11' element={<Exercicio11 />} />
                <Route path='/e10' element={<Exercicio10 />} />
                <Route path='/e9' element={<Exercicio9 />} />
                <Route path='/e8' element={<Exercicio8 />} />
                <Route path='/e7' element={<Exercicio7 />} />
                <Route path='/e6' element={<Exercicio6 />} />
                <Route path='/e5' element={<Exercicio5 />} />
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


