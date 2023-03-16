import { render, screen, cleanup } from '@testing-library/react'
import { MovieDisplay } from "../MovieDisplay"

test('should render MovieDisplay component when movie array is not empty', () => {
    //setup
    const movie = {
            Year: "2000",
            Poster: 'someone',
            Title: 'test',
            Type: 'movie',
            imdbID: '123'
    }

    const movies = [movie, movie]

    jest.mock("../MovieCard/MovieCard", () => ({ MovieCardContainer: () => "mocked MovieCardContainer" }));

    
    render(<MovieDisplay
        movies = { movies }
    />);

    const movieCardElement = screen.getByTestId('movieDisplayWrapperTest');
    expect(movieCardElement).toBeInTheDocument();
})