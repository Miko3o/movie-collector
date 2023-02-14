import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

import './App.css'



export default function App() {
  return (
    <div className="app-wrapper" >
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home />}/>
          <Route path="/Login"element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}
