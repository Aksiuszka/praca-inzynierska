import { render, screen } from '@testing-library/react';
import Footer from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Testing the Footer component', () => {
  test('Renders the Footer', () => {
    render(<Footer />, { wrapper: BrowserRouter });
  });
  test('Renders the items inside the footer', () => {
    render(<Footer />, { wrapper: BrowserRouter });
    expect(screen.getByText(/team/i)).toBeInTheDocument();
  });
});
