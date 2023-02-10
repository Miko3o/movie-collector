import MovieCard from "../../Components/MovieCard/MovieCard";
import './MovieDisplay.css';


type MoviesProps = {
    movies: Array<any>
}

const MovieDisplay = (props: MoviesProps) => {
    const {movies} = props

    return (movies?.length > 0
    ? (
      <div className="container">
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