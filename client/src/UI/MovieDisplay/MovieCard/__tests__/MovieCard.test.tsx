import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { MovieCard } from "../MovieCard";

test('should render MovieCard component', () => {
    //setup
    const movie = {
            Year: "2000",
            Poster: 'someone',
            Title: 'test',
            Type: 'movie',
            imdbID: '123'
    }

    const navigate = jest.fn()
    
    render(<MovieCard
        movie = { movie }
        navigate = { navigate }
    />);

    const movieCardElement = screen.getByTestId('movieCardTest');
    expect(movieCardElement).toBeInTheDocument();
})