import { BrowserRouter, Route, Routes } from 'react-router-dom';
//pages
import { Login } from './Pages/Login/Login';
import { Home } from './Pages/Home/Home';
import { CreateAccount } from './Pages/CreateAccount/CreateAccount';
import { MovieInfo } from './Pages/MovieInfo/MovieInfo';
//css
import './App.css';




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
        <Routes>
          <Route path="/MovieInfo"element={<MovieInfo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}
