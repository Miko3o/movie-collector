import { render, screen, cleanup } from '@testing-library/react'
import { MovieDisplay } from "../MovieDisplay"

test('should render MovieDisplay component', () => {
    //setup
    const movie = {
            Year: "2000",
            Poster: 'someone',
            Title: 'test',
            Type: 'movie',
            imdbID: '123'
    }

    const movies = [movie, movie]

    
    render(<MovieDisplay
        movies = { movies }
    />);

    const movieCardElement = screen.getByTestId('movieDisplayTest');
    expect(movieCardElement).toBeInTheDocument();
})