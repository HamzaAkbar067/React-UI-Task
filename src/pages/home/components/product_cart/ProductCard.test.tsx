import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './ProductCard';
import { Product } from '../../../../models';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  category: 'Test Category',
  brand: "brand",
  price: 99.99,
  images: ['test_image.jpg'],
};

describe('ProductCard component', () => {
  test('renders product title, category, and price', () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);
    
    expect(getByText(mockProduct.title)).toBeInTheDocument();
    expect(getByText(mockProduct.category)).toBeInTheDocument();
    expect(getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
  });

  test('renders correct classes for styling', () => {
    const { getByTestId } = render(<ProductCard product={mockProduct} />);
    const productCard = getByTestId('product-card');
    
    expect(productCard).toHaveClass('product-card');
    expect(productCard.querySelector('.product-card__img')).toBeInTheDocument();
    expect(productCard.querySelector('.product-card__header')).toBeInTheDocument();
    expect(productCard.querySelector('.product-card__footer')).toBeInTheDocument();
  });

});
