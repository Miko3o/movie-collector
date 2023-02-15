import React, {useState, useEffect} from 'react';
import { useNavigate, redirect } from "react-router-dom";

import './Home.css';
import { Header }  from '../../UI/Header/Header'
import SearchBar from '../../UI/SearchBar/SearchBar';
import MovieDisplay from '../../UI/MovieDisplay/MovieDisplay';

const API_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}`;



function Home() {
  console.log(process.env.REACT_APP_API_KEY)
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/Login")
  }

  const name = "Miko"
  const isNamed = true
  //const actualName = isNamed ? name : "guy"
  //const titleLabel = "Welcome back" + actualName + "!"
  const titleLabel = `Welcome back ${isNamed ? name : "guy"}!`

  return (
    <>
    <header>
      <Header />
    </header>
    <div className="page-home-wrapper" data-testid="appTest">
      <h2 className="title">
        {titleLabel}
      </h2>
      <button onClick={handleOnClick}>
        Login
      </button>
      <p>
        Here are the movies
      </p>
      <SearchBar searchMovies={searchMovies}/>

      <MovieDisplay movies={movies}/>

      
    </div>
    </>
  )
}

export default Home