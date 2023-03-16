import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { CreateAccount } from "../CreateAccount";

test('should render MovieCard component', () => {
    //setup
    const navigate = jest.fn()
    
    render(<CreateAccount
        navigate = { navigate }
    />);

    const movieCardElement = screen.getByTestId('createAccountTest');
    expect(movieCardElement).toBeInTheDocument();
})