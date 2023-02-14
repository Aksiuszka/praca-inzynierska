import { render, screen } from '@testing-library/react';
import Layout from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Testing the Layout component', () => {
  test('Renders the Layout', () => {
    render(<Layout />, { wrapper: BrowserRouter });
  });
});
