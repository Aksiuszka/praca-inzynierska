import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Testing the Button component', () => {
  test('Renders the button', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('Renders the label inside the button', () => {
    render(<Button label='label' />);
    expect(screen.getByText(/label/i)).toBeInTheDocument();
  });
  test('Renders disable', () => {
    render(<Button label='label' disabled />);
    expect(screen.getByText(/label/i)).toBeDisabled;
  });
});
