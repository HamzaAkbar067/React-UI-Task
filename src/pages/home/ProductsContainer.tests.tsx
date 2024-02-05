import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

// Mock the ProductsContainer component
jest.mock('./components', () => ({
  ProductsContainer: jest.fn(() => <div data-testid="products-container"></div>),
}));

describe('Home', () => {
  it('renders ProductsContainer component', () => {
    const { getByTestId } = render(<Home />);
    
    // Check if ProductsContainer component is rendered
    expect(getByTestId('products-container')).toBeInTheDocument();
  });
});
