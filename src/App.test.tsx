import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todos', () => {
  render(<App />);
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});
