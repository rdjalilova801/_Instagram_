import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mas from './components/apbar/Mas'
import Asosiy from "./components/asosiy/Asosiy"
import Header from './components/header/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/apbar' element={<Apbar/>}>
          <Route path = '/' element = {<App/>}/>
          <Route path='/mas' element={<Mas />} />
          <Route path="/asosiy" element={<Asosiy/>}/>
          <Route path="/header" element={<Header/>}/>     
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);