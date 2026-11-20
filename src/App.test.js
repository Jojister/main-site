import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
});

test('renders the navigation and switches language', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: '日本語' }));
  expect(screen.getByRole('link', { name: 'ショップ' })).toBeInTheDocument();
});
