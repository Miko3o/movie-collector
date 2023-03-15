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

    const navigate = jest.fn()
    
    render(<MovieDisplay
        movie = { movie }
        navigate = { navigate }
    />);

    const movieCardElement = screen.getByTestId('movieCardTest');
    expect(movieCardElement).toBeInTheDocument();
})