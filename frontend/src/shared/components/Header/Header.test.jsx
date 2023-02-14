import { render, fireEvent, screen } from '@testing-library/react';
import Header from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Testing the Header component', () => {
  test('Renders the Header', () => {
    render(<Header />, { wrapper: BrowserRouter });
  });
  test('Renders the items inside the header', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
  test('Renders the dropdown onclick event', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    fireEvent.click(await screen.queryByTestId('avatarBtn'));
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });
});
