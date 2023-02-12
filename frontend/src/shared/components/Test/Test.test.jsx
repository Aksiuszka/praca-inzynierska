import Test from './Test';

import { render, screen } from '@testing-library/react';

describe('Testing the Test component', () => {
  test('renders Hello React as a text', () => {
    render(<Test />);

    const testElement = screen.getByText('Hello React');
    expect(testElement).toBeInTheDocument();
  });
});
