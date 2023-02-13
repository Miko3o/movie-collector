import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/Login"element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );

}
