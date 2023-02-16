import { useNavigate, redirect } from "react-router-dom";
//css
import './MovieCard.css';

export type Movie = {
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
  imdbID: string;
}

type MoiveCardProps = {
  movie: Movie
}

export const MovieCard = (props: MoiveCardProps) => {
  const {movie} = props
  const navigate = useNavigate();
  return (
    <div
      className="ui-movieDisplay-movieCard-wrapper"
      data-testid="movieCardTest"
      onClick={() => {
        navigate("/MovieInfo", {state:{props: movie}})}}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

