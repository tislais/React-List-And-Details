import { render, screen } from '@testing-library/react';
import Character from './Character';

test('renders learn react link', () => {
  render(<Character />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
