import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//pages
import { Login } from './Pages/Login/Login';
import { Home } from './Pages/Home/Home';
import { CreateAccount } from './Pages/CreateAccount/CreateAccount';
import { MovieInfo } from './Pages/MovieInfo/MovieInfo';
//css
import './App.css';
import { getMembers } from './Services/members/get';




export default function App() {
  useEffect(() => {
    getMembers()
  }, [])
  return (
    <div
      className="app-wrapper"
      data-testid="appTest">
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
        <Routes>
          <Route path="/MovieInfo"element={<MovieInfo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}
