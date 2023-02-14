import { render, screen } from '@testing-library/react';
import Logo from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Testing the Logo component', () => {
  test('Renders the Logo', () => {
    render(<Logo />, { wrapper: BrowserRouter });
  });
});
