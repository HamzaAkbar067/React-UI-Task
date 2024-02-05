import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home component', () => {
  test('renders Home component', () => {
    const { getByTestId } = render(<Home />);
    const productsContainer = getByTestId('home');

    expect(productsContainer).toBeInTheDocument();
  });

  test('renders with correct className', () => {
    const { container } = render(<Home />);
    const mainElement = container.firstChild as HTMLElement;

    expect(mainElement).toHaveClass('home-layout');
  });

});
