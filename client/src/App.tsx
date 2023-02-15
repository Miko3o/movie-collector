import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

import './App.css'
import CreateAccount from './Pages/CreateAccount/CreateAccount';



export default function App() {
  return (
    <div className="app-wrapper" >
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home />}/>
        </Routes>
        <Routes>
          <Route path="/Login"element={<Login />}/>
        </Routes>
        <Routes>
          <Route path="/CreateAccount"element={<CreateAccount />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}
