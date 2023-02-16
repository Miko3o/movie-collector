import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
//components
import { Header }  from '../../UI/Header/Header'
import { MovieInfoObject } from './MovieInfoObject';
//css
import './MovieInfo.css'

const API_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}`;

export const MovieInfo = () => {
    const [currentMovie, setCurrentMovie] = useState(MovieInfoObject)
    useEffect(() => {
        fetch(`${API_URL}&i=${location.state.props.imdbID}`)
            .then((response) => response.json())
            .then((data) => setCurrentMovie(data))
            .catch((error) => console.log(error));
    }, [])

    const location = useLocation();

    return (
        <>
        <header>
            <Header />
        </header>
        <div className="page-movieInfo-wrapper">
            <div className="page-movieInfo-info-wrapper">
                <div className="page-movieInfo-description-wrapper">
                    <h2>
                        {currentMovie.Title}
                    </h2>
                    <h3>
                        Year: {currentMovie.Year}
                    </h3>
                    <h3>
                        Runtime: {currentMovie.Runtime}
                    </h3>
                    <h3>
                        Release: {currentMovie.Released}
                    </h3>
                    <h3>
                        Genre: {currentMovie.Genre}
                    </h3>
                    <h3>
                        Plot:
                    </h3>
                    <p>
                        {currentMovie.Plot}
                    </p>

                </div>
                <div className="page-movieInfo-poster-wrapper">
                    <img src={currentMovie.Poster !== 'N/A' ? currentMovie.Poster : 'https://via.placeholder.com/400'} alt={currentMovie.Title}/>
                </div>
            </div>
            <div className="page-movieInfo-comments-wrapper">
                <h1>
                    Comments:
                </h1>
                <h2>
                    Commenter
                </h2>
                <p>
                    hi hi hi hi
                </p>
            </div>
            
        </div>
        </>
    )
}

