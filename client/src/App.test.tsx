import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const navigate = jest.fn()

  render(<App
  
  />);
  
  const app = screen.getByTestId('appTest');
  expect(app).toBeInTheDocument();
});

test('test works', () => {
  expect(true).toBe(true);
})