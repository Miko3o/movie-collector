import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import './App.css';
import SearchBar from './UI/SearchBar/SearchBar';
import MovieDisplay from './UI/MovieDisplay/MovieDisplay';

const API_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}`;



function App() {
  console.log(process.env.REACT_APP_API_KEY)
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  const navigate = useNavigate();



  const name = "Miko"
  const isNamed = true

  return (
    <>
    <div className="app" data-testid="appTest">
      <div className="title">Welcome back {isNamed ? name : "guy"}!</div>
      <button onClick={() => {navigate("/Login")}}>Login</button>
      <div>Here are the movies</div>
      <SearchBar searchMovies={searchMovies}/>

      <MovieDisplay movies={movies}/>

      
    </div>
    </>
  )
}

export default App