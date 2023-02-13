import './MovieCard.css';

export type Movie = {
  Year: string;
  Poster: string;
  Title: string;
  Type: string
}

type MoiveCardProps = {
  movie: Movie
}

export const MovieCard = (props: MoiveCardProps) => {
  const {movie} = props
  return (
      <div className="movie" data-testid="movieCardTest">
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

