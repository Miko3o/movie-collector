import {MovieCard, Movie, MovieCardContainer} from "./MovieCard/MovieCard";
import './MovieDisplay.css';


type MoviesProps = {
    movies: Array<Movie>
}

export const MovieDisplay = (props: MoviesProps) => {
    const {movies} = props

    return (movies?.length > 0
    ? (
      <div
        className="ui-moviedisplay-wrapper"
        data-testid="movieDisplayWrapperTest"
      >
        {movies.map((movie) => {
          return <MovieCardContainer movie={movie}/>
      })}
      </div>
    ): (
      <div
        className="empty"
        data-testid="movieDisplayEmptyTest"
      >
        <h2>No Movies Found</h2>
      </div>
    ))
}
