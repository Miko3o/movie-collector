import {MovieCard, Movie} from "./MovieCard/MovieCard";
import './MovieDisplay.css';


type MoviesProps = {
    movies: Array<Movie>
}

const MovieDisplay = (props: MoviesProps) => {
    const {movies} = props

    return (movies?.length > 0
    ? (
      <div className="ui-moviedisplay-wrapper">
        {movies.map((movie) => {
          return <MovieCard movie={movie}/>
      })}
      </div>
    ): (
      <div className="empty">
        <h2>No movies Found</h2>
      </div>
    ))
}

export default MovieDisplay;