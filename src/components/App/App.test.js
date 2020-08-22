import React from 'react';
import { render } from '@testing-library/react';
import App from './';

test('renders the app', () => {
  const { getByText } = render(<App />);

  expect(getByText('Hello World')).toBeInTheDocument();
});
