import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsContainer from './ProductsContainer';

jest.mock('../../../../hooks', () => ({
  useProducts: jest.fn(() => ({
    productsData: {
      products: [
        { id: 1, brand: 'Brand1', category: 'Category1' },
        { id: 2, brand: 'Brand2', category: 'Category2' },
      ],
      isLoanding: false,
      isError: false,
    },
  })),
}));

describe('ProductsContainer', () => {
  it('renders with initial state', () => {
    const { getByText } = render(<ProductsContainer reload={false} setReload={() => {}} />);
    expect(getByText('Products (Total: 2)')).toBeInTheDocument();
  });

  it('updates filters correctly', async () => {
    const { getByText, getByTitle } = render(<ProductsContainer reload={false} setReload={() => {}} />);
    const brandFilter = getByTitle('BrandFilter');
    const categoryFilter = getByTitle('CategoryFilter');

    fireEvent.change(brandFilter, { target: { value: 'Brand1' } });
    fireEvent.change(categoryFilter, { target: { value: 'Category1' } });

    await waitFor(() => {
      expect(getByText('Products (Total: 1)')).toBeInTheDocument();
    });
  });

  it('clears filters correctly', async () => {
    const { getByText, getByTitle } = render(<ProductsContainer reload={false} setReload={() => {}} />);
    const clearFiltersButton = getByText('ClearFilters');
    const brandFilter = getByTitle('BrandFilter');
    const categoryFilter = getByTitle('CategoryFilter');

    fireEvent.change(brandFilter, { target: { value: 'Brand1' } });
    fireEvent.change(categoryFilter, { target: { value: 'Category1' } });
    fireEvent.click(clearFiltersButton);

    await waitFor(() => {
      expect(getByText('Products (Total: 2)')).toBeInTheDocument();
    });
  });
});
